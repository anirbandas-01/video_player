import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  // Format views count
  const formatViews = (views) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views;
  };

  // Format duration (seconds to MM:SS)
  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Format upload time
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
      className="cursor-pointer group"
      onClick={() => navigate(`/video/${video._id}`)}
    >
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full aspect-video object-cover rounded-xl"
        />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded">
          {formatDuration(video.duration)}
        </span>
      </div>
      <div className="flex gap-3 mt-3">
        <div className="w-9 h-9 flex-shrink-0">
          {video.owner?.avatar ? (
            <img 
              src={video.owner.avatar} 
              alt={video.owner.fullname}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              {video.owner?.fullname?.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-sm line-clamp-2 group-hover:text-blue-600">
            {video.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{video.owner?.fullname || 'Unknown'}</p>
          <p className="text-sm text-gray-600">
            {formatViews(video.views)} views • {formatUploadTime(video.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;















/* import React from 'react';

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
 */