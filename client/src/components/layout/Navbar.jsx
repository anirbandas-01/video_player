// client/src/components/layout/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';
import { Search, Upload, Bell, User, Menu } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#212121] h-14 px-4 flex items-center justify-between z-50">
      {/* Left Section */}
      <div className="flex items-center gap-5 min-w-[200px]">
        <button className="text-white hover:bg-[#3a3a3a] p-2 rounded-full">
          <Menu size={20} />
        </button>
        <Link to="/" className="flex items-center gap-1">
          <div className="bg-red-600 p-1.5 rounded">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
            </svg>
          </div>
          <span className="text-xl font-semibold text-white ml-0.5">YouTube</span>
        </Link>
      </div>

      {/* Center Search */}
      <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-8">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type to search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#121212] text-white px-4 py-2 border border-[#303030] rounded-l-full focus:border-blue-500 outline-none placeholder-gray-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[#303030] hover:bg-[#3a3a3a] border border-[#303030] rounded-r-full"
          >
            <Search size={20} className="text-white" />
          </button>
        </div>
      </form>

      {/* Right Section */}
      <div className="flex items-center gap-2 min-w-[200px] justify-end">
        {user ? (
          <>
            <button className="p-2 hover:bg-[#3a3a3a] rounded-full">
              <Bell size={22} className="text-white" />
            </button>
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="w-8 h-8 rounded-full overflow-hidden border-2 border-transparent hover:border-gray-400"
              >
                {user.avatar ? (
                  <img src={user.avatar} alt={user.fullname} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    {user.fullname?.[0]?.toUpperCase()}
                  </div>
                )}
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-[#282828] rounded-lg shadow-2xl py-2">
                  <Link
                    to={`/channel/${user.username}`}
                    className="block px-4 py-3 hover:bg-[#3a3a3a]"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <div className="flex items-center gap-3">
                      {user.avatar ? (
                        <img src={user.avatar} alt="" className="w-10 h-10 rounded-full" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                          {user.fullname?.[0]?.toUpperCase()}
                        </div>
                      )}
                      <div>
                        <div className="font-medium text-white">{user.fullname}</div>
                        <div className="text-sm text-gray-400">@{user.username}</div>
                      </div>
                    </div>
                  </Link>
                  <hr className="my-2 border-[#3a3a3a]" />
                  <Link
                    to="/upload"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-[#3a3a3a] text-white"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <Upload size={20} />
                    <span>Upload Video</span>
                  </Link>
                  <Link
                    to="/history"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-[#3a3a3a] text-white"
                    onClick={() => setShowUserMenu(false)}
                  >
                    Watch History
                  </Link>
                  <hr className="my-2 border-[#3a3a3a]" />
                  <button
                    onClick={() => {
                      logout();
                      setShowUserMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-[#3a3a3a] text-white"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <Link
            to="/login"
            className="flex items-center gap-2 px-4 py-1.5 border border-[#3ea6ff] text-[#3ea6ff] rounded-full hover:bg-[#263850]"
          >
            <User size={20} />
            <span className="font-medium">Sign in</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;