import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='mx-5 lg:mx-12  border bg-gradient-to-r from-[#D6B3F5] via-[#B49BF9] to-[#D6B3F5] mt-12 rounded-lg'>
        <p className='text-center pb-4 font-manrope text-[35px] text-[#020D2B] font-semibold  px-12 py-[4px] pt-12' >
        Text Book       
        </p>
        <div className='text-center pb-10 px-8 flex justify-center items-center font-inter text-[15px] text-[#333] '>Boost your exam performance with our concise revision notes,  tailored to complement NCERT textbooks. Streamline your study  sessions with key concepts, formulas, visual aids, and practice  questions—plus space for your own annotations. Start now!</div>      
      </div>
    </div>
  )
}

export default Header
