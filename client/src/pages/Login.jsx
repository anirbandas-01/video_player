import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Video, Mail, Lock } from 'lucide-react';
import api from "../api/api";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
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

      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]'>
      <div className='w-full max-w-md p-8 animate-fade-in'>
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
            <Video className="w-7 h-7 text-white" />
          </div>
          <span className="text-3xl font-bold text-white tracking-tight">ViewTube</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className='bg-[#1a1a1a] border border-[#272727] p-8 rounded-2xl space-y-5 shadow-2xl'>
          <h2 className='text-2xl font-bold mb-6 text-white text-center'>Welcome Back</h2>

          {/* Username Input */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa]" />
            <input 
              type='text'
              name='username'
              placeholder='Username or email'
              className='w-full pl-11 pr-4 py-3 bg-[#0f0f0f] border border-[#3f3f3f] rounded-lg text-white placeholder-[#666] focus:border-[#3ea6ff] focus:outline-none transition-colors'
              value={loginData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa]" />
            <input 
              type='password'
              name='password'
              placeholder='Password'
              className='w-full pl-11 pr-4 py-3 bg-[#0f0f0f] border border-[#3f3f3f] rounded-lg text-white placeholder-[#666] focus:border-[#3ea6ff] focus:outline-none transition-colors'
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button 
            disabled={loading}
            className='w-full bg-red-600 py-3 rounded-lg font-semibold text-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#3f3f3f]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#1a1a1a] text-[#aaa]">New to ViewTube?</span>
            </div>
          </div>

          {/* Register Link */}
          <Link 
            to='/register'
            className='block w-full text-center py-3 border border-[#3f3f3f] rounded-lg text-white hover:bg-[#272727] transition-colors font-medium'
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;