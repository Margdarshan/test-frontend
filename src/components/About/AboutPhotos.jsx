import React from 'react';
// react-slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// images
import image1 from '../../assest/about-image/img1.jfif';
import image2 from '../../assest/about-image/img2.jfif';
import image3 from '../../assest/about-image/img3.jfif';

export default function AboutPhotos() {
  // images
  const images = [
    {
      img: image1,
      src: 'image1',
    },
    {
      img: image2,
      src: 'image2',
    },
    {
      img: image3,
      src: 'image3',
    },
  ];

  // slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="px-10 lg:px-20">
      <div className="lg:flex lg:justify-evenly mt-16">
        {/* small screen */}
        <div className="lg:hidden">
          <Slider {...settings}>
            {images.map((item, index) => (
              <img
                key={index}
                className="p-2 w-[80%] h-[14rem] md:h-[25rem] rounded-[2.5rem] object-cover"
                src={item.img}
                alt=""
              />
            ))}
          </Slider>
        </div>

        {/* large screen */}
        <div className="hidden lg:flex lg:justify-between ">
          {images.map((item, index) => (
            <img
              key={index}
              className="lg:w-[31%] lg:h-[100%] w-[24rem] rounded-[13px] lg:mt-0 mt-3 lg:mr-10 "
              src={item.img}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}
