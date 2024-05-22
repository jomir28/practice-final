import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const {googleLogin} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleLogin =()=>{
        googleLogin()
        .then(result=>{
            console.log(result.user)
          const userInfo={
                email: result.user?.email,
                name: result.user?.name
            }

            axiosPublic.post("/users", userInfo)
            .then(res=>{
                console.log(res.data)
                navigate("/")
            })
            .catch(error=>{
                console.log("error paisi", error)
            })
        })
    }

    return (
        <div>
            <h2 className="font-bold flex items-center justify-center text-blue-600 divider px-5">Login with social accout</h2>
            <div className="flex items-center justify-center gap-4 my-3">
                <button onClick={handleGoogleLogin} ><FaGoogle className="font-bold text-xl text-green-800"></FaGoogle></button>
                <button ><FaGithub className="text-2xl font-bold  text-green-800"></FaGithub></button>
            </div>
        </div>
    );
};

export default SocialLogin;