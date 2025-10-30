const VideoPlayer = ({ video }) => {
  return (
    <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
