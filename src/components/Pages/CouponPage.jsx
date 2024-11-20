import { useLoaderData } from "react-router-dom"
import ReactStars from "react-rating-stars-component";
import CouponCard from "../Card/CouponCard";
export default function CouponPage() {
    const brand = useLoaderData()
    const { _id, brand_name, rating, description, brand_logo, category, isSaleOn, coupons } = brand;
    console.log(brand)
    const firstExample = {
        size: 20,
        value: rating,
        edit: false
    };

    return (
        <div className="p-7 bg-base-200 w-1/2 mx-auto m-6 flex flex-col justify-center items-center rounded-lg shadow-lg">
            <div className="flex items-center justify-center flex-col">
                <img src={brand_logo} alt={brand_name} className="w-40" />
                <h3 className="text-2xl font-bold text-center">{brand_name}</h3>
                <p className="text-gray-700 text-xl">{description}</p>
                <ReactStars {...firstExample} />
                <small className="font-semibold text-[#FFD601]">Rating:{rating}</small>

            </div>
            <div className="grid grid-cols-2 gap-4">
                {
                    coupons.map((coupon, index) => (
                        <CouponCard key={index} coupon={coupon} />
                    ))
                }
            </div>


        </div>
    )
}
