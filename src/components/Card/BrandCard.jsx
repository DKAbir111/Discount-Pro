import ReactStars from "react-rating-stars-component";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
export default function BrandCard({ brand }) {
    const { brand_name, rating, description, brand_logo, category, isSaleOn } = brand;
    const firstExample = {
        size: 20,
        value: rating,
        edit: false
    };
    return (
        <div className="grid grid-cols-3 border bg-white">
            <div className="flex items-center justify-center gap-4">
                <img src={brand_logo} alt={brand_name} className="w-32" />
                <div>
                    <h3 className="text-xl font-semibold text-gray-600">{brand_name}</h3>
                    <ReactStars {...firstExample} />
                    <small className="font-semibold text-[#FFD601]">Rating:{rating}</small>

                </div>
            </div>
            <div className="bg-base-200 border-l border-base-300">
                <div className="flex flex-col gap-3 justify-center py-10 px-4">
                    <h3 className="text-lg font-semibold">{category}</h3>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-end pr-10">
                {
                    isSaleOn && (
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            style={{ color: "red", fontWeight: "bold" }}
                        >

                            🔥 Sale is On!

                        </motion.div>
                    )
                }
                <div>
                    <button className="bg-[#19BC9B] text-white px-4 py-2 btn rounded-sm">
                        View Coupons
                    </button>
                </div>
            </div>
        </div>
    )
}

BrandCard.propTypes = {
    brand: PropTypes.object.isRequired
}