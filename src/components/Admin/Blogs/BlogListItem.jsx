/* eslint-disable react/prop-types */

import React from "react";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { HiExternalLink } from "react-icons/hi";
import { FaComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import useUpdateBlogStatus from "../Blog-editor/hooks/useUpdateBlogStatus";
import { ToastContainer } from "react-toastify";
import useNotification from "../../../core/components/Notification/useNotifiaction";


export const BlogListItem = ({ blog, blogImage, name, role, status, id, serialNo, refetchBlogsData, isLoading }) => {
  
    
    const navigate = useNavigate();
    const toastNotification = useNotification();
    const { updateStatus, loading } = useUpdateBlogStatus();
    const createSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

    const handleBlogClick = (blog) => {
        if (!blog || !blog.id || !blog.title) {
            console.error("Blog data is incomplete:", blog);
            return;
        }
        const slug = createSlug(blog.title);
        window.scrollTo(0, 0); // Scroll to top when page changes
        navigate(`/frontend/blog/${slug}/${blog.id}`);
    };

    const handleCommentBlog = (id,name) => {
        if (!id || !name) {
            console.error("Blog id not found", id);
            return;
        }

        window.scrollTo(0, 0); // Scroll to top when page changes
        navigate(`/frontend/admin/blog-comment`, { state: { id: id, name:name } });
    };

     // Add this function to handle edit button click
    const handleEditBlog = (blog) => {
        if (!blog || !blog.id) {
        console.error("Blog data is incomplete:", blog);
        return;
        }
        navigate('/frontend/admin/blog-edit', { state: { blog } });
    };

    const handleDeleteBlog = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this blog post?");
        if (!isConfirmed) return; // Exit if the user cancels
    
        try {
            const response = await api.delete(`/blog/posts/${id}`);
            toastNotification('Blog Deleted successfully!', 'success', 5000);
            refetchBlogsData();
        } catch (error) {
            console.error('Error deleting blog:', error.response ? error.response.data : error.message);
        }
    };

    // New function to handle status toggle
    const handleStatusToggle = async () => {
        try {
            // Define new status (opposite of current status)
            const newStatus = !status;
            
            // Call updateStatus hook with the blog ID and new status
            const result = await updateStatus(id, { status: newStatus });
            
            // If successful, reload the page to reflect changes
            if (result) {
                refetchBlogsData();
            }
        } catch (error) {
            console.error('Error updating blog status:', error);
        }
    };
    
  return (
    <div className="row px-4 flex space-x-2 border-t ">
        <div className="col-4 w-[5%] flex items-center justify-center px-2">
            <div className="flex justify-center text-[12px]  text-[#8392AB] font-semibold">{serialNo}</div>
        </div>
        <div className="col-4 w-[10%] flex items-center justify-start px-2">
            <div className="">
                <img className="w-[50px] h-[40px] rounded-lg " src={blogImage} alt='' />
            </div>
        </div>
        <div className="col-1 w-[55%] flex  items-center justify-start">
            <div className="flex flex-col pl-2">
                <p className="text-sm font-semibold text-[#344767]">{name}</p>
                <p className="text-[10px] font-light text-[#8392AB]"># {id}</p>
            </div>
        </div>

        <div className="col-3 w-[10%] flex justify-center py-4 text-[13px] font-semibold text-[#68758F]">
            <div className="flex items-center">            
                {
                    <button
                        onClick={handleStatusToggle}
                        disabled = {loading}
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
                  <MdModeEdit onClick={() => handleEditBlog(blog)}  className="edit-button cursor-pointer text-[19px] text-[#3A416F]" />
                  <HiExternalLink onClick={()=>handleBlogClick(blog)} className="redirect-button cursor-pointer text-[19px] text-[#3A416F] hover:text-[#17C1E8]" />
                  <MdDelete onClick={() => handleDeleteBlog(id)} className="delete-button cursor-pointer text-[19px] text-[#3A416F]" />
                  <FaComment  onClick={() => handleCommentBlog(id,name)} className="comment-button cursor-pointer text-[19px] text-[#3A416F]" />
                  
            </div>
        </div>
    </div>
  );
};
