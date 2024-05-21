import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const FoodCard = ({item}) => {

    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()

    const {name, image, recipe, price, _id} = item;

    const handleAddtoCart =(food)=>{
        if(user && user?.email){
            // TODO:  carts send data base
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${name} add to cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
            .catch(error=>{
                console.log("error hoilo......", error)
            })
            
        }
        else{
            Swal.fire({
                title: "You are not logged in !",
                text: "Please login to add to add to cart !",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", {state: location.pathname})
                }
              });
        }
    }

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <h4 className="absolute right-8 top-3 font-semibold w-[70px] bg-black text-white px-4 py-1 rounded-md">${price}</h4>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleAddtoCart(item)} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;