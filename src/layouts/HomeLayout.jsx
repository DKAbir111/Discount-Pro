import BrandsOnSale from "../components/Home/BarndOnSale";
import FAQSection from "../components/Home/FAQSection";
import { FeaturedCoupons } from "../components/Home/FeatutedCupons";
import SimpleSlider from "../components/Home/SimpleSlider";
import SubscriptionCard from "../components/Home/SubscriptionCard";
import TopBrands from "../components/Home/TopBrands";
import { TopCategories } from "../components/Home/TopCategories";
import Title from "../components/PageTitle/Title";

export default function HomeLayout() {
    return (
        <div className="overflow-hidden">
            <Title title="DiscountPro | Home" />
            <SimpleSlider />
            <TopBrands />
            <div className="p-3">
                <BrandsOnSale />
                <TopCategories />
                <FeaturedCoupons />
                <FAQSection />
                <SubscriptionCard />
            </div>
        </div>
    )
}
