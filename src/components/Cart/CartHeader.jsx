import React from 'react';
import PropTypes from 'prop-types';

function CartHeader({ itemCount }) {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center max-w-full w-[756px]">
      <h1 className="self-stretch my-auto text-3xl font-bold text-violet-800">
        Your Cart
      </h1>
      <div className="gap-2.5 self-stretch p-2.5 my-auto text-lg font-medium leading-none rounded-xl border border-solid border-zinc-400 text-zinc-600">
        {itemCount} Items In Cart
      </div>
    </header>
  );
}

CartHeader.propTypes ={
  itemCount: PropTypes.number.isRequired
}
export default CartHeader;
