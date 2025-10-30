
import React, { useState } from 'react';
import { 
  Search, Mic, Bell, Video, Menu, Home, Compass, PlaySquare, 
  Clock, ThumbsUp, ThumbsDown, Share2, MoreHorizontal, 
  ChevronDown, MoreVertical, Folder, Settings, User
} from 'lucide-react';


const Topbar = ({ onMenuClick }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-[#0f0f0f] border-b border-[#272727] z-50 flex items-center justify-between px-4">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="p-2 hover:bg-[#272727] rounded-full transition-all duration-200"
        >
          <Menu className="w-5 h-5 text-white" />
        </button>
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center">
            <Video className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">ViewTube</span>
        </div>
      </div>

      {/* Center - Search */}
      <div className="flex-1 max-w-[600px] mx-4 flex items-center gap-2">
        <div className="flex items-center w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="flex-1 h-10 bg-[#121212] border border-[#303030] rounded-l-full px-5 text-sm text-white placeholder-[#888] focus:border-[#3ea6ff] focus:outline-none transition-colors"
          />
          <button className="h-10 px-6 bg-[#222] border border-l-0 border-[#303030] rounded-r-full hover:bg-[#303030] transition-colors">
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>
        <button className="w-10 h-10 bg-[#181818] hover:bg-[#272727] rounded-full flex items-center justify-center transition-colors">
          <Mic className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <button className="w-10 h-10 hover:bg-[#272727] rounded-full flex items-center justify-center transition-colors">
          <Video className="w-5 h-5 text-white" />
        </button>
        <button className="w-10 h-10 hover:bg-[#272727] rounded-full flex items-center justify-center transition-colors">
          <Bell className="w-5 h-5 text-white" />
        </button>
        <div className="relative">
          <button 
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold hover:ring-2 hover:ring-white/20 transition-all"
          >
            U
          </button>
          {showUserMenu && (
            <div className="absolute right-0 top-12 w-64 bg-[#282828] rounded-xl shadow-2xl border border-[#3f3f3f] overflow-hidden">
              <div className="p-4 border-b border-[#3f3f3f]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    U
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">User Name</p>
                    <p className="text-[#aaa] text-xs">user@email.com</p>
                  </div>
                </div>
              </div>
              <button className="w-full px-4 py-3 text-left text-sm text-white hover:bg-[#3f3f3f] transition-colors">
                Your Channel
              </button>
              <button className="w-full px-4 py-3 text-left text-sm text-white hover:bg-[#3f3f3f] transition-colors">
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};