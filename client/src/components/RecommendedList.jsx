import { MoreVertical } from "lucide-react";

export default function RecommendedList({ videos, onSelect }) {
  return (
    <div className="space-y-2">
      {videos.map((video) => (
        <div
          key={video.id}
          className="flex gap-2 cursor-pointer hover:bg-[#272727] p-2 rounded-lg transition-colors group"
          onClick={() => onSelect(video)}
        >
          {/* Thumbnail */}
          <div className="relative w-40 h-[90px] flex-shrink-0 rounded-lg overflow-hidden bg-[#3f3f3f]">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 px-1 py-0.5 rounded text-xs text-white font-medium">
              10:24
            </div>
          </div>

          {/* Video Info */}
          <div className="flex-1 min-w-0 flex flex-col justify-start">
            <h3 className="text-sm font-medium text-white line-clamp-2 mb-1">
              {video.title}
            </h3>
            <p className="text-xs text-[#aaaaaa] hover:text-white cursor-pointer">
              {video.channel}
            </p>
            <div className="flex items-center gap-1 text-xs text-[#aaaaaa] mt-0.5">
              <span>{video.views}</span>
              <span>•</span>
              <span>2 days ago</span>
            </div>
          </div>

          {/* More Options */}
          <button className="flex-shrink-0 p-1 opacity-0 group-hover:opacity-100 hover:bg-[#3f3f3f] rounded-full transition-all">
            <MoreVertical size={16} className="text-white" />
          </button>
        </div>
      ))}
    </div>
  );
}