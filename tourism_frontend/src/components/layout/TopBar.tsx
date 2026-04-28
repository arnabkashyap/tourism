'use client';

import React from 'react';

import { useRecommendation } from '@/context/RecommendationEngineContext';
import mockData from '@/lib/data.json';

export const TopBar = () => {
  const { activeCategory, setActiveCategory } = useRecommendation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pb-2 bg-gradient-to-b from-[#050805] via-[#050805]/80 to-transparent">
      <div className="glass-panel rounded-2xl px-5 py-3 flex items-center justify-between hud-element border-white/5 bg-black/40 backdrop-blur-xl mb-3">
        <div className="flex items-center gap-4">
          <div className="relative flex items-center justify-center">
            <div className="flex items-center">
              <span className="text-3xl font-black italic tracking-tighter text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">N</span>
              <span className="text-3xl font-black italic tracking-tighter text-amber-500 -ml-2 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]">E</span>
            </div>
            <div className="absolute inset-0 bg-emerald-500/5 blur-xl rounded-full"></div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight text-white leading-none">
              NE Threads
            </h1>
            <div className="h-[2px] w-full bg-gradient-to-r from-emerald-500 to-amber-500 mt-1 opacity-50"></div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5">
            <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest animate-pulse">System Live</span>
          </div>
        </div>
      </div>

      {/* Interactive HUD Filter Strip */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 px-1">
        <FilterButton 
          active={activeCategory === null} 
          onClick={() => setActiveCategory(null)}
          label="Global Feed"
        />
        {mockData.categories.map((cat) => (
          <FilterButton 
            key={cat.id}
            active={activeCategory === cat.value} 
            onClick={() => setActiveCategory(cat.value)}
            label={cat.label}
          />
        ))}
      </div>
    </header>
  );
};

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
}

const FilterButton = ({ active, onClick, label }: FilterButtonProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap border ${
      active
        ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
        : 'bg-white/5 border-white/10 text-white/40 hover:border-white/20 hover:bg-white/10'
    } glass-panel`}
  >
    {label}
  </button>
);
