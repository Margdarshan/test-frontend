import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomCardMedia = ({ blog, imageSrc, title, description }) => {
  const navigate = useNavigate();
  
  const createSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  
  const handleBlogClick = (blog) => {
    const slug = createSlug(blog.title);
    window.scrollTo(0, 0); // Scroll to top when page changes
    navigate(`/frontend/blog/${slug}/${blog.id}`);
  };

  return (
    <div>
      <div className="">
        <img 
          className="rounded-t-2xl  "
          src={imageSrc} 
          alt={title}
        />
      </div>
      <div className="flex-1 py-4 px-5">
        <h2 className="text-[#4E18CD] font-semibold font-[Manrope] text-lg  leading-6 my-1">
          {title.length > 70 ? title.slice(0, 70) + "..." : title}
        </h2>

        <p className="text-gray-800 font-[Inter] text-sm font-medium leading-5 my-2">
          {description.length > 80 ? description.slice(0, 80) + "..." : description}
        </p>

        <div className="flex justify-center mt-2">
          <button
            className="mt-2 text-gray-100 font-[Manrope] text-sm font-semibold w-full bg-[#4E18CD] py-2 px-4 rounded-lg"
            onClick={() => handleBlogClick(blog)}
          >
            Full Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomCardMedia;
