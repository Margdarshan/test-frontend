import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import CategoryInput from './CategoryInput';
import { IoIosClose } from 'react-icons/io';
import axios from 'axios';
// REACT_APP_BACKEND_URL=https://margdarshan-fastapi-backend-3def8a36a37a.herokuapp.com/

function AddBlog() {
    const [value, setValue] = useState('');
    const [blogTitle, setBlogTitle] = useState('');
    const [categoryMessage, setCategoryMessage] = useState('');
    const [categories, setCategories] = useState(["JEE", "NEET", "Advance", "Boards"]);
    const [selectedCategory, setSelectedCategory] = useState('0');
    const [image, setImage] = useState('');
    const [imageAlt, setImageAlt] = useState('');
    const [siteAuthor, setSiteAuthor] = useState('');
    const [siteName, setSiteName] = useState('');
    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [metaKeywords, setMetaKeywords] = useState('');
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState([]);

    const handleCategoryInput = (e) => {
        setCategoryMessage(e.target.value);
    };

    const handleAddCategory = () => {
        setCategories([...categories, categoryMessage]);
        setCategoryMessage('');
    };

    const handleAddTag = () => {
        if (tag.trim() && !tags.includes(tag.trim())) {
            setTags([...tags, tag.trim()]);
            setTag('');
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter(t => t !== tagToRemove));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate required fields
        if (!blogTitle || !selectedCategory || !image || !value) {
            alert('Please fill in all required fields.');
            return;
        }

        const tagsString = tags.join(',');

        const formData = new FormData();
        formData.append('blog_title', blogTitle);
        formData.append('category', selectedCategory);
        formData.append('image_alt_text', imageAlt);
        formData.append('image', image); // Ensure this is a File object
        formData.append('blog_content', value);
        formData.append('tags', tagsString);
        formData.append('site_author', siteAuthor);
        formData.append('site_name', siteName);
        formData.append('meta_title', metaTitle);
        formData.append('meta_description', metaDescription);
        formData.append('meta_keywords', metaKeywords);

        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}blog/new_blog`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Blog submitted successfully!');
            console.log('Blog submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting blog:', error);
            alert('Failed to submit the blog. Please try again.');
        }
    };

    return (
        <div className='rounded-xl my-7 py-5 bg-white h-[100%] container mx-auto px-6'>
            <h6 className='text-[#344767] font-bold'>Add new Blog</h6>
            <form onSubmit={handleSubmit}>
                <TextInput label="Blog Title" name="blog-title" id="blog-title" placeholder="Blog Title" value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} required />
                <SelectInput label="Category" name="category" id="category" options={categories} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} required />
                <CategoryInput categoryMessage={categoryMessage} handleCategoryInput={handleCategoryInput} handleAddCategory={handleAddCategory} />
                {/* <TextInput label="Image Alt Text" name="image-alt" id="image-alt" placeholder="Image Alt Text" value={imageAlt} onChange={(e) => setImageAlt(e.target.value)} required /> */}
                <div className='my-2'>
                    <label htmlFor="image" className="block px-1 text-sm font-medium leading-6 text-[#344767]">Image</label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                            type="file"
                            name="image"
                            id="image"
                            className="block w-full text-gray-900 border-0 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            accept=".png, .jpeg, .jpg"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                </div>
                <TextInput label="Image Link" name="image-link" id="image-link" placeholder="Image Link" value={image} onChange={(e) => setImage(e.target.value)} required />
                <div className='my-2'>
                    <label htmlFor="blog-content" className="block px-1 text-sm font-medium leading-6 text-[#344767]">Blog Content</label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <ReactQuill value={value} onChange={setValue} />
                    </div>
                </div>
                <div className='my-2'>
                    <label htmlFor="tags" className="block px-1 text-sm font-medium leading-6 text-[#344767]">Add Tags</label>
                    <div className="relative mt-2 rounded-md shadow-sm flex">
                        <input
                            type="text"
                            name="tags"
                            id="tags"
                            className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Add a tag"
                            value={tag}
                            onChange={(e) => setTag(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                        />
                        <button type="button" onClick={handleAddTag} className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 ml-2 rounded-md shadow-sm">Add</button>
                    </div>
                </div>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {tags.map((tag, index) => (
                        <p key={index} className="text-sm px-3 py-1 rounded-full bg-green-200 text-green-700 flex items-center">
                            {tag} <IoIosClose className="ml-1 cursor-pointer" onClick={() => handleRemoveTag(tag)} />
                        </p>
                    ))}
                </div>
                <TextInput label="Site Author" name="site-author" id="site-author" placeholder="Site Author" value={siteAuthor} onChange={(e) => setSiteAuthor(e.target.value)} required />
                <TextInput label="Site Name" name="site-name" id="site-name" placeholder="Site Name" value={siteName} onChange={(e) => setSiteName(e.target.value)} required />
                <TextInput label="Meta Title" name="meta-title" id="meta-title" placeholder="Meta Title" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} required />
                <div className='my-2'>
                    <label htmlFor="meta-description" className="block px-1 text-sm font-medium leading-6 text-[#344767]">
                        Meta Description
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <textarea
                            name="meta-description"
                            id="meta-description"
                            className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Meta Description"
                            value={metaDescription}
                            onChange={(e) => setMetaDescription(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <TextInput label="Meta Keywords" name="meta-keywords" id="meta-keywords" placeholder="Meta Keywords" value={metaKeywords} onChange={(e) => setMetaKeywords(e.target.value)} />
                <div className='my-4'>
                    <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow-sm mr-2">Submit</button>
                    <button type="reset" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow-sm">Reset</button>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;
