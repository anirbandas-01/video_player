// src/pages/VideoDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { videoAPI } from '../services/api';
import { ThumbsUp, Share2, MoreVertical } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useState } from 'react';

const VideoDetail = () => {
  const { videoId } = useParams();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ['video', videoId],
    queryFn: () => videoAPI.getVideoById(videoId),
  });

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="animate-pulse">
          <div className="aspect-video bg-gray-700 rounded-xl mb-4"></div>
          <div className="h-8 bg-gray-700 rounded w-3/4 mb-4"></div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-700 rounded w-1/4"></div>
              <div className="h-3 bg-gray-700 rounded w-1/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-400 text-lg">Failed to load video</p>
      </div>
    );
  }

  const video = data?.data?.data;

  const formatViews = (views) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views;
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Video Player */}
          <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
            <video
              controls
              className="w-full h-full"
              src={video.videoFile}
              poster={video.thumbnail}
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video Title */}
          <h1 className="text-2xl font-bold mb-4">{video.title}</h1>

          {/* Video Info Bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-gray-400">
              {formatViews(video.views)} views • {formatDistanceToNow(new Date(video.createdAt), { addSuffix: true })}
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full transition">
                <ThumbsUp size={20} />
                <span>Like</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full transition">
                <Share2 size={20} />
                <span>Share</span>
              </button>
              <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>

          {/* Channel Info */}
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-start gap-4 mb-4">
              <Link to={`/channel/${video.owner?.username}`}>
                <img
                  src={video.owner?.avatar}
                  alt={video.owner?.fullname}
                  className="w-12 h-12 rounded-full"
                />
              </Link>
              <div className="flex-1">
                <Link to={`/channel/${video.owner?.username}`}>
                  <h3 className="font-semibold hover:text-gray-300">
                    {video.owner?.fullname}
                  </h3>
                  <p className="text-sm text-gray-400">@{video.owner?.username}</p>
                </Link>
              </div>
              <button className="px-6 py-2 bg-primary hover:bg-red-600 rounded-full transition font-semibold">
                Subscribe
              </button>
            </div>

            {/* Description */}
            <div className="text-gray-300">
              <p className={showFullDescription ? '' : 'line-clamp-3'}>
                {video.description}
              </p>
              {video.description?.length > 150 && (
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="text-gray-400 hover:text-white mt-2 font-semibold text-sm"
                >
                  {showFullDescription ? 'Show less' : 'Show more'}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Related Videos Sidebar */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Related Videos</h3>
          <div className="space-y-4">
            {/* You can fetch and display related videos here */}
            <p className="text-gray-400">No related videos yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;