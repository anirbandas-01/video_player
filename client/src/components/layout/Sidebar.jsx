// src/components/layout/Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';
import { Home, TrendingUp, History, Clock, ThumbsUp, Folder } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const { user } = useAuth();

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: TrendingUp, label: 'Trending', path: '/trending' },
  ];

  const userMenuItems = user ? [
    { icon: History, label: 'Watch History', path: '/history' },
    { icon: Clock, label: 'Watch Later', path: '/watch-later' },
    { icon: ThumbsUp, label: 'Liked Videos', path: '/liked' },
    { icon: Folder, label: 'My Videos', path: `/channel/${user.username}` },
  ] : [];

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-secondary border-r border-gray-800 overflow-y-auto">
      <nav className="p-3">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition ${
                isActive(item.path)
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <item.icon size={22} />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>

        {user && userMenuItems.length > 0 && (
          <>
            <hr className="my-4 border-gray-700" />
            <div className="space-y-1">
              {userMenuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg transition ${
                    isActive(item.path)
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <item.icon size={22} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;