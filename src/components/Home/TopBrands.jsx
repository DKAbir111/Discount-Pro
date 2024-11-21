import Marquee from "react-fast-marquee";
import { useLoaderData, Link } from "react-router-dom";

export default function TopBrands() {
    const data = useLoaderData();

    return (
        <div className="my-12 container mx-auto">
            <h3 className="text-2xl text-center text-gray-700 font-semibold mb-4">
                Top Brands
            </h3>
            <Marquee pauseOnHover gradient={false} speed={50}>
                {data?.map((brand) => (
                    <Link
                        to={`/brand/details/${brand._id}`}
                        key={brand._id}
                        className="flex flex-col items-center justify-center mx-6"
                    >
                        <img
                            src={brand.brand_logo}
                            alt={brand.brand_name}
                            className="w-24 h-24 object-contain mb-2"
                        />
                        <span className="text-gray-700 text-sm font-semibold">
                            {brand.brand_name}
                        </span>
                    </Link>
                ))}
            </Marquee>
        </div>
    );
}
