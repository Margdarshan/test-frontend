import React from 'react';
import Card from './Card';

// Images for svg
import card1 from './img/card1.svg';
import card2 from './img/card2.svg';
import card3 from './img/card3.svg';
import card4 from './img/card4.svg';

export default function Cards() {
  return (
    <>
      <div className="text-center text-2xl my-8">Plans & Pricing</div>
      <div className="mt-8 lg:mx-12 lg:px-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        <Card
          title="Swift Analysis"
          price={1500}
          content="Hustle for that score! Crush JEE key concepts in 4 sessions. Leave the rest behind."
          icon={card1}
          color="bg-[#FAE5FF]"
          features={[
            {
              icon: 1,
              text: '1 Month Duration',
            },
            {
              icon: 1,
              text: '4 Sessions',
            },
            {
              icon: 1,
              text: '350 Add-On Cost',
            },
            {
              icon: 0,
              text: 'Saving 0%',
            },
          ]}
        />
        <Card
          title="Target JEE MAINS 2025"
          price={3600}
          content="Time to leave your mark. Sprint through JEE, master the core, watch
          the dust settle on victory."
          icon={card2}
          color="bg-[#E3D2FF]"
          features={[
            {
              icon: 1,
              text: 'Until April exams',
            },
            {
              icon: 1,
              text: '12 Sessions',
            },
            {
              icon: 1,
              text: '300 Add-On Cost',
            },
            {
              icon: 1,
              text: 'Saving 20%',
            },
          ]}
        />
        <Card
          title="Target Admission 2025"
          price={4750}
          content="Aim, Ace, Admit. Master the path to your dream college with 18 personalized sessions (27% off!)."
          icon={card3}
          color="bg-[#FFE3E7]"
          features={[
            {
              icon: 1,
              text: "Until Student's Admission",
            },
            {
              icon: 1,
              text: '18 Sessions',
            },
            {
              icon: 1,
              text: '300 Add-On Cost',
            },
            {
              icon: 1,
              text: 'Saving 27%',
            },
          ]}
        />
        <Card
          title="Enduring Assist"
          price={8100}
          content="Invest in your future, elevate your score. 36 sessions, 40% off, and one epic climb to JEE domination."
          icon={card4}
          color="bg-[#D7D0FF]"
          features={[
            {
              icon: 1,
              text: '12 Month Duration',
            },
            {
              icon: 1,
              text: '36 Sessions',
            },
            {
              icon: 1,
              text: '250 Add-On Cost',
            },
            {
              icon: 1,
              text: 'Saving 40%',
            },
          ]}
        />
      </div>
    </>
  );
}
