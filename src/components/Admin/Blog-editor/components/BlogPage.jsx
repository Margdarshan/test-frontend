// src/components/BlogPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './BlogPage.css';

const BlogPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts/')
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    const createShortContent = (content) => {
        const plainText = content.replace(/<[^>]+>/g, '');
        return plainText.length > 100 ? `${plainText.substring(0, 100)}...` : plainText;
    };

    return (
        <div className="blog-page-container">
            {posts.map((post) => (
                <div key={post.id} className="blog-post">
                    <Link to={`/posts/${post.id}`} className="blog-post-title-link">
                        <h2 className="blog-post-title">{post.title}</h2>
                    </Link>
                    {post.title_image && (
                        <img
                            src={`data:image/jpeg;base64,${post.title_image}`}
                            alt={post.title}
                            className="blog-post-image"
                        />
                    )}
                    <div className="blog-post-content">{createShortContent(post.content)}</div>
                    {post.author && <p className="blog-post-author">By: {post.author}</p>}
                    <hr className="blog-post-separator" />
                </div>
            ))}
        </div>
    );
};

export default BlogPage;
