import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "../../Context/AuthContext";

export default function UpdateProfile() {
    const navigate = useNavigate();
    const { updateUserProfile } = useContext(AuthContext)
    const handleUpdate = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        updateUserProfile(name, photo)
            .then(() => {
                console.log("Profile updated successfully");
                navigate("/profile");
                toast.success("Profile updated successfully")
            })


    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white p-10 rounded-xl shadow-lg max-w-md w-full">
                <h2 className="text-center text-2xl font-bold mb-4">Update Profile</h2>
                <form onSubmit={handleUpdate} className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="url"
                            placeholder="Enter photo URL"
                            className="input input-bordered w-full"
                            name="photo"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            className="input input-bordered w-full"
                            name="name"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <button
                            type="submit"
                            className="btn bg-[#19BC9B] mt-5 text-white w-full"
                        >
                            Update Information
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
