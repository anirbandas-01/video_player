
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
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
    setFormData((prev)=> ({
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

        if(formData.coverImage) data.append("coverImage", formData.coverImage);

        const res = await api.post("/users/register", data, {
            headers: {"Content-Type": "multipart/form-data" },
        });

        alert("✅ Registration successful!");
        console.log("User:", res.data);
        navigate("/login");
    } catch (err) {
        console.error("Registration failed:", err);
        alert(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-black text-white'>

        <form 
         onSubmit={handleSubmit}
         className='bg-gray-900 p-6 rounded-lg w-full max-w-md space-y-3'>
            <h2 className='text-2xl font-bold mb-4 text-center'>Created Account</h2>
            
            <input
             type='text'
             name='fullname' 
             placeholder='Full Name' 
             value={formData.fullname} 
             onChange={handleChange}
             className='w-full p-2 bg-gray-800 rounded'
            />

            <input
            type='text'
            name='username'
            placeholder='Username'
            value={formData.username}
            onChange={handleChange}
            className='w-full p-2 bg-gray-800 rounded'
            />

            <input 
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className='w-full p-2 bg-gray-800 rounded'
            />

            <input 
            type='password'
            name='password'
            placeholder='password'
            value={formData.password}
            onChange={handleChange}
            className='w-full p-2 bg-gray-800 rounded'
            />

            <label>Avatar Image:</label>
            <input 
            type='file'
            name='avatar'
            accept='image/*'
            onChange={handleChange}
            className='w-full text-sm'
            />

            <label>Cover Image (optional):</label>
            <input 
            type='file'
            name='coverImage'
            accept='image/*'
            onChange={handleChange}
            className='w-full text-sm'
            />

            <button className='w-full bg-red-600 py-2 rounded hover:bg-red-700 disabled:opacity-50'>
              {loading ? "Registering..." : "Register"}    
            </button> 

            <p className='text-center text-gray-400'>
                Already have an account?{" "}
                <a href='/login' className='text-red-400 hover:underline'>
                  Login
                </a>
            </p>
        </form>
    </div>
  );
}

export default Register 