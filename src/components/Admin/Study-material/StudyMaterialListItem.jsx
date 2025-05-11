/* eslint-disable react/prop-types */
import React from "react";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { HiExternalLink } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";

export const StudyMaterialListItem = ({ id, field, category, subcategory, title, status}) => {
    
  return (
    <div className="row px-4 flex space-x-2 border-t ">
        <div className="col-4 w-[5%] flex items-center justify-center px-2">
            <div className="flex justify-center text-[12px]  text-[#8392AB] font-semibold">{id}</div>
        </div>
        <div className="col-4 w-[10%] flex items-center justify-start px-2">
            <div className="">
                {field}
            </div>
        </div>
        <div className="col-1 w-[55%] flex  items-center justify-start">
            <div className="flex flex-col pl-2">
                <p className="text-sm font-semibold text-[#344767]">{title}</p>
                <div className="flex space-x-0.5 text-[12px]  text-[#8E9CB3]">
                    <p>{category}</p>
                    <div className="pt-[3px]"><IoIosArrowForward/></div>
                    <p>{subcategory}</p>
                </div>
            </div>
        </div>

        <div className="col-3 w-[10%] flex justify-center py-4 text-[13px] font-semibold text-[#68758F]">
            <div className="flex items-center">            
                {
                    <button
                        onClick={() => {}}
                        className={`status-toggle-button text-[10px] font-bold rounded-md text-white px-2 py-[3px] ${
                        status
                            ? "bg-gradient-to-br from-[#8CE62E] to-[#1FB137]"
                            : "bg-gradient-to-br from-[#A3B3D3] to-[#697C9B]"
                        }`}
                    >
                        {status ? "ONLINE" : "OFFLINE"}
                    </button>
                  
                }
            </div>
        </div>
        <div className="col-5 w-[20%] flex justify-center">
              <div className="text-sm w-[100%] flex justify-center  items-center font-semibold text-[#8392AB] space-x-6 ">
                  <MdModeEdit onClick={() =>{}}  className="edit-button cursor-pointer text-[19px] text-[#3A416F]" />
                  <IoEyeSharp onClick={()=>{}} className="view-button cursor-pointer text-[19px] text-[#3A416F] hover:text-[#17C1E8]" />
                  <MdDelete onClick={() => {}} className="delete-button cursor-pointer text-[19px] text-[#3A416F]" />
            </div>
        </div>
    </div>
  );
};