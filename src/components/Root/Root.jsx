import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import { ToastContainer } from "react-toastify";

export default function Root() {
    return (
        <div className="bg-[#E6F0F4]">
            <ToastContainer />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
