import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      userAvatar: null,
      isAuthenticated: false,
      loginRedirectDone: false,
      setLoginRedirectDone: (value) => set({ loginRedirectDone: value }),
      login: (userData, token, userAvatar, email) => {
        set({
          user: JSON.stringify(userData),
          token,
          email: email,
          userAvatar: userAvatar,
          isAuthenticated: true,
        });
      },

      logout: () => {
        set({
          user: null,
          token: null,
          email: null,
          userAvatar: null,
          isAuthenticated: false,
          loginRedirectDone: false,
        });
      },
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
