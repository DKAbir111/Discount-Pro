import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Root() {
    return (
        <div className="bg-[#E6F0F4]">
            <ToastContainer
                theme="dark"
                position="top-center"
            />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
