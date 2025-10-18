// src/pages/WatchHistory.jsx
import { useQuery } from '@tanstack/react-query';
import { authAPI } from '../services/api';
import VideoCard from '../components/video/VideoCard';
import { History } from 'lucide-react';

const WatchHistory = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['watchHistory'],
    queryFn: () => authAPI.getWatchHistory(),
  });

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Watch History</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-700 aspect-video rounded-xl mb-3"></div>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Watch History</h1>
        <div className="text-center py-12">
          <p className="text-red-400 text-lg">Failed to load watch history</p>
        </div>
      </div>
    );
  }

  const videos = data?.data?.data || [];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Watch History</h1>
      
      {videos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <History size={64} className="mx-auto text-gray-600 mb-4" />
          <p className="text-gray-400 text-xl mb-2">No watch history yet</p>
          <p className="text-gray-500">Videos you watch will appear here</p>
        </div>
      )}
    </div>
  );
};

export default WatchHistory;