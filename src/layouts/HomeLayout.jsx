import BrandsOnSale from "../components/Home/BarndOnSale";
import FAQSection from "../components/Home/FAQSection";
import { FeaturedCoupons } from "../components/Home/FeatutedCupons";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import SimpleSlider from "../components/Home/SimpleSlider";
import SubscriptionCard from "../components/Home/SubscriptionCard";
import TopBrands from "../components/Home/TopBrands";
import { TopCategories } from "../components/Home/TopCategories";

export default function HomeLayout() {
    return (
        <div>
            <SimpleSlider />
            <TopBrands />
            <BrandsOnSale />
            <TopCategories />
            <FeaturedCoupons />
            <FAQSection />
            <SubscriptionCard />
        </div>
    )
}
