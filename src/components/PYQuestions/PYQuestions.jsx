import React from 'react';
import PosterCard from './PosterCard';
import AdvantagesList from './AdvantagesList';

const PYQuestions = () => {
  return (
    <div>
      {/* Upper Section */}
      <div className="mb-10">
        <PosterCard />
      </div>

      {/* Lower Section */}
      <div className='mb-10'> 
        <AdvantagesList />
      </div>
    </div>
  );
};

export default PYQuestions;
