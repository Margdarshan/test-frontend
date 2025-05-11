import { useContext } from 'react';
import { NotificationContext } from './NotificationProvider';

const useNotification = () => {
  //notification context
  return useContext(NotificationContext);
};

export default useNotification;
