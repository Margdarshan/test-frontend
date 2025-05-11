import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery, useTheme, Grid, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BlogTitle from './blog-component/BlogTitle';
import BlogTag from './blog-component/BlogTag';
import useGetData from '../../core/hooks/useGetData';
import { GridContainer, GridItem } from '../../core/components/Grid/MyGrid';
import MySkeleton from '../../core/components/Skelaton/MySkelaton';
import { useNavigate } from 'react-router-dom';
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";


const BlogCard = () => {
  const ITEMS_PER_PAGE = 6; // Number of blogs per page
  const CACHE_EXPIRY = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
  const [isLoadingCache, setIsLoadingCache] = useState(true);
  const [cacheChecked, setCacheChecked] = useState(false);
  const [topStories, setTopStories] = useState([]);
  const navigate = useNavigate();

  // Function to check and retrieve cached data
  const getCachedData = () => {
    const cacheKey = `cachedTopStoriesData`;
    console.log("Getting cached data for top stories");
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      console.log(`Cache found for top stories`);
      const { data, timestamp } = JSON.parse(cachedData);
      const now = new Date().getTime();

      // Check if cache is still valid (less than 2 hours old)
      if (now - timestamp < CACHE_EXPIRY) {
        console.log(`Cache still valid for top stories`);
        return data;
      } else {
        // Cache expired, remove it
        console.log(`Cache expired for top stories`);
        localStorage.removeItem(cacheKey);
      }
    }
    return null;
  };

  // Function to save data to cache
  const setCacheData = (data) => {
    const cacheKey = `cachedTopStoriesData`;
    const cacheData = {
      data,
      timestamp: new Date().getTime(),
    };
    console.log('setting cache for top stories');
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
    console.log('Cache set for top stories');
  };

  useEffect(() => {
    setIsLoadingCache(true);
    setCacheChecked(false);
    const cachedData = getCachedData();
    if (cachedData) {
      setTopStories(cachedData);
    }
    else {
      console.log("Cache not found for top stories");
    }

    setIsLoadingCache(false);
    setCacheChecked(true);
  }, []);

  // Only fetch from API if no cache is available
  const { data: blogs, error, isLoading } = useGetData({
    url: 'blog/posts/',
    key: ['blogs', 1],
    params: { page: 1, size: ITEMS_PER_PAGE },
    staleTime: 10000000,
    gcTime: 15000000,
    enabled: cacheChecked && !topStories.length,
  });

  // Save API response to cache when new data arrives
  useEffect(() => {
    if (blogs) {
      setCacheData(blogs);
      setTopStories(blogs);
      console.log(`Top stories data saved to cache`);
      console.log(`Top stories data:`, blogs);
    }
  }, [blogs]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topStories?.length);
    }, 30000);
    return () => clearInterval(interval);
  }, [topStories?.length]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + topStories?.length) % topStories?.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % topStories?.length);
  };

  const createSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  const handleBlogClick = (blog) => {
    const slug = createSlug(blog.title);
    window.scrollTo(0, 0); // Scroll to top when page changes
    navigate(`/frontend/blog/${slug}/${blog.id}`);
  };

  // Determine when arrows should be disabled
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = isSmallScreen 
    ? currentIndex === (topStories?.length - 1) 
    : currentIndex >= (topStories?.length - 2);

  const renderPosts = () => {
    if (isSmallScreen) {
      return (
        <div 
          className="flex w-[100%] px-2  transform transition-transform duration-500 ease-in-out"
        >
          {topStories?.map((story, index) => (
            <div
              key={index}
              className={`relative w-full rounded-2xl  cursor-pointer ${
                index === currentIndex ? ' block' : ' hidden' 
              }`}
              onClick={() => handleBlogClick(story)}
            >
              <img
                src={story.title_image}
                alt={story.title}
                className="w-full h-[250px]  rounded-t-2xl"
              />
              <div className='px-3 pt-3 pb-6 border rounded-b-2xl'>
                <h6 className=" font-semibold  font-inter">
                  {story.title}
                </h6>
                <p className="text-[#737373] text-xs font-inter mt-2">
                  {story.meta_description.length > 80 ? story.meta_description.slice(0, 80) + "..." : story.meta_description}
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topStories?.map((story, index) => (
          <div
            key={index}
            className={`${
              index < currentIndex || index >= currentIndex + 2 ? 'hidden' : 'block'
            } cursor-pointer`}
            onClick={() => handleBlogClick(story)}
          >
            <div className="relative rounded-2xl ">
              <img
                src={story.title_image}
                alt={story.title}
                className="w-full h-[335px]  rounded-2xl"
              />
              <BlogTitle title={story.title} description={story.meta_description} />
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  };

  if (error) {
    return <p className="text-center text-2xl font-semibold text-red-600">Error Occurred: {error.message}</p>;
  }

  // Display loading state while checking cache or fetching from API
  if ((isLoading || isLoadingCache)) {
    return (
      <GridContainer cols="grid-cols-1 md:grid-cols-2" gap="gap-6">
        {[1, 2].map((item) => (
          <GridItem key={item} xs={1} sm={1} md={1} lg={1} xl={1}>
            <MySkeleton variant="rectangle" width="w-full" height="h-72" borderRadius="rounded-lg" />
          </GridItem>
        ))}
      </GridContainer>
    );
  }

  return (
    <div className="relative flex items-center justify-between space-x-1  lg:space-x-4 w-full ">
      <button
        onClick={handlePrev}
        disabled={isFirstSlide}
        className={`
          z-10  
          ${isFirstSlide ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}
        `}
      >
        <FaCircleChevronLeft
          size={24} 
          className={isFirstSlide ? 'text-gray-400' : 'text-[#4E18CD]'} 
        />
      </button>
      <div>
        {renderPosts()}
      </div>

      <button
        onClick={handleNext}
        disabled={isLastSlide}
        className={`
          right-0 z-10  
          
          ${isLastSlide ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}
        `}
      >
        <FaCircleChevronRight
          size={24} 
          className={isLastSlide ? 'text-gray-400' : 'text-[#4E18CD]'} 
        />
      </button>
    </div>
  );
};

export default BlogCard;
