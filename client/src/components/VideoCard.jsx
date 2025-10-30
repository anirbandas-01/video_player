const VideoCard = ({ video, onClick }) => {
  return (
    <div className="cursor-pointer group" onClick={onClick}>
      <div className="relative aspect-video rounded-xl overflow-hidden bg-[#272727] mb-3">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-2 right-2 bg-black/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-semibold">
          {video.duration}
        </div>
      </div>
      <div className="flex gap-3">
        <div className={`w-9 h-9 rounded-full flex-shrink-0 bg-gradient-to-br ${video.channelColor}`} />
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-white line-clamp-2 mb-1 leading-snug">
            {video.title}
          </h3>
          <p className="text-xs text-[#aaa] hover:text-white cursor-pointer transition-colors">
            {video.channel}
          </p>
          <div className="flex items-center gap-1 text-xs text-[#aaa] mt-1">
            <span>{video.views}</span>
            <span>•</span>
            <span>{video.uploadDate}</span>
          </div>
        </div>
        <button className="opacity-0 group-hover:opacity-100 w-8 h-8 hover:bg-[#3f3f3f] rounded-full flex items-center justify-center transition-all">
          <MoreVertical className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};