const VideoDetails = ({ video }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mt-4">
      <h1 className="text-xl font-semibold text-white mb-4 leading-tight">
        {video.title}
      </h1>

      <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${video.channelColor}`} />
          <div>
            <p className="text-white font-medium text-sm">{video.channel}</p>
            <p className="text-[#aaa] text-xs">1.2M subscribers</p>
          </div>
          <button className="bg-white text-black px-5 py-2 rounded-full font-medium text-sm hover:bg-white/90 transition-all">
            Subscribe
          </button>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center bg-[#272727] rounded-full overflow-hidden">
            <button
              onClick={() => {
                setLiked(!liked);
                if (disliked) setDisliked(false);
              }}
              className="flex items-center gap-2 px-4 py-2 hover:bg-[#3f3f3f] transition-colors"
            >
              <ThumbsUp className={`w-5 h-5 ${liked ? 'fill-white text-white' : 'text-white'}`} />
              <span className="text-sm font-medium text-white">24K</span>
            </button>
            <div className="w-px h-6 bg-[#3f3f3f]" />
            <button
              onClick={() => {
                setDisliked(!disliked);
                if (liked) setLiked(false);
              }}
              className="px-4 py-2 hover:bg-[#3f3f3f] transition-colors"
            >
              <ThumbsDown className={`w-5 h-5 ${disliked ? 'fill-white text-white' : 'text-white'}`} />
            </button>
          </div>

          <button className="flex items-center gap-2 bg-[#272727] hover:bg-[#3f3f3f] px-4 py-2 rounded-full transition-colors">
            <Share2 className="w-5 h-5 text-white" />
            <span className="text-sm font-medium text-white">Share</span>
          </button>

          <button className="bg-[#272727] hover:bg-[#3f3f3f] p-2 rounded-full transition-colors">
            <MoreHorizontal className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="bg-[#272727] rounded-xl p-4 hover:bg-[#3f3f3f] transition-colors cursor-pointer">
        <div className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
          <span>{video.views}</span>
          <span>•</span>
          <span>{video.uploadDate}</span>
        </div>
        <p className={`text-sm text-white leading-relaxed ${showMore ? '' : 'line-clamp-2'}`}>
          {video.description || "This is an amazing video that you should definitely watch. It contains great content and valuable information."}
        </p>
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-sm font-semibold text-white mt-2 hover:text-gray-300 transition-colors"
        >
          {showMore ? 'Show less' : '...more'}
        </button>
      </div>
    </div>
  );
};
