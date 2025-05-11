import { useState, useEffect } from 'react';
import axios from 'axios';

const useBlogApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://margdarshan-fastapi-backend-3def8a36a37a.herokuapp.com/blog/posts/active',
          {
            headers: {
              accept: 'application/json',
            },
          }
        );

        setData(response.data);
      } catch (err) {
        setError(err.response ? err.response.data : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useBlogApi;
