import React from 'react';
import Hero from './Hero';
import Header from './Header';
import HowTo from '../StudyMaterial/HowTo';
import DownloadContainer from '../StudyMaterial/DownloadContainer';
import MetaTitle from '../../core/components/Metatitle/MetaTitle';



const textBookData = [
  {
    id: 1,
    title: "Preview Content",
    description: " Skim through the chapters to get an overview of the  material and identify key topics."
  },
  {
    id: 2,
    title: "Take Notes",
    description: "Write down important concepts, definitions in your own words to reinforce  understanding and retention."
  },
  {
    id: 3,
    title: "Highlight Key Information",
    description: "Underline critical points  and formulas to make it easier to locate  essential information during review."
  },
  {
    id: 4,
    title: "Practice Active Learning",
    description: "Engage with the material by answering end-of-chapter  questions, discussing  concepts with peers."
  },
  {
    id: 5,
    title: "Review Regularly",
    description: " Schedule periodic reviews of your notes to reinforce learning and  identify areas that need further study"
  },
]

const std11TextBooks = [
  {
    id: 1,
    title: "Physics Textbook",
    description: "Standard 11 NCERT Physics textbook covering fundamental concepts of mechanics, waves, and thermodynamics.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  },
  {
    id: 2,
    title: "Chemistry Textbook",
    description: "Standard 11 NCERT Chemistry textbook introducing atomic structure, chemical bonding, and the periodic table.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  },
  {
    id: 3,
    title: "Mathematics Textbook",
    description: "Standard 11 NCERT Mathematics textbook covering sets, relations, functions, and trigonometry.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  }
];

const std12TextBooks = [
  {
    id: 1,
    title: "Physics Textbook",
    description: "Standard 12 NCERT Physics textbook focusing on electromagnetism, optics, and modern physics.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  },
  {
    id: 2,
    title: "Chemistry Textbook",
    description: "Standard 12 NCERT Chemistry textbook covering organic chemistry, electrochemistry, and biomolecules.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  },
  {
    id: 3,
    title: "Mathematics Textbook",
    description: "Standard 12 NCERT Mathematics textbook with chapters on calculus, vectors, and probability.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  }
];

const materialData = {
  "11th Standard": std11TextBooks,
  "12th Standard": std12TextBooks
}

const Textbook = () => {
  return (
    <>
      <MetaTitle title='Textbook' />
      <Header />

      <Hero />
      <DownloadContainer contentName="Textbooks" materialData={materialData} />
      <HowTo name="Book" title="How to use Text Book" description="Lor ipsum dolor sit amet consectetur. Id pellentesque a facilisis laoreet pellentesque netus. Ut facilisi purus ullamcorper faucibus neque cursus lectus." treeData={textBookData} />
    </>
  );
};

export default Textbook;
