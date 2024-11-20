import qr from '../../assets/qr.png'
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            {/* Top Section */}
            <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Company Info */}
                <div>
                    <h2 className="text-xl font-semibold">Discount PRO</h2>
                    <p className="mt-2 text-sm">
                        Your go-to platform for the best coupons, offers, and cashback.
                    </p>
                    <div className="flex space-x-3 mt-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-telegram"></i>
                        </a>
                    </div>
                </div>

                {/* Help & Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:underline">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                How It Works
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Missing Cashback Claims
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Earning Programs */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Earning Programs</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:underline">
                                Shopping Assistant
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Share & Earn
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Refer & Earn
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Download App */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Download App</h3>
                    <div className="flex items-center space-x-3">
                        <img
                            src={qr}
                            alt="QR Code"
                            className="w-20"
                        />
                        <a href="#" className="block">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Google Play"
                                className="w-32"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700"></div>

            {/* Bottom Section */}
            <div className="container mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Blog Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Latest From The Blog</h3>
                    <div className="text-sm">
                        <p className="font-medium">
                            Diwali Shopping on a Budget: Top Tips for Scoring Great Discounts
                        </p>
                        <p className="text-gray-400">By Preksha Malavia</p>
                    </div>
                </div>

                {/* Hiring Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">We Are Hiring!</h3>
                    <p className="text-sm">
                        Join our team of deal-driven superheroes and save the world of
                        savings. Ready to seize the deal?
                    </p>
                    <a
                        href="#"
                        className="mt-2 inline-block text-red-500 hover:underline font-medium text-sm"
                    >
                        See All Jobs
                    </a>
                </div>

                {/* Subscribe Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Subscribe to Discount PRO</h3>
                    <p className="text-sm mb-4">
                        Get the best deals & offers in your email.
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="px-4 py-2 rounded-l-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <button className="bg-red-500 px-4 py-2 rounded-r-md hover:bg-red-600">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-gray-900 py-4 text-center text-sm text-gray-400">
                &copy; 2024 Discount PRO. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
