import React from 'react'
import { BsPlusCircleFill } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import StudyMaterialList from './StudyMaterialList';

const SubcategoryMaterialPage = () => {
  const location = useLocation();
  const { specificSubcategoryMaterial, subcategory, category, field } = location.state || {};
  const navigate = useNavigate();

  return (
    <div className='p-5 bg-white rounded-2xl'>
      <div className="flex justify-between ">                    
          <div className='text-[#344767] flex space-x-2'>
              <div className="cursor-pointer text-[#748098] " onClick={()=>navigate(-3)}>Study Material</div>
              <div className="pt-1"><IoIosArrowForward/></div>
              <div className="cursor-pointer text-[#748098] " onClick={()=>navigate(-2)}>{field}</div>
              <div className="pt-1"><IoIosArrowForward/></div>
              <div className="cursor-pointer text-[#748098] " onClick={()=>navigate(-1)}>{category}</div>
              <div className="pt-1"><IoIosArrowForward/></div>
              <div className="font-bold ">{subcategory}</div>
          </div>
          <div className='text-[#344767] hover:text-[#17C1E8] cursor-pointer'>
              <BsPlusCircleFill size={26} />    
          </div>
      </div>
      <StudyMaterialList specificSubcategoryMaterial={specificSubcategoryMaterial} />
    </div>
  )
}

export default SubcategoryMaterialPage