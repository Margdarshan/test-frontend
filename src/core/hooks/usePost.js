// import { useMutation } from 'react-query';
// // import httpClient from './httpClient';
// import useNotification from '../components/Notification/useNotifiaction';
// import httpClient from '../api/httpClient';
// // import useNotification from './useNotification';

// export const usePost = (endpoint, options = {}) => {
//   const notify = useNotification()
//   const { disableNotification = false } = options;

//   return useMutation(
//     async (data) => {
//       const response = await httpClient.post(endpoint, data);
//       return response.data;
//     },
//     {
//       onSuccess: (data) => {
//         if (!disableNotification) {
//           notify('Subscribed successful', 'success');
//         }
//         if (options.onSuccess) {
//           options.onSuccess(data);
//         }
//       },
//       onError: (error) => {
//         if (!disableNotification) {
//           notify(error.response?.data?.message || 'Something went wrong', 'error');
//         }
//         if (options.onError) {
//           options.onError(error);
//         }
//       },
//       ...options,
//     }
//   );
// };

// export default usePost;

import { useMutation } from 'react-query';
import useNotification from '../components/Notification/useNotifiaction';
import httpClient from '../api/httpClient';

export const usePost = (endpoint, options = {}) => {
  const notify = useNotification();
  const { disableNotification = false, resourceName } = options;

  return useMutation(
    async (data) => {
      const response = await httpClient.post(endpoint, data);
      return response.data;
    },
    {
      onSuccess: (data) => {
        if (!disableNotification) {
          const successMessage = resourceName 
            ? `${resourceName} Successfully` 
            : 'Action successful';
          notify(successMessage, 'success');
        }
        if (options.onSuccess) {
          options.onSuccess(data);
        }
      },
      onError: (error) => {
        if (!disableNotification) {
          notify(error.response?.data?.message || 'Something went wrong', 'error');
        }
        if (options.onError) {
          options.onError(error);
        }
      },
      ...options,
    }
  );
};

export default usePost;

