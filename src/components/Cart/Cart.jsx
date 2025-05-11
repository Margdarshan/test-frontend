import React, { useState } from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { HiOutlineBolt } from 'react-icons/hi2';
import { TbPlaneDeparture } from 'react-icons/tb';
import { HiOutlineDocumentPlus } from 'react-icons/hi2';
import EmptyCartItem from './EmptyCartItem';
import MetaTitle from '../../core/components/Metatitle/MetaTitle';

const initialCartItems = [
  {
    id: 1,
    name: 'Steady Progress',
    sessions: 4,
    price: 1399,
    icon: <HiOutlineBolt />,
  },
  {
    id: 2,
    name: 'Tri-Mastery',
    sessions: 4,
    price: 1399,
    icon: <TbPlaneDeparture />,
  },
  {
    id: 3,
    name: 'Customized Plan',
    sessions: 18,
    price: 4590,
    icon: <HiOutlineDocumentPlus />,
  },
];

function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Function to calculate the total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  // Delete item function
  const deleteCartItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <main className="flex flex-col justify-center px-6 xl:px-24 py-16 bg-neutral-100 lg:h-fit -mt-16">
      <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-10 xl:space-x-32 lg:px-5 py-16 mt-3 justify-between w-full">
        <MetaTitle title='My Cart' />
        <div
          className={`lg:w-[60%] flex flex-col ${cartItems.length === 3 ? 'justify-between' : ''
            }`}
        >
          <header className="flex justify-between items-center w-full">
            <h1 className="self-stretch my-auto text-2xl font-bold text-violet-800">
              Your Cart
            </h1>
            <div className="p-2.5 my-auto text-md leading-none rounded-xl border border-solid border-[#5C5E66] text-[#5C5E66] font-semibold">
              {cartItems.length} Items In Cart
            </div>
          </header>
          <div className="flex justify-between items-center mt-8">
            {cartItems.length ? (
              <div className="flex flex-col w-full space-y-8">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    name={item.name}
                    sessions={item.sessions}
                    price={item.price}
                    icon={item.icon}
                    onDelete={() => deleteCartItem(item.id)} // Pass delete handler
                  />
                ))}
              </div>
            ) : (
              <div className="w-full">
                <EmptyCartItem />
              </div>
            )}
          </div>
        </div>
        <div className="lg:w-[40%]">
          <CartSummary
            totalPrice={calculateTotalPrice()}
            taxRate={0}
            discountRate={0}
          />
        </div>
      </div>
    </main>
  );
}

export default Cart;
