import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAdminAuthStore = create(
  persist(
    (set) => ({
      adminName: null,
      isAdminAuthenticated: false,

      adminLogin: (id, name, email, role) => {
        set({
          id: id,
          adminName: name,
          email: email,
          role: role,
          isAdminAuthenticated: true,
        });
      },

      adminLogout: () => {
        set({
          id: null,
          adminName: null,
          email: null,
          role: null,
          isAdminAuthenticated: false,
        });
      },
    }),
    {
      name: 'admin-auth-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useAdminAuthStore;
