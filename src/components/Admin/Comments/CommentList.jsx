import React, { useEffect, useState } from 'react';
import { CommentListItem } from './CommentListItem';
import { useLocation } from 'react-router-dom';
import useGetData from '../../../core/hooks/useGetData';


const CommentList = () => {
    const location = useLocation();
    const { id, name } = location.state || {};
    
    const [commentData, setCommentData] = useState([]);

    const commentFetchUrl = id ? `blog/${id}/comment` : 'blog/comments/'

    // Fetch comments from API
    const { data: commentDataApi } = useGetData({
      url: commentFetchUrl,
      key: ['blogComments', id, commentFetchUrl],
      params: {},
      staleTime: 0,
      gcTime: 0,
     // Ensure API is called only when id exists
    });

    useEffect(() => {
        if (commentDataApi) {
            setCommentData(commentDataApi);
        }
    }, [commentDataApi]);

  return (
    <div className='rounded-xl my-7 py-5 bg-white h-[100%]'>
        {/* Blog Title */}
        <h3 className="font-light text-[10px] px-6 text-[#8392AB]">{id? `# ${id}`: ""}</h3>
        <h6 className='text-[#344767] px-6 font-bold '>{name? name: "All Blog Comments"}</h6> 

        <div className='flex justify-between pt-2'>
            <div className='w-[100%]'>
                {/* Table Headers */}
                <div className='row px-4 flex py-4 space-x-2 text-[13px] font-bold'>
                    <div className='text-xs w-[5%] text-[#A8B2C4] flex justify-start pl-2 items-center'>Sr. No</div>
                    <div className='text-xs w-[5%] text-[#A8B2C4] flex justify-center items-center'>ID</div>
                    <div className='text-xs w-[5%] text-[#A8B2C4] flex justify-center items-center'>Blog ID</div>
                    <div className='text-xs w-[15%] text-[#A8B2C4] flex justify-start'>Name</div>
                    <div className='text-xs w-[27%] text-[#A8B2C4] flex justify-start'>User Comment</div>
                    <div className='text-xs w-[20%] text-[#A8B2C4] flex justify-start  items-center'>Admin Comment</div>
                    <div className='text-xs w-[10%] text-[#A8B2C4] flex justify-center'>Status</div>
                    <div className='text-xs w-[5%] text-[#A8B2C4] flex justify-center'>Action</div>
                </div>

                {/* Comments List */}
                <div>
                    {commentData.length > 0 ? (
                        commentData.map((comment, index) => (
                            <CommentListItem
                                key={index}
                                serialNo={index + 1} 
                                blogId = {comment.post_id}
                                role={'User'}
                                department={'General'}
                                status={comment.is_active ? 'Active' : 'Inactive'}
                                id={comment.id}
                                userName={comment.username}
                                userComment={comment.content}
                                adminComment={''} // Admin comment empty for now
                            />
                        ))
                    ) : (
                        <div className="text-center text-gray-500 py-6 font-semibold">
                            No Comment to Show
                        </div>
                    )}
                </div>
            </div>
        </div>      
    </div>
  );
}

export default CommentList;
