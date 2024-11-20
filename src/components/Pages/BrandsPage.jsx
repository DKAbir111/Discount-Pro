import { useEffect, useState } from "react";
import BrandCard from "../Card/BrandCard";

const BrandsPage = () => {
    const [brands, setBrands] = useState([]);
    const [search, setSearch] = useState("");

    // Fetching data
    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => setBrands(data))
            .catch((error) => console.log("Error fetching data:", error));
    }, []);

    // Handle search input
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredBrands = brands.filter(brand =>
        brand.brand_name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="py-6 container mx-auto">
            <h3 className="text-2xl font-semibold text-center pb-5">Trending Brands</h3>
            <div className="grid grid-cols-1 gap-5 lg:w-4/5 mx-auto p-1">
                {/* Search bar */}
                <label className="input input-bordered flex items-center gap-2 w-1/2 mx-auto">
                    <input
                        type="text"
                        name="search"
                        aria-label="Search brands"
                        className="grow"
                        placeholder="Search..."
                        onChange={handleSearch}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-6 w-6 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>

                {/* Brand Cards */}
                {filteredBrands.length > 0 ? (
                    filteredBrands.map(brand => (
                        <BrandCard key={brand._id} brand={brand} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-4">No brands found.</p>
                )}
            </div>
        </div>
    );
};

export default BrandsPage;
