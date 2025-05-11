import { useState } from 'react';
import httpClient from '../../../../core/api/httpClient';
import useNotification from '../../../../core/components/Notification/useNotifiaction';

const useUpdateBlog = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const toastNotification = useNotification();

  const updateBlog = async ({ 
    id, 
    title, 
    content, 
    author, 
    titleImage, // New image file if selected by user
    originalImageData, // This is now the URL of the existing image
    imgAlt,
    metaTitle,
    metaDescription, 
    metaKeywords
  }) => {
    setLoading(true);
    setMessage('');
    
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('author', author);
      formData.append('img_alt', imgAlt || '');  
      formData.append('meta_title', metaTitle || '');
      formData.append('meta_description', metaDescription || '');
      formData.append('meta_keywords', metaKeywords || '');
      
      // Handle image logic - ONLY append if a new image was selected
      if (titleImage && titleImage instanceof File) {
        console.log("Using newly selected image file");
        formData.append('title_image', titleImage);
      }
      // Don't try to fetch and re-upload the original image
      
      // Debug: Log form data entries
      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + (pair[1] instanceof File ? 'File object' : pair[1]));
      }
      
      console.log("Sending update request to API");
      
      const response = await httpClient.put(`/blog/posts/${id}/update/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log("Update successful:", response.data);
      
      setMessage('Blog updated successfully!');
      toastNotification('Blog updated successfully!', 'success', 5000);
      return response.data;
    } catch (error) {
      console.error("Update failed:", error.response?.data || error.message);
      const errorMessage = error.response?.data?.detail || error.response?.data?.message || 'Failed to update blog';
      setMessage(errorMessage);
      toastNotification(errorMessage, 'error', 10000);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { updateBlog, loading, message };
};

export default useUpdateBlog;
