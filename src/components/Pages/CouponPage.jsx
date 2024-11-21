import { useLoaderData, useLocation, useNavigate } from "react-router-dom"
import ReactStars from "react-rating-stars-component";
import CouponCard from "../Card/CouponCard";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
export default function CouponPage() {
    const brand = useLoaderData()
    const { brand_name, rating, description, brand_logo, coupons, shop_link } = brand;
    console.log(brand)
    const firstExample = {
        size: 20,
        value: rating,
        edit: false
    };
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.state)
    const handleClose = () => {
        if (location.state) {
            navigate('/')
        }
        else {
            navigate(-1)
        }
    }


    return (
        <div className="p-7 bg-base-200 w-1/2 mx-auto my-10 flex flex-col  justify-center items-center rounded-lg shadow-2xl relative">
            <div className="absolute btn btn-circle btn-sm btn-error -top-2 -right-2" onClick={handleClose}>
                <RxCross2 />
            </div>
            <div className="flex items-center gap-2 justify-center flex-col">
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
            <a href={shop_link} target="_blank" className="btn px-20 mt-4 btn-outline hover:bg-[#19BC9B] hover:border-none shadow-md border-[#19BC9B] text-[#19BC9B] bg-[#E6F0F3]">Use Now</a>
            <div className="divider"></div>
            <div className="flex gap-2 items-center">
                <p>Did the code work?</p>
                <div className="btn btn-sm btn-circle border shadow-md btn-success bg-[#19BC9B] ">
                    <AiOutlineLike className="text-lg" />
                </div>
                <div className="btn btn-circle btn-sm  border shadow-md btn-error">
                    <AiOutlineDislike className="text-lg" />
                </div>

            </div>


        </div>
    )
}
