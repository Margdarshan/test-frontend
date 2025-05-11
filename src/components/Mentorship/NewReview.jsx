import * as React from 'react';
// react-slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReviewCard from './ReviewCard';

const testimonialData = [
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/b15075d6ac06e9c6f8aa6cd415fc4dbc290156531c9620c9e702f151a2d4e929?apiKey=9a32bc866e724018820ce764b81eba46&',
    quote:
      'It was a holistic guidance, write from preparation tips to Pre-exam stress to post exam counseling, in one of the most creative ways( funny reels). Timely updates really help. Some of most underrated programs with great career prospects are reviewed om the channel helping genuine aspirants in the process',
    avatarSrc:
      'https://img.freepik.com/premium-vector/male-avatar-flat-icon-design-vector-illustration_549488-103.jpg',
    name: 'Ark Bani Gupta',
    title: 'JEE Student',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/b15075d6ac06e9c6f8aa6cd415fc4dbc290156531c9620c9e702f151a2d4e929?apiKey=9a32bc866e724018820ce764b81eba46&',
    quote:
      'Margdarshan really helped me in clarifying doubts about how JOSAA counselling works and also provided me the list of colleges I could get at my JEE rank. And the most important part, margdarshan played a major role in reducing my stress which I was having due to all the complexities of counselling.',
    avatarSrc:
      'https://img.freepik.com/premium-vector/male-avatar-flat-icon-design-vector-illustration_549488-103.jpg',
    name: 'Harsh Aanad',
    title: 'JEE Student',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/b15075d6ac06e9c6f8aa6cd415fc4dbc290156531c9620c9e702f151a2d4e929?apiKey=9a32bc866e724018820ce764b81eba46&',
    quote:
      'We, as students, are so lucky to have Prakhar Bhaiya to help us in times of need. I hope margdarshan gets the fame it deserves. Keep going!! Best wishes.                                                                                                                                                    ',
    avatarSrc:
      'https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2944.jpg',
    name: 'Isha Maheshwari',
    title: 'JEE Student',
  },
];

export default function NewReview() {
  // slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="lg:px-20 py-20 bg-white">
      <div className="heading flex flex-col space-y-2 items-center mb-16">
        <div className="text-2xl font-semibold">Our Students</div>
        <div className="text-[#667085] text-center">
          Various Responses we get that reflects how our products and services
          helped students!
        </div>
      </div>
      <div className="grid-cols-1 md:grid-cols-2 xl:flex mx-auto max-lg:px-5">
  <div className="w-full max-lg:max-w-full">
    {/* large screen */}
    <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 lg:gap-5">
      {testimonialData.map((testimonial, index) => (
        <div
          key={index}
          className="flex flex-col max-lg:ml-0 max-lg:w-full"
        >
          <ReviewCard {...testimonial} />
        </div>
      ))}
    </div>

    {/* small screen */}
    <div className="lg:hidden w-full overflow-hidden mx-auto">
      <Slider {...settings}>
        {testimonialData.map((testimonial, index) => (
          <div key={index} className="flex flex-col mb-10">
            <ReviewCard {...testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  </div>
</div>

    </section>
  );
}
