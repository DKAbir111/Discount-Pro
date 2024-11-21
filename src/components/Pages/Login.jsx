import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


export default function Login() {
    const navigate = useNavigate()
    const location = useLocation()
    const [showpass, setShowpass] = useState(false)
    console.log(location)
    const [error, setError] = useState("")
    // console.log(location)
    const { Login, signInWithGoogle } = useContext(AuthContext)
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        Login(email, password)
            .then((result) => {
                console.log("User created successfully!", result);
                navigate(location?.state ? location.state : "/", { state: location.pathname })
            })
            .catch((error) => {
                console.error("Error creating user:", error.message);
                setError(error.message)
            });

    }
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(() => {
                navigate(location?.state ? location.state : "/", { state: location.pathname })
            })
            .catch((error) => {
                console.error("Error signing in with Google:", error.message);
                setError(error.message)
            });

    }
    return (
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-sm mx-auto px-7 py-7 my-16">
            <h3 className="text-center text-2xl font-semibold">Login your account</h3>
            <form className="card-body" onSubmit={handleLogin}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showpass ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
                    <div className="absolute top-12 right-2 btn btn-xs" onClick={() => setShowpass(!showpass)}>
                        {
                            showpass ? (
                                <FaEyeSlash className="text-gray-500" />
                            ) : (
                                <FaEye className="text-gray-500" />
                            )
                        }
                    </div>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    <small className="text-red-500">{error}</small>
                </div>
                <div className="form-control mt-3">
                    <button className="btn bg-[#19BC9B] text-white">Login</button>
                </div>
            </form>
            <div className="px-20 cursor-pointer mb-2" >
                <span className="flex items-center gap-1 border rounded-md p-2 justify-center text-sm hover:bg-base-200" onClick={handleGoogleLogin}><FcGoogle className="text-2xl" />  Sign in with Google</span>

            </div>
            <div className="flex justify-center">
                <small className="text-center">Dont’t Have An Account ? <Link to='/auth/register' className="text-red-500">Register</Link></small>
            </div>
        </div>
    )
}