import { useMutation } from 'react-query';
import httpClient from '../httpClient';
const usePostRequest = () => {
  const mutation = useMutation(
    async ({ apiEndpoint, data }) => {
      // eslint-disable-next-line no-useless-catch
      try {
        const response = await httpClient.post(apiEndpoint, data);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    {
      onSuccess: (data) => {
        console.log('Request successful:', data);
      },
      onError: (error) => {
        console.error('Request failed:', error);
      },
    }
  );

  return mutation;
};

export default usePostRequest;
