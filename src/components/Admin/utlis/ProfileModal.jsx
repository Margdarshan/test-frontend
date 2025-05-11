/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const ProfileModal = ({ onClose,user }) => {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChange = () => {
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);
    setOldPassword('');
    setNewPassword('');
    setShowChangePassword(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative bg-white p-8 rounded-lg shadow-lg z-10 w-80">
        <button 
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-2xl font-bold mb-4">My Profile</h2>
        {!showChangePassword ? (
          <>
            <p className="mb-2"><strong>Username:</strong> {user.name}</p>
            <p className="mb-2"><strong>User Type:</strong> {user.role}</p>
            <div className="flex justify-center">
              <button 
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none"
                onClick={() => setShowChangePassword(true)}
              >
                Change Password
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Old Password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="flex justify-center">
              <button 
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none"
                onClick={handlePasswordChange}
              >
                Change Password
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileModal;
