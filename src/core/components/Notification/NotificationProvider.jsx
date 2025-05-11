import React, { createContext, useState } from 'react';
import { MdCheckCircle, MdError, MdInfo } from 'react-icons/md';

export const NotificationContext = createContext();

const NotificationProvider = ({ children, duration = 3000 }) => {
  const [notifications, setNotifications] = useState([]);
  const addNotification = (message, type = 'info') => {
    setNotifications((prev) => [...prev, { message, type, id: Date.now() }]);
    setTimeout(() => {
      setNotifications((prev) => prev.slice(1));
    }, duration);
  };

  return (
    <NotificationContext.Provider value={addNotification}>
      {children}
      <div className="fixed top-20 right-5  z-[999999] flex flex-col space-y-2">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg shadow-md text-white transition-all duration-${duration} 
              ${notif.type === 'success' ? 'bg-green-500' : ''}
              ${notif.type === 'error' ? 'bg-red-500' : ''}
              ${notif.type === 'info' ? 'bg-blue-500' : ''}
            `}
          >
            {notif.type === 'success' && <MdCheckCircle className="text-xl" />}
            {notif.type === 'error' && <MdError className="text-xl" />}
            {notif.type === 'info' && <MdInfo className="text-xl" />}
            <span>{notif.message}</span>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
