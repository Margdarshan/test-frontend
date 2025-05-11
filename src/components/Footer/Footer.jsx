import * as React from 'react';
import { Link } from 'react-router-dom';
import marglogo from '../img/marglogo.svg';
import callicon from '../img/callicon.svg';
import mailicon from '../img/mailicon.svg';
import location from '../img/location.svg';
import linkedIn from '../img/linkedin.svg';
import instagram from '../img/instagram.svg';
import xicon from '../img/xicon.svg';
import facebook from '../img/facebook.svg';
import youtube from '../img/youtube.svg';
import PropTypes from 'prop-types';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const address = 'Vijay Nagar Square, Indore, Madhya Pradesh, 452010';
// Encode special characters in the address for proper URL formatting
const encodedAddress = encodeURIComponent(address);

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:w-[26%] max-lg:ml-0 max-lg:w-full">
      <div className="flex flex-col grow text-base text-neutral-800 max-lg:mt-10">
        <a href="/frontend/" onClick={scrollToTop}>
          <img
            loading="lazy"
            src={marglogo}
            alt="Margdarshan logo"
            className="max-w-full aspect-[5.26] lg:w-[215px] w-[150px]"
          />
        </a>
        <h2 className="mt-10 md:mt-24 text-xl font-medium text-violet-800 max-lg:mt-10">
          Get In Touch
        </h2>
        <div className="flex gap-2.5 mt-8 tracking-wide">
          <img
            loading="lazy"
            src={callicon}
            alt="Phone icon"
            className="shrink-0 w-5 aspect-square"
          />
          <div>+91 9522225177</div>
        </div>
        <div className="flex gap-2.5 mt-9 tracking-wide whitespace-nowrap">
          <img
            loading="lazy"
            src={mailicon}
            alt="Email icon"
            className="shrink-0 w-5 aspect-square"
          />
          <div>
            <a href="mailto:support@marg-darshan.com">
              support@marg-darshan.com
            </a>
          </div>
        </div>
        <div className="flex gap-2.5 mt-9 tracking-wide">
          <img
            loading="lazy"
            src={location}
            alt="Location icon"
            className="shrink-0 self-start aspect-square w-[22px]"
          />
          <div>
            <a href={`https://www.google.com/maps/place/${encodedAddress}`}>
              {address}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const FooterSection = ({ title, items }) => {
  return (
    <div className="flex flex-col text-base text-neutral-800 max-lg:mt-10">
      <h3 className="text-xl font-medium text-violet-800">{title}</h3>
      {items.map((item, index) => (
        <div key={index} className={`mt-${index === 0 ? 6 : 5}`}>
          {item}
        </div>
      ))}
    </div>
  );
};
FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.node),
};
const Footer = () => {
  const sections = [
    {
      title: 'Top Exam',
      items: [
        <Link key={1} to="/frontend/commingsoon" onClick={scrollToTop}>
          JEE Main 2025
        </Link>,
        // <Link to="/frontend/commingsoon" onClick={scrollToTop}>
        //   NEET 2025
        // </Link>,
        <Link key={2} to="/frontend/commingsoon" onClick={scrollToTop}>
          GATE 2025
        </Link>,
      ],
    },
    {
      title: 'Predictors',
      items: [
        <Link key={3} to="/frontend/collegepredictor" onClick={scrollToTop}>
          JEE Main College Predictor
        </Link>,
        <Link key={4} to="/frontend/commingsoon" onClick={scrollToTop}>
          JEE Main Rank Predictor
        </Link>,
        <Link key={5} to="/frontend/commingsoon" onClick={scrollToTop}>
          JEE Advanced Rank Predictor
        </Link>,
        // <Link to="/frontend/commingsoon" onClick={scrollToTop}>
        //   NEET College Predictor
        // </Link>,
      ],
    },
    {
      title: 'Resources',
      items: [
        <Link key={6} to="/frontend/commingsoon" onClick={scrollToTop}>
          Q&A
        </Link>,
        <Link key={7} to="/frontend/commingsoon" onClick={scrollToTop}>
          JEE Main Free Mock Test
        </Link>,
        <Link key={8} to="/frontend/commingsoon" onClick={scrollToTop}>
          Zero Cost Test Series JEE
        </Link>,
        <Link key={9} to="/frontend/blog" onClick={scrollToTop}>
          Blog
        </Link>,
        // <a href="https://marg-darshan.com/blogs">Blog</a>,
        <Link key={10} to="/frontend/commingsoon" onClick={scrollToTop}>
          Previous Year Papers
        </Link>,
        // <a href="/frontend/commingsoon">
        //   NCERT Books
        // </a>,
        // <a href="https://marg-darshan.com/study-material/ncert-books/ncert-books-for-class-12th/ncert-books-for-class-12th-overall">
        //   NCERT Books
        // </a>,
        <Link key={11} to="/frontend/commingsoon" onClick={scrollToTop}>
          Notes
        </Link>,
      ],
    },
    {
      title: 'Other Links',
      items: [
        <Link key={12} to="frontend/about" onClick={scrollToTop}>
          About Margdarshan
        </Link>,
        <Link key={13} to="frontend/about#contact" onClick={scrollToTop}>
          Contact Us
        </Link>,
        <Link
          key={14}
          to="/frontend/terms-and-conditions"
          target="_blank"
          onClick={scrollToTop}
        >
          Terms & Conditions
        </Link>,
        <Link key={15} to="/frontend/career-page" onClick={scrollToTop}>
          Careers
        </Link>,
        <Link
          key={16}
          to="/frontend/refund-cancel"
          target="_blank"
          onClick={scrollToTop}
        >
          Cancellation/Refund Policy
        </Link>,
        <Link
          key={17}
          href="/frontend/privacypolicy"
          target="_blank"
          onClick={scrollToTop}
        >
          Privacy Policy
        </Link>,
        <Link key={18} to="/frontend/shipping" target="_blank">
          Shipping Policy
        </Link>,
      ],
    },
  ];

  return (
    <footer className="flex flex-col items-center mx-auto px-20 pt-10 pb-5 bg-violet-50 max-lg:px-5">
      <div className="w-full max-lg:max-w-full">
        <div className="flex lg:gap-5 max-lg:flex-col max-lg:gap-0">
          <ContactInfo />
          <div className="flex flex-col lg:ml-5 lg:w-[74%] max-lg:ml-0 max-lg:w-full">
            <div className="self-stretch my-auto max-lg:mt-10 max-lg:max-w-full">
              <div className="flex lg:gap-5 max-lg:flex-col max-lg:gap-0">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${index === 0
                      ? 'lg:w-[16%]'
                      : index === 1
                        ? 'lg:ml-5 lg:w-[32%]'
                        : index === 2
                          ? 'lg:ml-5 lg:w-[30%]'
                          : 'lg:ml-5 lg:w-[22%]'
                      } max-lg:ml-0 max-lg:w-full`}
                  >
                    <FooterSection
                      title={section.title}
                      items={section.items}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-14 max-w-full h-0.5 bg-neutral-600 bg-opacity-60 w-full max-lg:mt-10" />
      <div className="flex gap-5 justify-between mt-5 w-full max-lg:flex-wrap max-lg:max-w-full">
        <div className="self-start text-base font-medium leading-7 text-neutral-800">
          © 2025 Margdarshan, All Rights Reserved.
        </div>
        <div className="flex gap-5 justify-center items-center">
          <a
            href="https://www.facebook.com/Margdarshan89"
            target="_blank"
            rel="noreferrer"
          >
            <img
              loading="lazy"
              src={facebook}
              alt="Facebook icon"
              className="shrink-0 self-stretch my-auto aspect-square w-[30px]"
            />
          </a>
          <a
            href="https://twitter.com/Margdarshan89"
            target="_blank"
            rel="noreferrer"
          >
            <img
              loading="lazy"
              src={xicon}
              alt="Twitter icon"
              className="shrink-0 self-stretch w-[30px] aspect-square"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/margdarshan89"
            target="_blank"
            rel="noreferrer"
          >
            <img
              loading="lazy"
              src={linkedIn}
              alt="Instagram icon"
              className="shrink-0 self-stretch my-auto aspect-square w-[33px]"
            />
          </a>
          <a
            href="https://www.instagram.com/margdarshan89"
            target="_blank"
            rel="noreferrer"
          >
            <img
              loading="lazy"
              src={instagram}
              alt="LinkedIn icon"
              className="shrink-0 self-stretch my-auto w-8 aspect-square"
            />
          </a>
          <a
            href="https://www.youtube.com/c/Margdarshan89"
            target="_blank"
            rel="noreferrer"
          >
            <img
              loading="lazy"
              src={youtube}
              alt="YouTube icon"
              className="shrink-0 self-stretch my-auto w-8 aspect-square"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
