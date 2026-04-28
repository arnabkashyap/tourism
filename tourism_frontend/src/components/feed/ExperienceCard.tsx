'use client';

import React from 'react';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { RecommendedBadge } from './ArtisanProfileCard';

interface ExperienceCardProps {
  experience: {
    id: string;
    title: string;
    category: string;
    price: number;
    duration: string;
    image: string;
    description: string;
    tags: string[];
  };
  isRecommended?: boolean;
}

export const ExperienceCard = ({ experience, isRecommended }: ExperienceCardProps) => {
  return (
    <div className="glass-card hud-element rounded-3xl overflow-hidden relative group transition-all duration-500 hover:border-emerald-500/40 border-white/5">
      {isRecommended && (
        <div className="absolute top-4 left-4 z-10 animate-in fade-in zoom-in duration-700">
          <RecommendedBadge />
        </div>
      )}
      
      <div className="relative h-56 overflow-hidden">
        <img 
          src={experience.image} 
          alt={experience.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050805] via-[#050805]/40 to-transparent"></div>
        
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl">
          <span className="text-emerald-400 font-bold tracking-tighter">₹{experience.price}</span>
          <span className="text-white/40 text-[9px] ml-1 uppercase font-mono tracking-widest">/ CRD</span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex gap-2 mb-2">
            {experience.tags.map(tag => (
              <span key={tag} className="bg-emerald-500/10 backdrop-blur-md text-emerald-400/80 px-2 py-0.5 rounded text-[8px] uppercase tracking-wider border border-emerald-500/20">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-white leading-tight tracking-tight">{experience.title}</h3>
        </div>
      </div>

      <div className="p-5 border-t border-white/5">
        <div className="flex items-center gap-4 mb-4 text-white/50 text-[10px] uppercase tracking-widest font-mono">
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="text-emerald-500" />
            <span>{experience.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Tag size={12} className="text-emerald-500" />
            <span>{experience.category}</span>
          </div>
        </div>

        <p className="text-sm text-white/60 line-clamp-2 mb-5 leading-relaxed">
          {experience.description}
        </p>
        
        <button className="w-full group/btn relative flex items-center justify-center gap-2 bg-emerald-500/5 border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/20 text-white py-3.5 rounded-2xl transition-all duration-300">
          <span className="text-xs font-black uppercase tracking-[0.2em]">Initiate Booking</span>
          <ArrowRight size={14} className="text-emerald-500 transition-transform group-hover/btn:translate-x-1" />
          
          {/* Tactical scanning animation line */}
          <div className="absolute top-0 left-0 h-[1px] bg-emerald-400 w-0 group-hover/btn:w-full transition-all duration-700 shadow-[0_0_8px_#10b981]"></div>
        </button>
      </div>
    </div>
  );
};
