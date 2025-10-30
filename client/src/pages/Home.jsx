import { useNavigate } from "react-router-dom";
import { MoreVertical } from "lucide-react";

export default function Home({ videos, onSelect }) {
  const navigate = useNavigate();

  const handleVideoClick = (video) => {
    onSelect(video);
    navigate(`/watch/${video.id}`);
  };

  const formatViews = (views) => {
    return views;
  };

  return (
    <div className="p-6">
      {/* Filter Chips */}
      <div className="flex gap-3 mb-6 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
        {['All', 'Music', 'Gaming', 'Live', 'News', 'Science', 'Technology', 'Entertainment'].map((chip) => (
          <button
            key={chip}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              chip === 'All'
                ? 'bg-white text-black'
                : 'bg-[#272727] text-white hover:bg-[#3f3f3f]'
            }`}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="cursor-pointer group"
            onClick={() => handleVideoClick(video)}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video mb-3 rounded-xl overflow-hidden bg-[#272727]">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 px-1.5 py-0.5 rounded text-xs text-white font-medium">
                10:24
              </div>
            </div>

            {/* Video Info */}
            <div className="flex gap-3">
              {/* Channel Avatar */}
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>

              {/* Title & Details */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-sm font-medium line-clamp-2 mb-1 group-hover:text-gray-100">
                  {video.title}
                </h3>
                <p className="text-[#aaaaaa] text-xs hover:text-white cursor-pointer">
                  {video.channel}
                </p>
                <div className="flex items-center gap-1 text-[#aaaaaa] text-xs mt-0.5">
                  <span>{formatViews(video.views)}</span>
                  <span>•</span>
                  <span>2 days ago</span>
                </div>
              </div>

              {/* More Options */}
              <button className="flex-shrink-0 p-1 opacity-0 group-hover:opacity-100 hover:bg-[#3f3f3f] rounded-full transition-all">
                <MoreVertical size={16} className="text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}