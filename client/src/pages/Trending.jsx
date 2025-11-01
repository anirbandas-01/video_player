import React from 'react';
import { TrendingUp, Music, Gamepad2, Trophy, Lightbulb } from 'lucide-react';

export default function Trending() {
  const categories = [
    { icon: TrendingUp, name: 'Now', color: 'from-red-500 to-orange-500' },
    { icon: Music, name: 'Music', color: 'from-purple-500 to-pink-500' },
    { icon: Gamepad2, name: 'Gaming', color: 'from-blue-500 to-cyan-500' },
    { icon: Trophy, name: 'Sports', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <div className="p-6 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Trending</h1>
        <p className="text-[#aaa]">Check out what's trending across ViewTube</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className="flex items-center gap-4 p-6 bg-[#1a1a1a] hover:bg-[#272727] border border-[#272727] rounded-xl transition-all group"
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <category.icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">{category.name}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center h-64 bg-[#1a1a1a] border border-[#272727] rounded-xl">
        <div className="text-center">
          <Lightbulb className="w-16 h-16 text-[#aaa] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Coming Soon</h3>
          <p className="text-[#aaa]">Trending videos will appear here</p>
        </div>
      </div>
    </div>
  );
}