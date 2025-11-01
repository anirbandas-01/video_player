import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Video, User, Mail, Lock, Image } from 'lucide-react';
import api from "../api/api";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    avatar: null,
    coverImage: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("fullname", formData.fullname);
      data.append("username", formData.username);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("avatar", formData.avatar);

      if (formData.coverImage) data.append("coverImage", formData.coverImage);

      const res = await api.post("/users/register", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Registration successful!");
      navigate("/login");
    } catch (err) {
      console.error("Registration failed:", err);
      alert(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] py-8'>
      <div className='w-full max-w-md p-8 animate-fade-in'>
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
            <Video className="w-7 h-7 text-white" />
          </div>
          <span className="text-3xl font-bold text-white tracking-tight">ViewTube</span>
        </div>

        {/* Form */}
        <form 
          onSubmit={handleSubmit}
          className='bg-[#1a1a1a] border border-[#272727] p-8 rounded-2xl space-y-4 shadow-2xl'
        >
          <h2 className='text-2xl font-bold mb-4 text-white text-center'>Create Account</h2>

          {/* Full Name */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa]" />
            <input
              type='text'
              name='fullname'
              placeholder='Full Name'
              value={formData.fullname}
              onChange={handleChange}
              className='w-full pl-11 pr-4 py-3 bg-[#0f0f0f] border border-[#3f3f3f] rounded-lg text-white placeholder-[#666] focus:border-[#3ea6ff] focus:outline-none transition-colors'
              required
            />
          </div>

          {/* Username */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa]" />
            <input
              type='text'
              name='username'
              placeholder='Username'
              value={formData.username}
              onChange={handleChange}
              className='w-full pl-11 pr-4 py-3 bg-[#0f0f0f] border border-[#3f3f3f] rounded-lg text-white placeholder-[#666] focus:border-[#3ea6ff] focus:outline-none transition-colors'
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa]" />
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              className='w-full pl-11 pr-4 py-3 bg-[#0f0f0f] border border-[#3f3f3f] rounded-lg text-white placeholder-[#666] focus:border-[#3ea6ff] focus:outline-none transition-colors'
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa]" />
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              className='w-full pl-11 pr-4 py-3 bg-[#0f0f0f] border border-[#3f3f3f] rounded-lg text-white placeholder-[#666] focus:border-[#3ea6ff] focus:outline-none transition-colors'
              required
            />
          </div>

          {/* Avatar Upload */}
          <div>
            <label className="block text-sm font-medium text-[#aaa] mb-2">Profile Picture *</label>
            <div className="relative">
              <input
                type='file'
                name='avatar'
                accept='image/*'
                onChange={handleChange}
                className='w-full text-sm text-[#aaa] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#272727] file:text-white hover:file:bg-[#3f3f3f] file:cursor-pointer cursor-pointer'
                required
              />
            </div>
          </div>

          {/* Cover Image Upload */}
          <div>
            <label className="block text-sm font-medium text-[#aaa] mb-2">Cover Image (optional)</label>
            <div className="relative">
              <input
                type='file'
                name='coverImage'
                accept='image/*'
                onChange={handleChange}
                className='w-full text-sm text-[#aaa] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#272727] file:text-white hover:file:bg-[#3f3f3f] file:cursor-pointer cursor-pointer'
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={loading}
            className='w-full bg-red-600 py-3 rounded-lg font-semibold text-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors mt-6'
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

          {/* Login Link */}
          <p className='text-center text-[#aaa] text-sm mt-4'>
            Already have an account?{" "}
            <Link to='/login' className='text-red-500 hover:text-red-400 font-medium transition-colors'>
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;