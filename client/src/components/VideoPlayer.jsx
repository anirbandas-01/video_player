export default function VideoPlayer() {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg">
      <div className="w-full h-[360px] bg-black flex items-center justify-center text-gray-500">
        Video Player Area
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Relaxing Music for Stress Relief</h2>
        <p className="text-textSecondary text-sm">604,929,846 views</p>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-600" />
            <div>
              <p className="text-sm font-medium">Google</p>
              <p className="text-xs text-textSecondary">9.77M subscribers</p>
            </div>
          </div>
          <button className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
