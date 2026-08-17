import React from 'react';
import { NovaLogo } from './NovaLogo';
import { teamData } from '../data/teamData';
import { Instagram, Send } from 'lucide-react';

interface CyberHeaderProps {
  onOpenContactModal: () => void;
}

export const CyberHeader: React.FC<CyberHeaderProps> = ({ onOpenContactModal }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#070b14]/85 border-b border-cyan-500/15 transition-all">
      {/* Top micro ticker */}
      <div className="bg-gradient-to-r from-cyan-950/60 via-blue-950/40 to-slate-950/80 border-b border-cyan-500/10 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-slate-300">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-english text-[11px] text-emerald-400 font-semibold tracking-wider">
              SYSTEM STATUS: SECURED & ACTIVE
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="hidden sm:inline-block text-slate-300 text-[11px] font-cairo font-medium">
              {teamData.motto}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={teamData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-cyan-300 hover:text-cyan-100 font-english font-medium text-xs transition-colors group"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400 group-hover:scale-110 transition-transform" />
              <span>@{teamData.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Clean Luxury Header Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Official Brand Logo */}
        <NovaLogo size="md" />

        {/* Direct Official Instagram Profile Link Button */}
        <a
          href={teamData.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-cairo bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all hover:scale-105 active:scale-95"
        >
          <Instagram className="w-4 h-4" />
          <span>صفحتنا على Instagram</span>
          <Send className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
};
