// AdminLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';
import SidePanel from './SidePanel';
import { Navbar } from './Navbar';
import NotificationProvider from '../../../core/components/Notification/NotificationProvider';

const AdminLayout = () => {

  return (
    <div className="flex bg-[#F4F5F6] min-h-screen">
      <NotificationProvider>
        <SidePanel />
        <div className="flex-1 ml-[20%] 2xl:ml-[18%] px-5 2xl:px-8 overflow-x-hidden">
          <Navbar />
          <ProtectedRoute>
            <Outlet />
          </ProtectedRoute>
        </div>
      </NotificationProvider>
    </div>
  );
}

export default AdminLayout;