import { useQuery } from 'react-query';
import httpClient from '../httpClient';

const useSingleData = (endpoint, queryKey, id) => {
  const fetchData = async () => {
    try {
      const response = await httpClient.get(`${endpoint}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching data');
    }
  };

  return useQuery([queryKey, id], fetchData, {
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });
};

export default useSingleData;
