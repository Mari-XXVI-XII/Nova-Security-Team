import React, { useState } from 'react';
import { teamData, servicesData } from '../data/teamData';
import { ServiceItem } from '../types';
import { 
  X, 
  Instagram, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  Phone,
  Terminal,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DirectMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: ServiceItem | null;
}

export const DirectMessageModal: React.FC<DirectMessageModalProps> = ({
  isOpen,
  onClose,
  selectedService,
}) => {
  if (!isOpen) return null;

  const [clientName, setClientName] = useState('');
  const [serviceChoice, setServiceChoice] = useState(
    selectedService ? selectedService.title : servicesData[0].title
  );
  const [projectDetails, setProjectDetails] = useState('');
  const [copied, setCopied] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const fullCustomMessage = `مرحباً فريق NOVA SECURITY 👋
أنا: ${clientName.trim() || '[الاسم / جهة العمل]'}
الخدمة المطلوبة: ${serviceChoice}
تفاصيل الفكرة أو المشروع:
${projectDetails.trim() || 'أود الاستفسار عن تفاصيل الخدمة والأسعار وموعد البدء.'}
---
أتطلع للتواصل معكم والبدء بالعمل!`;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(fullCustomMessage);
    setCopied(true);
    confetti({ particleCount: 50, spread: 50, origin: { y: 0.7 } });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSendViaInstagram = () => {
    navigator.clipboard.writeText(fullCustomMessage);
    window.open(teamData.instagramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-cyan-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.25)] text-right my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-cairo">
              {teamData.ctaButtonText} (DM)
            </h3>
            <p className="text-xs sm:text-sm text-cyan-300 font-tajawal">
              {teamData.ctaSubtext} | @{teamData.instagramHandle}
            </p>
          </div>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-xs font-bold text-slate-300 font-tajawal mb-1.5">
              الاسم أو اسم المؤسسة:
            </label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="مثال: أحمد عبد الله / شركة الأفق"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 text-white text-sm font-tajawal focus:outline-none focus:ring-1 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 font-tajawal mb-1.5">
              الخدمة المراد الاستفسار عنها:
            </label>
            <select
              value={serviceChoice}
              onChange={(e) => setServiceChoice(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 text-white text-sm font-tajawal focus:outline-none focus:ring-1 focus:ring-cyan-400"
            >
              {servicesData.map((s) => (
                <option key={s.id} value={s.title}>
                  [{s.number}] {s.title}
                </option>
              ))}
              <option value="استفسار عام أو فكرة جديدة">فكرة أخرى / استفسار عام</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 font-tajawal mb-1.5">
              تفاصيل الفكرة أو المشروع:
            </label>
            <textarea
              rows={3}
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
              placeholder="اكتب نبذة مختصرة عن متطلباتك وسيقوم الفريق بالرد السريع..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 text-white text-sm font-tajawal focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-none"
            />
          </div>
        </div>

        {/* Live Preview of formatted DM */}
        <div className="p-4 rounded-2xl bg-slate-950/90 border border-cyan-500/20 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-cyan-400 font-tajawal">
              معاينة الرسالة الجاهزة للإرسال:
            </span>
            <span className="text-[10px] text-slate-500 font-english">
              INSTAGRAM READY
            </span>
          </div>
          <pre className="text-xs text-slate-300 font-tajawal whitespace-pre-wrap leading-relaxed select-all">
            {fullCustomMessage}
          </pre>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleSendViaInstagram}
            className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold font-cairo text-sm bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Instagram className="w-4 h-4 text-slate-950" />
            <span>فتح إنستغرام ونسخ الرسالة</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
          </button>

          <button
            onClick={handleCopyMessage}
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold font-cairo text-sm bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">تم النسخ</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>نسخ فقط</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
