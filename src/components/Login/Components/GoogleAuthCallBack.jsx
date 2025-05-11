import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuthStore from '../../../store/authStore';
import useNotification from '../../../core/components/Notification/useNotifiaction';

const GoogleAuthCallBack = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuthStore();
  const { showToast } = useNotification

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');
    const id = params.get('id');
    const username = params.get('username');
    const name = params.get('name');
    const roleId = params.get('roleId');

    if (id && username) {
      login(accessToken, refreshToken, id, name || "", username, roleId);
      showToast("Login successful!", "success");

      // Optional: Load permissions
      // setPermissions(fetchedPermissions);

      navigate(location.state?.from?.pathname || "/", { replace: true });
    } else {
      showToast("Login failed or missing data", "error");
      navigate('/login');
    }
  }, [location, navigate, login, showToast]);

  // eslint-disable-next-line react/react-in-jsx-scope
  return <p>Signing you in...</p>;
};

export default GoogleAuthCallBack;
