// File: client/src/components/Navbar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Search, Video, Bell, User, LogOut, Settings, Upload } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-4">
          <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-full">
            <Menu className="w-5 h-5" />
          </button>
          <div 
            className="flex items-center gap-1 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <Video className="w-7 h-7 text-red-600" />
            <span className="text-xl font-semibold">YouTube</span>
          </div>
        </div>
        
        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex items-center">
            <div className="flex-1 flex items-center border border-gray-300 rounded-l-full px-4 py-2">
              <input 
                type="text" 
                placeholder="Search" 
                className="flex-1 outline-none text-sm"
              />
            </div>
            <button className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <button 
                className="p-2 hover:bg-gray-100 rounded-full"
                title="Upload Video"
              >
                <Upload className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="w-5 h-5" />
              </button>
              
              {/* User Profile Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-8 h-8 rounded-full overflow-hidden hover:ring-2 hover:ring-gray-300"
                >
                  {user.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user.fullname} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-semibold">
                      {user.fullname?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </button>

                {/* Dropdown Menu */}
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="font-semibold text-sm">{user.fullname}</p>
                      <p className="text-xs text-gray-600">@{user.username}</p>
                    </div>
                    
                    <button 
                      onClick={() => {
                        navigate(`/channel/${user.username}`);
                        setShowDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-3"
                    >
                      <User className="w-4 h-4" />
                      Your Channel
                    </button>
                    
                    <button 
                      onClick={() => {
                        navigate('/settings');
                        setShowDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-3"
                    >
                      <Settings className="w-4 h-4" />
                      Settings
                    </button>
                    
                    <div className="border-t border-gray-200 my-2"></div>
                    
                    <button 
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-3 text-red-600"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <button 
              onClick={() => navigate('/login')}
              className="px-4 py-2 border border-gray-300 rounded-full hover:bg-blue-50 hover:border-blue-400 text-blue-600 font-medium text-sm flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


















/* import React from 'react';
import { Menu, Search, Video, Bell, User } from 'lucide-react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-4">
          <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-full">
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1">
            <Video className="w-7 h-7 text-red-600" />
            <span className="text-xl font-semibold">YouTube</span>
          </div>
        </div>
        
        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex items-center">
            <div className="flex-1 flex items-center border border-gray-300 rounded-l-full px-4 py-2">
              <input 
                type="text" 
                placeholder="Search" 
                className="flex-1 outline-none text-sm"
              />
            </div>
            <button className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Video className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
 */