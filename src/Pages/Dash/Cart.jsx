import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../components/Hooks/useCart";
import Titles from "../../components/Titles/Titles";
import useAxiosSecure from "../../components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {

    const [cart, refetch] = useCart()
    const axiosSecure = useAxiosSecure()
    const totalPrice = cart?.reduce((total, current) => total + current.price, 0)

    const handleDelete=(id)=>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            axiosSecure.delete(`/carts/${id}`)
            .then(res=>{
                console.log(res.data)
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            })
            }
          });
       
    }

    return (
        <div>
            <Titles subTitle={"---My Cart---"} title={"WANNA ADD MORE?"}></Titles>
            <div className="flex justify-evenly items-center my-4">
                <h1 className="text-3xl font-bold">Total Orders: {cart?.length}</h1>
                <h1 className="text-3xl font-bold">Total Price: ${totalPrice}</h1>
               {
                cart?.length ? <Link to="/dashboard/payment"> <button className="btn bg-orange-800 font-bold text-white">Pay</button></Link>:
                <button disabled className="btn bg-orange-800 font-bold text-white">Pay</button>
               }
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No:</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart?.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index +1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
    
                                        </div>
                                    </td>
                                    <td>
                                       <p>{item.name}</p>
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button onClick={()=> handleDelete(item._id)} className="btn btn-ghost btn-md"><FaTrashAlt className="text-xl text-red-600"></FaTrashAlt></button>
                                    </th>
                                </tr>)
                            }
                            
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;