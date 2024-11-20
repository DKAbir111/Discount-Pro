import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

export default function Root() {
    return (
        <div className="bg-[#E6F0F4]">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
