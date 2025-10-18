import CommentSection from "./components/CommentSection";
import RecommendedList from "./components/RecommendedList";
import Sidebar from "./components/Sidebar";
import VideoPlayer from "./components/VideoPlayer";

export default function App() {
  return (
    <div className="flex bg-background min-h-screen">
      <Sidebar />

      <main className="flex-1 flex gap-6 p-6">
          <div className="flex-1">
            <VideoPlayer />
            <CommentSection />  {/*Added below the video */}
          </div>
         
         <RecommendedList />
      </main>


    </div>
  );
}