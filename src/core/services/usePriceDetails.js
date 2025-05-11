import { useQuery } from 'react-query';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const fetchPriceDetails = async (route) => {
  const { data } = await axios.get(`${baseUrl}${route}`);
  return data;
};

const usePriceDetails = (route) => {
  const queryResult = useQuery([route], () => fetchPriceDetails(route), {
    keepPreviousData: true,
  });

  return {
    data: queryResult.data,
    isLoading: queryResult.isLoading,
    error: queryResult.error,
  };
};

export default usePriceDetails;
