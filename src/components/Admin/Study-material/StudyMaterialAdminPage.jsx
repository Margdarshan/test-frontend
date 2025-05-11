import React from 'react'
import { FaGear } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import StudyMaterialList from './StudyMaterialList';
import { useNavigate } from 'react-router-dom';
import MetaTitle from '../../../core/components/Metatitle/MetaTitle';

const StudyMaterialAdminPage = () => {
    const fieldToCategories = {
        "JEE": ["Previous Year Paper", "NCERT Books", "Notes"],
        "NEET": ["Previous Year Paper", "NCERT Books", "Notes"]
    };

    const navigate = useNavigate();

    const handleFieldClick = (field) => {
        const categories = fieldToCategories[field] || [];
        navigate('/frontend/admin/study-material/categories', { state: { categories, field } });
    };

    return (
        <div>
            <MetaTitle title={"Study Material Admin"} />
            <div className="cards w-full flex space-x-5">
                <div className="group w-full cursor-pointer" onClick={() => handleFieldClick("JEE")}>
                    <div className="jee flex bg-white w-full rounded-xl p-5 space-x-4 group-hover:bg-[#17C1E8]">
                        <div className="icon text-[#3A416F] group-hover:text-white">
                            <FaGear size={72} />
                        </div>
                        <div className="text">
                            <h2 className="text-[#3A416F] text-3xl font-semibold group-hover:text-white">
                                JEE
                            </h2>
                            <p className="text-sm text-[#67748e] group-hover:text-white">
                                Edit JEE Study Material
                            </p>
                        </div>
                    </div>
                </div>
                <div className="group w-full cursor-pointer">
                    <div className="neet flex bg-white w-full rounded-xl p-5 space-x-4 group-hover:bg-[#17C1E8]">
                        <div className="icon text-[#3A416F] group-hover:text-white">
                            <FaUserDoctor size={72} />
                        </div>
                        <div className="text">
                            <h2 className="text-[#3A416F] text-3xl font-semibold group-hover:text-white">
                                NEET
                            </h2>
                            <p className="text-sm text-[#67748e] group-hover:text-white">
                                Edit NEET Study Material
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <StudyMaterialList />
        </div>
    )
}

export default StudyMaterialAdminPage