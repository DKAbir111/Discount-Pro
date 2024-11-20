import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLoaderData } from "react-router-dom";


export default function SimpleSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  const data = useLoaderData();
  return (
    <div className="slider-container container mx-auto overflow-x-hidden h-[420px]">
      <h3 className="text-3xl font-semibold text-center mt-6 text-gray-700">Today's Top Coupons</h3>
      <Slider {...settings}>
        {data.map((brand) => (
          <div
            key={brand._id}
            className="p-6 items-center justify-center bg-white shadow-md my-6 border border-gray-200"
          >
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-32 h-32 object-contain"
            />
            <h3 className="text-xl font-bold text-gray-500">{brand.brand_name}</h3>
            <p className="text-gray-600 font-semibold">{brand.coupons[0].description}</p>
            <button
              className="mt-4 px-5 py-2 text-white font-medium bg-[#19BC9B] hover:bg-[#17A68A] transition-all"
            >
              View Coupons
            </button>
          </div>
        ))}
      </Slider>
    </div>


  );
}
