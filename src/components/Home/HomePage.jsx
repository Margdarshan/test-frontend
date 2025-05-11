import React from 'react';
import MentorComponent from './Hero/MentorComponent.jsx';
// import RoadMap from "./RoadMap";
import StoryCard from './StoryCard.jsx';
import LeftDescription from './LeftDescription';
import RightDescription from './RightDescription.jsx';
import vectorone from './assests/vectorone.svg';
import vectortwo from './assests/vectortwo.svg';
import {
  mentorshipKey,
  mentorshipData,
  studyMaterialKey,
  studyMaterialData,
  testSeriesKey,
  testSeriesData,
  collegePredictorData,
  collegePredictorKey,
} from './studyMaterial.js';
import Animation from '../Mentorship/Animation.jsx';
import NewReview from '../Mentorship/NewReview.jsx';
import NewsLetter from './NewsLetter.jsx';
import MetaTitle from '../../core/components/Metatitle/MetaTitle.jsx';

const HomePage = () => {
  return (
    <div>
      <MetaTitle title='Home' metaTitle="Margdarshan: Explore IITian Mentorship| JEE Main 2025 College Predictor| Study Material for JEE and latest news for IIT-JEE 2025" description="margdarshan is India’s best JEE college predictor and counseling service for aspirants. Discover which colleges you can get with your JEE rank and receive guidance from top IITian mentors." keywords=" JEE Main College Predictor 2025, JEE Advanced College Predictor 2025, JEE College Predictor, IIT JEE College Predictor, JEE Counseling, JEE Mentorship Program, IIT JEE Mentors, JEE Expert Guidance, JEE Admission Counseling, JoSAA Counseling Guidance, Best college predictor for JEE, Margdarshan" />
      <MentorComponent />
      <div className="relative">
        <div className=" grid sm:grid-cols-1 md:flex lg:flex xl:flex justify-between md:items-start leading-none px-[30px] sm:px-[30px] md:px-[96px] lg:px-[96px] xl:px-[96px] mt-20 mb-8">
          <h4 className="text-[#020D2B] font-manrope text-2xl font-semibold leading-[50px] uppercase tracking-wide">
            Product & Service
          </h4>
          <p className="text-[#565656] font-inter text-[14px] lg:w-[40%]  leading-[30px] mb-2">
            Find The Right Option For you, Based on your experience and Interest
          </p>
        </div>

        <div className="px-[30px] sm:px-[30px] md:px-[96px] lg:px-[96px] xl:px-[96px] mb-12">
          <RightDescription data={mentorshipData} KeyData={mentorshipKey} />
        </div>

        <div className="px-[30px] sm:px-[30px] md:px-[96px] lg:px-[96px] xl:px-[96px] mb-12">
          <LeftDescription data={collegePredictorData} KeyData={collegePredictorKey} />
        </div>

        <div className="px-[30px] sm:px-[30px] md:px-[96px] lg:px-[96px] xl:px-[96px] mb-12">
          <RightDescription data={studyMaterialData} KeyData={studyMaterialKey} />
        </div>

        <div className="px-[30px] sm:px-[30px] md:px-[96px] lg:px-[96px] xl:px-[96px]">
          <LeftDescription data={testSeriesData} KeyData={testSeriesKey} />
        </div>
        <div className='absolute top-0 -mt-20 -z-10'>
          <img src={vectorone} alt="" />
        </div>
        <div className='absolute bottom-0 -z-10'>
          <img src={vectortwo} alt="" />
        </div>
      </div>

      <Animation />

      <div className="px-[30px] sm:px-[30px] md:px-[20px] lg:px-[20px] xl:px-[30px] bg-[#e7ecff]">
        <StoryCard />
      </div>
      {/* <Section8/> */}

      <NewReview />
      <NewsLetter />

    </div>
  );
};

export default HomePage;
