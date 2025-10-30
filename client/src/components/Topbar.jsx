import { Search, Mic, Bell, Video, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Topbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search
      console.log("Searching:", searchQuery);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0f0f0f] border-b border-[#3f3f3f]">
      <div className="flex items-center justify-between h-14 px-4">
        {/* Left - Logo */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#272727] rounded-full transition-colors">
            <Menu size={20} className="text-white" />
          </button>
          <Link to="/" className="flex items-center gap-1">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <Video size={18} className="text-white" />
            </div>
            <span className="text-xl font-semibold text-white hidden sm:block">
              YouTube
            </span>
          </Link>
        </div>

        {/* Center - Search */}
        <form onSubmit={handleSearch} className="flex items-center flex-1 max-w-[600px] mx-4">
          <div className="flex items-center w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="flex-1 h-10 bg-[#121212] border border-[#303030] rounded-l-full px-4 text-sm text-white placeholder-[#888888] focus:border-[#1c62b9] focus:outline-none"
            />
            <button
              type="submit"
              className="h-10 px-6 bg-[#222222] border border-l-0 border-[#303030] rounded-r-full hover:bg-[#303030] transition-colors"
            >
              <Search size={20} className="text-white" />
            </button>
          </div>
          <button
            type="button"
            className="ml-2 p-2 bg-[#181818] hover:bg-[#272727] rounded-full transition-colors"
          >
            <Mic size={20} className="text-white" />
          </button>
        </form>

        {/* Right - Icons & Profile */}
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <button
                onClick={() => navigate("/upload")}
                className="p-2 hover:bg-[#272727] rounded-full transition-colors"
              >
                <Video size={22} className="text-white" />
              </button>
              <button className="p-2 hover:bg-[#272727] rounded-full transition-colors">
                <Bell size={22} className="text-white" />
              </button>
              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="w-8 h-8 rounded-full overflow-hidden border-2 border-transparent hover:border-[#3f3f3f] transition-colors"
                >
                  <img
                    src={user.avatar?.url || user.avatar || "/default-avatar.png"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </button>
                {showMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-[#282828] rounded-xl shadow-2xl border border-[#3f3f3f] py-2">
                    <div className="px-4 py-3 border-b border-[#3f3f3f]">
                      <div className="flex items-center gap-3">
                        <img
                          src={user.avatar?.url || user.avatar || "/default-avatar.png"}
                          alt="Profile"
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="text-white font-medium text-sm">{user.username}</p>
                          <p className="text-[#aaaaaa] text-xs">{user.email}</p>
                        </div>
                      </div>
                    </div>
                    <Link
                      to="/channel/me"
                      className="block px-4 py-2.5 text-sm text-white hover:bg-[#3f3f3f] transition-colors"
                      onClick={() => setShowMenu(false)}
                    >
                      Your Channel
                    </Link>
                    <Link
                      to="/upload"
                      className="block px-4 py-2.5 text-sm text-white hover:bg-[#3f3f3f] transition-colors"
                      onClick={() => setShowMenu(false)}
                    >
                      Upload Video
                    </Link>
                    <div className="border-t border-[#3f3f3f] my-2"></div>
                    <button
                      onClick={() => {
                        logout();
                        setShowMenu(false);
                        navigate("/login");
                      }}
                      className="block w-full text-left px-4 py-2.5 text-sm text-white hover:bg-[#3f3f3f] transition-colors"
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
              className="flex items-center gap-2 px-4 py-1.5 border border-[#3f3f3f] rounded-full text-[#3ea6ff] hover:bg-[#263850] transition-colors text-sm font-medium"
            >
              <div className="w-6 h-6 rounded-full border-2 border-[#3ea6ff] flex items-center justify-center">
                <span className="text-xs">👤</span>
              </div>
              Sign in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}