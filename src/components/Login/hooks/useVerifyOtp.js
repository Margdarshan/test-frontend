import { useMutation } from 'react-query';
// import api from '../../../api';
import httpClient from '../../../core/api/httpClient';
import { useNavigate } from 'react-router-dom';
import useNotification from '../../../core/components/Notification/useNotifiaction';
// import { storeToken } from '../../../utils/indexedDB';
import useAuthStore from '../../../store/authStore';

export const useVerifyOtp = (closeModal, email) => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const setLoginRedirectDone = useAuthStore(
    (state) => state.setLoginRedirectDone
  );
  const { showNotification } = useNotification();
  const storedPath = localStorage.getItem('currentRoute');
  const verifyOtpMutation = useMutation(
    async (otp) => {
      // const response = await apu.post('/otp', { email, otp });
      const response = await httpClient.post('/authentication/login/otp', {
        email,
        otp,
      });
      return response.data;
    },
    {
      onSuccess: async (data) => {
        localStorage.setItem('email', email);
        // await storeToken('authToken', data.token);
        login(data.user, data.token, email);

        if (data.new_user) {
          navigate(`/frontend/PersonalDetails?email=${email}`, {
            state: { email },
          });
        } else if (storedPath) {
          if (storedPath === '/frontend/collegepredictorresult') {
            setLoginRedirectDone(true);
            localStorage.removeItem('currentRoute');
          } else {
            localStorage.removeItem('currentRoute');
            window.location.assign(storedPath);
          }

          closeModal();
        } else {
          showNotification('OTP Verified Successfully', 'success');
          window.location.reload(storedPath);
          closeModal();
        }
      },
      onError: () => {
        showNotification('Invalid OTP. Please try again.', 'error');
      },
    }
  );

  const resendOtpMutation = useMutation(
    async () => {
      // const response = await api.post('/login', { email });
      const response = await httpClient.post('/login', { email });
      return response.data;
    },
    {
      onSuccess: () => {
        showNotification('OTP Resent Successfully', 'success');
      },
      onError: () => {
        showNotification('Failed to send OTP. Please try again.', 'error');
      },
    }
  );

  return { verifyOtpMutation, resendOtpMutation };
};
