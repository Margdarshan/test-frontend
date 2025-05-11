/* eslint-disable react/prop-types */

import React from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";
import useUpdateBlogStatus from "../Blog-editor/hooks/useUpdateBlogStatus";
import useDeleteData from "../Blog-editor/hooks/useDeleteData";


export const CommentListItem = ({ serialNo, blogId, id, userName, userComment, adminComment, status }) => {
    const { updateStatus } = useUpdateBlogStatus();
    const {deleteData :  deleteComment } = useDeleteData(`/blog/comments/${id}`); // Import your delete hook


    const handleStatusToggle = async () => {
        try {
            const newStatus = !status;
            
            const result = await updateStatus(id, { status: newStatus }, `/blog/comment/${blogId}/status/?comment_id=${id}`);
            
            if (result) {
                setTimeout(() => {
                    window.location.reload();
                }, 100);
            }
        } catch (error) {
            console.error('Error updating blog status:', error);
        }
    };


    const handleDeleteBlog = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this Comment post?");
        if (!isConfirmed) return; // Exit if the user cancels
    
        try {
            const result = await deleteComment();
    
            if (result) {
                setTimeout(() => {
                    window.location.reload();
                }, 100);
            }
        } catch (error) {
            console.error('Error deleting blog:', error.response ? error.response.data : error.message);
        }
    };
    


  return (
    <div className="row px-4 flex space-x-2 border-t ">
      {/* Serial Number */}
      <div className="col-4 w-[5%] flex items-center justify-start px-2 pl-2">
        <div className="flex justify-start text-[12px] text-[#8392AB] font-semibold">{serialNo}</div>
      </div>

      {/* Comment ID */}
      <div className="col-4 w-[5%] flex items-center justify-center px-2 ">
        <div className="flex justify-center text-[12px] text-[#8392AB] font-semibold">{id}</div>
      </div>

      {/* Blog ID */}
      <div className="col-4 w-[5%] flex items-center justify-center px-2 ">
        <div className="flex justify-center text-[12px] text-[#8392AB] font-semibold">{blogId}</div>
      </div>

      {/* Username */}
      <div className="col-1 w-[15%] flex space-x-4 items-center justify-start">
        <div className="flex flex-col">
        <div className="flex justify-start text-[12px] text-[#8392AB] font-semibold">{userName}</div>
        </div>
      </div>

      {/* User Comment */}
      <div className="col-2 w-[27%] pr-[3px] py-4">
        <div className="flex flex-col text-[12px]">
          <div className="role font-semibold text-[#707C95]">{userComment}</div>
        </div>
      </div>

      {/* Admin Comment (Empty for now) */}
      <div className="col-2 w-[20%] pr-[3px] py-4">
        <div className="flex flex-col text-[12px]">
          <div className="role font-semibold text-[#707C95]">{adminComment || "—"}</div>
        </div>
      </div>

      {/* Status - Active/Inactive */}
      <div className="col-3 w-[10%] flex justify-center py-4 text-[13px] font-semibold text-[#68758F]">
        <div className="flex items-center">            
        {
                    <button
                        onClick={handleStatusToggle}
                        className={`status-toggle-button text-[10px] font-bold rounded-md text-white px-2 py-[3px] ${
                        status === "Active"
                            ? "bg-gradient-to-br from-[#8CE62E] to-[#1FB137]"
                            : "bg-gradient-to-br from-[#A3B3D3] to-[#697C9B]"
                        }`}
                    >
                        {status == 'Active' ? "ONLINE" : "OFFLINE"}
                    </button>
                  
                }
        </div>
      </div>

      {/* Edit & Delete Icons */}
      <div className="col-5 w-[5%] flex justify-center items-center space-x-4">
        <MdModeEdit className="edit-button cursor-pointer text-[19px] text-[#3A416F]" />
        <MdDelete  onClick={() => handleDeleteBlog(id)}className="delete-button cursor-pointer text-[19px] text-[#3A416F]" />
      </div>
    </div>
  );
};
