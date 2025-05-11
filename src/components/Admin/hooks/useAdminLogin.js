import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import httpClient from '../../../core/api/httpClient';
import useAdminAuthStore from '../../../store/adminAuthStore';
import useNotification from '../../../core/components/Notification/useNotifiaction';
// import useNotification from '../../../core/components/Notification/useNotifiaction';
const useAdminLogin = () => {
  const navigate = useNavigate();
  const { adminLogin } = useAdminAuthStore();
  const toastNotification = useNotification();
  // const showNotification = u const toastNotification = useNotification();seNotification();

  return useMutation(
    async ({ username, password }) => {
      const response = await httpClient.post('/admin/login', {
        username,
        password,
      });
      return response.data;
    },
    {
      onSuccess: (data) => {
        if (data) {
          // const adminName = data.response.replace('Hello, ', '');
          const adminName = data.name;
          adminLogin(data.admin_id, data.name, data.username);
          toastNotification(`Welcome, ${adminName}!`, 'success');

          navigate('/frontend/admin');
        } else {
          toastNotification('Unexpected response from server.', 'warning');
        }
      },
      onError: (error) => {
        const message =
          error.response?.data?.message ||
          'Invalid credentials, please try again.';
        toastNotification(message, 'error');
      },
    }
  );
};

export default useAdminLogin;
