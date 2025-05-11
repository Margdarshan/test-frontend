import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdOutlineRefresh } from "react-icons/md";

const NewPredictoButton = () => {
  const navigate = useNavigate()
  return (
    <div><button onClick={() => navigate('/frontend/collegepredictor')} className='flex bg-[#DDDDDD] p-2 rounded-md items-center'><MdOutlineRefresh className='mr-1 font-[16px]' /> New Predict</button></div>
  )
}

export default NewPredictoButton