'use client';

import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export const HeaderSearch = () => {
  return (
    <div className="pb-4">
      <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search size={18} className="text-emerald-500/50 group-focus-within:text-emerald-400 transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Search Artisans or Experiences..."
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-12 text-sm focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all placeholder:text-white/20"
        />
        <div className="absolute inset-y-0 right-4 flex items-center">
          <button className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <SlidersHorizontal size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
