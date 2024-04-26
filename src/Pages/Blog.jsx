import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import Navbar from '../Components/Navbar'
import { AuroraHero } from '../Components/Sample';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // const user = JSON.parse(sessionStorage.getItem('user'));
        const token = localStorage.getItem('token');
        

        // Send a GET request to the server with the session in the Authorization header
        const response = await axios.get('https://gokul-pg-backend.vercel.app/blog', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }
        });

        setBlogs(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <>
    Loading....
    </>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const bgStyle = {
    backgroundColor: 'rgba(2,6,23,255)',
    color: 'white',
    fontSize: '20px'
  };

  return (
    
    <div style={bgStyle}>
        <Navbar />
        <AuroraHero />
        <div className="p-5">
  <ul className="divide-y divide-gray-300">
    {blogs.map((blog) => (
      <li key={blog._id} className="py-4">
        <h2 className="text-2xl font-bold mb-2">{blog.heading}</h2>
        <p className="text-gray-400">{blog.body}</p>
        <p className="text-gray-300 mt-2">Author: {blog.author}</p>
      </li>
    ))}
  </ul>
</div>

    </div>
  );
};

export default Blog
