import React from 'react';
import { Home, TrendingUp, Video, Library, History, Clock, ThumbsUp, Settings, HelpCircle, Flag } from 'lucide-react';

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: TrendingUp, label: 'Trending' },
    { icon: Video, label: 'Subscriptions' },
    { icon: Library, label: 'Library' },
    { icon: History, label: 'History' },
    { icon: Clock, label: 'Watch Later' },
    { icon: ThumbsUp, label: 'Liked Videos' },
  ];

  return (
    <aside className={`fixed left-0 top-14 bg-white h-full overflow-y-auto transition-all duration-300 z-40 border-r border-gray-200 ${isOpen ? 'w-60' : 'w-20'}`}>
      <div className="py-3">
        {menuItems.map((item, idx) => (
          <button 
            key={idx}
            className={`w-full flex items-center gap-6 px-6 py-3 hover:bg-gray-100 ${item.active ? 'bg-gray-100' : ''}`}
          >
            <item.icon className="w-5 h-5" />
            {isOpen && <span className="text-sm font-medium">{item.label}</span>}
          </button>
        ))}
        
        {isOpen && (
          <>
            <div className="border-t border-gray-200 my-3"></div>
            <div className="px-6 py-3">
              <h3 className="text-sm font-semibold mb-3">Subscriptions</h3>
              {['Tech Channel', 'Music Vids', 'Cooking Show', 'Game Stream'].map((channel, idx) => (
                <div key={idx} className="flex items-center gap-3 py-2 hover:bg-gray-100 px-2 rounded cursor-pointer">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-sm">{channel}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 my-3"></div>
            <div className="px-6 py-3 space-y-2">
              <button className="flex items-center gap-6 w-full py-2 hover:bg-gray-100 px-2 rounded">
                <Settings className="w-5 h-5" />
                <span className="text-sm">Settings</span>
              </button>
              <button className="flex items-center gap-6 w-full py-2 hover:bg-gray-100 px-2 rounded">
                <Flag className="w-5 h-5" />
                <span className="text-sm">Report</span>
              </button>
              <button className="flex items-center gap-6 w-full py-2 hover:bg-gray-100 px-2 rounded">
                <HelpCircle className="w-5 h-5" />
                <span className="text-sm">Help</span>
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;