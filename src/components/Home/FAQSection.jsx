import { useState } from "react";

const faqs = [
    {
        "question": "What is Discount PRO?",
        "answer": "Discount PRO is a user-friendly platform designed to help shoppers in Bangladesh save money by collecting and aggregating discount codes from various e-commerce stores. It simplifies the process of finding deals, making it easier to access active coupons, promotional offers, and cashback deals all in one place. Whether you're shopping for fashion, electronics, or groceries, Discount PRO ensures you never miss a chance to save."
    },
    {
        "question": "How do I use a discount code?",
        "answer": "Using a discount code with Discount PRO is straightforward. When you find a coupon on the app, you can copy the code by clicking on it. Once copied, head to the respective store’s checkout page during your shopping session. Paste the code in the designated 'Promo Code' or 'Discount Code' field to instantly apply the discount to your purchase. This seamless process ensures you maximize your savings with minimal effort."
    },
    {
        "question": "Is it free to use Discount PRO?",
        "answer": "Absolutely! Discount PRO is 100% free to use. There are no hidden fees or subscription charges to access the app's features. Users can browse, search, and utilize the available coupons without paying a single penny. The goal is to make saving money as accessible as possible for everyone."
    },
    {
        "question": "Can I subscribe to receive updates?",
        "answer": "Yes, Discount PRO offers a convenient subscription service for users who want to stay informed about the latest deals. By entering your email address, you’ll receive regular updates about new coupons, exclusive offers, and cashback opportunities directly in your inbox. This ensures you never miss a great deal."
    },
    {
        "question": "Are the coupons verified?",
        "answer": "We ensure that all the coupons are verified before listing them on the app to guarantee that they are valid. This way, users can confidently use the codes, knowing that they will work as expected at checkout."
    }
]


export default function FAQSection() {
    return (
        <div className="container mx-auto my-12 md:w-10/12">
            <h3 className="text-3xl text-center font-bold text-gray-800 mb-8">
                Frequently Asked Questions
            </h3>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="collapse collapse-arrow border">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium bg-[#E7F7F7]">{faq.question}</div>
                        <div className="collapse-content bg-white">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
