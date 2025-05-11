import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaLinkedin, FaFacebook, FaHeart } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineComment } from 'react-icons/ai';
import { stripHtml } from '../../../core/formaters/index';
import MentorImageCard from './MentorImageCard';
import AvatarName from '../../../core/avatarGroup/AvatarName';
import { useNavigate } from 'react-router-dom';
import api from '../../../api';
import { IoLogoWhatsapp } from "react-icons/io";
import { TbCopy, TbCopyCheckFilled } from 'react-icons/tb';
import MetaTitle from '../../../core/components/Metatitle/MetaTitle';
import useNotification from '../../../core/components/Notification/useNotifiaction';

const socialPlatforms = [
  {
    name: 'linkedin',
    icon: <FaLinkedin />,
    getShareUrl: (url) => `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`
  },
  {
    name: 'instagram',
    icon: <RiInstagramFill />,
    getShareUrl: () => 'https://www.instagram.com/' // Instagram doesn't allow direct sharing via URL
  },
  {
    name: 'facebook',
    icon: <FaFacebook />,
    getShareUrl: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  },
  {
    name: 'twitter',
    icon: <FaXTwitter />,
    getShareUrl: (url) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`
  },
  {
    name: 'whatsapp',
    icon: <IoLogoWhatsapp />,
    getShareUrl: (url) => `https://wa.me/?text=${encodeURIComponent(url)}`
  }
];

const splitContentIntoParagraphs = (content) => {
  return content.split(/\n\s*\n/);
};

const BlogFullContent = ({ blog, commentCount, token, handleOpenLoginModal }) => {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const content = stripHtml(blog.content);
  const paragraphs = splitContentIntoParagraphs(content);

  const toastNotification = useNotification();

  const handleShare = (platform) => {
    const url = window.location.href;
    const shareUrl = platform.getShareUrl(url);
    window.open(shareUrl, '_blank');
  };

  const handleCopyLink = () => {
    const url = window.location.href;

    navigator.clipboard.writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy URL: ', err);
      });
  };

  const handleLikeBlog = async (id) => {
    console.log(id)
    if (!token) {
      handleOpenLoginModal(location.pathname);
      return;
    }
    try {
      const url = liked ? `/blog/posts/${id}/dislike` : `/blog/posts/${id}/like`;
      await api.post(url);
      setLiked(!liked);
      blog.like = liked ? (blog.like || 0) - 1 : (blog.like || 0) + 1;
      toastNotification('You liked the blog!', 'success', 5000);

      // Update the cached version in localStorage
      const blogId = blog.id;
      const cachedBlogData = localStorage.getItem(`blog_${blogId}`);

      if (cachedBlogData) {
        const parsedData = JSON.parse(cachedBlogData);
        parsedData.data.like = blog.like;
        localStorage.setItem(`blog_${blogId}`, JSON.stringify(parsedData));
      }

    } catch (error) {
      console.error(`Error ${liked ? "disliking" : "liking"} blog:`, error.response ? error.response.data : error.message);
    }
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };


  return (
    <div className="p-6 max-w-screen-lg mx-auto">
      <MetaTitle title={blog.title} metaTitle={blog.meta_title} keywords={blog.meta_keywords} description={blog.meta_description} imageUrl={blog.title_image} publishedTime={blog.created_at} author={blog.author} url={window.location.href} />
      <p className="text-gray-500 text-lg text-start">Published on {formatDate(blog.created_at)}</p>
      <h1 className="text-3xl font-semibold text-gray-800 py-2 text-start">{blog.title}</h1>
      <div className="flex flex-col sm:flex-row items-center mt-4">
        <AvatarName authorName={blog.author} />
        <div className="ml-0 sm:ml-3 mt-3 sm:mt-0 text-center sm:text-left">
          <p className="text-gray-800 font-medium">{blog.author}</p>
          <p className="text-gray-500 text-sm">@{blog.author}</p>
        </div>
      </div>
      <div className="w-full mt-6 overflow-hidden rounded-lg">
        <img
          src={blog.title_image}
          alt={blog.image_alt_text}
          className="w-full object-cover rounded-lg"
          style={{ maxHeight: "400px" }}
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaHeart
              className={`text-2xl cursor-pointer ${liked ? "text-red-500" : "text-gray-600"}`}
              onClick={() => handleLikeBlog(blog.id)}
            />
            <p className="text-sm">{blog.like || 0}</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => document.getElementById("comment")?.scrollIntoView({ behavior: "smooth" })}>
            <AiOutlineComment className="text-2xl text-gray-600" />
            <p className="text-sm">{commentCount || 0}</p>
          </div>
        </div>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <button onClick={handleCopyLink} className="hover:opacity-80 text-2xl text-black hover:text-[#4E18CD]">
            {copied ? <TbCopyCheckFilled /> : <TbCopy />
            }
          </button>
          {socialPlatforms.map((platform, index) => (
            <button
              key={index}
              onClick={() => handleShare(platform)}
              className="text-2xl text-black hover:opacity-80 hover:text-[#4E18CD]"
            >
              {platform.icon}
            </button>
          ))}
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-purple-600 mt-8 text-center sm:text-left">Full Blog Description</h2>
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <MentorImageCard bgColor={"#BA16FF"} navigateToLink={"/iit-jee-mentorship"} name={"Need Mentorship?"} description={"Discover your path: Elevate your studies with Personalized Mentorship. Let's achieve your academic goals together."} />
        <MentorImageCard bgColor={"#000000"} navigateToLink={"//edictor"} name={"College Predictor"} description={"Unlock you future: Use our college predictor to find the best fit for your dreams."} />
      </div>
    </div>
  );
};

BlogFullContent.propTypes = {
  blog: PropTypes.shape({
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    author: PropTypes.string.isRequired,
    title_image: PropTypes.string.isRequired,
    image_alt_text: PropTypes.string.isRequired,
    like: PropTypes.number,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogFullContent;
