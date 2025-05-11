import React, { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { FaUserCircle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import ProfileModal from './ProfileModal';
import useAdminAuthStore from '../../../store/adminAuthStore';
import AvatarName from '../../../core/avatarGroup/AvatarName';
import useNotification from '../../../core/components/Notification/useNotifiaction';

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { adminName, role,  isAdminAuthenticated, adminLogout } = useAdminAuthStore(); // ✅ Get auth state from store
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const notification = useNotification()
  const pathNameMap = {
    '/frontend/admin/': 'Dashboard',
    '/frontend/admin/blog-list': 'Blog List',
    '/frontend/admin/blog-new': 'Add Blog',
    '/frontend/admin/blog-comment': 'Blog Comment',
    '/frontend/admin/blog-category': 'Blog Category',
    '/frontend/admin/otp-message': 'OTP Message',
    '/frontend/admin/users': 'Users',
    '/frontend/admin/news-letter': 'Newsletter',
    '/frontend/admin/study-material': 'Study Material',
    '/frontend/admin/study-material/categories': 'Categories',
    '/frontend/admin/study-material/categories/subcategories': 'Subcategories',
    '/frontend/admin/study-material/categories/subcategories/material': 'Material',
  };

  const pathFormatter = (path) => {
    const formatted = path
      .replace("/frontend/admin/", "")                
      .replace(/-/g, " ")                              
      .split("/")                                      
      .map(part =>
        part.charAt(0).toUpperCase() + part.slice(1)   
      )
      .join(" / ");                                     
    return formatted;
  };
  const currentPathName = pathNameMap[location.pathname] || 'Dashboard';

  let hideDropdownTimeout;

  const handleMouseEnter = () => {
    clearTimeout(hideDropdownTimeout);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    hideDropdownTimeout = setTimeout(() => {
      setShowDropdown(false);
    }, 3000);
  };

  const handleLogout = () => {
    adminLogout();
    navigate('/frontend/admin/login');
    notification('Logout Successfully!', 'success')

  };

  return (
    <>
      <div className={`pt-3 sticky ${showModal ? 'backdrop-blur-sm' : ''}`}>
        <div className='py-4 flex justify-between'>
          <div>
            <div className='flex space-x-2 pt-[2px]'>
              <IoMdHome className='text-[#96A0B1] mt-1' />
              <h3 className='text-gray-500'>/</h3>
              <h3 className='text-[#344767] font-normal'>{pathFormatter(location.pathname)}</h3>
            </div>
            <h3 className='pt-[2px] font-bold text-[#344767] text-md'>{currentPathName}</h3>
          </div>
          <div
            className='relative flex space-x-3 justify-center items-center cursor-pointer'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isAdminAuthenticated ? (
              <div className='flex items-center space-x-1 relative'>
                <AvatarName authorName={adminName} className='text-[#344767]' />
                {showDropdown && (
                  <div className='absolute w-[130px] top-8 right-0 bg-white shadow-lg rounded-md p-2'>
                    <div className='py-1 px-4 hover:bg-gray-100 cursor-pointer' onClick={() => setShowModal(true)}>My Profile</div>
                    <div className='py-1 px-4 hover:bg-gray-100 cursor-pointer' onClick={handleLogout}>Logout</div>
                  </div>
                )}
              </div>
            ) : (
              <div
                className='flex items-center space-x-1'
                onClick={() => navigate('/frontend/admin/login')}
              >
                <FaUserCircle className='text-[#344767]' />
                <span className='text-[#344767] text-[14px] font-semibold'>Login</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {showModal && <ProfileModal onClose={() => setShowModal(false)} user={{ name: adminName, role:role }} />}
    </>
  );
};
