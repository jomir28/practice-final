import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: isAdmin, isPending: isAdminPending } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            // console.log("notun admin checked", res.data)
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminPending]
};

export default useAdmin;