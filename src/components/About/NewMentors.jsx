import * as React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TeamMember({ about, name, role, imageSrc, meetLink }) {
  // slider
  return (
    <div className="flex flex-col grow max-md:mt-10">
      <div className="my-2 pb-5 text-[#A7A7A7] h-[100%]">{about}</div>
      <div className="flex gap-3.5 text-md leading-7 text-white text-opacity-50">
        <img
          src={imageSrc}
          alt=""
          className="shrink-0 max-w-full aspect-square w-[120px]"
        />
        <div className="flex-auto my-auto text-white">
          {name} <br />{' '}
          <span className="text-[#A7A7A7] font-light">{role}</span>
        </div>
      </div>
      <hr className="shrink-0 mt-5 h-1 bg-[#A7A7A7] bg-opacity-10" />
      <div className="flex gap-4 self-start mt-5 text-base leading-6 text-white">
        <div className="flex-auto my-auto">Meet {name.split(' ')[0]}</div>
        <a href={meetLink} target="_blank" rel="noreferrer">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cba3253e7d0dd2eb4d8281715856fe22dd7d8dbd941fb2ab66190379e9648ff1?apiKey=9a32bc866e724018820ce764b81eba46&"
            alt="Meet icon"
            className="shrink-0 w-6 aspect-square transition-transform transform hover:translate-x-1.5"
          />
        </a>
      </div>
    </div>
  );
}

// Define propTypes to validate the props
TeamMember.propTypes = {
  about: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  meetLink: PropTypes.string.isRequired,
};

export default function NewMentors() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const teamMembers = [
    {
      about:
        'With over two years of experience in guiding students towards informed career decisions, Prakhar is deeply committed to empowering individuals with the skills, knowledge, and resources needed to achieve their goals. As CEO, he leads Margdarshan with a passion for education and a belief in its transformative power.',
      name: 'Prakhar Parashar',
      role: 'Founder & CEO',
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/2368165e2f4005b683041cde3768005168403a1567979a52da7ca74215060070?apiKey=9a32bc866e724018820ce764b81eba46&',
      meetLink: 'https://www.linkedin.com/in/prakharparashar89/',
    },
    {
      about:
        "With a keen eye for user experience and engagement, Zuhaib brings a visionary approach to product design at Margdarshan. His goal is to create an intuitive and engaging platform that simplifies complex concepts for users. With a passion for design and technology, Zuhaib is dedicated to crafting an accessible and user-friendly experience that resonates with Margdarshan's audience.",
      name: 'Zuhaib Maqbool',
      role: 'Product Designer',
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/81e8995f40ba4ee5b1e26c416caabdfba515127fa3b3e20dfd39679e041c6504?apiKey=9a32bc866e724018820ce764b81eba46&',
      meetLink: 'https://www.linkedin.com/in/zuhaibmaqbool/',
    },
    {
      about:
        "As a Computer Science Engineer, Subham plays a crucial role in turning design concepts into reality at Margdarshan. With his technical expertise and problem-solving skills, he collaborates closely with the team to bring the vision to life. Subham's dedication to excellence and his ability to align technical implementation with the overall vision of the platform ensures that Margdarshan delivers a seamless and impactful user experience.",
      name: 'Subham Chowdhury',
      role: 'Development Lead',
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/5dca33e8c4184be1d17b7d73ab12e1ec9fd36ca46d1de108d98be6be3537c6c0?apiKey=9a32bc866e724018820ce764b81eba46&',
      meetLink: 'https://www.linkedin.com/in/subham-chowdhury-524920209/',
    },
  ];

  return (
    <section className="flex flex-col items-center mt-5 px-20 py-8 bg-slate-900 max-md:px-5">
      <div className="w-full max-w-screen-xl max-md:max-w-full text-white text-center text-3xl">
        Meet the Team!
      </div>
      <div className="mt-10 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
        <div className="hidden md:flex md:gap-0">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col w-[33%] max-md:ml-0 max-md:w-full ${
                index > 0 ? 'ml-5' : ''
              }`}
            >
              <TeamMember {...member} />
            </div>
          ))}
        </div>

        <div className="md:hidden mx-3">
          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col w-[33%] px-2 max-md:ml-0 max-md:w-full"
              >
                <TeamMember {...member} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
