// src/components/Sidebar.jsx
import { FaYoutube, FaHistory, FaCog } from "react-icons/fa";
import { MdExplore, MdSubscriptions, MdVideoLibrary, MdFeedback } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";

export default function Sidebar() {
  const mainMenu = [
    { label: "Explore", icon: <MdExplore /> },
    { label: "Trending", icon: <IoMdTrendingUp /> },
    { label: "Subscriptions", icon: <MdSubscriptions /> },
  ];

  const libraryMenu = [
    { label: "Library", icon: <MdVideoLibrary /> },
    { label: "History", icon: <FaHistory /> },
    { label: "Watch later", icon: "⏰" },
    { label: "Liked videos", icon: "❤️" },
  ];

  const subscriptions = ["YouTube", "Made by Google", "Adobe", "HÖR Berlin"];

  return (
    <div className="h-screen w-64 bg-sidebar text-textSecondary flex flex-col p-4 overflow-y-auto border-r border-gray-800">
      {/* Logo */}
      <div className="flex items-center gap-2 text-white text-xl font-bold mb-6">
        <FaYoutube className="text-accent text-2xl" />
        YouTube
      </div>

      {/* Main Menu */}
      <div className="mb-4">
        {mainMenu.map((item) => (
          <div key={item.label} className="flex items-center gap-3 p-2 rounded-lg hover:bg-card hover:text-white cursor-pointer">
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <hr className="border-gray-700 my-2" />

      {/* Library */}
      <div className="mb-4">
        {libraryMenu.map((item) => (
          <div key={item.label} className="flex items-center gap-3 p-2 rounded-lg hover:bg-card hover:text-white cursor-pointer">
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <hr className="border-gray-700 my-2" />

      {/* Subscriptions */}
      <h3 className="uppercase text-xs text-gray-400 mb-2">Subscriptions</h3>
      <div className="mb-4">
        {subscriptions.map((name) => (
          <div key={name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-card hover:text-white cursor-pointer">
            <FaYoutube className="text-red-500 text-sm" />
            <span>{name}</span>
          </div>
        ))}
      </div>

      <hr className="border-gray-700 my-2" />

      {/* More from YouTube */}
      <h3 className="uppercase text-xs text-gray-400 mb-2">More from YouTube</h3>
      <div className="mb-4">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-card hover:text-white cursor-pointer">
          <FaCog />
          <span>Settings</span>
        </div>
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-card hover:text-white cursor-pointer">
          <MdFeedback />
          <span>Send feedback</span>
        </div>
      </div>
    </div>
  );
}
