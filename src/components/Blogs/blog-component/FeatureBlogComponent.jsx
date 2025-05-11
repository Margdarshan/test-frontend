import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Pagination from './Pagination';
import { stripHtml, truncateText } from '../../../core/formaters/index';
import useGetData from '../../../core/hooks/useGetData';
import MySkeleton from '../../../core/components/Skelaton/MySkelaton';
import { GridContainer, GridItem } from '../../../core/components/Grid/MyGrid';

const FeatureBlogComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize currentPage from URL search params or session storage
  const getInitialPage = () => {
    // First check URL query params
    const urlParams = new URLSearchParams(location.search);
    const pageParam = urlParams.get('page');

    if (pageParam && !isNaN(parseInt(pageParam))) {
      return parseInt(pageParam);
    }

    // If not in URL, try session storage
    const storedPage = sessionStorage.getItem('blogCurrentPage');
    return storedPage ? parseInt(storedPage) : 1;
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [cachedBlogs, setCachedBlogs] = useState(null);
  const [isLoadingCache, setIsLoadingCache] = useState(true);
  const [cacheChecked, setCacheChecked] = useState(false);
  const ITEMS_PER_PAGE = 6; // Number of blogs per page
  const CACHE_EXPIRY = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

  // Fetch total pages from API
  const { data: paginationData } = useGetData({
    url: 'blog/posts/active/total-pages/',
    key: ['blogTotalPages'],

    params: { size: ITEMS_PER_PAGE },
    staleTime: 10000000,
    gcTime: 15000000,
  });

  const totalPages = paginationData || 1;

  // Function to check and retrieve cached data
  const getCachedData = (page) => {
    const cacheKey = `cachedBlogDataPage${page}`;
    console.log("Getting cached data for page", page);
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      console.log(`Cache found for page ${page}`);
      const { data, timestamp } = JSON.parse(cachedData);
      const now = new Date().getTime();

      // Check if cache is still valid (less than 2 hours old)
      if (now - timestamp < CACHE_EXPIRY) {
        console.log(`Cache still valid for page ${page}`);
        return data;
      } else {
        // Cache expired, remove it
        console.log(`Cache expired for page ${page}`);
        localStorage.removeItem(cacheKey);
      }
    }
    return null;
  };

  // Function to save data to cache
  const setCacheData = (page, data) => {
    const cacheKey = `cachedBlogDataPage${page}`;
    const cacheData = {
      data,
      timestamp: new Date().getTime(),
      page: page
    };
    console.log('setting cache for page', page);
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
    console.log('Cache set for page', page);
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Update URL and session storage when page changes
  useEffect(() => {
    // Update URL with current page
    const searchParams = new URLSearchParams(location.search);
    if (currentPage > 1) {
      searchParams.set('page', currentPage);
    } else {
      searchParams.delete('page');
    }

    // Update URL without causing a full page reload
    const newUrl = `${location.pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    window.history.replaceState(null, '', newUrl);

    // Store current page in session storage
    sessionStorage.setItem('blogCurrentPage', currentPage.toString());
  }, [currentPage, location.pathname]);

  // Effect to check cache when page changes
  useEffect(() => {
    setIsLoadingCache(true);
    setCacheChecked(false);
    console.log('seeing if cache is available for page', currentPage);
    const cached = getCachedData(currentPage);

    if (cached) {
      console.log('yes, cache is available for page', currentPage);
      setCachedBlogs(cached);
      setIsLoadingCache(false);
    } else {
      console.log('cache not available for page', currentPage);
      setCachedBlogs(null);
      setIsLoadingCache(false);
    }
    setCacheChecked(true);
  }, [currentPage]);

  // Only fetch from API if no cache is available
  const { data: blogs, error, isLoading } = useGetData({
    url: 'blog/posts/active/',
    key: ['blogs', currentPage],
    params: { page: currentPage, size: ITEMS_PER_PAGE },
    staleTime: 10000000,
    gcTime: 15000000,
    // enabled: !cachedBlogs,
    enabled: cacheChecked && !cachedBlogs,
  });

  // Save API response to cache when new data arrives
  useEffect(() => {
    if (blogs) {
      setCacheData(currentPage, blogs);
      setCachedBlogs(blogs);
    }
  }, [blogs]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      console.log(`Changing page from ${currentPage} to ${page}`);
      setCurrentPage(page);
      window.scrollTo({
        top: 600,
        left: 0,
        behavior: "smooth"
      });
    }
  };

  const createSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  const handleBlogClick = (blog) => {
    const slug = createSlug(blog.title);
    window.scrollTo(0, 0); // Scroll to top when page changes
    navigate(`/frontend/blog/${slug}/${blog.id}`);
  };

  // Display loading state while checking cache or fetching from API
  if ((isLoading && !localStorage.getItem(`cachedBlogDataPage${currentPage}`)) || isLoadingCache) {
    return (
      <GridContainer cols="grid-cols-1 md:grid-cols-2" gap="gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <GridItem key={item} xs={1} sm={1} md={1} lg={1} xl={1}>
            <MySkeleton variant="rectangle" width="w-full" height="h-72" borderRadius="rounded-lg" />
          </GridItem>
        ))}
      </GridContainer>
    );
  }

  if (error) {
    return <p className="text-center text-2xl font-semibold text-red-600">Error Occurred: {error.message}</p>;
  }

  // Use cached blogs if available, otherwise use blogs from API
  const displayBlogs = cachedBlogs || blogs;
  console.log(displayBlogs[0]);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayBlogs?.map((blog) => (
          <div key={blog.id} className="cursor-pointer" onClick={() => handleBlogClick(blog)}>
            <div className=" rounded-2xl ">   
                <img
                  src={blog.title_image}
                  alt={blog.image_alt_text || 'Blog Image'}
                  className="w-full xl:h-[280px]  rounded-t-2xl"
                />
              <div className=" bg-white p-4 w-full border rounded-b-2xl">
                <p className="text-[#737373] text-sm ">{formatDate(blog.created_at)}</p>
                <h3 className="text-lg font-semibold font-manrope text-[#171717]">{truncateText(stripHtml(blog.title), 50)}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {displayBlogs?.length > 0 && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default FeatureBlogComponent;
