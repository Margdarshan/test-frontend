import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const TakeMentorButton = () => {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate('/frontend/mentorship')} className=' flex bg-[#edebeb] text-[#4E18CD] p-2 gap-8 items-center rounded-lg'>Talk to a mentor <FaArrowRight /></button>
  )
}
const PromotionMentorship = () => {
  const list = ['Get clarity on college & branch preference',
    'Avoid costly mistakes with expert advice',
    'Build your future path, not just pick a sea']
  return (
    <div className='bg-[#7852FE] w-full md:flex grid justify-between rounded-md my-1  md:max-h-[300px]'>
      <div className='px-3 pt-3 pb-1 gap-5'>
        <h1 className='text-white text-xl font-semibold'>Margdarshan Mentorship Program</h1>
        <h6 className='text-[#e2e0e0] text-[17px] font-normal'>
          Don’t choose blindly. Our experts can help you decide wisely
        </h6>
        <div className='mb-3 hidden md:block'>
          <h2 className='text-[#e2e0e0] text-xl font-normal my-2'>Benefits</h2>
          <ul className='list-none space-y-1'>
            {list.map((item, indx) => (
              <li key={indx} className='flex items-center text-[#e2e0e0] ml-4 text-lg font-normal'>
                <span className="mr-2 text-xl">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className='pt-5 ml-1 md:ml-4 hidden md:block'>
          <TakeMentorButton />
        </div>
      </div>

      <div>
        <img className='h-72 md:max-h-[300px]' src="https://cdn.builder.io/api/v1/image/assets/TEMP/776d300cc619b808da4b4fa6aab36d4c1fac4cd7?placeholderIfAbsent=true&apiKey=9a32bc866e724018820ce764b81eba46" alt="image" />

      </div>
      <div className=' flex pt-5 pb-2 ml-1 md:ml-4 md:hidden justify-center'>
        <TakeMentorButton />
      </div>
    </div>
  )
}

export default PromotionMentorship