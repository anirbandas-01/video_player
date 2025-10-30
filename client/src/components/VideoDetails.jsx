/* import { ThumbsUp, ThumbsDown, Share2, Download } from "lucide-react";

export default function VideoDetails({ video }) {
  const currentVideo = video || {
    title: "Relaxing Music for Stress Relief",
    channel: "Google",
    subscribers: "9.77M",
    views: "604,929,846 views",
  };

  return (
    <div className="flex flex-col gap-3 mt-4 border-b border-gray-700 pb-4">
      <h2 className="text-2xl font-semibold">{currentVideo.title}</h2>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-400">{currentVideo.channel}</p>
          <p className="text-sm text-gray-500">{currentVideo.subscribers} subscribers</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600 transition">
            <ThumbsUp size={18} /> 12K
          </button>
          <button className="flex items-center gap-1 bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600 transition">
            <ThumbsDown size={18} /> 200
          </button>
          <button className="flex items-center gap-1 bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600 transition">
            <Share2 size={18} /> Share
          </button>
          <button className="flex items-center gap-1 bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600 transition">
            <Download size={18} /> Save
          </button>
          <button className="bg-red-600 px-4 py-2 rounded-full hover:bg-red-500 transition font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
 */


import { ThumbsUp, ThumbsDown, Share2, MoreHorizontal, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function VideoDetails({ video }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const currentVideo = video || {
    title: "Relaxing Music for Stress Relief",
    channel: "Google",
    subscribers: "9.77M",
    views: "604,929,846 views",
    uploadDate: "Jan 15, 2024",
    description: "This is a beautiful relaxing music video perfect for stress relief and meditation. Enjoy the peaceful sounds and calming atmosphere."
  };

  return (
    <div className="mt-4">
      {/* Title */}
      <h1 className="text-xl font-semibold text-white mb-3">
        {currentVideo.title}
      </h1>

      {/* Channel Info & Actions */}
      <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
        {/* Left - Channel Info */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0"></div>
          <div className="flex flex-col">
            <p className="text-white font-medium text-sm">{currentVideo.channel}</p>
            <p className="text-[#aaaaaa] text-xs">{currentVideo.subscribers} subscribers</p>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors">
            Subscribe
          </button>
        </div>

        {/* Right - Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Like/Dislike */}
          <div className="flex items-center bg-[#272727] rounded-full overflow-hidden">
            <button
              onClick={() => {
                setLiked(!liked);
                if (disliked) setDisliked(false);
              }}
              className={`flex items-center gap-2 px-4 py-2 hover:bg-[#3f3f3f] transition-colors ${
                liked ? 'text-white' : 'text-[#f1f1f1]'
              }`}
            >
              <ThumbsUp size={18} fill={liked ? 'white' : 'none'} />
              <span className="text-sm font-medium">12K</span>
            </button>
            <div className="w-px h-6 bg-[#3f3f3f]"></div>
            <button
              onClick={() => {
                setDisliked(!disliked);
                if (liked) setLiked(false);
              }}
              className={`flex items-center gap-2 px-4 py-2 hover:bg-[#3f3f3f] transition-colors ${
                disliked ? 'text-white' : 'text-[#f1f1f1]'
              }`}
            >
              <ThumbsDown size={18} fill={disliked ? 'white' : 'none'} />
            </button>
          </div>

          {/* Share */}
          <button className="flex items-center gap-2 bg-[#272727] hover:bg-[#3f3f3f] px-4 py-2 rounded-full transition-colors">
            <Share2 size={18} className="text-white" />
            <span className="text-sm font-medium text-white">Share</span>
          </button>

          {/* More */}
          <button className="bg-[#272727] hover:bg-[#3f3f3f] p-2 rounded-full transition-colors">
            <MoreHorizontal size={20} className="text-white" />
          </button>
        </div>
      </div>

      {/* Description Box */}
      <div className="bg-[#272727] rounded-xl p-3 hover:bg-[#3f3f3f] transition-colors cursor-pointer">
        <div className="flex items-center gap-2 text-sm font-medium text-white mb-2">
          <span>{currentVideo.views}</span>
          <span>•</span>
          <span>{currentVideo.uploadDate}</span>
        </div>
        <p className={`text-sm text-white ${showFullDescription ? '' : 'line-clamp-2'}`}>
          {currentVideo.description}
        </p>
        {!showFullDescription && (
          <button
            onClick={() => setShowFullDescription(true)}
            className="text-sm font-medium text-white mt-2 flex items-center gap-1"
          >
            ...more
            <ChevronDown size={16} />
          </button>
        )}
        {showFullDescription && (
          <button
            onClick={() => setShowFullDescription(false)}
            className="text-sm font-medium text-white mt-2"
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
}