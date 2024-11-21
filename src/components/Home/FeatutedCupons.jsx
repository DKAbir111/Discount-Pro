export function FeaturedCoupons() {
  const coupons = [
    {
      id: 1,
      title: "Save 20% on Electronics",
      description: "Get 20% off on all electronics products. Limited time offer!",
      image: "https://i.ibb.co.com/MCV8kz2/elec.jpg",
    },
    {
      id: 2,
      title: "Fashion Sale - 50% Off",
      description: "Flat 50% off on top fashion brands!",
      image: "https://i.ibb.co.com/tsZd1h5/fashsion.jpg",
    },
    {
      id: 3,
      title: "Travel Deals - Save Big!",
      description: "Exclusive travel discounts on flights and hotels.",
      image: "https://i.ibb.co.com/8MDyVSG/travel.jpg",
    },
  ];

  return (
    <div className="my-12 container mx-auto">
      {/* Title */}
      <h3 className="text-2xl text-center text-gray-700 font-semibold mb-6">
        Featured Coupons
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map((coupon) => (
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            key={coupon.id}
            className="p-4 border rounded-md shadow-md bg-white flex flex-col"
          >
            {/* Coupon Image */}
            <img
              src={coupon.image}
              alt={coupon.title}
              className="w-full h-32 object-cover rounded-t-md mb-4"
            />
            {/* Coupon Title */}
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {coupon.title}
            </h4>
            {/* Coupon Description */}
            <p className="text-sm text-gray-600">{coupon.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
