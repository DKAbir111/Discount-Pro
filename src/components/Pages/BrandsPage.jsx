import { useEffect, useState } from "react";
import BrandCard from "../Card/BrandCard";


const BrandsPage = () => {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch('/public/data.json')
            .then((res) => res.json())
            .then((data) => setBrands(data))
            .catch((error) => console.log("Error fetching data:", error));
    }, []);

    return (
        <div className="py-6 container mx-auto">
            <h3 className="text-2xl font-semibold text-center pb-5">Trending Brands</h3>
            <div className="grid grid-cols-1 gap-5 w-4/5 mx-auto">
                {
                    brands.map(brand => <BrandCard key={brand._id} brand={brand} />)
                }
            </div>
        </div>
    );
};

export default BrandsPage;
