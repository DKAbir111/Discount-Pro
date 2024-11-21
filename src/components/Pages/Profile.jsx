import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import Title from "../PageTitle/Title";

export default function Profile() {

    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div className="min-h-screen bg-gray-100 pb-20">
            <Title title="DiscountPro | Profile" />
            <div className="relative bg-[#2C3D4D] pb-7  text-white h-60 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Welcome, {user?.
                        displayName
                    }!</h1>
                    <p className="mt-2 text-lg">We&apos;re glad to have you back!</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-12 bg-white rounded-tl-3xl rounded-tr-3xl"></div>
            </div>


            <div className="container mx-auto mt-8">
                <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="flex justify-center items-center p-6">
                        <img
                            src={user?.photoURL}
                            alt={`${user?.displayName}'s profile`}
                            className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-md"
                        />
                    </div>
                    <div className="px-6 pb-6 text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">{user?.displayName}</h2>
                        <p className="text-gray-500 mt-2">{user?.email}</p>
                    </div>
                    <div className="flex justify-center pb-6">
                        <Link to='/update-profile' className="btn bg-gradient-to-r from-[#44cab0] to-[#19BC9B]  text-white">Update Your Profile</Link>
                    </div>
                </div>

            </div>

            <div className="container mx-auto mt-10">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Exciting New Features</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-green-500 text-white flex justify-center items-center rounded-full text-lg font-bold">1</div>
                            <div>
                                <h4 className="font-semibold text-gray-800">Enhanced Security</h4>
                                <p className="text-gray-600">
                                    Your account is now secured with multi-factor authentication to keep your data safe.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-500 text-white flex justify-center items-center rounded-full text-lg font-bold">2</div>
                            <div>
                                <h4 className="font-semibold text-gray-800">Personalized Dashboard</h4>
                                <p className="text-gray-600">
                                    View your activity summary and suggestions tailored just for you.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-purple-500 text-white flex justify-center items-center rounded-full text-lg font-bold">3</div>
                            <div>
                                <h4 className="font-semibold text-gray-800">Interactive Challenges</h4>
                                <p className="text-gray-600">
                                    Participate in fun challenges and earn rewards along the way!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
