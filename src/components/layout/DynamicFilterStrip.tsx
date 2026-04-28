'use client';

import React from 'react';
import { useRecommendation } from '@/context/RecommendationEngineContext';
import mockData from '@/lib/data.json';

export const DynamicFilterStrip = () => {
  const { activeCategory, setActiveCategory } = useRecommendation();

  return (
    <div className="px-4 pb-4 overflow-x-auto no-scrollbar">
      <div className="flex gap-3 whitespace-nowrap">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
            activeCategory === null
              ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
              : 'bg-white/5 border-white/10 text-white/40 hover:border-white/20'
          }`}
        >
          All Feeds
        </button>
        {mockData.categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeCategory === cat.value
                ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                : 'bg-white/5 border-white/10 text-white/40 hover:border-white/20'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};
