import { useLoaderData, Link } from "react-router-dom";

export default function BrandDetails() {
    const brand = useLoaderData();

    return (
        <div className="container mx-auto px-4 py-8">

            <div className="bg-white shadow-lg md:w-2/3 mx-auto rounded-lg p-6 mb-8">
                <div className="flex flex-col gap-5 md:flex-row items-center justify-around md:items-start">
                    <img
                        src={brand.brand_logo}
                        alt={brand.brand_name}
                        className="w-32 h-32 md:w-40 md:h-40 object-contain mb-4 md:mb-0 "
                    />

                    <div className="ml-0 md:ml-6 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-800">
                            {brand.brand_name}
                        </h2>
                        <p className="text-gray-600 mt-2">{brand.description}</p>
                        <p className="text-teal-500 font-semibold mt-2">
                            Rating: {brand.rating} ⭐
                        </p>
                        <p className="text-gray-500 mt-2">
                            Category: <span className="font-medium">{brand.category}</span>
                        </p>
                        <p className="text-gray-500 mt-2">
                            Sale Status:{" "}
                            <span
                                className={`font-medium ${brand.isSaleOn ? "text-green-600" : "text-red-600"
                                    }`}
                            >
                                {brand.isSaleOn ? "Ongoing" : "Not Available"}
                            </span>
                        </p>
                        <a
                            href={brand.shop_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" btn btn-outline rounded-sm border-2 border-teal-500 mt-3 text-teal-500 hover:bg-teal-500 hover:border-teal-500"
                        >
                            Visit Shop
                        </a>
                    </div>
                </div>
            </div>


            <div className="text-center">
                <Link
                    to={`/brand/${brand._id}`}
                    className="px-8 py-3 bg-[#19BC9B] text-white rounded-sm hover:bg-teal-600"
                >
                    View Coupons
                </Link>
            </div>
        </div>
    );
}
