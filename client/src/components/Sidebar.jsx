import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Collapse sidebar automatically on small screens
  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 768); // collapse below md
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuSections = [
    {
      title: "Main",
      items: [
        { name: "Home", icon: "🏠", path: "/" },
        { name: "Trending", icon: "🔥", path: "/trending" },
        { name: "Subscriptions", icon: "📺", path: "/subscriptions" },
      ],
    },
    {
      title: "Library",
      items: [
        { name: "Library", icon: "📚", path: "/library" },
        { name: "History", icon: "🕒", path: "/history" },
        { name: "Watch Later", icon: "⏰", path: "/watch-later" },
        { name: "Liked Videos", icon: "❤️", path: "/liked" },
      ],
    },
    {
      title: "More from YouTube",
      items: [
        { name: "YouTube Premium", icon: "💎", path: "/premium" },
        { name: "YouTube Music", icon: "🎵", path: "/music" },
      ],
    },
    {
      title: "Settings & Help",
      items: [
        { name: "Settings", icon: "⚙️", path: "/settings" },
      ],
    },
  ];

  return (
    <aside
      className={`bg-gray-900 h-screen text-white p-4 sticky top-0 overflow-y-auto border-r border-gray-800 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Brand / Logo */}
      <h2
        className={`text-xl font-bold mb-6 flex items-center gap-2 text-red-500 transition-opacity duration-300 ${
          isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        🎬 MyTube
      </h2>

      {/* Menu Sections */}
      {menuSections.map((section, i) => (
        <div key={i} className="mb-6">
          {!isCollapsed && section.title && (
            <h3 className="text-sm text-gray-400 mb-2 uppercase tracking-wide">{section.title}</h3>
          )}
          <nav className="flex flex-col gap-2">
            {section.items.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 p-2 rounded-lg transition-colors duration-200 ${
                  location.pathname === item.path ? "bg-red-600" : "hover:bg-gray-700"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            ))}
          </nav>
        </div>
      ))}

      {/* Footer */}
      {!isCollapsed && (
        <p className="text-xs text-gray-500 mt-6 border-t border-gray-700 pt-4">
          © 2025 MyTube Clone
        </p>
      )}
    </aside>
  );
}
