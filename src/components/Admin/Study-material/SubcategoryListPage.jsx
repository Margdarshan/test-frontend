import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaFolder } from "react-icons/fa6";
import { BsPlusCircleFill } from "react-icons/bs";
import { IoIosArrowForward } from 'react-icons/io';



const SubcategoryPage = () => {

    const subcategorytoTitle = {
        // JEE - Previous Year Paper
        "JEE Mains": ["Feb 2025 Shift", "Jan 2024 Shift"],
        "JEE Advance": ["May 2025 Shift", "May 2024 Shift"],
      
        // JEE - NCERT Books
        "Class 11": ["NCERT Physics Book Class 11", "NCERT Maths Book Class 11", "NCERT Chemistry Book Class 11"],
        "Class 12": ["NCERT Physics Book Class 12", "NCERT Maths Book Class 12", "NCERT Chemistry Book Class 12"],
    
      
        // JEE - Notes
        "Physics": [
          "Electromagnetic Induction Notes",
          "Rotational Motion Notes",
          "Optics Notes"
        ],

        "Chemistry": [
          "Organic Chemistry Notes",
          "Rare Earth Metals",
          "Nobel Gases"
        ],

        "Maths": [
          "Linear Algebra Notes",
          "Calculus Notes",
          "Trigonometry Notes"
        ]
    };
      

    const location = useLocation();
    const subcategories = location.state?.subcategories || [];
    const category = location.state?.category || "";
    const field = location.state?.field || "";
    const navigate = useNavigate();

    const handleSubcategoryClick = (subcategory) => {
        const specificSubcategoryMaterial = subcategorytoTitle[subcategory] || [];
        navigate('/frontend/admin/study-material/categories/subcategories/material', { state: { specificSubcategoryMaterial, subcategory, category, field } });
    };

    return (
        <div>
            <div className='p-5 bg-white rounded-2xl'>
                <div className="flex justify-between ">                    
                    <div className='text-[#344767] flex space-x-2'>
                        <div className="cursor-pointer text-[#748098] " onClick={()=>navigate(-2)}>Study Material</div>
                        <div className="pt-1"><IoIosArrowForward/></div>
                        <div className="cursor-pointer text-[#748098] " onClick={()=>navigate(-1)}>{field}</div>
                        <div className="pt-1"><IoIosArrowForward/></div>
                        <div className="font-bold ">
                            {category}
                        </div>
                    </div>
                    <div className='text-[#344767] hover:text-[#17C1E8] cursor-pointer'>
                        <BsPlusCircleFill size={26} />    
                    </div>
                </div>
                <div className="flex  flex-wrap gap-4 mt-5">
                    {subcategories.map((subcategory, index) => (
                        <div onClick={()=> handleSubcategoryClick(subcategory)} key={index} className="group flex items-center space-x-4 justify-between bg-[#edf6fa] hover:bg-[#17C1E8] px-4 py-2.5 rounded-lg cursor-pointer">
                            <div className='text-[#3A416F] group-hover:text-white'><FaFolder /></div>
                            <h2 className="text-sm font-semibold text-[#344767] group-hover:text-white">{subcategory}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SubcategoryPage