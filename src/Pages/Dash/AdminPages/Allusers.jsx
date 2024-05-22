import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";


const Allusers = () => {

    const axiosSecure = useAxiosSecure()

    const {data: users} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=> {
            const res = await axiosSecure.get("/users")
            return res.data;
        }
    })

    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold">Total User:{users?.length}</h2>
            </div>
        </div>
    );
};

export default Allusers;