import React, { useState } from 'react';

const CategoryPills = () => {
  const categories = ['All', 'Music', 'Gaming', 'Live', 'News', 'Sports', 'Learning', 'Fashion', 'Podcasts', 'Tech', 'Cooking'];
  const [selected, setSelected] = useState('All');
  
  return (
    <div className="flex gap-3 overflow-x-auto py-4 px-4 border-b border-gray-200 scrollbar-hide">
      {categories.map((cat, idx) => (
        <button
          key={idx}
          onClick={() => setSelected(cat)}
          className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
            selected === cat 
              ? 'bg-black text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryPills;
