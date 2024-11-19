import Navbar from "../components/Home/Navbar";
import SimpleSlider from "../components/Home/SimpleSlider";
import TopBrands from "../components/Home/TopBrands";

export default function HomeLayout() {
    return (
        <div className="bg-[#E6F0F4]">
            <Navbar />
            <SimpleSlider />
            <TopBrands />
        </div>
    )
}
