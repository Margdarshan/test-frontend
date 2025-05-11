import * as React from 'react';
import ball from './img/Ball.svg';

function Ball() {
  return (
    <section className="flex flex-col lg:flex-row gap-5 py-1 pr-5 lg:pr-32 pl-1 lg:pl-px mt-14 lg:mt-5 mr-5 lg:mr-40 ml-5 lg:ml-40 text-lg leading-7 bg-violet-100 lg:rounded-[82px] rounded-[15px] text-slate-900 text-opacity-80">
      <img
        loading="lazy"
        src={ball}
        alt="welcome"
        className="max-w-full aspect-square w-[80px] -mt-10 lg:my-auto m-auto lg:w-[115px]"
        style={{ alignSelf: 'flex-start' }}
      />
      <p className="flex-auto pb-5 m-auto text-xs lg:pb-0 lg:text-lg text-center ">
        Welcome to our tailored JEE mentorship program, designed to propel your
        exam success. Benefit from expert mentors, personalized guidance in exam
        strategy development, and flexible scheduling. Join us to unlock your
        potential and embark on this rewarding journey
      </p>
    </section>
  );
}

export default Ball;
