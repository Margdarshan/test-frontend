import * as React from 'react';
import fullStar from './img/FullStar.svg';
import emptyStar from './img/EmptyStar.svg';
import vector1 from './img/Vector1.svg';
import vector2 from './img/Vector2.svg';
import mainpic from './img/main-review-photo.svg';
import PropTypes from 'prop-types';


function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  return (
    <div className="flex gap-2">
      {[...Array(fullStars)].map((_, i) => (
        <img
          key={`full-${i}`}
          loading="lazy"
          src={fullStar}
          alt="Full star"
          className="lg:shrink-0 lg:w-8 lg:aspect-[1.03] fill-yellow-400"
        />
      ))}
      {hasHalfStar && (
        <img
          loading="lazy"
          src={emptyStar}
          alt="Half star"
          className="shrink-0 w-8 aspect-[1.03] fill-zinc-300"
        />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <img
          key={`empty-${i}`}
          loading="lazy"
          src={emptyStar}
          alt="Empty star"
          className="shrink-0 w-8 aspect-[1.03] fill-zinc-300"
        />
      ))}
    </div>
  );
}
StarRating.propTypes = {
  rating: PropTypes.number
}
function ReviewImages({ images }) {
  return (
    <div className="flex lg:gap-5 lg:mt-4 max-lg:flex-wrap max-lg:pr-5 max-lg:max-w-full">
      {images.map((image, index) => (
        <img
          key={index}
          loading="lazy"
          src={image.src}
          alt={image.alt}
          className="grow shrink-0  aspect-[23.26] basis-0 stroke-[1.4px] stroke-violet-800 w-fit"
        />
      ))}
    </div>
  );
}
ReviewImages.propTypes = {
images:  PropTypes.arrayOf(PropTypes.shape({
  src: PropTypes.string,
  alt: PropTypes.string,
  }))
};
function ReviewCard({ review }) {
  return (
    <article className="grid-cols-1  lg:grid-cols-2 ml-5 w-[68%] pt-1 max-lg:ml-0 max-lg:w-full">
      <div className="flex flex-col max-lg:mt-10 max-lg:max-w-full">
        <h2 className="hidden lg:block lg:self-start lg:ml-40 lg:text-2xl lg:font-medium lg:tracking-wide lg:text-neutral-800 max-lg:ml-2.5">
          Reviews
        </h2>
        <div className="lg:flex lg:gap-5 lg:justify-between lg:items-start mt-2 lg:mt-6 w-full max-lg:flex-wrap max-lg:max-w-full">
          <div className="relative lg:flex lg:flex-col justify-between lg:mt-5">
            {/* For mobile view display rating k liye  */}
            <div className="lg:hidden absolute mt-[-78%] right-0">
              <StarRating rating={review.rating} />
            </div>
            {/* For mobile view, display name and location k liye */}
            <div className="lg:hidden absolute bottom-0 right-2 bg-slate-400 ">
              <h3 className="text-xl font-medium mt-[-92%] rounded-t-lg px-2 bg-slate-400 text-[#FFF]">
                {review.name}
              </h3>
              <p className=" text-sm bg-slate-400 mt-[-5px] rounded-b-lg py-2 px-2   text-[#C6C6C6]">
                {review.location}
              </p>
            </div>
            {/* For medium and large screens, display rating, name, k liye */}
            <div className="hidden lg:flex lg:flex-col">
              <h3 className="text-xl font-medium mt-[-15px] text-zinc-800">
                {review.name}
              </h3>
              <p className="mt-0 text-sm text-neutral-500">{review.location}</p>
              <div className="lg:justify-end lg:ml-[500px] max-w-fit max-h-fit lg:mt-[-45px] mb-0">
                <StarRating rating={review.rating} />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-lg leading-9 text-slate-900 text-opacity-80 max-lg:mt-6 max-lg:max-w-full">
          {review.content}
        </p>
        <ReviewImages images={review.images} />
      </div>
    </article>
  );
}
ReviewCard.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.string,
    rating: PropTypes.number,
    content: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }),
};

function Review() {
  const review = {
    name: 'Amit Kumar',
    location: 'Mumbai India',
    rating: 4,
    content:
      'Lorem ipsum dolor sit amet consectetur. In proin eget risus ipsum phasellus ac. Feugiat ut consectetur ac nunc lectus convallis. Volutpat bibendum et amet et turpis velit. Semper ullamcorper tristique tortor arcu tristique donec at volutpat sodales. Pharetra dignissim diam tortor scelerisque id nibh rhoncus id. Odio cursus fames consequat.',
    images: [
      {
        src: vector1,
        alt: 'Review image 1',
      },
      {
        src: vector2,
        alt: 'Review image 2',
      },
    ],
  };
  return (
    <section className="self-stretch px-20 lg:pt-5 pb-10 lg:mt-5 w-full bg-green-500 bg-opacity-10 max-lg:px-5 max-lg:max-w-full">
      <div className="flex gap-5 max-lg:flex-col max-lg:gap-0">
        <div className="flex flex-col w-[32%] max-lg:ml-0 max-lg:w-full">
          <img
            loading="lazy"
            src={mainpic}
            className="grow lg:mt-14 w-full aspect-[1.49] mt-5 lg:max-lg:mt-10"
          />
        </div>
        <ReviewCard review={review} />
      </div>
    </section>
  );
}

export default Review;
