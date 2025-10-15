// src/pages/Home.jsx
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { videoAPI } from '../services/api';
import VideoCard from '../components/video/VideoCard';

const Home = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');

  const { data, isLoading, error } = useQuery({
    queryKey: ['videos', searchQuery],
    queryFn: () => videoAPI.getAllVideos({ query: searchQuery || '', limit: 20 }),
  });

  if (isLoading) {
    return (
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
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-400 text-lg">Failed to load videos</p>
        <p className="text-gray-400 mt-2">{error.message}</p>
      </div>
    );
  }

  const videos = data?.data?.data?.docs || [];

  if (videos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">
          {searchQuery ? 'No videos found for your search' : 'No videos available'}
        </p>
      </div>
    );
  }

  return (
    <div>
      {searchQuery && (
        <h2 className="text-2xl font-semibold mb-6">
          Search results for "{searchQuery}"
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;