import { useState } from 'react';
// import api from "../../../../core/api";
import { toast } from 'react-toastify';
import useNotification from '../../../../core/components/Notification/useNotifiaction';
import httpClient from '../../../../core/api/httpClient';

const useCreateBlog = () => {
  const baseUrl = '/blog/posts/';
  const [loading, setLoading] = useState(false);
  const toastNotification = useNotification();

  const createBlog = async ({ title, content, author, titleImage, imgAlt, metaTitle, metaDescription, metaKeywords }) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('author', author);
    
    // Add the new required fields from the API
    formData.append('img_alt', imgAlt);
    formData.append('meta_title', metaTitle);
    formData.append('meta_description', metaDescription);
    formData.append('meta_keywords', metaKeywords);
    
    if (titleImage) {
      formData.append('title_image', titleImage);
    }

    try {
      const response = await httpClient.post(baseUrl, formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      });

      const successMessage = response.data.message;
      toastNotification(
        successMessage || 'Blog Posted Successfully!',
        'success'
      );
      
      return response.data;
    } catch (error) {
      console.error('Error saving post:', error);
      const errorMessage = error.response?.data?.message;
      toastNotification(errorMessage || 'Oops, Something Went Wrong!', 'error');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { createBlog, loading };
};

export default useCreateBlog;
