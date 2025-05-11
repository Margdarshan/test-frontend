// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useGetBlogById = (blogId) => {
//   console.log('this is id',blogId)
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     const fetchBlogById = async () => {
//       try {
//         const response = await axios.get(
//           `https://margdarshan-fastapi-backend-3def8a36a37a.herokuapp.com/blog/api/posts/${blogId}`,
//           {
//             headers: {
//               accept: 'application/json',
//             },
//           }
//         );

//         setBlog(response.data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (blogId) {
//       fetchBlogById();
//     }
//   }, [blogId]);

//   return { blog, loading, error };
// };

// export default useGetBlogById;

import { useQuery } from 'react-query';
import axios from 'axios';

// API call function
const fetchBlogById = async (blogId) => {
  const response = await axios.get(
    `https://margdarshan-fastapi-backend-3def8a36a37a.herokuapp.com/blog/api/posts/${blogId}`,
    {
      headers: {
        accept: 'application/json',
      },
    }
  );
  return response.data;
};

// React Query hook
const useGetBlogById = (blogId) => {
  // React Query's useQuery hook
  return useQuery(
    ['blog', blogId], // Unique query key
    () => fetchBlogById(blogId), // Function to fetch the blog
    {
      enabled: !!blogId, // Fetch only when blogId is available
      staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
      retry: 3, // Retry failed requests up to 3 times
      refetchOnWindowFocus: false, // Prevent refetching on window focus
    }
  );
};

export default useGetBlogById;

