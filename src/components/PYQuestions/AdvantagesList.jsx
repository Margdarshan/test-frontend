import React from 'react';
import AdvantageCard from './AdvantageCard';
import advantagesData from './data/advantagesData';

const AdvantagesList = () => {
  return (
    <div className='w-full bg-[#F3F2FF] py-10 px-4 sm:px-6 lg:py-15'>
      <div className="max-w-screen-xl mx-auto">
        <h3 className='text-center text-xl sm:text-2xl font-semibold text-blue-800 mb-4 sm:mb-6'>Info</h3>
        <h3 className="text-center text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
          Advantages of Previous Year Question Paper.
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {advantagesData.map((advantage) => (
            <AdvantageCard
              key={advantage.id}
              image={advantage.image}
              header={advantage.header}
              content={advantage.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvantagesList;
