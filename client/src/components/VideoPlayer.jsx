/* export default function VideoPlayer({ video }) {
  const defaultVideo = {
    title: "Relaxing Music for Stress Relief",
    channel: "Google",
    views: "604,929,846 views",
    url: "https://www.youtube.com/embed/2OEL4P1Rz04"
  };

  const currentVideo = video || defaultVideo;

  return (
    <div className="w-full bg-black rounded-xl overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="480"
        src={currentVideo.url}
        title={currentVideo.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-xl"
      />
      <h2 className="text-xl font-semibold mt-3">{currentVideo.title}</h2>
      <p className="text-gray-400">{currentVideo.channel} • {currentVideo.views}</p>
    </div>
  );
}
 */

export default function VideoPlayer({ video }) {
  const defaultVideo = {
    title: "Relaxing Music for Stress Relief",
    channel: "Google",
    views: "604,929,846 views",
    url: "https://www.youtube.com/embed/2OEL4P1Rz04"
  };

  const currentVideo = video || defaultVideo;

  return (
    <div className="w-full">
      {/* Video Player */}
      <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={currentVideo.url}
          title={currentVideo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}