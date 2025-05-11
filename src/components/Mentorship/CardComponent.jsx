// CardComponent.js
import React from 'react';
import usePriceDetails from '../../core/services/usePriceDetails';
import usePaymentHandler from '../../hooks/usePaymentHandler';
import { CardData as staticCardData } from './CardData';
import { IoCheckmarkSharp } from 'react-icons/io5';

const CardComponent = () => {
  const {
    isLoading: priceLoading,
    error: priceError,
    data: priceData,
  } = usePriceDetails('price');
  const {
    checkAuth,
    authToken,
    isLoading: paymentLoading,
    error: paymentError,
  } = usePaymentHandler();

  if (priceLoading || paymentLoading || !priceData) {
    return (
      <div className="flex items-center justify-center w-full px-4 pt-2 mt-5 mb-5 lg:px-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 w-full">
          <div className="bg-gray-200 rounded-lg h-[34rem] w-full animate-pulse"></div>
          <div className="bg-gray-200 rounded-lg h-[34rem] w-full animate-pulse"></div>
          <div className="bg-gray-200 rounded-lg h-[34rem] w-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (priceError || paymentError) {
    return (
      <p className="text-red-500">
        Error: {priceError?.message || paymentError}
      </p>
    );
  }

  const mergeCardData = (staticData, backendData) => {
    return staticData.map((staticCard, index) => {
      const backendCard = backendData[index];
      return {
        ...staticCard,
        priceStrike: `${backendCard.old_price}`,
        price: `₹${backendCard.new_price}`,
        sessions: `For ${backendCard.sessions} Sessions`,
        description: [
          backendCard.point1,
          backendCard.point2,
          backendCard.point3,
          backendCard.point4,
          backendCard.point5,
        ],
        discount: `${backendCard.discount}%`,
      };
    });
  };

  const mergedCardData = mergeCardData(staticCardData, priceData);

  return (
    <section className="flex flex-col mx-auto mt-10 px-5 lg:px-10 2xl:px-20 pt-4 pb-20 bg-[#F3F2FF]">
      <div className="heading flex flex-col space-y-2 items-center mt-10 mb-14">
        <div className="text-2xl font-semibold">Our Pricing</div>
        <div className="text-[#667085] text-center">
          Everything you need to know about the Pricing
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mergedCardData.map((data, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg flex flex-col p-6 relative"
            style={{ backgroundColor: data.backgroundColor, color: data.color }}
          >
            <div
              className={`absolute top-0 right-0 px-3 py-1 text-xs font-bold text-white rounded-bl-lg rounded-tr-lg overflow-hidden`}
              style={{ backgroundColor: data.stickyColor }}
            >
              {data.savings}
            </div>
            <div className="flex justify-center mt-16">
              <div
                className={`w-12 h-12 text-[#4E18CD] bg-[${data.iconBackground}] p-[2px] text-3xl rounded-full flex items-center justify-center`}
              >
                {data.icon}
              </div>
            </div>
            <div
              className="text-center text-xl font-semibold mt-4"
              style={{ color: data.headercolor }}
            >
              {data.title}
            </div>
            <div className="flex justify-center items-center mt-4 mb-2">
              <span
                className="text-3xl font-bold"
                style={{ color: data.priceColor }}
              >
                {data.price}
              </span>
              <span
                className={`line-through text-xl text-[${data.priceStrikeThroughColor}] ml-2`}
              >
                {data.priceStrike}
              </span>
            </div>
            <div
              className={`text-center text-xs text-[${data.discountColor}] mb-2`}
            >
              {data.discount} Off
            </div>
            <div
              className={`text-center text-sm text-[${index % 2 === 1 ? '#FFFFFF' : '#000000'}] font-medium`}
            >
              {data.sessions}
            </div>
            <div className="flex justify-center mt-6 mb-4">
              <button
                onClick={() => checkAuth(data.price)}
                className="px-6 py-3 w-full text-sm font-bold rounded-lg"
                style={{
                  backgroundColor: data.btncolor,
                  color: data.btntextcolor,
                  border: `1.5px solid ${data.btncolor}`,
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = data.btntextcolor;
                  e.target.style.color = data.btncolor;
                  e.target.style.border = `1.5px solid ${data.btncolor}`;
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = data.btncolor;
                  e.target.style.color = data.btntextcolor;
                }}
              >
                {authToken ? 'Proceed to Pay' : 'Get Started'}
              </button>
            </div>
            <div className="text-left flex flex-col space-y-3 mt-6 mb-4">
              {data.description.map((point, idx) => (
                <div key={idx} className="flex space-x-3">
                  <div
                    className={`check-icon text-[${index % 2 === 0 ? '#4E18CD' : '#FFFFFF'}] pt-1`}
                  >
                    <IoCheckmarkSharp />
                  </div>
                  <p
                    key={idx}
                    className={`text-sm font-semibold ${index % 2 === 0 ? 'text-[#3a3b3c] ' : 'text-[#FFF]'}  `}
                  >
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardComponent;
