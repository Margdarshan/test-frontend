import React, { useEffect, useState } from 'react';
import { BlogListItem } from './BlogListItem';
import Pagination from '../../Blogs/blog-component/Pagination'
import useGetData from '../../../core/hooks/useGetData';
import { IoMdRefreshCircle } from "react-icons/io";
import Loading from '../../../core/components/Loading/Loading';


const BlogList = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;
  const [totalPages, setTotalPages] = useState(0);

  const { data: paginationData } = useGetData({
    url: 'blog/posts/total-pages/',
    key: ['blogTotalPages'],
    params: { size: ITEMS_PER_PAGE },
    staleTime: 10000000,
    gcTime: 15000000,
  });

  useEffect(() => {
    if (paginationData) {
      setTotalPages(paginationData);
    }
  }, [paginationData]);
  const { data: blogs, error: blogsError, isLoading, refetch: refetchBlogsData } = useGetData({
    url: 'blog/posts/',
    key: ['blogs', currentPage],
    params: { page: currentPage, size: ITEMS_PER_PAGE },
    staleTime: 0,
    gcTime: 0
  });

  useEffect(() => {
    if (blogs) {
      setBlogData(blogs);
    }
    if (blogsError) {
      setError('Failed to fetch blogs');
    }
    setLoading(isLoading);
  }, [blogs, blogsError, isLoading]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setLoading(true);
      setCurrentPage(page);
      window.scrollTo({
        top: 600,
        left: 0,
        behavior: "smooth"
      });
    }
  };

  const refreshClick = () => {
    refetchBlogsData();
  }
  if (isLoading) return <Loading />

  return (
    <div className='rounded-xl my-7 py-5 bg-white h-[100%]'>
      <div className="flex justify-between px-6">
        <h6 className='text-[#344767]  font-bold'>List of All Blogs</h6>
        <button onClick={refreshClick} className='text-[#344767] transition-transform duration-500  hover:[transform:rotate(360deg)]'><IoMdRefreshCircle className='text-[32px]' /></button>
      </div>

      {loading ? (
        <p className="text-center text-gray-500 py-4">Loading blogs...</p>
      ) : error ? (
        <p className="text-center text-red-500 py-4">{error}</p>
      ) : (
        <div className='flex justify-between pt-2'>
          <div className='w-[100%]'>
            <div className='row px-4 flex py-4 space-x-2 text-[13px] font-bold'>
              <div className='text-xs w-[5%] text-[#A8B2C4] flex justify-start pl-2 items-start'>Sr. No</div>
              <div className='text-xs w-[10%] text-[#A8B2C4] flex justify-start pl-2 items-start'>Image</div>
              <div className='text-xs w-[55%] text-[#A8B2C4] flex flex-col items-start justify-start pl-2 '>
                <div className="">Blog Title</div>
                <div className='font-light text-[10px]'>#ID</div>
              </div>
              <div className='text-xs w-[10%] text-[#A8B2C4] flex justify-center items-start'>Status</div>
              <div className='text-xs w-[20%] text-[#A8B2C4] flex justify-center items-start'>Action</div>
            </div>

            <div>
              {blogData?.map((blog, index) => (
                <BlogListItem
                  key={index}
                  blog={blog}
                  blogImage={blog.title_image}
                  name={blog.title}
                  status={blog.is_active}
                  id={blog.id}
                  serialNo={(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                  refetchBlogsData={refetchBlogsData}
                  isLoading={isLoading}

                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center items-center mt-4 space-x-2">
        {blogData?.length > 0 && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default BlogList;