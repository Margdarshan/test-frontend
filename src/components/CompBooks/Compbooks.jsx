import React from 'react'
import Header from './Header'
import Hero from './Hero'
import HowTo from '../StudyMaterial/HowTo'
import DownloadContainer from '../StudyMaterial/DownloadContainer'
import MetaTitle from '../../core/components/Metatitle/MetaTitle'


const comprehensiveData = [
  {
    id: 1,
    title: "Initial Review and  Organization",
    description: "Skim through  and organize  notes,  highlighting key  points for easy  reference."
  },
  {
    id: 2,
    title: "Reading and  Summarization",
    description: "Actively read,  summarize  sections in your  own words, and  annotate for  clarity."
  },
  {
    id: 3,
    title: "Regular Review  and Practice",
    description: " Schedule regular  reviews, solve  practice  problems, and  use flashcards  for  reinforcement."
  },
  {
    id: 4,
    title: "Interactive and  Group Study",
    description: "Teach others,  join study  groups, and quiz  each other to  deepen  understanding."
  },
  {
    id: 5,
    title: "Final Review and  Refinement",
    description: "Condense notes,  focus on weak  areas, and  simulate exam  conditions for  practice."
  },
]



const revisionData = [
  {
    id: 1,
    title: "Summarize Material",
    description: "Break down extensive  material into concise,  digestible chunks."
  },
  {
    id: 2,
    title: "Enhance Retention",
    description: "Use mnemonics, visual aids,  diagrams, and charts."
  },
  {
    id: 3,
    title: "Annotate and Track  Mistakes",
    description: "Add  annotations and track  mistakes for personalized  learning."
  },
  {
    id: 4,
    title: "Regular Review Sessions",
    description: "Schedule regular reviews and  solve practice questions."
  },
  {
    id: 5,
    title: "Focused Preparation",
    description: "Concentrate on relevant  questions and likely exam  topics"
  },
]

const physicsMaterial = [
  {
    id: 1,
    title: "Kinematics",
    description: "Kinematics is the branch of physics that deals with the study of motion, focusing on the motion of objects and systems, without taking into account the forces that cause the motion. It involves understanding displacement, velocity, acceleration, and time.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  },
  {
    id: 2,
    title: "Laws of Motion",
    description: "Newton's Laws of Motion are fundamental principles that describe the relationship between the motion of an object and the forces acting upon it. The three laws of motion are crucial for understanding mechanics and form the foundation for classical mechanics.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  },
  {
    id: 3,
    title: "Work, Energy and Power",
    description: "This topic covers the concepts of work, energy transformation, and power. Work is the transfer of energy, energy is the capacity to do work, and power is the rate at which work is done or energy is transferred.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  },
  {
    id: 4,
    title: "Gravitation",
    description: "Gravitation is the study of the force of attraction that exists between all objects with mass. It also includes understanding the motion of bodies under the influence of gravity, such as free fall, orbits, and celestial mechanics.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  },
  {
    id: 5,
    title: "Thermodynamics",
    description: "Thermodynamics is the study of heat, work, and the transformations between them. It includes understanding the laws of thermodynamics that govern energy conservation, entropy, and temperature.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  },
  {
    id: 6,
    title: "Waves and Oscillations",
    description: "This topic introduces periodic motion and the properties of waves, such as frequency, amplitude, wavelength, and wave speed. It includes understanding phenomena like simple harmonic motion, sound waves, and electromagnetic waves.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  }
];

const chemistryMaterial = [
  {
    id: 1,
    title: "Atomic Structure",
    description: "Atomic structure refers to the arrangement of subatomic particles—protons, neutrons, and electrons—within an atom. The study of atomic structure is crucial for understanding chemical bonding, periodic properties, and quantum models.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  },
  {
    id: 2,
    title: "Chemical Bonding",
    description: "Chemical bonding is the force that holds atoms together in a compound. It includes covalent bonds, ionic bonds, and metallic bonds, as well as concepts such as bond polarity, molecular geometry, and hybridization.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  },
  {
    id: 3,
    title: "States of Matter",
    description: "This topic explores the four classical states of matter—solid, liquid, gas, and plasma—and the forces that govern their behaviors. It covers intermolecular forces, phase transitions, and the kinetic molecular theory of gases.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  },
  {
    id: 4,
    title: "Thermodynamics",
    description: "In chemistry, thermodynamics focuses on the energy changes during chemical reactions. It involves the laws of thermodynamics, enthalpy changes, spontaneity of reactions, and concepts like Gibbs free energy.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  },
  {
    id: 5,
    title: "Equilibrium",
    description: "Chemical equilibrium occurs when the rate of the forward reaction equals the rate of the reverse reaction. The concept of equilibrium is central to understanding the behavior of reversible reactions and Le Chatelier’s principle, which predicts how systems respond to changes in conditions.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  },
  {
    id: 6,
    title: "Organic Chemistry Basics",
    description: "Organic chemistry is the study of carbon-containing compounds and their structures, reactions, and properties. This topic covers the basics of hydrocarbons, functional groups, and isomerism, forming the foundation for more complex organic reactions.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  }
];

const mathematicsMaterial = [
  {
    id: 1,
    title: "Algebra",
    description: "Algebra is the branch of mathematics that deals with expressions, equations, and the study of mathematical structures. It includes topics like polynomials, rational expressions, and solving linear and quadratic equations.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  },
  {
    id: 2,
    title: "Trigonometry",
    description: "Trigonometry is the study of the relationships between the angles and sides of triangles. It includes the understanding of trigonometric ratios, identities, and the applications of sine, cosine, and tangent functions in real-world problems.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  },
  {
    id: 3,
    title: "Coordinate Geometry",
    description: "Coordinate geometry, also known as analytic geometry, studies the geometry of points, lines, and shapes using a coordinate system. It involves concepts like graphing equations, distance formula, and section formula.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  },
  {
    id: 4,
    title: "Calculus",
    description: "Calculus is the branch of mathematics that deals with rates of change and accumulation. It includes understanding limits, derivatives, and integrals, and their applications in real-world problems such as motion, optimization, and area calculations.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  },
  {
    id: 5,
    title: "Probability and Statistics",
    description: "Probability and statistics are fields that deal with analyzing random events and data. Probability theory includes understanding the likelihood of events, while statistics focuses on data collection, analysis, and interpretation.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  },
  {
    id: 6,
    title: "Vectors and Matrices",
    description: "Vectors and matrices are mathematical tools used to represent and solve problems involving multiple variables. Topics include vector operations, matrix multiplication, and their applications in geometry and systems of equations.",
    fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
  }
];


const materialData = {
  "Physics": physicsMaterial,
  "Chemistry": chemistryMaterial,
  "Mathematics": mathematicsMaterial,
}


const Compbooks = () => {
  return (
    <>
      <MetaTitle title='Comprehensive Notes' />
      <Header />
      <Hero />
      <DownloadContainer contentName="Comprehensive Notes" materialData={materialData} />
      <HowTo name="Notes" title="How to Use Notes" description="Lorem ipsum dolor sit amet consectetur. Id pellentesque a facilisis laoreet pellentesque netus. Ut facilisi purus ullamcorper faucibus neque cursus lectus." treeData={comprehensiveData} />
    </>
  )
}

export default Compbooks
