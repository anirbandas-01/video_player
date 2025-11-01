import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { MoreVertical } from "lucide-react";

export default function Home({ videos, onSelect }) {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Music', 'Gaming', 'Live', 'News', 'Science', 'Technology', 'Entertainment', 'Sports', 'Cooking'];

  const handleVideoClick = (video) => {
    onSelect(video);
    navigate(`/watch/${video.id}`);
  };

  return (
    <div className="p-6">
      {/* Filter Chips */}
      <div className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              filter === activeFilter
                ? 'bg-white text-black'
                : 'bg-[#272727] text-white hover:bg-[#3f3f3f]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="cursor-pointer group animate-fade-in"
            onClick={() => handleVideoClick(video)}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video mb-3 rounded-xl overflow-hidden bg-[#272727]">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-2 right-2 bg-black/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-semibold">
                {video.duration}
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>

            {/* Video Info */}
            <div className="flex gap-3">
              {/* Channel Avatar */}
              <div className={`flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br ${video.channelAvatar}`}></div>

              {/* Title & Details */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-sm font-medium line-clamp-2 mb-1 leading-tight group-hover:text-gray-100">
                  {video.title}
                </h3>
                <p className="text-[#aaa] text-xs hover:text-white cursor-pointer transition-colors">
                  {video.channel}
                </p>
                <div className="flex items-center gap-1 text-[#aaa] text-xs mt-1">
                  <span>{video.views} views</span>
                  <span>•</span>
                  <span>{video.uploadDate}</span>
                </div>
              </div>

              {/* More Options */}
              <button className="flex-shrink-0 p-1 opacity-0 group-hover:opacity-100 hover:bg-[#3f3f3f] rounded-full transition-all self-start">
                <MoreVertical size={16} className="text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}