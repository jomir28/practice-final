import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../components/Hooks/useAdmin";
import useAuth from "../components/Hooks/useAuth";


const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isAdminPending]= useAdmin()
    const location = useLocation()

    if (loading || isAdminPending) {
        return <span className="loading loading-ring loading-lg mx-auto h-[400px] items-center flex justify-center"></span>
    }

    if (user || isAdmin) {
        return children
    }
    else {
        return <Navigate state={location.pathname} to="/login" ></Navigate>
    }

};

export default AdminRoute;