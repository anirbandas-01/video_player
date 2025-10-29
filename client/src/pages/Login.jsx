import React, { useState } from 'react'
import api from "../api/api";
import { useNavigate } from 'react-router-dom'; 

const Login = () => {

    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: "",
        username: "",
        password: "",
    });

    const [ loading, setLoading ]= useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev)=> ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await api.post("/users/login", loginData);
            const { user, accessToken } = res.data.data;

            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("user", JSON.stringify(user));

            alert("✅ Login successful!");
            navigate("/");            
        } catch (err) {
              console.error("Login error:", err);
              alert(err.response?.data?.message || "Login failed");
        } finally {
             setLoading(false);
            }
    };


  return (
    <div className='flex justify-center items-center min-h-screen bg-black text-white'>
        <form
          onSubmit={handleSubmit}
          className='bg-gray-900 p-6 rounded-lg w-full max-w-md space-y-3'>
            <h2 className='text-2xl font-bold mb-4 text-center'>Login</h2>

            <input 
            type='text'
            name='username'
            placeholder='Username or email'
            className='w-full p-2 bg-gray-800 rounded'
            value={loginData.username}
            onChange={handleChange}
            />

            <input 
            type='password'
            name='password'
            placeholder='Password'
            className='w-full p-2 bg-gray-800 rounded'
            value={loginData.password}
            onChange={handleChange}
            />

            <button 
              disabled={loading}
              className='w-full bg-red-600 py-2 rounded hover:bg-red-700 disabled:opacity-50'>
                {loading ? 'Logging in...' : 'Login' }
            </button>

            <p className='text-center text-gray-400'>
                Don't have an account?{" "}
                <a href='/register' className='text-red-400 hover:underline'>
                  Register
                </a> 
            </p>
        </form>
    </div>
  );
}

export default Login