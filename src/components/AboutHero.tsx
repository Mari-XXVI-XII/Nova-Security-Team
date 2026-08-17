import React from 'react';
import { teamData } from '../data/teamData';
import { NovaLogo } from './NovaLogo';
import { Shield, Sparkles, Terminal, CheckCircle2, Lock, Cpu, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutHeroProps {
  onScrollToServices?: () => void;
  onOpenContact?: () => void;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ onScrollToServices, onOpenContact }) => {
  return (
    <section className="relative pt-8 pb-16 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Cyber Grid Substrate */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none -z-10" />

      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Team Brand Top Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.15)] mb-8"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          <span className="font-english font-bold text-xs tracking-widest text-cyan-200">
            {teamData.name}
          </span>
          <span className="text-slate-600">|</span>
          <span className="font-english text-[11px] tracking-wider text-slate-400">
            {teamData.subSlogan}
          </span>
        </motion.div>

        {/* Big Central Logo Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="p-4 rounded-3xl bg-slate-900/50 backdrop-blur-md border border-cyan-500/20 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
            <NovaLogo size="xl" showSubtitle={false} />
          </div>
        </motion.div>

        {/* Section 1 Header: "من نحن؟" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block relative mb-4">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest font-english uppercase mb-2 block">
              ABOUT OUR TEAM
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 font-cairo tracking-tight drop-shadow-sm">
              {teamData.question}
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-3 rounded-full" />
          </div>

          {/* Intro Description Card (النبذة التعريفية) */}
          <div className="mt-8 relative rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-cyan-500/25 cyber-glow-card backdrop-blur-xl text-right">
            {/* Cyber Corner Decors */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400 rounded-tr-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400 rounded-bl-2xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="font-english text-xs text-cyan-300 font-semibold tracking-wider">
                  NOVA PROFILE BRIEF
                </span>
              </div>
              <span className="text-xs text-slate-400 font-tajawal">
                الرؤية والرسالة التقنية
              </span>
            </div>

            {/* The 3 Intro Sentences */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="mt-1 p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white font-cairo leading-snug">
                  {teamData.introLines[0]}
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-1 p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <p className="text-lg sm:text-xl font-semibold text-cyan-200 font-tajawal leading-relaxed">
                  {teamData.introLines[1]}
                </p>
              </div>

              <div className="flex items-start gap-3.5 pt-1">
                <div className="mt-1 p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <p className="text-base sm:text-lg text-slate-300 font-tajawal leading-relaxed font-normal">
                  {teamData.introLines[2]}
                </p>
              </div>
            </div>

            {/* Golden/Cyan Slogan Banner (الشعار النصي: "نطور اليوم، لنحمي غداً.") */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan-950/80 via-blue-950/60 to-slate-900/90 border border-cyan-400/40 text-center shadow-[0_0_25px_rgba(6,182,212,0.15)] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <span className="text-[11px] font-english tracking-widest text-cyan-400 font-bold uppercase mb-1 block">
                  OUR CORE MOTTO & PROMISE
                </span>
                <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-300 font-cairo drop-shadow-sm">
                  {teamData.motto}
                </p>
              </div>
            </div>

          </div>

          {/* Quick Action & Scroll Indicator */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onScrollToServices}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold font-cairo text-sm sm:text-base bg-cyan-500 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95"
            >
              <span>استكشف ماذا نقدم</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>

            <button
              onClick={onOpenContact}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold font-cairo text-sm sm:text-base bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 transition-all hover:border-cyan-400"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>طلب استشارة أو مشروع</span>
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
