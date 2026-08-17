/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CyberHeader } from './components/CyberHeader';
import { AboutHero } from './components/AboutHero';
import { ServicesSection } from './components/ServicesSection';
import { CallToAction } from './components/CallToAction';
import { DirectMessageModal } from './components/DirectMessageModal';
import { ServiceItem } from './types';
import { 
  Sparkles, 
  Terminal, 
  ShieldCheck, 
  ArrowLeft
} from 'lucide-react';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);

  // Idea to Reality Interactive Tool State
  const [clientIdeaInput, setClientIdeaInput] = useState('');
  const [analyzedResponse, setAnalyzedResponse] = useState<{
    solution: string;
    securityLevel: string;
    techStack: string;
    servicesMatched: string[];
  } | null>(null);

  const handleScrollToServices = () => {
    const el = document.getElementById('services-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceForModal(service);
    setIsContactModalOpen(true);
  };

  const handleAnalyzeIdea = () => {
    if (!clientIdeaInput.trim()) return;

    const inputLower = clientIdeaInput.toLowerCase();
    let solution = 'تطبيق ذكي متكامل مع واجهات مستخدم متقدمة ونظام حماية عالي الكفاءة';
    let securityLevel = 'نظام تشفير متعدد الطبقات (Multi-Layer End-to-End Encryption)';
    let techStack = 'Next.js, Python/Node, AI Integration, Cloud Security WAF';
    let servicesMatched = ['01 برمجة وتطوير مواقع الويب والتطبيقات', '02 بناء وتأمين الأنظمة الأمنية'];

    if (inputLower.includes('ذكاء') || inputLower.includes('ai') || inputLower.includes('بوت') || inputLower.includes('تعلم')) {
      solution = 'حل يعتمد على نماذج الذكاء الاصطناعي التوليدي مع معالجة آمنة للبيانات';
      securityLevel = 'حماية وتدقيق مدخلات الـ AI ومنع تسريب البيانات الحساسة';
      techStack = 'Gemini Pro / GPT-4o, LangChain, Vector Database, Zero-Trust';
      servicesMatched = ['05 تعلم وتطبيقات الذكاء الاصطناعي', '06 حلول وتقنيات مبتكرة'];
    } else if (inputLower.includes('ورش') || inputLower.includes('تدريب') || inputLower.includes('دورة') || inputLower.includes('شرح')) {
      solution = 'برنامج ورشات عمل تدريبية تفاعلية مخصصة لفريقك لنقل الخبرة العملية';
      securityLevel = 'بيئات تدريب معزولة وآمنة (Cyber Range Sandbox)';
      techStack = 'Interactive Workshops, Live Coding Labs, Practical Frameworks';
      servicesMatched = ['03 ورشات تعليمية تخصصية', '05 تعلم الذكاء الاصطناعي'];
    } else if (inputLower.includes('عرض') || inputLower.includes('برزنتيشن') || inputLower.includes('تصميم') || inputLower.includes('شركة')) {
      solution = 'عرض تقديمي استراتيجي وهوية رقمية إبداعية تبرز قوة فكرتك وتجذب المستثمرين';
      securityLevel = 'حفظ حقوق الملكية الفكرية وسرية العرض';
      techStack = 'Custom High-End Presentation Deck, Kinetic Visuals, 3D Infographics';
      servicesMatched = ['04 تصميم عروض تقديمية احترافية', '06 حلول وتقنيات مبتكرة'];
    } else if (inputLower.includes('اختراق') || inputLower.includes('حماية') || inputLower.includes('أمن') || inputLower.includes('سيرفر')) {
      solution = 'فحص أمني شامل (VAPT) وتدريع البنية التحتية ضد أحدث الهجمات السيبرانية';
      securityLevel = 'أعلى معايير الأمان السيبراني الدولية (OWASP & ISO 27001)';
      techStack = 'Penetration Testing, Firewall Hardening, Real-time SIEM Monitoring';
      servicesMatched = ['02 بناء وتأمين الأنظمة الأمنية', '06 حلول وتقنيات مبتكرة'];
    }

    setAnalyzedResponse({
      solution,
      securityLevel,
      techStack,
      servicesMatched,
    });
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-cairo selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Clean Official Luxury Header */}
      <CyberHeader
        onOpenContactModal={() => {
          setSelectedServiceForModal(null);
          setIsContactModalOpen(true);
        }}
      />

      <main className="relative">
        {/* Section 1: Top Hero (القسم العلوي - الرأسية) */}
        <AboutHero
          onScrollToServices={handleScrollToServices}
          onOpenContact={() => {
            setSelectedServiceForModal(null);
            setIsContactModalOpen(true);
          }}
        />

        {/* Interactive Feature: "فكرة لديك؟ دعنا نحولها إلى واقع" Live Converter */}
        <section className="py-8 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] text-right">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-5 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-cairo">
                    محاكي تحويل الأفكار إلى حلول ذكية وآمنة
                  </h3>
                  <p className="text-xs text-slate-400 font-tajawal">
                    أدخل فكرتك وسيقترح عليك فريق NOVA البنية التقنية والأمنية المناسبة فوراً
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-english px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/20">
                NOVA ARCHITECTURE ENGINE
              </span>
            </div>

            {/* Input Box */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="text"
                value={clientIdeaInput}
                onChange={(e) => setClientIdeaInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAnalyzeIdea()}
                placeholder="اكتب فكرتك هنا (مثال: متجر الكتروني محمي، فحص أمان تطبيق، ورشة تدريب AI...)"
                className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 text-white text-sm font-tajawal focus:outline-none focus:ring-1 focus:ring-cyan-400"
              />
              <button
                onClick={handleAnalyzeIdea}
                className="px-6 py-3 rounded-xl font-bold font-cairo text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all shrink-0 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>تحليل الفكرة</span>
              </button>
            </div>

            {/* Analyzed Result Box */}
            {analyzedResponse && (
              <div className="mt-5 p-5 rounded-2xl bg-slate-950/90 border border-cyan-400/40 animate-fade-in space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 font-tajawal">
                    <ShieldCheck className="w-4 h-4" />
                    خطة التنفيذ المقترحة من فريق NOVA:
                  </span>
                  <button
                    onClick={() => {
                      setSelectedServiceForModal(null);
                      setIsContactModalOpen(true);
                    }}
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-bold font-cairo flex items-center gap-1 underline underline-offset-4"
                  >
                    <span>راسلنا لتنفيذ هذه الخطة</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400 block mb-1 font-tajawal">الحل البرمجي الموصى به:</span>
                    <p className="font-bold text-white font-tajawal">{analyzedResponse.solution}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400 block mb-1 font-tajawal">طبقة الأمان والحماية:</span>
                    <p className="font-bold text-cyan-300 font-tajawal">{analyzedResponse.securityLevel}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap pt-1 text-[11px] text-slate-400 font-tajawal">
                  <span>الخدمات المرتبطة:</span>
                  {analyzedResponse.servicesMatched.map((s, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/20">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Services (قسم الخدمات - الخانات الست) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Section 3: Call To Action & Footer (القسم السفلي - التواصل والختام) */}
        <CallToAction
          onOpenContactModal={() => {
            setSelectedServiceForModal(null);
            setIsContactModalOpen(true);
          }}
        />
      </main>

      {/* Direct Contact & DM Modal */}
      <DirectMessageModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        selectedService={selectedServiceForModal}
      />

    </div>
  );
}
