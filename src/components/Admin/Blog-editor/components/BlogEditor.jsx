import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import useCreateBlog from '../hooks/userCreateBlog';
import useUpdateBlog from '../hooks/useUpdateBlog';
import useNotification from '../../../../core/components/Notification/useNotifiaction';
import MetaTitle from '../../../../core/components/Metatitle/MetaTitle';

const BlogEditor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blogToEdit = location.state?.blog;
  const isEditMode = !!blogToEdit;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const toastNotification = useNotification();
  const [titleImage, setTitleImage] = useState(null);
  const [originalImageUrl, setOriginalImageUrl] = useState(null);
  const [currentImagePreview, setCurrentImagePreview] = useState(null);
  const [error, setError] = useState('');
  const [imgAlt, setImgAlt] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [metaKeywords, setMetaKeywords] = useState('');

  const { createBlog, loading: createLoading, message: createMessage } = useCreateBlog();
  const { updateBlog, loading: updateLoading, message: updateMessage } = useUpdateBlog();

  const loading = createLoading || updateLoading;
  const message = createMessage || updateMessage;

  // Load blog data when in edit mode
  useEffect(() => {
    if (isEditMode && blogToEdit) {
      // console.log("Loading blog data for editing:", blogToEdit);

      setTitle(blogToEdit.title || '');
      setContent(blogToEdit.content || '');
      setAuthor(blogToEdit.author || '');

      // Set the additional fields
      setImgAlt(blogToEdit.img_alt || '');
      setMetaTitle(blogToEdit.meta_title || '');
      setMetaDescription(blogToEdit.meta_description || '');
      setMetaKeywords(blogToEdit.meta_keywords || '');

      if (blogToEdit.title_image) {
        // Store the image URL
        setOriginalImageUrl(blogToEdit.title_image);
        // Use the URL directly for preview
        setCurrentImagePreview(blogToEdit.title_image);
        // console.log("Original image URL set:", blogToEdit.title_image);
      }
    }
  }, [isEditMode, blogToEdit]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];
      if (validExtensions.includes(file.type)) {
        setTitleImage(file);

        // Create preview of the selected image
        const reader = new FileReader();
        reader.onload = (e) => {
          setCurrentImagePreview(e.target.result);
        };
        reader.readAsDataURL(file);

        setError('');
      } else {
        setTitleImage(null);
        setError('Please upload a valid JPG, JPEG, or PNG image.');
        toastNotification('Please upload a valid JPG, JPEG, or PNG image.', "error", 10000);
      }
    }
  };

  const handleSavePost = async () => {
    // Validate all required fields
    if (!title || !content || !author || !imgAlt || !metaTitle || !metaDescription || !metaKeywords) {
      setError('All fields are required.');
      return;
    }

    if (isEditMode) {
      // For edit mode, we need either a new image or the original image URL
      if (!titleImage && !originalImageUrl) {
        setError('Title image is required.');
        return;
      }

      console.log("Calling updateBlog with:", {
        id: blogToEdit.id,
        hasNewImage: !!titleImage,
        hasOriginalImage: !!originalImageUrl
      });

      const result = await updateBlog({
        id: blogToEdit.id,
        title,
        content,
        author,
        titleImage,
        originalImageData: originalImageUrl, // Pass the URL of the original image
        imgAlt,
        metaTitle,
        metaDescription,
        metaKeywords
      });

      if (result) {
        // Navigate back after successful update
        setTimeout(() => {
          navigate(-1);
          setTimeout(() => {
            window.location.reload();
          }, 100);
        }, 1000);
      }
    } else {
      // For create mode, image is always required
      if (!titleImage) {
        setError('Title image is required and must be a JPG, JPEG or PNG.');
        return;
      }

      await createBlog({
        title,
        content,
        author,
        titleImage,
        imgAlt,
        metaTitle,
        metaDescription,
        metaKeywords
      });

      setTitle('');
      setContent('');
      setAuthor('');
      setTitleImage(null);
      setCurrentImagePreview(null);
      setImgAlt('');
      setMetaTitle('');
      setMetaDescription('');
      setMetaKeywords('');
    }
  };

  // Add a button to clear the selected image and revert to original (if in edit mode)
  const handleClearImage = () => {
    setTitleImage(null);

    if (isEditMode && originalImageUrl) {
      setCurrentImagePreview(originalImageUrl);
    } else {
      setCurrentImagePreview(null);
    }
  };

  return (
    <div className="max-w-[800px] mx-auto p-8 mb-8 bg-white rounded-2xl">
      <MetaTitle title={isEditMode ? 'Edit Blog' : 'Create Blog'} />

      <h2 className="text-xl font-bold mb-4  text-[#3A416F]">
        {isEditMode ? 'Edit Blog Post' : 'Create New Blog Post'}
      </h2>

      <label className="mb-2 block text-sm text-[#3A416F]">Title</label>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-3 border border-gray-300 focus:outline focus:outline-1 focus:outline-[#3A416F] placeholder:text-blue-gray-200 py-3 rounded-lg text-sm"
      />

      <div className="mb-4">
        <label className="block mb-2 text-sm text-[#3A416F]">
          Title Image {isEditMode && '(Leave unchanged to keep current image)'}
        </label>
        <input
          type="file"
          onChange={handleImageChange}
          className="mb-3 text-[#3A416F] text-sm"
        />

        {titleImage && (
          <button
            onClick={handleClearImage}
            className="mt-2 px-3 py-1 bg-gray-200 rounded-lg text-sm"
          >
            Clear selected image {isEditMode && 'and revert to original'}
          </button>
        )}

        {currentImagePreview && (
          <div className="mt-2">
            <p className="mb-1">{titleImage ? 'New selected image:' : 'Current image:'}</p>
            <img
              src={currentImagePreview}
              alt={imgAlt || 'Blog image'}
              className="h-40 object-cover rounded-lg"
            />
          </div>
        )}
      </div>

      <label className="block mb-2 text-sm text-[#3A416F]">Image Alt Text</label>
      <input
        type="text"
        placeholder="Image Alt Text"
        value={imgAlt}
        onChange={(e) => setImgAlt(e.target.value)}
        className="w-full p-2 mb-3 border border-gray-300 focus:outline focus:outline-1 focus:outline-[#3A416F]  placeholder:text-blue-gray-200 py-3 rounded-lg text-sm"
      />

      {error && <p className="text-red-800 mb-3">{error}</p>}

      <label className="block mb-2 text-sm text-[#3A416F]">Author</label>
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="w-full p-2 mb-3 border border-gray-300 focus:outline focus:outline-1 focus:outline-[#3A416F] placeholder:text-blue-gray-200 py-3 rounded-lg text-sm"
      />

      <JoditEditor
        value={content}
        onChange={(newContent) => setContent(newContent)}
        className="w-full border border-gray-300 focus:outline focus:outline-1 focus:outline-[#3A416F] placeholder:text-blue-gray-200 py-3 rounded-lg text-sm"
      />

      <div className="mt-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">SEO Metadata</h3>

        <label className="block mb-2 text-sm text-[#3A416F]">Meta Title</label>
        <input
          type="text"
          placeholder="Meta Title"
          value={metaTitle}
          onChange={(e) => setMetaTitle(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 focus:outline focus:outline-1 focus:outline-[#3A416F] placeholder:text-blue-gray-200 py-3 rounded-lg text-sm"
        />

        <label className="block mb-2 text-sm text-[#3A416F]">Meta Description</label>
        <textarea
          placeholder="Meta Description"
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 focus:outline focus:outline-1 focus:outline-[#3A416F] placeholder:text-blue-gray-200 py-3 rounded-lg text-sm min-h-[80px]"
        />

        <label className="block mb-2 text-sm text-[#3A416F]">Meta Keywords</label>
        <input
          type="text"
          placeholder="Meta Keywords (comma separated)"
          value={metaKeywords}
          onChange={(e) => setMetaKeywords(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 focus:outline focus:outline-1 focus:outline-[#3A416F] placeholder:text-blue-gray-200 py-3 rounded-lg text-sm"
        />
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleSavePost}
          className="w-full px-2 py-3 bg-[#17C1E8] text-white text-sm font-semibold  hover:bg-[#17C1d9] transition-colors duration-300 rounded-lg"
          disabled={loading}
        >
          {loading ? 'Saving...' : isEditMode ? 'Update Post' : 'Save Post'}
        </button>

        {isEditMode && (
          <button
            onClick={() => navigate(-1)}
            className="w-full p-2 bg-gray-500 text-white rounded"
          >
            Cancel
          </button>
        )}
      </div>

      {message && <p className="mt-4 text-green-700">{message}</p>}
    </div>

  );
};

export default BlogEditor;
