import { useQuery } from 'react-query';
import httpClient from '../api/httpClient';

const useGetData = ({
  url,
  key,
  params = {},
  retry = 3,
  staleTime = 600000, 
  gcTime = 15000000, 
  enabled = true
}) => {
  const fetchData = async () => {
    const response = await httpClient.get(url, { params });
    // console.log('Fetching data from API for page ', params.page);
    return response.data;
  };

  return useQuery([...Array.isArray(key) ? key : [key], ...Object.values(params)], fetchData, {
    retry,
    staleTime, 
    cacheTime: gcTime, 
    enabled,
    refetchOnWindowFocus: false, 
    keepPreviousData: true, 
    refetchOnMount: true,
    refetch: fetchData,
  });
};

export default useGetData;