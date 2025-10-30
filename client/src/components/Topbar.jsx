import { FaYoutube, FaSearch, FaBell, FaMicrophone } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Topbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-background flex items-center justify-between px-6 py-3 border-b border-gray-800">
      {/* Left section: logo */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
        <FaYoutube className="text-accent text-2xl" />
        <span className="text-xl font-semibold text-white">YouTube</span>
      </div>

      {/* Center section: search */}
      <div className="flex items-center w-[40%] max-w-xl">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-sidebar border border-gray-700 text-white text-sm rounded-l-full px-4 py-2 outline-none focus:border-accent"
        />
        <button className="bg-card px-4 py-2 rounded-r-full border border-gray-700 hover:bg-gray-700 transition">
          <FaSearch className="text-white" />
        </button>
        <button className="ml-3 bg-card p-2 rounded-full hover:bg-gray-700 transition">
          <FaMicrophone />
        </button>
      </div>

      {/* Right section */}
      <div className="relative flex items-center gap-5 text-white">
        <MdVideoCall
          className="text-xl cursor-pointer hover:text-accent transition"
          onClick={() => navigate("/upload")}
        />
        <FaBell className="text-xl cursor-pointer hover:text-accent transition" />

        {/* If user logged in */}
        {user ? (
          <div className="relative">
            <img
              src={user.avatar?.url || user.avatar || "/default-avatar.png"}
              alt="User avatar"
              className="w-12 h-12 rounded-full object-cover cursor-pointer border border-gray-600"
              onClick={() => setShowMenu(!showMenu)}
            />
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg border border-gray-700 py-2">
                <p className="px-4 py-2 text-sm text-gray-300 border-b border-gray-700">
                  Signed in as <br />
                  <span className="font-semibold text-white">{user.username}</span>
                </p>
                <Link
                  to="/channel/me"
                  className="block px-4 py-2 text-sm hover:bg-gray-800"
                  onClick={() => setShowMenu(false)}
                >
                  My Channel
                </Link>
                <Link
                  to="/upload"
                  className="block px-4 py-2 text-sm hover:bg-gray-800"
                  onClick={() => setShowMenu(false)}
                >
                  Upload Video
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setShowMenu(false);
                    navigate("/login");
                  }}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-800"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          // If not logged in → show Login button
          <div className="flex gap-3">
            <Link
              to="/login"
              className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="border border-red-600 text-red-400 px-4 py-2 rounded hover:bg-red-600 hover:text-white transition"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
