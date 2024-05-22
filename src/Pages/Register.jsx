import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { AuthContext } from "../components/Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../components/Hooks/useAxiosPublic";
import SocialLogin from "../components/SocialLogin/SocialLogin";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {createUser} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
            console.log(result.user)
            const user ={
                name: data.name,
                email: data.email
            }
            axiosPublic.post("/users", user)
            .then(res=>{
                console.log("user er data", res.data)
            })
            .catch(error=> console.error(error))

            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Register success",
                showConfirmButton: false,
                timer: 1500
              });
              navigate("/")
        })
        .catch(error=>{
            console.error(error)
        })     

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:w-1/2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="Your name" className="input input-bordered"  />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} name="photo" placeholder="Photo URL" className="input input-bordered" />
                            {errors.photo && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered"  />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true,  minLength: 6 }, )} type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered"  />
                            {errors.password && <span className="text-red-500">pass must be 6 charecter</span>}
                            <span className=" ml-[200px] lg:ml-[280px] -mt-9 text-[22px]" onClick={() => { setShowPassword(!showPassword) }}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                            <label className="label mt-3">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <div className="px-10 my-2">
                        <hr className="border border-dashed px-10 border-gray-400" />
                    </div>
                    <div className="mx-auto mb-3">
                        <p className="font-semibold">Already have an account ? <Link to="/login" className="font-bold text-blue-500">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;