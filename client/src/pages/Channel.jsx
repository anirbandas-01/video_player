// src/pages/Channel.jsx
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { authAPI, videoAPI } from '../services/api';
import { Users, Video } from 'lucide-react';
import VideoCard from '../components/video/VideoCard';

const Channel = () => {
  const { username } = useParams();

  const { data: channelData, isLoading: channelLoading } = useQuery({
    queryKey: ['channel', username],
    queryFn: () => authAPI.getChannelProfile(username),
  });

  const { data: videosData, isLoading: videosLoading } = useQuery({
    queryKey: ['channelVideos', username],
    queryFn: () => videoAPI.getAllVideos({ userId: channelData?.data?.data?._id }),
    enabled: !!channelData?.data?.data?._id,
  });

  if (channelLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-48 bg-gray-700 rounded-xl mb-4"></div>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-32 h-32 bg-gray-700 rounded-full"></div>
          <div className="flex-1 space-y-3">
            <div className="h-8 bg-gray-700 rounded w-1/3"></div>
            <div className="h-4 bg-gray-700 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    );
  }

  const channel = channelData?.data?.data;
  const videos = videosData?.data?.data?.docs || [];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Cover Image */}
      <div className="h-48 bg-gradient-to-r from-primary to-purple-600 rounded-xl mb-6 overflow-hidden">
        {channel?.coverImage && (
          <img
            src={channel.coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Channel Info */}
      <div className="flex items-start gap-6 mb-8">
        <img
          src={channel?.avatar}
          alt={channel?.fullname}
          className="w-32 h-32 rounded-full border-4 border-gray-700"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{channel?.fullname}</h1>
          <p className="text-gray-400 mb-3">@{channel?.username}</p>
          <div className="flex items-center gap-6 text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <Users size={20} />
              <span>{channel?.subscribersCount || 0} subscribers</span>
            </div>
            <div className="flex items-center gap-2">
              <Video size={20} />
              <span>{videos.length} videos</span>
            </div>
          </div>
          <button className="px-6 py-2 bg-primary hover:bg-red-600 rounded-full font-semibold transition">
            {channel?.isSubscribed ? 'Subscribed' : 'Subscribe'}
          </button>
        </div>
      </div>

      {/* Videos Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Videos</h2>
        {videosLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-700 aspect-video rounded-xl mb-3"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-700 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : videos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Video size={48} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400">No videos uploaded yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Channel;