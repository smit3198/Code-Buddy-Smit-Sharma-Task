import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://codebuddy.review/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      <div className="post-list">
        {posts.map(post => (
          <div key={post.id} className="post">
            <img src={post.image} alt="Post" />
            <div className="post-details">
              <h2>{`${post.firstName} ${post.lastName}`}</h2>
              <p>{post.writeup}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;
