import React, { useState } from 'react';
import { NovaLogo } from './NovaLogo';
import { teamData } from '../data/teamData';
import { ViewMode } from '../types';
import { 
  Instagram, 
  Sparkles, 
  Download, 
  Layers, 
  Smartphone, 
  Square, 
  MonitorPlay,
  Shield,
  MessageSquare,
  Link2,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CyberHeaderProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onOpenExportModal: () => void;
  onOpenContactModal: () => void;
}

export const CyberHeader: React.FC<CyberHeaderProps> = ({
  currentView,
  onViewChange,
  onOpenExportModal,
  onOpenContactModal,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLiveLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    confetti({ particleCount: 40, spread: 45, origin: { y: 0.2 } });
    setTimeout(() => setCopiedLink(false), 2500);
  };
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#070b14]/80 border-b border-cyan-500/15 transition-all">
      {/* Top micro ticker */}
      <div className="bg-gradient-to-r from-cyan-950/60 via-blue-950/40 to-slate-950/80 border-b border-cyan-500/10 py-1 px-4 text-xs">
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
            <span className="hidden sm:inline-block text-slate-300 text-[11px]">
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

      {/* Main navigation & controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div 
          onClick={() => onViewChange('interactive')}
          className="cursor-pointer transition-transform hover:scale-[1.02]"
        >
          <NovaLogo size="md" />
        </div>

        {/* View Mode Switcher */}
        <div className="hidden lg:flex items-center p-1 bg-slate-900/90 rounded-xl border border-slate-800 shadow-inner">
          <button
            onClick={() => onViewChange('interactive')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              currentView === 'interactive'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>عرض تفاعلي مباشر</span>
          </button>

          <button
            onClick={() => onViewChange('instagram-post')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              currentView === 'instagram-post'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Square className="w-3.5 h-3.5" />
            <span>بوست إنستغرام (1:1)</span>
          </button>

          <button
            onClick={() => onViewChange('story-format')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              currentView === 'story-format'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>ستوري (9:16)</span>
          </button>

          <button
            onClick={() => onViewChange('presentation-slide')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              currentView === 'presentation-slide'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <MonitorPlay className="w-3.5 h-3.5" />
            <span>عرض تقديمي (16:9)</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleCopyLiveLink}
            title="نسخ رابط الموقع لوضعه في بايو الإنستغرام"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold bg-cyan-950/80 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-500/30 transition-all hover:border-cyan-400"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-cairo">تم نسخ الرابط!</span>
              </>
            ) : (
              <>
                <Link2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline font-cairo">نسخ رابط الموقع للبايو</span>
                <span className="sm:hidden font-cairo">نسخ الرابط</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenContactModal}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-slate-800/90 hover:bg-slate-700/90 text-cyan-300 border border-cyan-500/30 transition-all hover:border-cyan-400"
          >
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">راسلنا الآن</span>
            <span className="sm:hidden">تواصل</span>
          </button>

          <button
            onClick={onOpenExportModal}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-cairo shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-4 h-4" />
            <span>تصدير التصميم</span>
          </button>
        </div>
      </div>
    </header>
  );
};
