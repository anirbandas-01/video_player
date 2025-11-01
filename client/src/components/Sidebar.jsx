import React, { useState } from 'react';
import { Home, Compass, PlaySquare, Folder, Clock, ThumbsUp, Video } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'trending', icon: Compass, label: 'Trending', path: '/trending' },
    { id: 'subscriptions', icon: PlaySquare, label: 'Subscriptions', path: '/subscriptions' },
  ];

  const libraryItems = [
    { id: 'library', icon: Folder, label: 'Library', path: '/library' },
    { id: 'history', icon: Clock, label: 'History', path: '/history' },
    { id: 'liked', icon: ThumbsUp, label: 'Liked Videos', path: '/liked' },
  ];

  const subscriptions = [
    { id: 1, name: 'Code Master', color: 'from-blue-500 to-cyan-500' },
    { id: 2, name: 'Tech Insights', color: 'from-purple-500 to-pink-500' },
    { id: 3, name: 'Cosmos Channel', color: 'from-orange-500 to-red-500' },
    { id: 4, name: 'Dev Academy', color: 'from-yellow-500 to-orange-500' },
  ];

  return (
    <aside className={`fixed left-0 top-14 bottom-0 bg-[#0f0f0f] border-r border-[#272727] transition-all duration-300 overflow-y-auto z-40 ${isOpen ? 'w-60' : 'w-20'}`}>
      <div className="py-3">
        {/* Main Menu */}
        <div className="space-y-1 px-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-6 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                location.pathname === item.path
                  ? 'bg-[#272727] text-white'
                  : 'text-[#aaa] hover:bg-[#272727] hover:text-white'
              }`}
            >
              <item.icon className="w-6 h-6 flex-shrink-0" />
              {isOpen && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-[#272727] my-3 mx-3" />

        {/* Library */}
        <div className="space-y-1 px-3">
          {isOpen && <p className="px-3 py-2 text-sm font-semibold text-white">Library</p>}
          {libraryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-6 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                location.pathname === item.path
                  ? 'bg-[#272727] text-white'
                  : 'text-[#aaa] hover:bg-[#272727] hover:text-white'
              }`}
            >
              <item.icon className="w-6 h-6 flex-shrink-0" />
              {isOpen && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          ))}
        </div>

        {/* Subscriptions */}
        {isOpen && (
          <>
            <div className="h-px bg-[#272727] my-3 mx-3" />
            <div className="px-3">
              <p className="px-3 py-2 text-sm font-semibold text-white">Subscriptions</p>
              {subscriptions.map((channel) => (
                <button
                  key={channel.id}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#272727] transition-colors text-left"
                >
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${channel.color} flex-shrink-0`} />
                  <span className="text-sm text-[#aaa] hover:text-white transition-colors truncate">{channel.name}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;