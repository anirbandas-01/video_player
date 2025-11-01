import React from 'react';
import { MoreVertical } from 'lucide-react';

const RecommendedList = ({ videos, onSelect }) => {
  return (
    <div className="space-y-3">
      {videos.map((video) => (
        <div
          key={video.id}
          className="flex gap-2 cursor-pointer hover:bg-[#272727] p-2 rounded-lg transition-colors group"
          onClick={() => onSelect(video)}
        >
          {/* Thumbnail */}
          <div className="relative w-40 h-[90px] flex-shrink-0 rounded-lg overflow-hidden bg-[#3f3f3f]">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-1 right-1 bg-black/90 px-1.5 py-0.5 rounded text-xs text-white font-semibold">
              {video.duration}
            </div>
          </div>

          {/* Video Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-white line-clamp-2 mb-1 leading-snug">
              {video.title}
            </h3>
            <p className="text-xs text-[#aaa] hover:text-white cursor-pointer transition-colors">
              {video.channel}
            </p>
            <div className="flex items-center gap-1 text-xs text-[#aaa] mt-1">
              <span>{video.views} views</span>
              <span>•</span>
              <span>{video.uploadDate}</span>
            </div>
          </div>

          {/* More Options */}
          <button className="flex-shrink-0 opacity-0 group-hover:opacity-100 hover:bg-[#3f3f3f] p-1 rounded-full transition-all">
            <MoreVertical className="w-4 h-4 text-white" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecommendedList;