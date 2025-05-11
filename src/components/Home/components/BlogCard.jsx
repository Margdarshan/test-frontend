import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';



const BlogCard = ({ blog, imageSrc, title, description }) => {
  const navigate = useNavigate();
  const createSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  const handleBlogClick = (blog) => {
    const slug = createSlug(blog.title);
    window.scrollTo(0, 0); // Scroll to top when page changes
    navigate(`/frontend/blog/${slug}/${blog.id}`);
  };


  return (
    <div className="bg-white px-4 py-4 rounded-xl">
      <div className="image-part w-[100%] mb-3">
        <img className="rounded-xl h-[250px]" src={imageSrc} alt="" />
      </div>
      <div className="text-part">
        <div className="title text-[18px] h-[80px] font-semibold mb-2 text-[#4E18CD]">
          {title.length > 70 ? title.slice(0, 70) + "..." : title}
        </div>
        <div className="description text-sm text-[#525252] mb-10 h-[80px]">
          {description.length > 80 ? description.slice(0, 80) + "..." : description}
        </div>
        <div className="button flex justify-center">
          <button onClick={() => handleBlogClick(blog)} className="flex px-2 py-2 justify-center rounded-lg bg-[#4E18CD] w-full text-center font-semibold  text-white">
            Full Story{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  blog: PropTypes.any
};
export default BlogCard;
