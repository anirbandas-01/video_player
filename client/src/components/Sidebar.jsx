import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Home, Compass, PlaySquare, Clock, ThumbsUp, Folder, Settings } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuSections = [
    {
      items: [
        { name: "Home", icon: Home, path: "/" },
        { name: "Trending", icon: Compass, path: "/trending" },
        { name: "Subscriptions", icon: PlaySquare, path: "/subscriptions" },
      ],
    },
    {
      items: [
        { name: "Library", icon: Folder, path: "/library" },
        { name: "History", icon: Clock, path: "/history" },
        { name: "Liked Videos", icon: ThumbsUp, path: "/liked" },
      ],
    },
    {
      items: [
        { name: "Settings", icon: Settings, path: "/settings" },
      ],
    },
  ];

  return (
    <aside
      className={`bg-[#0f0f0f] h-screen sticky top-0 overflow-y-auto transition-all duration-300 ${
        isCollapsed ? "w-[72px]" : "w-[240px]"
      }`}
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#3f3f3f #0f0f0f'
      }}
    >
      <div className="flex flex-col h-full pt-2 pb-4">
        {menuSections.map((section, i) => (
          <div key={i} className={`${i > 0 ? 'border-t border-[#3f3f3f] mt-2 pt-2' : ''}`}>
            <nav className="flex flex-col">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center gap-6 px-3 mx-3 py-2.5 rounded-lg transition-all duration-200 group ${
                      isActive 
                        ? 'bg-[#272727] text-white' 
                        : 'text-[#f1f1f1] hover:bg-[#272727]'
                    }`}
                  >
                    <Icon 
                      size={24} 
                      className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-[#f1f1f1]'}`}
                    />
                    {!isCollapsed && (
                      <span className="text-sm font-medium whitespace-nowrap">
                        {item.name}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  );
}