import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import useAuthStore from '../../../store/authStore';
import useNotification from '../../../core/components/Notification/useNotifiaction';
import httpClient from '../../../core/api/httpClient';
import { useNavigate } from 'react-router-dom';

const SocialLoginButton = ({ src, alt, children, onClick }) => (
  <button
    onClick={onClick}
    className="flex justify-center items-center my-2.5 px-4 py-2 lg:px-16 lg:py-5 rounded-xl border-2 border-solid border-black w-full hover:border-gray-400 text-black hover:bg-green-400 hover:text-white transition"
  >
    <div className="flex gap-2.5 items-center">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="shrink-0 w-5 lg:w-6"
      />
      <span className=" text-sm lg:text-base">{children}</span>
    </div>
  </button>
);

const GoogleLoginButton = ({ onClose }) => {
  const showNotification = useNotification();
  const login = useAuthStore((state) => state.login);
  const setLoginRedirectDone = useAuthStore((state) => state.setLoginRedirectDone)
  const navigate = useNavigate();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const { access_token } = tokenResponse;
        const res = await fetch(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        const user = await res.json();
        // console.log('This is the user:', user, res);


        showNotification(`${user.name}, you are logged in successfully!`, 'success');

        const userData = {
          name: user.name,
          email: user.email,
        };
        // console.log('This is the user data:', user, res);

        const response = await httpClient.get(`/user/google/${user.email}`);
        // console.log('User data sent to the backend:', userData);

        localStorage.setItem('auth_token', access_token);

        // console.log(response, 'response')
        login(user.name, response.data.token, user.picture, user.email);
        if (response?.data.new_user) {
          navigate(`/frontend/PersonalDetails?email=${user.email}`, {
            state: { email: user.email }
          });
        }
        else {
          console.log('hii i am done')
          setLoginRedirectDone(true)
          // window.location.reload()
        }
        // login(user.name, response.data.token, user.picture, user.email);

      } catch (err) {
        showNotification('Login failed. Try again.', 'error');
      }
      onClose();
    },
    onError: () => {
      showNotification('Google login failed', 'error');
    },
    flow: 'implicit',
  });

  return (
    <SocialLoginButton
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbe69b30cca1cd7a62f47861ddf90d2d7484379d5d978c7d6b3285b2ac15654c?apiKey=9a32bc866e724018820ce764b81eba46&"
      alt="Google Logo"
      onClick={() => loginWithGoogle()}
    >
      Continue with Google
    </SocialLoginButton>
  );
}

export default GoogleLoginButton;
