import VideoCard from "./VideoCard";

export default function RecommendedList() {
  const videos = [
    { title: "Through the Wormhole (Did we invent God?)", channel: "Discovery Science" },
    { title: "Cosmos: Possible Worlds", channel: "StarTalk" },
    { title: "2001: A Space Odyssey – What it all meant", channel: "Stanley Kubrick" },
  ];

  return (
    <aside className="w-[350px]">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-white font-semibold">Autoplay</h3>
        <div className="bg-gray-700 w-10 h-5 rounded-full flex items-center">
          <div className="bg-accent w-4 h-4 rounded-full ml-5" />
        </div>
      </div>

      {videos.map((v, i) => (
        <VideoCard key={i} {...v} />
      ))}
    </aside>
  );
}
