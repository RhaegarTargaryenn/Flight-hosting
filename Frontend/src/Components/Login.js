import React , {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import login from '../Assests/login.jpg';

const Login = () => {
     const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('https://flight-yc09.onrender.com/api/v1/login', {
            email,
            password,
          });
          console.log('Logged in:', response.data.user.name);
          toast.success(`Welcome back ${response.data.user.name}`);
           navigate('/main');
        } catch (error) {
          toast.error("you are not registred");
          console.error('Login error:', error.response.data);
        }
      };


  return (
    <div className='w-[100vw] h-[100vh] pt-32 bg-center bg-cover ' style={{ backgroundImage: `url(${login})` }}>
     <div className="container mx-auto max-w-md p-4 bg-gray-700 rounded-lg shadow-2xl">
    <h2 className="text-2xl font-bold mb-4 flex justify-center">Login</h2>
    <form onSubmit={handleLogin}>
      <input
        className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        type="submit"
      >
        Login
      </button>
    </form>
    <p className="text-sm mt-4 text-center">
      Don't have an account?{' '}
      <Link className="text-blue-500 underline" to="/signup">
        Sign Up
      </Link>
    </p>
  </div>
  </div>
  )
}

export default Login
