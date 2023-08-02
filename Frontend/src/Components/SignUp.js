import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import login from '../Assests/login.jpg';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://flight-yc09.onrender.com/api/v1/signup', {
        name,
        email,
        password,
      });
     console.log(response.data.user.name);
      
      toast.success("Signed up successfully");
      localStorage.setItem('userName', response.data.user.name);
      navigate('/main');
    } catch (error) {
      console.error('Signup error:', error.response.data);
    }
  };

  return (
    <div className='w-[100vw] h-[100vh] pt-32 bg-center bg-cover ' style={{ backgroundImage: `url(${login})` }}>
    <div className="container mx-auto max-w-md  p-4 bg-gray-700 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
          type="submit"
        >
          Sign Up
        </button>

        <p>Have a account <span className='text-blue-400'>  <Link className="text-blue-500 underline" to="/">
          Log In
        </Link></span></p>
      </form>
    </div>
    </div>
  );
};

export default SignUp;
