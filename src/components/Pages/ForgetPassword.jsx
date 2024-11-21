import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import { toast } from "react-toastify";

export default function ForgetPassword() {


    const { passReset, logOut } = useContext(AuthContext)
    const location = useLocation();
    const [email, setEmail] = useState(location.state?.email || "");

    const navigate = useNavigate()
    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        passReset(email)
            .then(() => {
                toast.success('Password reset email sent successfully')
                logOut();
                window.open("https://mail.google.com/", "_blank");
                navigate('/auth/login')
                event.target.reset()
            }).catch((error) => {
                toast.error(error.message)
            })
    }

    return (
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-sm mx-auto px-7 py-7 my-16">
            <h3 className="text-center text-2xl font-semibold mb-4">Reset Your Password</h3>
            <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email Address</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-[#19BC9B] text-white hover:bg-[#17a38a]">
                        Send Reset Link
                    </button>
                </div>
            </form>

            <div className="flex justify-center mt-4">
                <small className="text-center">
                    Remembered your password?
                    <Link to="/auth/login" className="text-[#19BC9B] hover:underline"> Login here</Link>
                </small>
            </div>
        </div>
    );
}
