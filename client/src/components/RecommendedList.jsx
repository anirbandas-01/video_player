import React from "react";

export default function RecommendedList() {
  const videos = [
    {
      id: 1,
      title: "Through the Wormhole – Did We Invent God?",
      channel: "Discovery Science",
      views: "2.1M views",
      duration: "12:34",
      thumbnail: "https://picsum.photos/250/140?random=1",
    },
    {
      id: 2,
      title: "Cosmos: Possible Worlds – Episode 1",
      channel: "StarTalk",
      views: "1.3M views",
      duration: "8:50",
      thumbnail: "https://picsum.photos/250/140?random=2",
    },
    {
      id: 3,
      title: "2001: A Space Odyssey – What It All Meant",
      channel: "Stanley Kubrick",
      views: "3.7M views",
      duration: "10:12",
      thumbnail: "https://picsum.photos/250/140?random=3",
    },
  ];

  const [autoplay, setAutoplay] = React.useState(true);

  return (
    <aside className="w-[350px] space-y-4 text-white">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Up next</h2>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Autoplay</span>
          <div
            onClick={() => setAutoplay(!autoplay)}
            className={`relative w-10 h-5 rounded-full cursor-pointer transition ${
              autoplay ? "bg-accent" : "bg-gray-600"
            }`}
          >
            <div
              className={`absolute top-0.5 left-0.5 h-4 w-4 bg-white rounded-full transition-transform ${
                autoplay ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Video list */}
      <div className="space-y-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="flex gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded-lg transition group"
          >
            <div className="relative w-44 h-24 overflow-hidden rounded-lg">
              {/* Thumbnail */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
              {/* Duration label */}
              <span className="absolute bottom-1 right-1 bg-black/80 text-xs px-1.5 py-0.5 rounded text-gray-200">
                {video.duration}
              </span>
            </div>

            <div className="flex-1 text-sm">
              <h3 className="font-medium line-clamp-2 group-hover:text-accent transition">
                {video.title}
              </h3>
              <p className="text-gray-400 mt-1">{video.channel}</p>
              <p className="text-gray-500 text-xs">{video.views}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
