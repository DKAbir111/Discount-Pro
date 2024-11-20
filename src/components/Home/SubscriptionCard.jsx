import subscribe from '../../assets/subscribe-img.png'
export default function SubscriptionCard() {
    return (
        <div className="bg-[#E7F8F7] rounded-lg p-8 flex items-center justify-between my-12 container mx-auto md:w-10/12">
            {/* Left Section */}
            <div className='md:w-3/5'>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Get The Latest & Best Coupon/Offer Alerts
                </h3>
                <p className="text-gray-600">
                    35,00,000+ Subscriptions Across India & Counting! Subscribe to have new
                    coupon lists delivered directly to your inbox.
                </p>
                {/* Subscription Form */}
                <div className="mt-4 flex">
                    <input
                        type="email"
                        placeholder="Enter Email Address"
                        className="p-3 border border-gray-300 rounded-l-md flex-1"
                    />
                    <button
                        className="bg-[#19BC9B] text-white font-semibold px-6 rounded-r-md hover:bg-[#17A889] transition"
                    >
                        SUBSCRIBE
                    </button>
                </div>
            </div>
            {/* Right Section */}
            <div className="hidden sm:block">
                <img
                    src={subscribe}
                    alt="Best Coupons Illustration"
                />
            </div>
        </div>
    );
}
