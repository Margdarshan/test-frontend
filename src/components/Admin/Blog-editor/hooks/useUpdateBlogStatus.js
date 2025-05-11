import { useState } from 'react';
import useNotification from '../../../../core/components/Notification/useNotifiaction';
import api from '../../../../api';

const useUpdateBlogStatus = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const toastNotification = useNotification();

  const updateStatus = async (postId, statusData, customUrl = null) => {
    setLoading(true);
    setMessage('');
    
    try {
      // Use the custom URL if provided, otherwise use the default endpoint
      const url = customUrl || `/blog/posts/${postId}/status/`;
      
      const response = await api.post(url, statusData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      
      setMessage('Blog status updated successfully!');
      toastNotification('Blog status updated successfully!', 'success', 5000);
      return response.data;
    } catch (error) {
      let errorMessage;
      
      if (error.response?.status === 422) {
        // Handle validation errors specifically
        const validationErrors = error.response?.data?.detail;
        errorMessage = validationErrors ? 
          `Validation error: ${validationErrors.map(err => err.msg).join(', ')}` : 
          'Validation failed';
      } else {
        errorMessage = error.response?.data?.detail || 'Failed to update blog status';
      }
      
      setMessage(errorMessage);
      toastNotification(errorMessage, 'error', 10000);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { updateStatus, loading, message };
};

export default useUpdateBlogStatus;
