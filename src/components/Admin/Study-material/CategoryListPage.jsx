import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaFolder } from "react-icons/fa6";
import { BsPlusCircleFill } from "react-icons/bs";
import { IoIosArrowForward } from 'react-icons/io';
import MetaTitle from '../../../core/components/Metatitle/MetaTitle';

const categoryToSubcategories = {
    "Previous Year Paper": [
        "JEE Mains",
        "JEE Advance",
    ],
    "NCERT Books": [
        "Class 11",
        "Class 12"
    ],
    "Notes": [
        "Physics",
        "Chemistry",
        "Maths"
    ]
};


const CategoryListPage = () => {
    const location = useLocation();
    const categories = location.state?.categories || [];
    const field = location.state?.field || "";

    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        const subcategories = categoryToSubcategories[category] || [];
        navigate('/frontend/admin/study-material/categories/subcategories', { state: { subcategories, category, field } });
    };

    return (
        <div>
            <MetaTitle title='Study Material' />
            <div className='p-5 bg-white rounded-2xl'>
                <div className="flex justify-between ">
                    <div className='text-[#344767]  flex space-x-2'>
                        <div className="cursor-pointer text-[#748098]  " onClick={() => navigate(-1)}>Study Material</div>
                        <div className="pt-1"><IoIosArrowForward /></div>
                        <div className="font-bold">
                            {field}
                        </div>
                    </div>
                    <div className='text-[#344767] hover:text-[#17C1E8] cursor-pointer'>
                        <BsPlusCircleFill size={26} />
                    </div>
                </div>
                <div className="flex  flex-wrap gap-4 mt-5">
                    {categories.map((category, index) => (
                        <div key={index} onClick={() => handleCategoryClick(category)} className="group flex items-center space-x-4 justify-between bg-[#edf6fa] hover:bg-[#17C1E8] px-4 py-2.5 rounded-lg cursor-pointer">
                            <div className='text-[#3A416F] group-hover:text-white'><FaFolder /></div>
                            <h2 className="text-sm font-semibold text-[#344767] group-hover:text-white">{category}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryListPage