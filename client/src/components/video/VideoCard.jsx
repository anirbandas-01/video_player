// src/components/video/VideoCard.jsx
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';

const VideoCard = ({ video }) => {
  const formatViews = (views) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views;
  };

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="group cursor-pointer">
      <Link to={`/video/${video._id}`}>
        <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {video.duration && (
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 px-2 py-1 rounded text-xs font-semibold">
              {formatDuration(video.duration)}
            </div>
          )}
        </div>
      </Link>

      <div className="flex gap-3">
        <Link to={`/channel/${video.owner?.username}`}>
          <img
            src={video.owner?.avatar}
            alt={video.owner?.fullname}
            className="w-10 h-10 rounded-full flex-shrink-0"
          />
        </Link>
        <div className="flex-1 min-w-0">
          <Link to={`/video/${video._id}`}>
            <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-gray-300 transition">
              {video.title}
            </h3>
          </Link>
          <Link
            to={`/channel/${video.owner?.username}`}
            className="text-gray-400 text-sm hover:text-gray-300 mt-1 block"
          >
            {video.owner?.fullname}
          </Link>
          <div className="text-gray-400 text-sm mt-1">
            {formatViews(video.views)} views • {formatDistanceToNow(new Date(video.createdAt), { addSuffix: true })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;