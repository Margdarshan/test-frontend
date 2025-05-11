import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

const CartItem = ({ name, price, sessions, icon, onDelete }) => {
  return (
    <div className="cart-item flex flex-col space-y-4 lg:flex-row justify-between w-full p-4 lg:p-5 border border-[#BCBCBC] rounded-xl">
      <div className="left-part flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-5">
        <div className="icon flex items-center w-fit p-[15px] bg-[#0E0B3D] rounded-lg">
          <div className="icon-bg p-[10px] bg-[#EAE8FF] rounded-xl font-extralight text-xl text-[#4E18CD]">
            {icon}
          </div>
        </div>
        <div className="text-part flex flex-col justify-between">
          <div className="item-name text-xl font-semibold">{name}</div>
          <div className="session-count text-[#5C5E66] font-semibold">
            {sessions} sessions
          </div>
        </div>
      </div>
      <div className="right-part flex justify-start lg:justify-end items-end lg:items-center space-x-5 lg:space-x-10">
        <div className="money text-xl text-[#0E0B3D] font-semibold">
          ₹{price}
        </div>
        <div className="delete text-[#5C5E66] flex items-center text-xl">
          <button className="delete-btn" onClick={onDelete}>
            <RiDeleteBinLine />
          </button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sessions: PropTypes.number.isRequired,
  icon: PropTypes.element.isRequired,
  onDelete: PropTypes.func.isRequired,
  };
export default CartItem;
