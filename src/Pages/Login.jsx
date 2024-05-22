import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash} from "react-icons/fa";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../components/Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../components/SocialLogin/SocialLogin";



const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [logDisabled, setLogDisabled] = useState(true)
    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()


    useEffect(()=>{
        loadCaptchaEnginge(4); 
    }, [])

    const handleValidateCaptcha=(e)=>{
        const user_captcha_value = e.target.value;
        // console.log(user_captcha_value)
        
     if (validateCaptcha(user_captcha_value)) {
       setLogDisabled(false)
    }

    else {
        setLogDisabled(true)
    }
    }

    const handleLogin =(e)=>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")
        console.log(email, password)

        signIn(email, password)
        .then(result=>{
            console.log(result.user)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "login success",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(location?.state ? location.state : "/")
        })
        .catch(error=>{
            console.log("login error hoilo", error)
        })

    }


    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col w-full lg:w-1/2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required />
                            <span className="ml-[260px] lg:ml-[280px] -mt-9 text-[22px]" onClick={() => { setShowPassword(!showPassword) }}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>

                            <label className="label mt-4">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidateCaptcha}   type="text" name="captcha" placeholder="type valid captcha" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-5">
                            <button disabled={false} className="btn btn-primary">Login</button>
                        </div>

                    </form>
                  <SocialLogin></SocialLogin>
                    <div className="px-10 my-2">
                        <hr className="border border-dashed px-10 border-gray-400" />
                    </div>
                    <div className="mx-auto mb-3">
                        <p className="font-semibold">Do not have an account ? <Link to="/register" className="font-bold text-blue-500">Register</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;