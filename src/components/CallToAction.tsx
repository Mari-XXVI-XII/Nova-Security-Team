import React, { useState } from 'react';
import { teamData } from '../data/teamData';
import { NovaLogo } from './NovaLogo';
import { 
  MessageSquare, 
  Instagram, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  Shield, 
  PhoneCall, 
  Share2,
  Lock
} from 'lucide-react';
import { motion } from 'motion/react';

interface CallToActionProps {
  onOpenContactModal: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenContactModal }) => {
  const [copied, setCopied] = useState(false);

  const sampleDmText = `مرحباً فريق NOVA SECURITY، اطلعت على خدماتكم وأرغب في الاستفسار والتعاون معكم بخصوص مشروع.`;

  const handleCopyDmText = () => {
    navigator.clipboard.writeText(sampleDmText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="relative pt-12 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Glow Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 via-transparent to-transparent pointer-events-none -z-10" />

      {/* Main Luxury CTA Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-br from-slate-900 via-[#060f1e] to-slate-950 border border-cyan-500/30 cyber-glow-blue overflow-hidden text-center"
      >
        {/* Animated Cyber Corner Accents */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-tr-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-bl-3xl pointer-events-none" />
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-80 h-40 bg-cyan-400/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Small Top Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-tajawal">ابدأ رحلتك الرقمية والأمنية معنا</span>
          </div>

          {/* Slogan: "فكرة لديك؟ دعنا نحولها إلى واقع." */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-sky-300 font-cairo mb-4 leading-tight">
            {teamData.ctaHeading}
          </h2>

          {/* Subtext: "للتواصل والمزيد من المعلومات" */}
          <p className="text-lg sm:text-xl text-slate-300 font-tajawal font-medium mb-8">
            {teamData.ctaSubtext}
          </p>

          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-10">
            {/* Primary Direct DM Button ("راسلنا عبر الخاص") */}
            <a
              href={teamData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-black font-cairo text-base sm:text-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all hover:scale-105 active:scale-95 group"
            >
              <Instagram className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform" />
              <span>{teamData.ctaButtonText}</span>
              <Send className="w-4 h-4 text-slate-950" />
            </a>

            {/* In-app Message / Inquiry form */}
            <button
              onClick={onOpenContactModal}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold font-cairo text-base bg-slate-800/90 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-sm"
            >
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <span>إرسال استفسار مباشر</span>
            </button>
          </div>

          {/* Fast Copy Direct Message Tool */}
          <div className="w-full max-w-lg p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-right mb-4">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs text-slate-400 font-tajawal">
                رسالة تواصل مقترحة للخاص (DM):
              </span>
              <button
                onClick={handleCopyDmText}
                className="flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200 px-2.5 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-cairo">تم النسخ بنجاح</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="font-cairo">نسخ الرسالة</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-tajawal select-all bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/60">
              "{sampleDmText}"
            </p>
          </div>

        </div>
      </motion.div>

      {/* شريط النهاية (End Ribbon / Footer Bar) */}
      <div className="mt-14 pt-8 border-t border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Name in Footer */}
        <div className="flex items-center gap-3">
          <NovaLogo size="sm" showSubtitle={false} />
          <div className="text-right">
            <span className="font-english font-black text-sm text-white tracking-widest block">
              {teamData.footerBrand}
            </span>
            <span className="text-xs text-slate-400 font-tajawal">
              فريق الأنظمة الأمنية والحلول الرقمية المتطورة
            </span>
          </div>
        </div>

        {/* Pillars / الثلاثية: "نبتكر . نطور . نحمي" */}
        <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
          <Shield className="w-4 h-4 text-cyan-400" />
          <span className="font-cairo font-black text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-100 to-cyan-300 tracking-wider">
            {teamData.footerPillars}
          </span>
          <Lock className="w-3.5 h-3.5 text-cyan-400" />
        </div>

        {/* Social / Copyright */}
        <div className="flex items-center gap-4 text-xs text-slate-400 font-tajawal">
          <a
            href={teamData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-english font-medium"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@{teamData.instagramHandle}</span>
          </a>
          <span>•</span>
          <span>جميع الحقوق محفوظة {new Date().getFullYear()}</span>
        </div>

      </div>
    </section>
  );
};
