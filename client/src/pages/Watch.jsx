import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import VideoDetails from '../components/VideoDetails';
import CommentSection from '../components/CommentSection';
import RecommendedList from '../components/RecommendedList';

export default function Watch({ videos, selectedVideo, onSelect }) {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(selectedVideo);

  useEffect(() => {
    if (!currentVideo || currentVideo.id !== parseInt(videoId)) {
      const video = videos.find(v => v.id === parseInt(videoId));
      if (video) {
        setCurrentVideo(video);
        onSelect(video);
      }
    }
  }, [videoId, videos, currentVideo, onSelect]);

  if (!currentVideo) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-white text-lg">Video not found</p>
      </div>
    );
  }

  return (
    <div className="flex gap-6 px-6 pt-6 pb-12">
      {/* Main Content */}
      <div className="flex-1 max-w-[1280px]">
        <VideoPlayer video={currentVideo} />
        <VideoDetails video={currentVideo} />
        <CommentSection videoId={currentVideo.id} />
      </div>

      {/* Recommended Videos */}
      <div className="w-[402px] flex-shrink-0">
        <RecommendedList 
          videos={videos.filter(v => v.id !== currentVideo.id)} 
          onSelect={(video) => {
            onSelect(video);
            navigate(`/watch/${video.id}`);
          }} 
        />
      </div>
    </div>
  );
}