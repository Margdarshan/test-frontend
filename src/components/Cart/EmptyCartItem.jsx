import React from 'react';
import { HiOutlineBolt } from 'react-icons/hi2';

const EmptyCartItem = () => {
  return (
    <div className="cart-item flex flex-col space-y-4 lg:flex-row justify-between w-full p-4 lg:p-5 border border-[#BCBCBC] rounded-xl">
      <div className="left-part flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-5">
        <div className="icon flex items-center w-fit p-[15px] bg-[#FDB827] rounded-lg">
          <div className="icon-bg p-[10px] bg-[#EAE8FF] rounded-xl font-extralight text-xl text-[#4E18CD]">
            <HiOutlineBolt />
          </div>
        </div>
        <div className="text-part flex items-center">
          <div className="item-name text-xl font-semibold">
            Nothing in the Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCartItem;
