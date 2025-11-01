import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Share2, Download, Flag, ChevronDown } from 'lucide-react';

const VideoDetails = ({ video }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const formatNumber = (num) => {
    const number = parseInt(num.replace(/[KM]/g, '')) * (num.includes('M') ? 1000000 : num.includes('K') ? 1000 : 1);
    if (number >= 1000000) return (number / 1000000).toFixed(1) + 'M';
    if (number >= 1000) return (number / 1000).toFixed(0) + 'K';
    return number;
  };

  return (
    <div className="mt-3">
      {/* Video Title */}
      <h1 className="text-xl font-semibold text-white mb-3 leading-tight">
        {video.title}
      </h1>

      {/* Channel Info and Actions */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          {/* Channel Avatar */}
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${video.channelAvatar} flex-shrink-0 cursor-pointer`} />
          
          {/* Channel Name and Subscribers */}
          <div className="flex flex-col">
            <p className="text-white font-medium text-base cursor-pointer hover:text-gray-300">
              {video.channel}
            </p>
            <p className="text-[#aaa] text-xs">
              {video.subscribers} subscribers
            </p>
          </div>

          {/* Subscribe Button */}
          <button 
            onClick={() => setSubscribed(!subscribed)}
            className={`ml-4 px-4 py-2.5 rounded-full font-medium text-sm transition-all ${
              subscribed 
                ? 'bg-[#272727] text-white hover:bg-[#3f3f3f]' 
                : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            {subscribed ? 'Subscribed' : 'Subscribe'}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Like/Dislike */}
          <div className="flex items-center bg-[#272727] rounded-full overflow-hidden">
            <button
              onClick={() => {
                setLiked(!liked);
                if (disliked) setDisliked(false);
              }}
              className={`flex items-center gap-2 px-4 py-2 hover:bg-[#3f3f3f] transition-colors border-r border-[#3f3f3f] ${
                liked ? 'text-white' : 'text-white'
              }`}
            >
              <ThumbsUp className={`w-5 h-5 ${liked ? 'fill-white' : ''}`} />
              <span className="text-sm font-medium">24K</span>
            </button>
            <button
              onClick={() => {
                setDisliked(!disliked);
                if (liked) setLiked(false);
              }}
              className="px-4 py-2 hover:bg-[#3f3f3f] transition-colors"
            >
              <ThumbsDown className={`w-5 h-5 text-white ${disliked ? 'fill-white' : ''}`} />
            </button>
          </div>

          {/* Share */}
          <button className="flex items-center gap-2 bg-[#272727] hover:bg-[#3f3f3f] px-4 py-2 rounded-full transition-colors">
            <Share2 className="w-5 h-5 text-white" />
            <span className="text-sm font-medium text-white">Share</span>
          </button>

          {/* Download */}
          <button className="flex items-center gap-2 bg-[#272727] hover:bg-[#3f3f3f] px-4 py-2 rounded-full transition-colors">
            <Download className="w-5 h-5 text-white" />
          </button>

          {/* More Menu */}
          <button className="bg-[#272727] hover:bg-[#3f3f3f] px-3 py-2 rounded-full transition-colors">
            <Flag className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Description Box */}
      <div className="bg-[#0f0f0f] hover:bg-[#1a1a1a] rounded-xl p-3 transition-colors cursor-pointer">
        <div className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
          <span>{video.views} views</span>
          <span>•</span>
          <span>{video.uploadDate}</span>
        </div>
        <p className={`text-sm text-white leading-relaxed whitespace-pre-wrap ${showMore ? '' : 'line-clamp-2'}`}>
          {video.description}
        </p>
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-sm font-semibold text-white mt-2 flex items-center gap-1 hover:text-gray-300 transition-colors"
        >
          {showMore ? 'Show less' : '...more'}
        </button>
      </div>
    </div>
  );
};

export default VideoDetails;