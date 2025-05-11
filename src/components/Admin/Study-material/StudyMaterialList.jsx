import React, { useEffect, useState } from 'react';
import studyMaterial from '../../../data/Study-Material/studyMaterial';
import { StudyMaterialListItem } from './StudyMaterialListItem';

const StudyMaterialList = ({specificSubcategoryMaterial}) => {

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;
  const [totalPages, setTotalPages] = useState(0);
  const [allStudyMaterial, setAllStudyMaterial]= useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setAllStudyMaterial(studyMaterial);
    if(specificSubcategoryMaterial) {
      // If specificSubcategoryMaterial is provided, filter the study material
      const filteredMaterial = (studyMaterial||[]).filter(material =>
        (specificSubcategoryMaterial||[]).some(subcategoryMaterialItem => subcategoryMaterialItem === material.title)
      );
      setAllStudyMaterial(filteredMaterial);
    } 
  }, [])

  const filteredStudyMaterial = (allStudyMaterial ||[]).filter(material =>
    material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    material.subcategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
    material.category.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className='rounded-xl my-7 py-5 bg-white h-[100%]'>
        <div className="flex justify-between px-6">
            <h6 className='text-[#344767]  font-bold'>List of Material</h6>
            <input
              className='px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#3A416F]'
              type='text'
              placeholder='Search Material'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
      
        <div className='flex justify-between pt-2'>
            <div className='w-[100%]'>
            <div className='row px-4 flex py-4 space-x-2 text-[13px] font-bold'>
                <div className='text-xs w-[5%] text-[#A8B2C4] flex justify-start pl-2 items-center'>ID</div>
                <div className='text-xs w-[10%] text-[#A8B2C4] flex justify-start pl-2 items-center'>Field</div>
                <div className='text-xs w-[55%] text-[#A8B2C4] flex justify-start pl-2 items-center'>Title</div>
                <div className='text-xs w-[10%] text-[#A8B2C4] flex justify-center'>Status</div>
                <div className='text-xs w-[20%] text-[#A8B2C4] flex justify-center'>Action</div>
            </div>
            
            <div>
                {filteredStudyMaterial?.map((material, index) => (
                <StudyMaterialListItem
                    key={index}
                    id = {material.id}
                    field={material.field}
                    category={material.category}
                    subcategory={material.subcategory}
                    title={material.title}
                    status={material.status}
                />
                ))}
            </div>
            </div>
        </div>
      
        {/* <div className="flex justify-center items-center mt-4 space-x-2">
            {allStudyMaterial?.length > 0 && totalPages > 1 && (
                    <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
                )}
        </div> */}
    </div>
  );
};

export default StudyMaterialList;