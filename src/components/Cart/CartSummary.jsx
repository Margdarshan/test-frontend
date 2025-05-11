import React, { useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaCheckCircle } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function CartSummary({ totalPrice, taxRate, discountRate }) {
  const [isPromoEntered, setIsPromoEntered] = useState(false);
  const [isPromoCodeValid, setIsPromoCodeValid] = useState(true);
  const [promoCode, setPromoCode] = useState(''); // State to track the promo code
  const validPromoCodes = ['11111', '22222', '33333', '44444', '55555'];
  const navigate = useNavigate();

  // Handler for promo code input
  const handlePromoCodeChange = (e) => {
    const enteredCode = e.target.value;
    setPromoCode(enteredCode);

    if (enteredCode.trim() !== '') {
      setIsPromoEntered(true);
      setIsPromoCodeValid(validPromoCodes.includes(enteredCode));
    } else {
      setIsPromoEntered(false);
      setIsPromoCodeValid(true);
    }
  };

  return (
    <div className="w-full h-[468px] flex flex-col space-y-6 px-7 pt-10 pb-2 border border-[#BCBCBC] rounded-lg">
      <div className="subtotal-block flex justify-between">
        <div className="subtotal text-[17px] text-[#4E18CD] font-semibold">
          Subtotal
        </div>
        <div className="amount text-[17px] text-[#5C5E66] font-semibold">
          ₹{totalPrice}
        </div>
      </div>
      <div className="tax-block flex justify-between">
        <div className="Tax text-[17px] text-[#4E18CD] font-semibold">Tax</div>
        <div className="tax-rate text-[17px] text-[#5C5E66] font-semibold">
          {taxRate}%
        </div>
      </div>
      <div className="discount-block flex justify-between">
        <div className="Discount text-[17px] text-[#4E18CD] font-semibold">
          Discount
        </div>
        <div className="discount-rate text-[17px] text-[#5C5E66] font-semibold">
          {discountRate}%
        </div>
      </div>
      <div className="Promo-code-block flex flex-col">
        <div className="Promo-code text-[17px] text-[#020D2B] font-semibold flex items-end">
          Promo Code
        </div>
        <div
          className={`${isPromoCodeValid ? 'invisible' : ''} text-sm text-[#FF5733] font-semibold pb-[1px]`}
        >
          Invalid Promo code
        </div>
        <div className="Promo-code-input flex">
          <input
            className="flex w-full border border-[#020D2B80] rounded-xl py-3 pl-4 pr-14 focus:outline-[#4E18CD]"
            type="text"
            name="promocode"
            value={promoCode}
            onChange={handlePromoCodeChange}
          />
          <div className="eclipse-icon font-extrabold text-2xl flex items-center -ml-10">
            {isPromoEntered ? (
              isPromoCodeValid ? (
                <FaCheckCircle className="text-[#27AE60]" />
              ) : (
                <div className="rounded-full p-1 bg-[#FF5733] text-sm text-white font-semibold">
                  <RxCross2 />
                </div>
              )
            ) : (
              <AiOutlineLoading3Quarters className="text-[#4E18CD]" />
            )}
          </div>
        </div>
      </div>
      <div className="buttons flex flex-col space-y-5">
        <div className="confirm-payment">
          <button className="w-full py-3 rounded-xl flex justify-center bg-[#4E18CD] text-white font-semibold">
            Confirm Payment
          </button>
        </div>
        <div className="explore-more">
          <button
            className="w-full py-3 rounded-xl flex justify-center border border-[#4E18CD] text-[#4E18CD] font-semibold"
            onClick={() => navigate('/frontend/mentorship')}
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}
CartSummary.propTypes = {
  totalPrice: PropTypes.number,
  discountRate: PropTypes.number,
  taxRate: PropTypes.number
  };

export default CartSummary;
