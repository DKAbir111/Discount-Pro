import PropTypes from "prop-types"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from "react-toastify";
const CouponCard = ({ coupon }) => {
    const notify = () => toast.success("Coupon code copied! 🎉");

    return (
        <div className="border bg-[#E6F0F3] mt-4 border-gray-300 flex flex-col rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{coupon.description}</h3>
                <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Expiry Date:</span> {coupon.expiry_date}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Condition:</span> {coupon.condition}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                    <span className="font-medium">Coupon Type:</span> {coupon.coupon_type}
                </p>
            </div>
            <div className="px-8 rounded-md">
                <div className="flex gap-2 justify-between items-center border-2 border-dashed bg-white px-1">
                    <h3 className="text-lg font-semibold text-gray-500">{coupon.coupon_code}</h3>
                    <CopyToClipboard text={coupon.coupon_code}>
                        <button className="btn btn-sm bg-[#19BC9B] rounded-md text-white" onClick={notify}>Copy</button>
                    </CopyToClipboard>
                </div>
            </div>
        </div>
    );
};

export default CouponCard;

CouponCard.propTypes = {
    coupon: PropTypes.object.isRequired,
}