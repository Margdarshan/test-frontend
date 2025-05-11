import * as React from 'react';
import PropTypes from 'prop-types';

const FeatureItem = ({ children }) => (
  <div className="justify-center mx-3 px-8 py-4 rounded-2xl border-2 border-[#7751FF] border-solid shadow-xl max-lg:px-5">
    {children}
  </div>
);

FeatureItem.propTypes = {
children:PropTypes.node
};

const features = [
  'Weekly Schedule',
  'Expert Mentors',
  'Personalized Mentorship',
  'Exam Strategy Development',
];


function Features() {
  return (
    <section className="flex mb-[60px] justify-center ">
      <div className="flex flex-col items-center font-medium">
        <h3 className="text-2xl font-semibold">All our features</h3>
        <h2 className="text-[#667085] my-2 text-center">
          Why Choose Margdarshan?
        </h2>
        <div className="flex gap-3 lg:gap-5 justify-center self-stretch px-5 m-auto mt-8 text-sm text-[#7751FF] max-lg:flex-wrap">
          {features.map((feature, index) => (
            <FeatureItem key={index}>{feature}</FeatureItem>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
