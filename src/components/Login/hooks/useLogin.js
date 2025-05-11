import { useState } from 'react';
import { useMutation } from 'react-query';
import httpClient from '../../../core/api/httpClient';
import useNotification from '../../../core/components/Notification/useNotifiaction';

const useLogin = () => {
  const [email, setEmail] = useState('');
  const notify = useNotification();

  const mutation = useMutation(
    async (email) => {
      const response = await httpClient.post('authentication/login/', {
        email,
      });
      // console.log('Response received:', response);
      return response;
    },
    {
      onSuccess: () => {
        notify(
          'OTP sent successfully Please check your inbox or spam folder.',
          'success',
          10000
        );
      },
      onError: (error) => {
        notify('Failed to send OTP', 'error');
      },
    }
  );

  const handleLogin = async (email) => {
    return mutation.mutateAsync(email);
  };

  return { email, setEmail, handleLogin, isLoading: mutation.isLoading };
};

export default useLogin;
