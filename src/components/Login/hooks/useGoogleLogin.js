import { useState } from 'react';
import httpClient from '../../../core/api/httpClient';
import { useNavigate } from 'react-router-dom';

const useGoogleLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //  basaed on backend response i have to redirect either fill details or direct home
  const login = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await httpClient.get('/authentication/google/login/');

      const redirectUrl = response?.data?.message;
      console.log('this is gogle response', response);

      if (redirectUrl) {
        // window.location.href = redirectUrl;
        console.log('hii', redirectUrl);

        // navigate('/frontend/auth/callback');
      } else {
        console.error('No redirect URL returned from backend');
      }
    } catch (err) {
      console.error('Google login error:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useGoogleLogin;
