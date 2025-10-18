export default function VideoCard({ title, channel, thumbnail }) {
  return (
    <div className="flex gap-3 mb-4 cursor-pointer">
      <div className="w-40 h-24 bg-gray-700 rounded-lg" />
      <div className="flex flex-col justify-between">
        <h3 className="text-sm font-semibold text-white line-clamp-2">{title}</h3>
        <p className="text-xs text-textSecondary">{channel}</p>
      </div>
    </div>
  );
}
