import { useContext, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import auth from "../../Firebase/firebase.init";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function Register() {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const notify = (message) => toast.error(message);
    const [showpass, setShowpass] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const checkbox = event.target.checkbox.checked;

        console.log(checkbox);

        // Password validation regex for individual checks
        const passwordLengthRegex = /^.{6,}$/;
        const passwordLowercaseRegex = /[a-z]/;
        const passwordUppercaseRegex = /[A-Z]/;
        const passwordNumberRegex = /\d/;
        const passwordSpecialCharRegex = /[@$!%*?&]/;

        setError(""); // Clear previous errors

        // Password checks
        if (!passwordLengthRegex.test(password)) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        if (!passwordLowercaseRegex.test(password)) {
            setError("Password must contain at least one lowercase letter.");
            return;
        }

        if (!passwordUppercaseRegex.test(password)) {
            setError("Password must contain at least one uppercase letter.");
            return;
        }

        if (!passwordNumberRegex.test(password)) {
            setError("Password must contain at least one number.");
            return;
        }

        if (!passwordSpecialCharRegex.test(password)) {
            setError("Password must contain at least one special character (@$!%*?&).");
            return;
        }

        if (!checkbox) {
            setError("You must agree to the terms and conditions.");
            return;
        }

        // Create user
        createUser(email, password)
            .then(result => {
                console.log(result);
                // Update profile
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    event.target.reset();
                    toast.success("User Successfully Created");
                    navigate('/')
                }).catch(error => {
                    setError(error.message);
                    notify(error.message);
                });
            })
            .catch(error => {
                setError(error.message);
                notify(error.message);
            });
    };

    return (
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-sm mx-auto px-7 pt-7 my-16">
            <h3 className="text-center text-2xl font-semibold">Register your account</h3>
            <form className="card-body" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="input input-bordered"
                        name="name"
                        required
                    />
                </div>

                {/* Photo URL Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Photo URL"
                        name="photo"
                        className="input input-bordered"
                        required
                    />
                </div>

                {/* Email Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="input input-bordered"
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type={showpass ? "text" : "password"}
                        name="password"
                        placeholder="Enter a secure password"
                        className="input input-bordered"
                        required
                    />
                    <div className="absolute top-12 right-2 btn btn-xs" onClick={() => setShowpass(!showpass)}>
                        {
                            showpass ? (
                                <FaEyeSlash className="text-gray-500" />
                            ) : (
                                <FaEye className="text-gray-500" />
                            )
                        }
                    </div>
                </div>

                {/* Terms & Conditions */}
                <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                        <input type="checkbox" name="checkbox" className="checkbox" />
                        <span className="label-text">Accept Terms & Conditions</span>
                    </label>
                </div>

                {/* Display error message */}
                {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}

                {/* Register Button */}
                <div className="form-control mt-3">
                    <button className="btn bg-[#19BC9B] text-white">Register</button>
                </div>
                <div className="flex justify-center">
                    <small className="text-center">Already Have An Account ? <Link to='/auth/login' className="text-red-500">Login</Link></small>
                </div>
            </form>

        </div>
    );
}
