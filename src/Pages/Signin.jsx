import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import SigninBG from '../Static/SigninBG.jpg';

function Signin() {
    const navigate = useNavigate();

    const [state, setState] = useState({
        username: '',
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

        axios.post('https://gokul-pg-backend.vercel.app/signin', state)
            .then(res => {
                if (res.data && res.data.token) {
                    localStorage.setItem('token', res.data.token);
                    setMessage(res.data.message);

                    // Redirect logic
                    if (state.username === 'Ravishek') {
                        navigate('/admin');
                    } else {
                        navigate('/');
                    }
                } else {
                    setMessage('Invalid response from server');
                }
            })
            .catch(err => {
                setMessage(err.response ? err.response.data.error || 'Login failed' : 'Login failed');
            });
    };

    return (
        <div  style={{ 
            backgroundImage: `url(${SigninBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}  className='min-h-screen text-slate-50 font-extrabold'>
            <Navbar />
            <div className='flex justify-center mt-20'>
                <form onSubmit={onSubmit} className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 max-w-md w-full">
                    <h2 className="text-2xl text-center mb-4 text-slate-700">Login:</h2>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg mb-2">Username:</label>
                        <input type="text" value={state.username} onChange={onChange} id="username" name="username" required placeholder="Enter your Username" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none text-slate-500 focus:border-blue-500"></input>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg mb-2">Password:</label>
                        <input type="password" value={state.password} onChange={onChange} id="password" name="password" required placeholder="Enter your Password" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none text-slate-500 focus:border-blue-500"></input>
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Sign in</button>
                    {/* make this a popup message */}
                    {message && <p className='flex justify-center mt-3 p-1 rounded-md bg-red-300'>{message}</p>}
                </form>
            </div>
        </div>
    )
}

export default Signin;
