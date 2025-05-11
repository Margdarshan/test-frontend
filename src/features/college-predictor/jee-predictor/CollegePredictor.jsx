import React, { lazy, Suspense } from 'react';

const PredictorForm = lazy(() => import('./predicotor-component/PredictorForm'));
const InfoCard = lazy(() => import('./predicotor-component/InnfoCard'));
const LearnMoreCard = lazy(() => import('./predicotor-component/LearnMore'));
const BenefitsSection = lazy(() => import('./predicotor-component/BenifitsSection'));
const PredictorFaq = lazy(() => import('./predicotor-component/PredictorFaq'));
const ContactForm = lazy(() => import('./predicotor-component/ContactForm'));
const PredictorHeader = lazy(() => import('./predicotor-component/PredictorHeader'));
// const PredictorUsage = lazy(() => import('./predicotor-component/PredictorUsage'));
const ContactCard = lazy(() => import('./predicotor-component/ContactCard'));
const NewReview = lazy(() => import('../../../components/Mentorship/NewReview'));
const Loading = lazy(() => import('../../../core/components/Loading/Loading'))
import { learnMoreData } from './data/learnmore';
import avatar1 from '../../../assest/avatar/Avatar1.png';
import avatar2 from '../../../assest/avatar/avatar2.png';
import avatar3 from '../../../assest/avatar/avatar3.png';
import AboutContact from '../../../components/About/AboutContact';
import FAQ from '../../../components/Mentorship/Faq';
import MetaTitle from '../../../core/components/Metatitle/MetaTitle';

export const images = [avatar1, avatar2, avatar3];

const CollegePredictor = () => {
  return (
    <Suspense fallback={<Loading />}>
      <MetaTitle title='College Predictor' metaTitle='Margdarshan’s JEE Main College Predictor 2025| Predict Your JEE College 2025 by Rank or Percentile' description="Use Margdarshan’s JEE Main College Predictor to discover which NITs, IIITs, or GFTIs you can get with your JEE Main rank or percentile. Updated with latest cut-offs for accurate guidance" keywords="JEE Main College Predictor 2025, JEE 2025 College Predictor, JEE Main College Predictor, Engineering College Predictor India, Predict JEE Colleges 2025, JEE Counseling Assistance, JEE Admission Guidance, JEE College Prediction Tool, Best JEE College Predictor India
" />
      <div>
        <PredictorHeader />
        <PredictorForm />
        <InfoCard />
        {/* <PredictorUsage/> */}
        <LearnMoreCard />
        <BenefitsSection />
        {/* <PredictorFaq /> */}
        <FAQ />
        {/* <ContactCard images={images} /> */}
        <NewReview />
        {/* <ContactForm /> */}
        <AboutContact />
      </div>
    </Suspense>
  );
};

export default CollegePredictor;
