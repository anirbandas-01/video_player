import React from 'react';

const VideoCard = ({ video }) => {
  return (
    <div className="cursor-pointer group">
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full aspect-video object-cover rounded-xl"
        />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded">
          {video.duration}
        </span>
      </div>
      <div className="flex gap-3 mt-3">
        <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex-shrink-0"></div>
        <div className="flex-1">
          <h3 className="font-medium text-sm line-clamp-2 group-hover:text-blue-600">
            {video.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{video.channel}</p>
          <p className="text-sm text-gray-600">
            {video.views} views • {video.uploadTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
