// src/components/BlogPostDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './BlogPostDetails.css';

const BlogPostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/posts/${id}`)
            .then(response => setPost(response.data))
            .catch(error => console.error('Error fetching post details:', error));
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div className="blog-post-details-container">
            <h2 className="blog-post-details-title">{post.title}</h2>
            {post.title_image && (
                <img
                    src={`data:image/jpeg;base64,${post.title_image}`}
                    alt={post.title}
                    className="blog-post-details-image"
                />
            )}
            <div className="blog-post-details-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            {post.author && <p className="blog-post-details-author">By: {post.author}</p>}
        </div>
    );
};

export default BlogPostDetails;
