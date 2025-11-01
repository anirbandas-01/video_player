import React from 'react';
import { Users, Bell } from 'lucide-react';

export default function Subscriptions() {
  const channels = [
    { id: 1, name: 'Code Master', subs: '1.2M', color: 'from-blue-500 to-cyan-500' },
    { id: 2, name: 'Tech Insights', subs: '890K', color: 'from-purple-500 to-pink-500' },
    { id: 3, name: 'Cosmos Channel', subs: '2.3M', color: 'from-orange-500 to-red-500' },
    { id: 4, name: 'Dev Academy', subs: '650K', color: 'from-yellow-500 to-orange-500' },
  ];

  return (
    <div className="p-6 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Subscriptions</h1>
        <p className="text-[#aaa]">Latest from your subscribed channels</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        {channels.map((channel) => (
          <div
            key={channel.id}
            className="bg-[#1a1a1a] hover:bg-[#272727] border border-[#272727] rounded-xl p-6 transition-all group cursor-pointer"
          >
            <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${channel.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
            <h3 className="text-lg font-semibold text-white text-center mb-1">{channel.name}</h3>
            <p className="text-sm text-[#aaa] text-center mb-4">{channel.subs} subscribers</p>
            <button className="w-full flex items-center justify-center gap-2 bg-[#272727] hover:bg-[#3f3f3f] text-white py-2 rounded-lg transition-colors">
              <Bell className="w-4 h-4" />
              <span className="text-sm font-medium">Subscribed</span>
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center h-64 bg-[#1a1a1a] border border-[#272727] rounded-xl">
        <div className="text-center">
          <Users className="w-16 h-16 text-[#aaa] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No New Videos</h3>
          <p className="text-[#aaa]">Check back later for new content from your subscriptions</p>
        </div>
      </div>
    </div>
  );
}