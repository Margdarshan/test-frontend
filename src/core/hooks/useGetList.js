import { useQuery } from 'react-query';
import httpClient from '../api/httpClient';

export const useGet = (endpoint, options = {}) => {
  return useQuery(
    [endpoint],
    async () => {
      const response = await httpClient.get(endpoint);
      return response.data;
    },
    {
      onSuccess: (data) => {
        if (options.onSuccess) {
          options.onSuccess(data);
        }
      },
      onError: (error) => {
        if (options.onError) {
          options.onError(error);
        }
      },
      ...options,
    }
  );
};

export default useGet;
