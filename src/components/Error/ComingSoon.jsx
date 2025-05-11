/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className="relative bg-[#FFFEF8] h-screen  pt-20">
      <div className="main-content flex flex-col lg:flex-row lg:items-end lg:justify-between lg:space-x-5 px-5 lg:px-20">
        <div className="coming-soon w-full h-full flex items-start">
          <div className="content">
            <h1 className='font-semibold font-manrope text-[#4E18CD] text-3xl lg:text-6xl mb-1 lg:mb-2'>We are</h1>
            <h1 className='font-semibold font-manrope text-[#4E18CD] text-3xl lg:text-6xl mb-4 lg:mb-8'>Coming Soon.</h1>

            <div className="description mb-6">
              <p className='text-[#667085] text-xs lg:text-sm lg:w-[300px]'>
                Exciting things are on the way! Our new page is currently under construction, but we can't wait to share it with you. Stay tuned for updates and check back soon!
              </p>
            </div>
            <div className="buttons-part w-full">               
              <div className="buttons flex space-x-3 w-full">                 
                <Link 
                  to={"/frontend"}
                  className="cursor-pointer px-5 py-2  rounded-lg border border-[#D0D5DD] hover:border-[#7852FE]  text-[#344054] hover:text-[#7852FE] text-xs font-semibold"
                >
                  Go to Home
                </Link>                
                <Link 
                  to={"/frontend/collegepredictor"}
                  className="cursor-pointer px-5 py-2  rounded-lg border border-[#7852FE] bg-[#7852FE] text-white text-xs font-semibold"
                >
                  Check Our College Predictor
                </Link>                
              </div>             
            </div>   
          </div>
        </div>
        <div className="input-email mt-10 lg:mt-0 w-full h-full flex justify-start  lg:items-end lg:justify-end">
          <div className="content w-full">
            <div className='flex justify-start lg:justify-end '>
              <label className='lg:w-[65%]  text-sm font-bold '>Get notified when we launch</label>
            </div>
            <div className="flex mt-2 w-full justify-start lg:justify-end">
              <div className='w-full lg:w-[65%] flex items-center'>
                <input placeholder='Email' className='px-5 py-3 text-xs font-semibold w-full  rounded-l-full border border-[#D0D5DD] focus:outline-none focus:border focus:border-[#4E18CD]' type="email" />
                <button className='px-5 py-3  rounded-r-full border border-[#4E18CD] bg-[#4E18CD] text-white text-xs font-semibold'>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:absolute w-full bottom-6 lg:bottom-20 social-links flex  justify-center">
        <div className="all-icons w-full flex justify-center space-x-10 sm:space-x-6">
          <Link to={"https://www.facebook.com/margdarshan89/"}><FaFacebook className='hover:text-[#4E18CD]' size={24}/></Link>
          <Link to={"https://www.instagram.com/margdarshan89/"}><RiInstagramFill className='hover:text-[#4E18CD]' size={24}/></Link>
          <Link to={"https://x.com/home"}><FaXTwitter className='hover:text-[#4E18CD]' size={24}/></Link>
          <Link to={"https://www.linkedin.com/company/margdarshan89/posts/?feedView=all"}><FaLinkedin className='hover:text-[#4E18CD]' size={24}/></Link>
          <Link to={"https://www.youtube.com/channel/UC8ifrOm28TZgg_2TmCRvKEg"}><FaYoutube className='hover:text-[#4E18CD]' size={24}/></Link>          
        </div>
      </div>
      
    </div>
  );
};

export default ComingSoon;
