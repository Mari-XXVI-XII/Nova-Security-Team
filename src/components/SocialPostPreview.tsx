import React, { useRef, useState } from 'react';
import { teamData, servicesData } from '../data/teamData';
import { NovaLogo } from './NovaLogo';
import { ViewMode } from '../types';
import { 
  Download, 
  Copy, 
  Check, 
  Instagram, 
  Sparkles, 
  Shield, 
  Code2, 
  ShieldCheck, 
  GraduationCap, 
  Presentation, 
  Bot, 
  Lightbulb, 
  Lock, 
  Send,
  ExternalLink,
  Layers,
  Square,
  Smartphone,
  MonitorPlay
} from 'lucide-react';
import { toPng, toJpeg } from 'html-to-image';
import confetti from 'canvas-confetti';

interface SocialPostPreviewProps {
  initialFormat?: ViewMode;
  onClose?: () => void;
}

export const SocialPostPreview: React.FC<SocialPostPreviewProps> = ({
  initialFormat = 'instagram-post',
  onClose
}) => {
  const [activeFormat, setActiveFormat] = useState<ViewMode>(initialFormat);
  const [isExporting, setIsExporting] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  const getServiceIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-cyan-400" };
    switch (iconName) {
      case 'Code2': return <Code2 {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Presentation': return <Presentation {...props} />;
      case 'Bot': return <Bot {...props} />;
      case 'Lightbulb': return <Lightbulb {...props} />;
      default: return <Shield {...props} />;
    }
  };

  const handleDownload = async (formatType: 'png' | 'jpeg') => {
    if (!canvasRef.current) return;
    try {
      setIsExporting(true);
      const node = canvasRef.current;
      
      const dataUrl = formatType === 'png' 
        ? await toPng(node, { quality: 0.98, pixelRatio: 2.5 })
        : await toJpeg(node, { quality: 0.98, pixelRatio: 2.5 });
      
      const link = document.createElement('a');
      link.download = `NOVA-SECURITY-ABOUT-US-${activeFormat}.${formatType}`;
      link.href = dataUrl;
      link.click();

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error('Export failed:', err);
    } finally {
      setIsExporting(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="py-8 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Top Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl mb-8">
        
        {/* Format Selector */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-slate-400 font-tajawal font-medium pl-2">
            اختر أبعاد التصميم للتصدير:
          </span>

          <button
            onClick={() => setActiveFormat('instagram-post')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold font-cairo transition-all ${
              activeFormat === 'instagram-post'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Square className="w-3.5 h-3.5" />
            <span>بوست إنستغرام (1:1)</span>
          </button>

          <button
            onClick={() => setActiveFormat('story-format')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold font-cairo transition-all ${
              activeFormat === 'story-format'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>ستوري رأسي (9:16)</span>
          </button>

          <button
            onClick={() => setActiveFormat('presentation-slide')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold font-cairo transition-all ${
              activeFormat === 'presentation-slide'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <MonitorPlay className="w-3.5 h-3.5" />
            <span>سلايد عرض تقديمي (16:9)</span>
          </button>
        </div>

        {/* Download Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleDownload('png')}
            disabled={isExporting}
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold font-cairo text-xs sm:text-sm bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:scale-105 disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            <span>{isExporting ? 'جارِ التصدير بدقة عالية...' : 'تحميل صورة عالية الدقة (PNG HD)'}</span>
          </button>
        </div>

      </div>

      {/* Canvas Container */}
      <div className="flex justify-center items-center overflow-x-auto py-4">
        <div
          ref={canvasRef}
          className={`relative bg-[#070d18] text-slate-100 border border-cyan-500/40 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 ${
            activeFormat === 'instagram-post'
              ? 'w-[750px] min-h-[750px] aspect-square'
              : activeFormat === 'story-format'
              ? 'w-[540px] min-h-[960px] aspect-[9/16]'
              : 'w-[960px] min-h-[540px] aspect-[16/9]'
          }`}
          style={{ fontFamily: "'Cairo', 'Tajawal', sans-serif" }}
        >
          {/* Cyber Grid & Glowing Accents in Canvas */}
          <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Decorative Cyber Border Lines */}
          <div className="absolute top-3 right-3 left-3 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          <div className="absolute bottom-3 right-3 left-3 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

          {/* ================= 1. القسم العلوي (الرأسية) ================= */}
          <div className="relative z-10 flex items-center justify-between border-b border-cyan-500/20 pb-4 mb-5">
            <div className="flex items-center gap-3">
              <NovaLogo size="md" animated={false} />
            </div>

            <div className="text-left flex flex-col items-end">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-[11px] font-english font-bold">
                <Instagram className="w-3 h-3 text-pink-400" />
                <span>@{teamData.instagramHandle}</span>
              </div>
              <span className="text-[10px] text-slate-400 font-english mt-1">
                CYBER SECURITY & TECH
              </span>
            </div>
          </div>

          {/* Title & Introduction */}
          <div className="relative z-10 text-center mb-5">
            <div className="inline-block relative">
              <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-cyan-200 font-cairo">
                {teamData.question}
              </h1>
              <div className="w-16 h-1 bg-cyan-400 mx-auto mt-1 rounded-full" />
            </div>

            {/* Intro text */}
            <div className="mt-3 p-3.5 rounded-2xl bg-slate-900/80 border border-cyan-500/20 text-right space-y-1.5">
              <p className="text-sm sm:text-base font-bold text-white font-cairo flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block shrink-0" />
                {teamData.introLines[0]}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-cyan-300 font-tajawal">
                {teamData.introLines[1]}
              </p>
              <p className="text-[11px] sm:text-xs text-slate-300 font-tajawal leading-relaxed">
                {teamData.introLines[2]}
              </p>
            </div>

            {/* Slogan */}
            <div className="mt-2.5 py-2 px-4 rounded-xl bg-gradient-to-r from-cyan-950/90 via-blue-950/70 to-slate-900 border border-cyan-400/40 text-center">
              <span className="text-sm sm:text-base font-black text-cyan-200 font-cairo">
                {teamData.motto}
              </span>
            </div>
          </div>

          {/* ================= 2. قسم الخدمات (الخانات الست) ================= */}
          <div className="relative z-10 mb-5">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-bold text-cyan-400 font-cairo flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                ماذا نقدم؟ (خدماتنا)
              </span>
              <span className="text-[10px] text-slate-400 font-english">
                SERVICES 01 - 06
              </span>
            </div>

            <div className={`grid gap-2.5 ${
              activeFormat === 'story-format' 
                ? 'grid-cols-1' 
                : 'grid-cols-2 lg:grid-cols-3'
            }`}>
              {servicesData.map((s) => (
                <div
                  key={s.id}
                  className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 text-right flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-english font-extrabold text-xs text-cyan-400">
                        {s.number}
                      </span>
                      <div className="p-1 rounded-md bg-cyan-950/70 border border-cyan-500/20">
                        {getServiceIcon(s.iconName)}
                      </div>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white font-cairo leading-snug mb-1">
                      {s.title}
                    </h3>
                    <p className="text-[10px] text-slate-300 font-tajawal leading-normal">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= 3. القسم السفلي (التواصل والختام) ================= */}
          <div className="relative z-10 pt-3 border-t border-cyan-500/20 text-center">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/60 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-right">
                <h4 className="text-xs sm:text-sm font-black text-white font-cairo">
                  {teamData.ctaHeading}
                </h4>
                <p className="text-[11px] text-cyan-300 font-tajawal">
                  {teamData.ctaSubtext}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-cairo font-black text-xs flex items-center gap-1.5 shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                  <Instagram className="w-3.5 h-3.5" />
                  <span>{teamData.ctaButtonText}</span>
                </div>
              </div>
            </div>

            {/* Footer Ribbon */}
            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 font-tajawal">
              <span className="font-english font-bold text-slate-300 tracking-wider">
                {teamData.footerBrand}
              </span>
              <span className="font-cairo font-extrabold text-cyan-400">
                {teamData.footerPillars}
              </span>
              <span className="font-english text-[10px]">
                @{teamData.instagramHandle}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
