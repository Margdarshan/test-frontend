import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Usage from './Usage';
import Learning from './Learning';
import MetaTitle from '../../core/components/Metatitle/MetaTitle';

const StudyMaterial = () => {
  return (
    <>
      <MetaTitle title="Study Material" />
      <Hero />
      <Features />
      <Usage />
      <Learning />
    </>
  );
};
export default StudyMaterial;
