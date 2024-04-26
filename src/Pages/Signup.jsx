import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Signupbg from '../Static/Signupbg.jpg';

function Signup() {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post('https://gokul-pg-backend.vercel.app/signup', state)
      .then(res => {
        setMessage(res.data.message);
      })
      .catch(err => {
        setMessage(err.response.data.message);
      });
  };

  return (
    <div style={{ 
      backgroundImage: `url(${Signupbg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}  className='min-h-screen'>
      <Navbar />
      <div className='flex justify-center mt-20'>
        <form onSubmit={onSubmit} className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 max-w-md w-full">
          <h2 className="text-2xl text-center mb-4">Login as new user:</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-lg mb-2">Username:</label>
            <input type="text" value={state.username} onChange={onChange} id="username" name="username" required placeholder="Enter your Username" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-lg mb-2">Email:</label>
            <input type="email" value={state.email} onChange={onChange} id="email" name="email" required placeholder="Enter your Email address" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-lg mb-2">Password:</label>
            <input type="password" value={state.password} onChange={onChange} id="password" name="password" required placeholder="Enter your Password" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Sign Up</button>

          <h4 className="mt-4 text-gray-700 text-lg text-center">Existing user? <a href="/signin" className="text-blue-500 hover:text-blue-600">Log in</a></h4>
          {message && <p className='flex justify-center mt-3 p-1 rounded-md bg-green-300'>{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Signup;
