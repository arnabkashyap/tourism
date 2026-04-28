'use client';

import React from 'react';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';

interface ArtisanProfileCardProps {
  artisan: {
    id: string;
    name: string;
    category: string;
    location: string;
    bio: string;
    image: string;
    isVerified: boolean;
    rating: number;
    experienceCount: number;
  };
  isRecommended?: boolean;
}

export const ArtisanProfileCard = ({ artisan, isRecommended }: ArtisanProfileCardProps) => {
  return (
    <div className="glass-card hud-element rounded-3xl overflow-hidden relative group transition-all duration-500 hover:border-emerald-500/40 border-white/5">
      {isRecommended && (
        <div className="absolute top-4 left-4 z-10 animate-in fade-in zoom-in duration-700">
          <RecommendedBadge />
        </div>
      )}
      
      <div className="relative h-48 overflow-hidden">
        <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050805] via-transparent to-transparent"></div>
        
        {/* Verification Status HUD Indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
          <div className={`w-2 h-2 rounded-full ${artisan.isVerified ? 'bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,1)]' : 'bg-white/20'}`}></div>
          <span className="text-[9px] font-mono uppercase tracking-widest text-white/60">
            {artisan.isVerified ? 'Verified Master' : 'Pending Auth'}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <h3 className="text-lg font-bold text-white tracking-tight">{artisan.name}</h3>
              {artisan.isVerified && <CheckCircle2 size={16} className="text-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]" />}
            </div>
            <div className="flex items-center gap-1 text-white/60 text-[10px] uppercase tracking-wide">
              <MapPin size={10} className="text-emerald-500" />
              <span>{artisan.location}</span>
            </div>
          </div>
          <div className="bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 px-2 py-1 rounded-lg flex items-center gap-1">
            <Star size={12} className="text-emerald-400 fill-emerald-400" />
            <span className="text-xs font-bold text-emerald-400">{artisan.rating}</span>
          </div>
        </div>
      </div>

      <div className="p-5 border-t border-white/5">
        <p className="text-sm text-white/70 line-clamp-2 mb-4 italic font-medium leading-relaxed">
          "{artisan.bio}"
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[8px] uppercase tracking-[0.2em] text-white/30 mb-1">Active Status</span>
            <div className="text-[10px] uppercase tracking-widest text-emerald-500 font-mono flex items-center gap-1.5">
              <span className="w-1 h-1 bg-emerald-500 rounded-full animate-ping"></span>
              {artisan.experienceCount} Live Workshops
            </div>
          </div>
          <button className="bg-emerald-500/10 hover:bg-emerald-500 border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:text-black px-4 py-2 rounded-xl text-xs font-black transition-all duration-300 uppercase tracking-tighter shadow-neon-strong/10 hover:shadow-neon-strong">
            Deploy Story
          </button>
        </div>
      </div>
    </div>
  );
};

export const RecommendedBadge = () => (
  <div className="flex items-center gap-2 bg-emerald-500 text-black px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-[0.15em] shadow-[0_0_20px_rgba(16,185,129,0.5)] border-l-4 border-black/20">
    <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></div>
    Priority Alpha
  </div>
);
