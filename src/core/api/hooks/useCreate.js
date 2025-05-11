import { useMutation } from 'react-query';
import httpClient from '../httpClient';
const useCreate = (url) => {
  const mutation = useMutation(
    async (data) => {
      const response = await httpClient.post(url, data);
      return response.data;
    },
    {
      onSuccess: (data) => {},
      onError: (error) => {
        // console.error('POST request failed', error);
      },
    }
  );

  return mutation;
};

export default useCreate;
