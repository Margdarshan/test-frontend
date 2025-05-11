/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Helmet } from 'react-helmet';
import comingsoon from './image.png';
// import { Link } from "react-router-dom";
import { Button, TextField } from '@mui/material';

const ComingSoon1 = () => {
  return (
    <div className="relative bg-[#F3F5FE] h-screen ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Comming Soon | Margdarshan</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <img
        src={comingsoon}
        alt="Coming Soon"
        className="w-full md:h-[95%] h-[80%] object-cover transform scaleX(1.5) blur-[4px]"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="md:text-8xl text-3xl whitespace-nowrap font-normal font-Manrope mb-8 text-center text-[#E7E7E7]">
          Coming Soon!
        </h1>
        <p className="text-xl md:mx-32  md:px-48 px-8 font-normal font-inter mb-6 text-center text-[#A8A8A8] sm:max-w-[80%]">
          Behind this veil lies the future's whisper, the unseen marvels waiting
          to dazzle. Stay Tuned!!
        </p>
        <div className="mt-4 md:-ml-14">
          <p className="text-xl md:mx-20 md:px-20 px-8 font-normal font-inter mb-6  text-start pb-4 text-[#A8A8A8] sm:max-w-[80%]">
            Get Notified When we Launch it
            <TextField
              placeholder="Enter Your Email"
              sx={{
                width: '100%',
                height: '100%',
                background: 'rgba(217, 217, 217, 0.20)',
                borderRadius: 1,
                backdropFilter: 'blur(26.90px)',
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#4E18CD',
                px: 5,
                ml: -17,
                py: 2,
                position: 'absolute',
              }}
            >
              Submit
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon1;
