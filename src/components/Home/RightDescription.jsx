import React from 'react';
import PropTypes from 'prop-types';
import HeadTitle from './HeadTitle';
import DescriptionComponent from './DescriptionComponent';
import ArrowButton from './ArrowButton';

const RightDescription = ({ data, KeyData }) => {
  if (!data) return <p>Loading.......</p>;

  return (
    <div className='my-2'>
      {data.map((item, index) => (
        <div
          key={index}
          className={`grid gap-${window.innerWidth < 640 ? 2 : 4} mb-8`}
        >
          <div className='lg:hidden'>
            <div className="w-full">
              <img
                src={item.imageSrc}
                srcSet={item.imageSrcSet}
                alt={item.title}
                className="w-full h-auto rounded"
              />
            </div>
            <div className="w-full">
              <HeadTitle heading={item.title} number={item.number} />
              <DescriptionComponent description={item.description} />
              <div className="flex flex-wrap">
                <ArrowButton btnName={KeyData} buttonLink={item.buttonLink} />
              </div>
            </div>
          </div>
          <div className='hidden lg:flex flex-col lg:flex-row lg:space-x-10'>
            <div className="w-full md:w-1/2 mt-2">
              <img
                src={item.imageSrc}
                srcSet={item.imageSrcSet}
                alt={item.title}
                className="max-w-full h-auto rounded"
              />
            </div>
            <div className="w-full md:w-1/2">
              <HeadTitle heading={item.title} number={item.number} />
              <DescriptionComponent description={item.description} />
              <div className="max-w-full md:max-w-2xl flex flex-wrap">
                <ArrowButton btnName={KeyData} buttonLink={item.buttonLink} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

RightDescription.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      imageSrcSet: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      buttonLink: PropTypes.string.isRequired,
    })
  ),
  KeyData: PropTypes.arrayOf(PropTypes.string),
};

export default RightDescription;
