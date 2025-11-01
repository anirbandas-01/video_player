import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Trending from "./pages/Trending";
import Subscriptions from "./pages/Subscription";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const sampleVideos = [
    {
      id: 1,
      title: "Building a Modern Web App with React and Tailwind CSS - Full Course",
      channel: "Code Master",
      channelAvatar: "from-blue-500 to-cyan-500",
      views: "1.2M",
      uploadDate: "2 days ago",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1280&h=720&fit=crop",
      duration: "15:24",
      description: "Learn how to build beautiful, responsive web applications using React and Tailwind CSS. This comprehensive tutorial covers everything from setup to deployment.",
      subscribers: "2.5M"
    },
    {
      id: 2,
      title: "The Future of Artificial Intelligence and Machine Learning Explained",
      channel: "Tech Insights",
      channelAvatar: "from-purple-500 to-pink-500",
      views: "3.5M",
      uploadDate: "1 week ago",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1280&h=720&fit=crop",
      duration: "23:45",
      description: "Explore the cutting-edge developments in AI and ML that are shaping our future. From neural networks to transformers, we cover it all.",
      subscribers: "4.2M"
    },
    {
      id: 3,
      title: "Space Exploration: Journey to Mars - Documentary 2024",
      channel: "Cosmos Channel",
      channelAvatar: "from-orange-500 to-red-500",
      views: "5.8M",
      uploadDate: "3 days ago",
      thumbnail: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1280&h=720&fit=crop",
      duration: "42:18",
      description: "Join us on an incredible journey as we explore humanity's mission to reach Mars and establish a permanent presence on the Red Planet.",
      subscribers: "8.9M"
    },
    {
      id: 4,
      title: "Mastering JavaScript: Advanced Concepts Explained Simply",
      channel: "Dev Academy",
      channelAvatar: "from-yellow-500 to-orange-500",
      views: "890K",
      uploadDate: "5 days ago",
      thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=1280&h=720&fit=crop",
      duration: "28:52",
      description: "Deep dive into advanced JavaScript concepts including closures, promises, async/await, and prototype inheritance.",
      subscribers: "1.8M"
    },
    {
      id: 5,
      title: "Cinematic Travel Vlog: Exploring Japan in 4K",
      channel: "Wanderlust Films",
      channelAvatar: "from-green-500 to-emerald-500",
      views: "2.1M",
      uploadDate: "1 day ago",
      thumbnail: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1280&h=720&fit=crop",
      duration: "18:33",
      description: "Experience the beauty of Japan through stunning cinematography. From Tokyo's neon streets to Kyoto's ancient temples.",
      subscribers: "3.2M"
    },
    {
      id: 6,
      title: "10 Minute Morning Workout - No Equipment Needed",
      channel: "Fitness Hub",
      channelAvatar: "from-red-500 to-pink-500",
      views: "4.2M",
      uploadDate: "2 weeks ago",
      thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1280&h=720&fit=crop",
      duration: "10:05",
      description: "Start your day right with this quick and effective morning workout routine. Perfect for busy schedules!",
      subscribers: "6.5M"
    },
    {
      id: 7,
      title: "The Science Behind Black Holes - Astrophysics Explained",
      channel: "Physics Explained",
      channelAvatar: "from-indigo-500 to-purple-500",
      views: "6.7M",
      uploadDate: "4 days ago",
      thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1280&h=720&fit=crop",
      duration: "31:47",
      description: "Unravel the mysteries of black holes - from event horizons to gravitational waves. Science made accessible.",
      subscribers: "5.1M"
    },
    {
      id: 8,
      title: "Cooking the Perfect Italian Pasta from Scratch",
      channel: "Chef's Kitchen",
      channelAvatar: "from-yellow-500 to-red-500",
      views: "1.8M",
      uploadDate: "6 days ago",
      thumbnail: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1280&h=720&fit=crop",
      duration: "19:28",
      description: "Master the art of making authentic Italian pasta from scratch. Tips and tricks from professional chefs.",
      subscribers: "2.9M"
    },
  ];

  return (
    <div className="flex bg-[#0f0f0f] min-h-screen text-white">
      <Sidebar isOpen={sidebarOpen} />

      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-60' : 'ml-20'}`}>
        <Topbar 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          sidebarOpen={sidebarOpen}
        />
      
        <main className="flex-1 mt-14 overflow-auto">
          <Routes>
            <Route 
              path="/" 
              element={<Home videos={sampleVideos} onSelect={setSelectedVideo} />}
            /> 
            <Route path="/trending" element={<Trending />}/>
            <Route path="/subscriptions" element={<Subscriptions />}/>
            <Route
              path="/watch/:videoId"
              element={<Watch videos={sampleVideos} selectedVideo={selectedVideo} onSelect={setSelectedVideo} />}
            />
            <Route path="/upload" element={<Upload />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}