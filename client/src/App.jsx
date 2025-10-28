import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommentSection from "./components/CommentSection";
import RecommendedList from "./components/RecommendedList";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import VideoPlayer from "./components/VideoPlayer";
import VideoDetails from "./components/VideoDetails";

import  Home from "./pages/Home";
import Trending from "./pages/Trending";
import Subscriptions from './pages/Subscription';
import watch from './pages/Watch';
import  Upload  from "./pages/Upload";

export default function App() {

  const [selectedVideo, setSelectedVideo] = React.useState(null);

    const videos = [
    {
      id: 1,
      title: "Through the Wormhole – Did We Invent God?",
      channel: "Discovery Science",
      views: "2.1M views",
      thumbnail: "https://picsum.photos/250/140?random=1",
      src: "/videos/sample1.mp4",
    },
    {
      id: 2,
      title: "Cosmos: Possible Worlds – Episode 1",
      channel: "StarTalk",
      views: "1.3M views",
      thumbnail: "https://picsum.photos/250/140?random=2",
      src: "/videos/sample2.mp4",
    },
    {
      id: 3,
      title: "2001: A Space Odyssey – What It All Meant",
      channel: "Stanley Kubrick",
      views: "3.7M views",
      thumbnail: "https://picsum.photos/250/140?random=3",
      src: "/videos/sample3.mp4",
    },
  ];

  return (
    
    <div className="flex bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />
      
      <main className="flex-1 flex gap-6 p-6 overflow-auto">
          <div className="flex-1 space-y-6">
            
            <Routes>
              <Route path="/" element={<Home videos={videos} onSelect={setSelectedVideo} />}/> 
              <Route path="/trending" element={<Trending />}/>
              <Route path="/subscriptions" element={<Subscriptions />}/>
              <Route
                path="/watch/:videoId"
                element={
                  <>
                    <VideoPlayer video={selectedVideo} />
                    <VideoDetails video={selectedVideo}/>
                    <CommentSection />                  
                  </>
                }/>
                <Route path="/upload" element={<Upload />}/>
            </Routes>
          </div>
         
         <RecommendedList videos={videos} onSelectedVideo={setSelectedVideo} />
      </main>
      </div>
    </div>
  );
}