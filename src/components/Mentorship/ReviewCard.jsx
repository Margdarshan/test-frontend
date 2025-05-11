import React from 'react';
import reviewSVG from './img/reviewSVG.svg';
import { PiQuotesThin } from 'react-icons/pi';
import PropTypes from 'prop-types';

const ReviewCard = ({ imageSrc, quote, avatarSrc, name, title }) => {
  return (
    <div className=" relative flex flex-col grow py-5 px-7 mx-auto w-full bg-white rounded-xl lg:shadow-xl ">
      <img
        loading="lazy"
        src={imageSrc}
        alt=""
        className="self-end max-w-full aspect-[6.25] w-[205px]"
      />
      <div className="flex justify-center mt-4">
        <div className=" text-sm font-semibold text-justify  leading-6 h-[220px] text-[#4D5765] max-lg:mx-2.5">
          &rdquo;{quote}&rdquo;
        </div>
      </div>
      <div className="flex mt-4 w-full">
        <div className="flex space-x-3">
          <div className="p-[2px] mb-1 z-20 rounded-lg bg-white shadow-md">
            <img
              loading="lazy"
              src={avatarSrc}
              alt={`${name}'s avatar`}
              className="shrink-0  max-w-full aspect-[1.03] w-[80px]"
            />
          </div>
          <div className="flex flex-col">
            <div className=" font-bold text-[#0F2239]">{name}</div>
            <div className="pt-[2px] text-xs font-semibold text-violet-800">
              {title}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[20px] left-0">
        <img src={reviewSVG} alt="" />
      </div>
      <div className="absolute text-6xl text-[#4E18CD] bottom-[20px] right-2">
        <PiQuotesThin />
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  imageSrc: PropTypes.string,
  quote: PropTypes.string,
  avatarSrc: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};



export default ReviewCard;
