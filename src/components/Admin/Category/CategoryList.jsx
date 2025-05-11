import React from 'react'
import CommentData from '../../../data/tables/CommentData';
import { CategoryListItem } from './CategoryListItem';



const CategoryList = () => {
  return (
    <div className='rounded-xl my-7 py-5 bg-white h-[100%]'>
        <h6 className='text-[#344767] px-6 font-bold '>Blog Category List</h6> 
        <div className='flex justify-between pt-2'>
            <div className='w-[100%]'>
                <div className='row px-4 flex  py-4 space-x-2 text-[13px] font-bold'>
                    <div className='text-xs w-[10%] text-[#A8B2C4] flex justify-start pl-2 items-center'>ID</div>
                    <div className='text-xs w-[70%] text-[#A8B2C4] flex justify-start'>Name</div>
                    <div className='text-xs w-[10%] text-[#A8B2C4] flex justify-center'>Status</div>
                    <div className='text-xs w-[10%] text-[#A8B2C4] flex justify-center'>Action</div>
                </div>
                <div>
                        {CommentData.map((author, index) => (
                            <CategoryListItem
                            key={index}
                            profileImage={author.profileImage}
                            name={author.name}
                            email={author.email}
                            role={author.role}
                            department={author.department}
                            status={author.status}
                            id={author.id}
                            userName={author.commentName}
                            userComment={author.userComment}
                            adminComment={author.adminComment}
                            />
                        ))}
                </div>
            </div>
        </div>      
    </div>
      
  )
}


export default CategoryList;