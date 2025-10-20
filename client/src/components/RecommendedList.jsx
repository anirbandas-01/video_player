import React from "react";
import { Switch } from "@headlessui/react";

export default function RecommendedList({ videos, onSelect }) {
  const [autoplay, setAutoplay] = React.useState(true);

  return (
    <aside className="w-[350px] space-y-4 text-white">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Up next</h2>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Autoplay</span>
          <Switch
            checked={autoplay}
            onChange={setAutoplay}
            className={`${
              autoplay ? "bg-accent" : "bg-gray-600"
            } relative inline-flex h-5 w-10 items-center rounded-full transition`}
          >
            <span
              className={`${
                autoplay ? "translate-x-5" : "translate-x-1"
              } inline-block h-3 w-3 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
      </div>

      {/* Video list */}
      <div className="space-y-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="flex gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded-lg transition"
            onClick={() => onSelect(video)} // 👈 click = play
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-44 h-24 rounded-lg object-cover"
            />
            <div className="flex-1 text-sm">
              <h3 className="font-medium line-clamp-2">{video.title}</h3>
              <p className="text-gray-400 mt-1">{video.channel}</p>
              <p className="text-gray-500 text-xs">{video.views}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
