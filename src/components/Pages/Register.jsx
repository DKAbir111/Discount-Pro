export default function Register() {
    return (
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-sm mx-auto px-7 pt-7 my-16">
            <h3 className="text-center text-2xl font-semibold">Register your account</h3>
            <form className="card-body">
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
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter a secure password"
                        className="input input-bordered"
                        required
                    />
                </div>

                {/* Display error message */}
                {/* {error && <p className="text-red-500 text-sm mt-2">{error}</p>} */}

                {/* Terms & Conditions */}
                <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <span className="label-text">Accept Terms & Conditions</span>
                    </label>
                </div>

                {/* Register Button */}
                <div className="form-control mt-3">
                    <button className="btn bg-[#19BC9B] text-white">Register</button>
                </div>
            </form>
        </div>

    )
}
