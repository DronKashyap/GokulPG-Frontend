import React, { useState } from 'react';
import axios from 'axios';

const AddBlog = () => {
  const [author, setAuthor] = useState('');
  const [heading, setHeading] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://gokul-pg-backend.vercel.app/admin/addblog',
       {
        author,
        heading,
        body,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },);

      if (response.status === 201) {
        setMessage('Blog post created successfully');
        setAuthor('');
        setHeading('');
        setBody('');
      }
    } catch (error) {
      setMessage('Internal Server Error');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
    <h2 className="text-2xl font-bold mb-4">Add Blog Post</h2>
    {message && <p className="text-green-500 mb-4">{message}</p>}
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="author" className="text-lg font-semibold mb-2">
          Author:
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border p-2 rounded-md"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="heading" className="text-lg font-semibold mb-2">
          Heading:
        </label>
        <input
          type="text"
          id="heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className="border p-2 rounded-md"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="body" className="text-lg font-semibold mb-2">
          Body:
        </label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="border p-2 rounded-md h-40"
          required
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  );
};

export default AddBlog;
