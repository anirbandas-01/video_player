import React from 'react';
import CategoryPills from './CategoryPills';
import VideoCard from './VideoCard';

const MainContent = ({ sidebarOpen }) => {
  const videos = [
    {
      thumbnail: 'https://picsum.photos/seed/1/400/225',
      title: 'Building a Full Stack Application with React and Node.js',
      channel: 'Code Masters',
      views: '1.2M',
      uploadTime: '2 days ago',
      duration: '15:30'
    },
    {
      thumbnail: 'https://picsum.photos/seed/2/400/225',
      title: 'Amazing Nature Documentary: Wildlife in 4K',
      channel: 'Nature Films',
      views: '856K',
      uploadTime: '1 week ago',
      duration: '42:15'
    },
    {
      thumbnail: 'https://picsum.photos/seed/3/400/225',
      title: 'Top 10 Travel Destinations for 2024',
      channel: 'Travel Vlog',
      views: '2.1M',
      uploadTime: '3 days ago',
      duration: '12:45'
    },
    {
      thumbnail: 'https://picsum.photos/seed/4/400/225',
      title: 'Learn Python in 60 Minutes - Complete Tutorial',
      channel: 'Programming Hub',
      views: '3.4M',
      uploadTime: '1 month ago',
      duration: '58:20'
    },
    {
      thumbnail: 'https://picsum.photos/seed/5/400/225',
      title: 'Epic Gaming Montage - Best Moments 2024',
      channel: 'Gaming Pro',
      views: '645K',
      uploadTime: '5 days ago',
      duration: '10:15'
    },
    {
      thumbnail: 'https://picsum.photos/seed/6/400/225',
      title: 'Cooking the Perfect Pasta: Italian Chef Guide',
      channel: 'Chef Kitchen',
      views: '420K',
      uploadTime: '2 weeks ago',
      duration: '18:30'
    },
    {
      thumbnail: 'https://picsum.photos/seed/7/400/225',
      title: 'Morning Workout Routine for Beginners',
      channel: 'Fitness Life',
      views: '1.8M',
      uploadTime: '4 days ago',
      duration: '25:10'
    },
    {
      thumbnail: 'https://picsum.photos/seed/8/400/225',
      title: 'Latest Tech News: AI Breakthrough 2024',
      channel: 'Tech Today',
      views: '920K',
      uploadTime: '1 day ago',
      duration: '14:55'
    },
    {
      thumbnail: 'https://picsum.photos/seed/9/400/225',
      title: 'Meditation and Mindfulness: 10 Minute Guide',
      channel: 'Calm Mind',
      views: '567K',
      uploadTime: '1 week ago',
      duration: '10:00'
    },
    {
      thumbnail: 'https://picsum.photos/seed/10/400/225',
      title: 'DIY Home Improvement Projects Anyone Can Do',
      channel: 'Home DIY',
      views: '1.1M',
      uploadTime: '3 weeks ago',
      duration: '22:40'
    },
    {
      thumbnail: 'https://picsum.photos/seed/11/400/225',
      title: 'Electric Cars Review: Top 5 Models Compared',
      channel: 'Auto Review',
      views: '2.3M',
      uploadTime: '6 days ago',
      duration: '16:25'
    },
    {
      thumbnail: 'https://picsum.photos/seed/12/400/225',
      title: 'Jazz Music Playlist - Relaxing Evening Vibes',
      channel: 'Music Stream',
      views: '3.8M',
      uploadTime: '2 months ago',
      duration: '1:45:30'
    }
  ];

  return (
    <main className={`pt-14 transition-all duration-300 ${sidebarOpen ? 'ml-60' : 'ml-20'}`}>
      <CategoryPills />
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {videos.map((video, idx) => (
            <VideoCard key={idx} video={video} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainContent;