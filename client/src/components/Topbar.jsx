import { FaYoutube, FaSearch, FaBell, FaMicrophone } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 bg-background flex items-center justify-between px-6 py-3 border-b border-gray-800">
      {/* Left section: logo */}
      <div className="flex items-center gap-2">
        <FaYoutube className="text-accent text-2xl" />
        <span className="text-xl font-semibold text-white">YouTube</span>
      </div>

      {/* Center section: search */}
      <div className="flex items-center w-[40%] max-w-xl">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-sidebar border border-gray-700 text-white text-sm rounded-l-full px-4 py-2 outline-none focus:border-accent"
        />
        <button className="bg-card px-4 py-2 rounded-r-full border border-gray-700 hover:bg-gray-700 transition">
          <FaSearch className="text-white" />
        </button>
        <button className="ml-3 bg-card p-2 rounded-full hover:bg-gray-700 transition">
          <FaMicrophone />
        </button>
      </div>

      {/* Right section: icons */}
      <div className="flex items-center gap-5 text-white">
        <MdVideoCall className="text-xl cursor-pointer hover:text-accent transition" />
        <FaBell className="text-xl cursor-pointer hover:text-accent transition" />
        <div className="w-9 h-9 rounded-full bg-gray-600 cursor-pointer" />
      </div>
    </header>
  );
}
