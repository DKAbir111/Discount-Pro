import { Link } from "react-router-dom";

export function TopCategories() {
    const categories = [
        { id: 1, name: "Electronics", image: "https://i.ibb.co.com/MCV8kz2/elec.jpg" },
        { id: 2, name: "Fashion", image: "https://i.ibb.co.com/tsZd1h5/fashsion.jpg" },
        { id: 3, name: "Travel", image: "https://i.ibb.co.com/8MDyVSG/travel.jpg" },
        { id: 4, name: "Home & Kitchen", image: "https://i.ibb.co.com/ggvbXZN/kitchen.jpg" },
    ];

    return (
        <Link to={'/brands'} className="my-12 container mx-auto">
            {/* Title */}
            <h3 className="text-2xl text-center text-gray-700 font-semibold mb-6">
                Top Categories
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <div
                        key={category.id} data-aos="zoom-in-left"
                        className="border rounded-md shadow-sm flex flex-col items-center bg-white hover:shadow-md transition-shadow"
                    >
                        {/* Category Image */}
                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-44 mb-4"
                        />
                        {/* Category Name */}
                        <h4 className="text-lg font-medium text-gray-800">{category.name}</h4>
                    </div>
                ))}
            </div>
        </Link>
    );
}
