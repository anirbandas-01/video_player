import { FaHome, FaCompass, FaHistory, FaClock, FaHeart, FaYoutube, FaCog, FaFlag, FaQuestionCircle } from "react-icons/fa";
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar text-gray-200 h-screen p-4 overflow-y-auto border-r border-gray-800">
      {/* YouTube title */}
      <div className="flex items-center gap-2 mb-6">
        <FaYoutube className="text-accent text-2xl" />
        <span className="text-lg font-semibold">YouTube</span>
      </div>

      {/* MAIN NAVIGATION */}
      <div className="space-y-2 mb-6">
        <SidebarItem icon={<FaHome />} label="Home" active />
        <SidebarItem icon={<FaCompass />} label="Explore" />
        <SidebarItem icon={<MdSubscriptions />} label="Subscriptions" />
      </div>

      <hr className="border-gray-700 my-4" />

      {/* LIBRARY SECTION */}
      <div className="space-y-2 mb-6">
        <SidebarItem icon={<MdVideoLibrary />} label="Library" />
        <SidebarItem icon={<FaHistory />} label="History" />
        <SidebarItem icon={<FaClock />} label="Watch later" />
        <SidebarItem icon={<FaHeart />} label="Liked videos" />
      </div>

      <hr className="border-gray-700 my-4" />

      {/* SUBSCRIPTIONS SECTION */}
      <div className="mb-6">
        <h3 className="text-sm text-gray-400 mb-2 uppercase">Subscriptions</h3>
        <SidebarItem avatar label="Made by Google" />
        <SidebarItem avatar label="Adobe" />
        <SidebarItem avatar label="HÖR Berlin" />
      </div>

      <hr className="border-gray-700 my-4" />

      {/* MORE FROM YOUTUBE */}
      <div className="mb-6">
        <h3 className="text-sm text-gray-400 mb-2 uppercase">More from YouTube</h3>
        <SidebarItem icon={<FaYoutube />} label="YouTube Premium" />
        <SidebarItem icon={<FaYoutube />} label="YouTube Studio" />
        <SidebarItem icon={<FaYoutube />} label="YouTube Music" />
      </div>

      <hr className="border-gray-700 my-4" />

      {/* SETTINGS & FEEDBACK */}
      <div className="space-y-2">
        <SidebarItem icon={<FaCog />} label="Settings" />
        <SidebarItem icon={<FaFlag />} label="Report history" />
        <SidebarItem icon={<FaQuestionCircle />} label="Send feedback" />
      </div>

      <p className="text-xs text-gray-500 mt-6">© 2025 YouTube Clone</p>
    </aside>
  );
}

function SidebarItem({ icon, label, avatar, active }) {
  return (
    <div
      className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition ${
        active ? "bg-gray-700" : ""
      }`}
    >
      {avatar ? (
        <div className="w-6 h-6 rounded-full bg-gray-500" />
      ) : (
        <div className="text-lg">{icon}</div>
      )}
      <span className="text-sm">{label}</span>
    </div>
  );
}
