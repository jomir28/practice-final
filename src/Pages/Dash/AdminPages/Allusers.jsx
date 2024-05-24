import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";
import Titles from "../../../components/Titles/Titles";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const Allusers = () => {

    const axiosSecure = useAxiosSecure()

    const { data: users, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data;
        }
    })


    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0){
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
        })
    }


    const handleDelete = (id) => {
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

                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => {
                        console.error('user delete er error hoilo', error)
                    })

            }
        });
    }


    return (
        <div>
            <Titles
                subTitle={"---How many??---"}
                title={"MANAGE ALL USERS"}
            ></Titles>
            <div>
                <h2 className="text-2xl font-bold">Total User:{users?.length}</h2>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No:</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, index) => <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <p>{user?.name}</p>
                                    </td>
                                    <td>
                                        <p>{user?.email}</p>
                                    </td>
                                    <td>
                                      { user.role === 'admin' ? "Admin" : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-md"><FaUsers className="text-xl text-gray-600"></FaUsers></button>}
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-md"><FaTrashAlt className="text-xl text-red-600"></FaTrashAlt></button>
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

export default Allusers;