import { useContext } from "react";
import { AuthContext } from "../components/Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <span className="loading loading-ring loading-lg mx-auto h-[400px] items-center flex justify-center"></span>
    }

    if (user) {
        return children
    }
    else {
        return <Navigate state={location.pathname} to="/login" ></Navigate>
    }


};

export default PrivetRoute;