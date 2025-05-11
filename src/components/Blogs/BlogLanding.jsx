/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Box } from '@mui/material';
import BlogCard from './BlogCard';

import FeatureBlogComponent from './blog-component/FeatureBlogComponent';
import FeatureHeading from './blog-component/FeatureHeading';
import NewsLetter from '../Home/NewsLetter';
import MetaTitle from '../../core/components/Metatitle/MetaTitle';
const LandingPage = () => {
  return (
    <>
      <MetaTitle title='Blogs' metaTitle="Margdarshan Blog – JEE Preparation, College Counseling & Career Tips" description="Read expert blogs from Margdarshan on JEE preparation strategies, personalized college counseling, and engineering career insights to boost your exam success." keywords="JEE Preparation Blog, JEE Tips, College Counseling, Engineering Career Advice, JEE Main Tips, JEE Advanced Preparation, JEE Study Plan, Exam Strategies, Margdarshan Blog, College Admission Guidance" />
      <div className="flex flex-col items-center px-4 py-16 bg-gradient-to-b from-[#4E18CD]/[0.12] to-white/[0.12] -mt-20">
        <div className="w-full max-w-6xl flex flex-col items-center">
          <h1 className="font-Manropen font-semibold text-[#252525] text-[35px] leading-normal mb-4 mt-20">
            Margdarshan Blogs
          </h1>
          <p className="font-Manrope text-[#525252] md:px-36 text-[17px] leading-medium mb-8 text-center">
            Cracking JEE, NEET, CAT, and GATE requires smart preparation, strong conceptual understanding, and consistent practice. Whether you're aiming for top engineering, medical, management, or postgraduate technical institutes, a well-structured study plan, effective time management, and dedication are key to success. With the right strategy and perseverance, you can achieve your dream of excelling in these competitive exams.
          </p>
        </div>
      </div>
      <div className='px-5 xl:px-10'>
        <h2 className="font-Manrope px-5 font-semibold xl:px-10 text-[#4E18CD] text-[24px] leading-normal mb-5 w-full text-left">
          Top Stories
        </h2>
        <BlogCard />
      </div>

      <div className="flex flex-col items-center px-4 md:px-[220px] py-12 bg-white">
        <div className="w-full max-w-6xl flex flex-col ">
          <FeatureHeading
            heading={'For JEE'}
            description={'Stay up to date with the latest news and updates'}
          />

          <FeatureBlogComponent />

        </div>
      </div>
      <NewsLetter />
    </>
  );
};

export default LandingPage;
