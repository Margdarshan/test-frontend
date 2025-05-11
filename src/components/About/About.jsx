import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
// custom CSS
import './About.css';
import MetaTitle from '../../core/components/Metatitle/MetaTitle';
const Loading = lazy(() => import('../../core/components/Loading/Loading'));
const NewMentors = lazy(() => import('./NewMentors'));
const AboutHeader = lazy(() => import('./AboutHeader'));
const AboutPhotos = lazy(() => import('./AboutPhotos'));
const AboutQuote = lazy(() => import('./AboutQuote'));
const AboutStory = lazy(() => import('./AboutStory'));
const AboutStats = lazy(() => import('./AboutStats'));
const AboutFeatures = lazy(() => import('./AboutFeatures'));
const AboutContact = lazy(() => import('./AboutContact'));

const About = () => {
  return (
    <div>
      <MetaTitle title='About Us' metaTitle="Personalized Margdarshan JEE Mentorship & College Counseling – Expert Guidance for Success" description="Margdarshan offers personalized JEE mentorship & college counselling to help students excel in entrance exams and secure admission to top engineering colleges." keywords="JEE mentorship, JEE mentoring, JEE guidance, engineering mentorship, college counselling, college admissions guidance, JEE preparation, IIT JEE mentors, engineering college counselling, entrance exam mentorship, IIT JEE guidance, personalized mentoring, JEE counselling, engineering admission counselling" />
      <div
        className="pt-[5%] h-100 -mt-20"
        style={{
          background:
            'linear-gradient(180deg, rgba(78, 24, 205, 0.12) 100%, rgba(78, 24, 205, 0) 100%)',
        }}
      ></div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Margdarshan</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      {/* Wrap components with Suspense for lazy loading */}
      <Suspense fallback={<Loading />}>
        <AboutHeader />
        <AboutPhotos />
        <AboutQuote />
        <AboutStory />
        <AboutStats />
        <AboutFeatures />
        <NewMentors />
        <AboutContact />
      </Suspense>
    </div>
  );
};

export default About;
