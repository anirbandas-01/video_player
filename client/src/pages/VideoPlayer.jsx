import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ThumbsUp, ThumbsDown, Share2, Download, MoreHorizontal, Flag } from 'lucide-react';
import api from '../api/api';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import VideoCard from '../components/VideoCard';

const VideoPlayer = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false); // Collapsed by default on video page
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    fetchVideo();
    fetchRelatedVideos();
  }, [videoId]);

  const fetchVideo = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/videos/${videoId}`);
      
      if (response.data.success) {
        setVideo(response.data.data);
      }
    } catch (err) {
      console.error('Error fetching video:', err);
      setError('Failed to load video');
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedVideos = async () => {
    try {
      const response = await api.get('/videos?limit=10');
      if (response.data.success) {
        setRelatedVideos(response.data.data.docs || []);
      }
    } catch (err) {
      console.error('Error fetching related videos:', err);
    }
  };

  const formatViews = (views) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views;
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <Sidebar isOpen={sidebarOpen} />
        <main className={`pt-14 transition-all duration-300 ${sidebarOpen ? 'ml-60' : 'ml-20'}`}>
          <div className="p-6">
            <div className="animate-pulse">
              <div className="bg-gray-300 aspect-video rounded-xl mb-4"></div>
              <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="flex gap-4">
                <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/6"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error || !video) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <Sidebar isOpen={sidebarOpen} />
        <main className={`pt-14 transition-all duration-300 ${sidebarOpen ? 'ml-60' : 'ml-20'}`}>
          <div className="p-6 text-center">
            <p className="text-red-500 text-xl">{error || 'Video not found'}</p>
            <button 
              onClick={() => navigate('/')}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Go to Homepage
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} />
      
      <main className={`pt-14 transition-all duration-300 ${sidebarOpen ? 'ml-60' : 'ml-20'}`}>
        <div className="flex flex-col lg:flex-row gap-6 p-6">
          {/* Main Video Section */}
          <div className="flex-1">
            {/* Video Player */}
            <div className="bg-black rounded-xl overflow-hidden">
              <video 
                src={video.videoFile}
                controls
                autoPlay
                className="w-full aspect-video"
                controlsList="nodownload"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Info */}
            <div className="mt-4">
              <h1 className="text-2xl font-bold mb-3">{video.title}</h1>
              
              {/* Channel Info & Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  {/* Channel Avatar */}
                  <div 
                    className="w-12 h-12 cursor-pointer"
                    onClick={() => navigate(`/channel/${video.owner?.username}`)}
                  >
                    {video.owner?.avatar ? (
                      <img 
                        src={video.owner.avatar} 
                        alt={video.owner.fullname}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold">
                        {video.owner?.fullname?.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>

                  {/* Channel Name & Subscribers */}
                  <div>
                    <h3 
                      className="font-semibold cursor-pointer hover:text-blue-600"
                      onClick={() => navigate(`/channel/${video.owner?.username}`)}
                    >
                      {video.owner?.fullname}
                    </h3>
                    <p className="text-sm text-gray-600">100K subscribers</p>
                  </div>

                  {/* Subscribe Button */}
                  <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 font-medium">
                    Subscribe
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  {/* Like/Dislike */}
                  <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
                    <button className="px-4 py-2 hover:bg-gray-200 flex items-center gap-2">
                      <ThumbsUp className="w-5 h-5" />
                      <span className="font-medium">1.2K</span>
                    </button>
                    <div className="w-px h-6 bg-gray-300"></div>
                    <button className="px-4 py-2 hover:bg-gray-200">
                      <ThumbsDown className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Share Button */}
                  <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    <span className="font-medium">Share</span>
                  </button>

                  {/* Download Button */}
                  <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    <span className="font-medium">Download</span>
                  </button>

                  {/* More Options */}
                  <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Video Stats & Description */}
              <div className="bg-gray-100 rounded-xl p-4">
                <div className="flex gap-4 mb-2 font-medium">
                  <span>{formatViews(video.views)} views</span>
                  <span>{formatDate(video.createdAt)}</span>
                </div>
                
                <div className={`text-sm ${!showDescription ? 'line-clamp-2' : ''}`}>
                  {video.description}
                </div>
                
                <button 
                  onClick={() => setShowDescription(!showDescription)}
                  className="text-sm font-medium mt-2 hover:text-blue-600"
                >
                  {showDescription ? 'Show less' : 'Show more'}
                </button>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Comments (Coming Soon)</h3>
              <div className="border-t pt-4">
                <p className="text-gray-500">Comments feature will be implemented soon</p>
              </div>
            </div>
          </div>

          {/* Related Videos Sidebar */}
          <div className="lg:w-96 xl:w-[420px]">
            <h3 className="font-semibold mb-4">Related Videos</h3>
            <div className="space-y-3">
              {relatedVideos
                .filter(v => v._id !== videoId)
                .slice(0, 10)
                .map((relatedVideo) => (
                  <RelatedVideoCard key={relatedVideo._id} video={relatedVideo} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Related Video Card Component (Horizontal Layout)
const RelatedVideoCard = ({ video }) => {
  const navigate = useNavigate();

  const formatViews = (views) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views;
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatUploadTime = (date) => {
    const now = new Date();
    const uploaded = new Date(date);
    const diffTime = Math.abs(now - uploaded);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  return (
    <div 
      className="flex gap-2 cursor-pointer group"
      onClick={() => navigate(`/video/${video._id}`)}
    >
      {/* Thumbnail */}
      <div className="relative w-40 flex-shrink-0">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full aspect-video object-cover rounded-lg"
        />
        <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
          {formatDuration(video.duration)}
        </span>
      </div>

      {/* Video Info */}
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm line-clamp-2 group-hover:text-blue-600 mb-1">
          {video.title}
        </h4>
        <p className="text-xs text-gray-600 mb-1">{video.owner?.fullname}</p>
        <p className="text-xs text-gray-600">
          {formatViews(video.views)} views • {formatUploadTime(video.createdAt)}
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;