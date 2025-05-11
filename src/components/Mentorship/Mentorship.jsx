import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import FAQ from './Faq';
import NewReview from './NewReview';
import Hero from './Hero';
import Animation from './Animation';
import Features from './Features';
import './CSS/Mentorship.css';
import PaymentSuccess from '../Payment/PaymentSuccess';
import CardComponent from './CardComponent';
import AboutContact from '../About/AboutContact';
import Customize from './Customize';
import MetaTitle from '../../core/components/Metatitle/MetaTitle';

const Mentorship = () => {
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const closeModal = () => {
    setIsPaymentSuccess(false);
  };

  return (
    <div className="font-manrope -mt-20">
      <MetaTitle title='Mentorship' metaTitle="JEE Mentorship & College Counseling | Personalized IIT-JEE Guidance-Margdarshan" description="Personalized college counseling for JEE Main/Advanced aspirants. Understand JoSAA counseling, cut-offs, and get expert guidance on choosing the right IIT, NIT, IIIT or GFTI for you" keywords="JEE Mentorship Program, JEE Mentorship 2025, IIT JEE Mentor, JEE Main Mentorship, JEE Advanced Mentorship, JEE Preparation Guidance, Personalized JEE Mentorship, Expert JEE Mentors, IIT Entrance Coaching, Margdarshan JEE Mentorship, JEE College Counseling, JEE Admission Guidance" />

      <div className={isPaymentSuccess ? 'blur' : ''}>
        <Hero />
        <Animation />
        <Features />
        <CardComponent />
        <Customize />
        <FAQ />
        <NewReview />
        <AboutContact />
        {/* <button onClick={handlePaymentSuccess}>Simulate Payment Success</button> */}
      </div>
      {isPaymentSuccess && <PaymentSuccess closeModal={closeModal} />}
    </div>
  );
};

export default Mentorship;
