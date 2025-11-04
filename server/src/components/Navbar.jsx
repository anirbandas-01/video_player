import React from 'react';
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
