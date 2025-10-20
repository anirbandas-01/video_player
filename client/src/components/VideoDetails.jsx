import { ThumbsUp, ThumbsDown, Share2, Download } from "lucide-react";

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
