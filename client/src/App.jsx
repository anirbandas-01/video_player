import CommentSection from "./components/CommentSection";
import RecommendedList from "./components/RecommendedList";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import VideoPlayer from "./components/VideoPlayer";

export default function App() {
  return (
    <div className="flex bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />
      
      <main className="flex-1 flex gap-6 p-6 overflow-auto">
          <div className="flex-1 space-y-6">
            <VideoPlayer />
            <CommentSection /> 
          </div>
         
         <RecommendedList />
      </main>
      </div>
    </div>
  );
}