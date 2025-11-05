import React, { useEffect, useState } from 'react';
import CategoryPills from './CategoryPills';
import VideoCard from './VideoCard';
import api from '../api/api';

const MainContent = ({ sidebarOpen }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(()=> {
    fetchVideos();
  },[page]);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/videos?page=${page}&limit=12`);

      if(response.data.success){
        const newVideos = response.data.data.docs || [];
        setVideos(prev => page === 1 ? newVideos : [...prev, ...newVideos]);
        setHasMore(response.data.data.hasNextPage);
      }
    } catch (err) {
      console.error('Error fetching videos:', err);
      setError('Failed to load videos');
    }finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage(prev => prev + 1);
    }
  };

 if (error && videos.length === 0) {
    return (
      <main className={`pt-14 transition-all duration-300 ${sidebarOpen ? 'ml-60' : 'ml-20'}`}>
        <CategoryPills />
        <div className="p-6 text-center">
          <p className="text-red-500">{error}</p>
          <button 
            onClick={() => {
              setPage(1);
              fetchVideos();
            }}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

return (
    <main className={`pt-14 transition-all duration-300 ${sidebarOpen ? 'ml-60' : 'ml-20'}`}>
      <CategoryPills />
      <div className="p-6">
        {loading && videos.length === 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[...Array(8)].map((_, idx) => (
              <div key={idx} className="animate-pulse">
                <div className="bg-gray-300 aspect-video rounded-xl"></div>
                <div className="flex gap-3 mt-3">
                  <div className="w-9 h-9 bg-gray-300 rounded-full"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {videos.map((video) => (
                <VideoCard key={video._id} video={video} />
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={loadMore}
                  disabled={loading}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium disabled:opacity-50"
                >
                  {loading ? 'Loading...' : 'Load More'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default MainContent;