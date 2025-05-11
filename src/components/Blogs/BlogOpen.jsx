import React, { useState, useEffect } from 'react';
import mandy from './icons/mandy.png';
import image from './icons/image.png';
import blog4 from './icons/blog4.png';
import blog5 from './icons/blog5.png';
import blog10 from './icons/blog10.png';
import { Typography, Stack, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import BlogFullContent from './blog-component/BlogFullContent';
import BlogComment from './blog-component/BlogComment';
import Advertisement from './blog-component/Advertisement';
import MoreLikeBlogCard from './blog-component/MoreLikeBlogCard';
import NewsLetter from '../Home/NewsLetter';
import useGetListData from '../../core/hooks/useGetData';
import { IoPerson } from "react-icons/io5";
import useGetData from '../../core/hooks/useGetData';
import { FaCircleChevronDown } from "react-icons/fa6";
import usePostData from '../../core/hooks/usePostData';
import { getToken } from '../../utils/indexedDB';
import UserLogin from '../Login/UserLogin';
import useAuthStore from '../../store/authStore';
import useNotification from '../../core/components/Notification/useNotifiaction';



const CACHE_DURATION = 40 * 60 * 1000;
const BlogOpen = () => {
  const { id } = useParams();
  const { isAuthenticated, email:currentUserEmail } = useAuthStore()
  const [token, setToken] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [cachedBlog, setCachedBlog] = useState(null);
  const [cacheChecked, setCacheChecked] = useState(false);
  const [postingCommentLoading, setPostingCommentLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [comment, setComment] = useState("");
  const [commentData, setCommentData] = useState([]);
  const [visibleComments, setVisibleComments] = useState(4); // Initially show 5 comments

  const { addData: postComment } = usePostData(`/blog/${id}/comment`);
  const toastNotification = useNotification();

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken('authToken');
      setToken(token);
    };

    fetchToken();
  }, []);

  // Function to get blog data from localStorage
  const getCachedBlog = (blogId) => {
    const cachedData = localStorage.getItem(`blog_${blogId}`);
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      if (Date.now() - parsedData.timestamp < CACHE_DURATION) {
        return parsedData.data;
      } else {
        localStorage.removeItem(`blog_${blogId}`); // Remove expired data
      }
    }
    return null;
  };
  // Fetch blog data
  const { data: blog, loading, error } = useGetListData({
    url: `/blog/posts/${id}`,
    key: `blog_${id}`,
    retry: 3,
    staleTime: 600000,
    cacheTime: 900000,
    enabled: cacheChecked && !cachedBlog
  });

  // Fetch comments from API
  const { data: commentDataApi, refetch: refetchCommentsData } = useGetData({
    url: `blog/${id}/comment`,
    key: ['blogComments', id],
    params: {},
    staleTime: 10000000,
    gcTime: 15000000,
    enabled: !!id, // Ensure API is called only when id exists
  });

  useEffect(() => {
    if (commentDataApi) {
      setCommentData(commentDataApi);
    }
  }, [commentDataApi]);


  useEffect(() => {
    setCacheChecked(false);
    const cachedData = getCachedBlog(id);

    if (cachedData) {
      setCachedBlog(cachedData);
    } else if (blog) {
      setCachedBlog(blog);
      localStorage.setItem(
        `blog_${id}`,
        JSON.stringify({ data: blog, timestamp: Date.now() })
      );
    }
    setCacheChecked(true);
  }, [blog, id]);

  const loadMoreComments = () => {
    setVisibleComments((prev) => prev + 5); // Increase count by 5 on click
  };

  const handleCommentClick = async () => {
    setPostingCommentLoading(true);
    const commentToPost = {
      "post_id": Number(id),
      "user_id": "6",
      "username": currentUserEmail,
      "content": comment,
      "is_active": true
    };

    const response = await postComment(commentToPost);
    if (response) {
      setComment("");
      setIsFocused(false);
      toastNotification('Comment Posted successfully!', 'success', 5000);
      refetchCommentsData(); // Refetch comments after posting
    }
    else {
      console.error("Error posting comment");
    }
    setPostingCommentLoading(false);
  }

  const handleOpenLoginModal = (currentRoute) => {
    localStorage.setItem('currentRoute', currentRoute);
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };


  if (loading || !cachedBlog) {
    return (
      <Stack justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Stack>
    );
  }

  if (error) {
    return (
      <Typography variant="h3">Error Occurred: {error.message}</Typography>
    );
  }

  return (
    <div className="px-4 py-2">
      <div className="max-w-screen-xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 bg-white py-6 rounded-lg">
            <BlogFullContent blog={cachedBlog} commentCount={commentData.length || "0"} token={isAuthenticated} handleOpenLoginModal={handleOpenLoginModal} />
            {/* Review Section */}
            <div id='comment' className="p-10 bg-[#F3F3F3] mt-10 space-y-10 rounded-xl shadow-sm">
              <div className="header flex space-x-2">
                <div className=""><h2 className='text-2xl font-semibold '>Comments </h2></div>
                <div><span className='px-3 py-1  text-xs rounded-full bg-[#4E18CD] text-white'>{commentData.length || "0"}</span></div>
              </div>
              <div className="add-comment">
                <div className="flex space-x-3 w-full">
                  <div className="icon text-white p-2.5 bg-[#4E18CD] rounded-full">
                    <IoPerson size={24} />
                  </div>
                  <div className="input-div w-full">
                    <input
                      className="w-full h-8 px-3 py-5 text-sm bg-[#F3F3F3] border border-x-0 border-t-0 border-b-gray-300  focus:outline-none  focus:border-b-[#4E18CD]"
                      placeholder={isAuthenticated ? "Share your thoughts..." : "Please sign in to comment"}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      onFocus={() => {
                        if (!isAuthenticated) {
                          handleOpenLoginModal(location.pathname);
                          return;
                        }
                        setIsFocused(true)
                      }}
                      onBlur={() => !comment && setIsFocused(false)}
                    />
                  </div>
                </div>
                {(isFocused || comment) && (
                  <div className="flex justify-end space-x-2 mt-2">
                    <button className="px-4 py-2 text-xs font-semibold  text-[#4E18CD] " onClick={() => {
                      setComment("");
                      setIsFocused(false);
                    }}
                    >
                      Cancel
                    </button>
                    <button
                      className={`px-4 py-2 text-xs font-semibold border rounded-lg text-white ${comment ? "bg-[#4E18CD]" : "bg-gray-400 cursor-not-allowed"
                        }`}
                      disabled={!comment}
                      onClick={handleCommentClick}
                    >
                      {
                        postingCommentLoading ?
                          <>
                            <svg aria-hidden="true" className="w-3 h-3 mx-[26px] text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                          </>
                          :
                          "Comment"
                      }
                    </button>
                  </div>
                )}
              </div>
              <div className="all-comments relative">
                {commentData.length > 0 ? (
                  <>
                    {[...commentData].reverse().slice(0, visibleComments).map((commentItem, index) => (
                      <div key={index}>
                        <BlogComment
                          name={commentItem.username || "Anonymous"}
                          // username={commentItem.username || "@unknown"}
                          profilephoto={commentItem.profilephoto || mandy}
                          comment={commentItem.content || "No comment available"}
                        />
                        <hr className="my-4 border-gray-300" />
                      </div>
                    ))}

                    {visibleComments < commentData.length && (
                      <div className="relative">
                        <div className="flex justify-center items-end w-full  bg-gradient-to-b  from-white to-[#F3F3F3]  h-[70px] -mt-[70px] z-40 blur-lg"></div>
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                          <button onClick={loadMoreComments} className="mt-4 flex items-center  text-[#4E18CD] hover:underline">
                            <FaCircleChevronDown size={28} className="" />
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="text-gray-500">No comments available.</p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-4 lg:mt-56">More Blogs like this</h3>
              <MoreLikeBlogCard
                img={image}
                postDate={'January 4, 2025'}
                description={'UCEED 2025: Syllabus, Question Paper, Eligibility | Admission to IIT'}
              />
            </div>
            <Advertisement />

            <MoreLikeBlogCard
              img={blog4}
              postDate={'January 4, 2025'}
              description={'UCEED 2025: Syllabus, Question Paper, Eligibility | Admission to IIT'}
            />
            <Advertisement />

            <MoreLikeBlogCard
              img={blog5}
              postDate={'January 4, 2025'}
              description={'UCEED 2025: Syllabus, Question Paper, Eligibility | Admission to IIT'}
            />
            <Advertisement />

            <MoreLikeBlogCard
              img={blog10}
              postDate={'January 4, 2025'}
              description={'UCEED 2025: Syllabus, Question Paper, Eligibility | Admission to IIT'}
            />
            <Advertisement />

            <MoreLikeBlogCard
              img={blog10}
              postDate={'January 4, 2025'}
              description={'UCEED 2025: Syllabus, Question Paper, Eligibility | Admission to IIT'}
            />
          </div>
        </div>
      </div>

      <NewsLetter />
      {isLoginModalOpen && <UserLogin onClose={handleCloseLoginModal} />}
    </div>
  );
};

export default BlogOpen;
