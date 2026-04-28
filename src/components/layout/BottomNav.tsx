'use client';

import React from 'react';
import { Home, Search, PenSquare, Bell, User } from 'lucide-react';

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50">
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
      
      <div className="bg-[#080c0a]/98 backdrop-blur-xl border-t border-emerald-500/20 px-4 py-3 pb-6 flex items-center justify-around shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
        <NavItem icon={<Home size={20} />} label="Home" active />
        <NavItem icon={<Search size={20} />} label="Search" />
        <NavItem icon={<PenSquare size={20} />} label="Post" />
        <NavItem icon={<Bell size={20} />} label="Notifs" />
        <NavItem icon={<User size={20} />} label="Profile" />
      </div>

      {/* SafeArea Bottom Spacer */}
      <div className="bg-[#080c0a] h-1"></div>
    </nav>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem = ({ icon, label, active = false }: NavItemProps) => (
  <button className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 min-w-[64px] ${
    active ? 'text-emerald-400' : 'text-white/30 hover:text-white/60'
  }`}>
    <div className={`transition-transform duration-300 ${active ? 'drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] scale-110' : ''}`}>
      {icon}
    </div>
    <span className={`text-[10px] font-bold tracking-wider uppercase ${active ? 'text-emerald-400' : 'text-white/20'}`}>
      {label}
    </span>
    {active && (
      <div className="absolute top-0 w-8 h-[2px] bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></div>
    )}
  </button>
);
