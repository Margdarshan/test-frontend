import * as React from 'react';
import Form from './Form';

function Hero() {
  return (
    <div className="justify-center  md:pb-5 pt-32 lg:pt-0 md:mt-4 px-5 lg:px-20 bg-[#F6F6F6] -mt-20 relative ">
      {/* SVG Background */}
      <div className="absolute bottom-6 left-0 w-full h-full z-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="262"
          height="535"
          viewBox="0 0 262 535"
          fill="none"
          className="absolute left-0 bottom-6"
        >
          <path
            d="M-228.442 338.726C-231.93 336.663 -233.673 335.631 -234.941 334.186C-236.062 332.908 -236.909 331.401 -237.425 329.763C-238.009 327.913 -238.005 325.845 -237.999 321.711L-237.61 87.5524C-237.603 83.4383 -237.6 81.3811 -237.015 79.5399C-236.498 77.9106 -235.653 76.4112 -234.536 75.1385C-233.274 73.7 -231.54 72.6718 -228.071 70.6154L-91.6777 -10.2428C-88.2064 -12.3006 -86.4703 -13.3295 -84.6252 -13.7324C-82.9931 -14.0889 -81.3059 -14.0892 -79.6728 -13.7332C-77.8277 -13.3309 -76.0916 -12.3025 -72.6203 -10.2458L252.454 182.331C255.937 184.394 257.679 185.426 258.945 186.872C260.065 188.15 260.911 189.656 261.427 191.292C262.009 193.141 262.006 195.206 261.999 199.338L261.61 433.52C261.604 437.63 261.6 439.685 261.017 441.524C260.5 443.151 259.657 444.65 258.542 445.922C257.282 447.36 255.551 448.389 252.089 450.447L116.18 531.23C112.709 533.293 110.974 534.325 109.128 534.73C107.496 535.088 105.808 535.09 104.174 534.735C102.328 534.334 100.591 533.307 97.1163 531.252L-228.442 338.726Z"
            fill="#1A6AFF"
          />
        </svg>
      </div>
      <div className="absolute top-56 lg:top-10 right-0 w-full h-full z-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="239"
          height="535"
          viewBox="0 0 239 535"
          fill="none"
          className="absolute right-0 top-20 lg:top-56"
        >
          <path
            d="M489.512 343.491C492.993 341.487 494.734 340.485 495.999 339.081C497.118 337.84 497.963 336.376 498.479 334.784C499.061 332.987 499.058 330.979 499.051 326.962L498.663 99.4896C498.656 95.4931 498.653 93.4946 498.07 91.7058C497.553 90.1232 496.71 88.6666 495.595 87.4302C494.336 86.0328 492.604 85.034 489.142 83.0363L353.012 4.48687C349.547 2.4878 347.815 1.48827 345.974 1.09685C344.344 0.750525 342.66 0.750266 341.03 1.09609C339.188 1.48694 337.457 2.48594 333.991 4.48394L9.54386 191.562C6.06706 193.566 4.32867 194.569 3.06531 195.973C1.9475 197.215 1.1038 198.678 0.589142 200.267C0.00746339 202.064 0.0108847 204.07 0.0177273 208.083L0.405598 435.579C0.412404 439.571 0.415806 441.568 0.99824 443.354C1.51358 444.935 2.35469 446.391 3.4673 447.626C4.72472 449.024 6.45243 450.023 9.90786 452.022L145.556 530.499C149.02 532.503 150.751 533.505 152.593 533.899C154.223 534.247 155.908 534.249 157.538 533.904C159.38 533.514 161.114 532.516 164.583 530.52L489.512 343.491Z"
            fill="#7751FF"
          />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="pt-4 lg:pt-32  flex justify-center">
          <p className="text-center text-[#020D2B] font-manrope text-[32px] w-[85%] md:w-[65%]">
            Book your{' '}
            <span className="text-[#4E18CD] font-semibold">Free Session</span>{' '}
            now and embark on your journey towards{' '}
            <span className="text-[#4E18CD] font-semibold">JEE success</span>
          </p>
        </div>
        <div className="hidden md:flex justify-center mt-4">
          <p className="text-center text-[#333] font-inter text-[15px] w-[55%]">
            Discover the benefits of personalized guidance, expert mentorship,
            and tailored exam strategies—all at no cost.
          </p>
        </div>

        <div className="z-50 ">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Hero;
