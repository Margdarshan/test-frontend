import React from 'react';
import { Navigate } from 'react-router-dom';
import useAdminAuthStore from '../../store/adminAuthStore';

const ProtectedAdminRoute = ({ children }) => {
  const { isAdminAuthenticated } = useAdminAuthStore();

  return isAdminAuthenticated ? (
    children
  ) : (
    <Navigate to="/frontend/admin/login" />
  );
};

export default ProtectedAdminRoute;
