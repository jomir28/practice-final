
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";
import useCart from "../../../components/Hooks/useCart";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const axiosSecure = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState("")
    const [cart] = useCart()
    const totalPrice = cart?.reduce((total, current) => total + current.price, 0)
   

    useEffect(() => {
        if(totalPrice && totalPrice > 0){
            console.log(totalPrice)
            axiosSecure.post('/create-payment-intent', {price: totalPrice})
            .then(res=>{
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log("Payment error:", error);
            setError(error.message)
        }
        else if (paymentMethod) {
            console.log("Payment method:", paymentMethod);
            setError('')
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className="btn btn-primary btn-md my-3" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
        </form>
    );
};

export default CheckoutForm;
