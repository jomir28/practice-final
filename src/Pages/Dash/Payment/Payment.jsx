import { loadStripe } from "@stripe/stripe-js";
import Titles from "../../../components/Titles/Titles";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe('pk_test_51PKwilHr8Rd040RYKKPVAGBPJQV4Fg1oGzmB05oknA7n4KnNcJcp6IHqeFHQOVICKxiqfWAWltJkkI1huVNzuRpx00YVWqm4Qg');

const Payment = () => {
    return (
        <div>
             <Titles
            subTitle={"---Payment methoed---"}
            title={"Stripe payment getway"}
            ></Titles>
            <div>
               <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
               </Elements>
            </div>
        </div>
    );
};

export default Payment;