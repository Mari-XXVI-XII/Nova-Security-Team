import React, { useState } from 'react';
import { servicesData } from '../data/teamData';
import { ServiceItem } from '../types';
import { 
  Code2, 
  ShieldCheck, 
  GraduationCap, 
  Presentation, 
  Bot, 
  Lightbulb, 
  ArrowUpRight, 
  Check, 
  Sparkles,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    const props = { className: "w-7 h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors" };
    switch (iconName) {
      case 'Code2': return <Code2 {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Presentation': return <Presentation {...props} />;
      case 'Bot': return <Bot {...props} />;
      case 'Lightbulb': return <Lightbulb {...props} />;
      default: return <Zap {...props} />;
    }
  };

  return (
    <section id="services-section" className="relative py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section 2 Header: "ماذا نقدم؟" */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>خدماتنا وحلولنا التخصصية</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-200 font-cairo">
          ماذا نقدم؟
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 font-tajawal max-w-2xl mx-auto">
          نقدم باقة متكاملة من الخدمات التقنية والأمنية المصممة بعناية فائقة لتلبية كافة احتياجاتك الرقمية
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-4 rounded-full" />
      </div>

      {/* 6 Services Grid (الخانات الست) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {servicesData.map((service, index) => {
          const isHovered = hoveredCard === service.id;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative rounded-2xl p-6 sm:p-7 bg-gradient-to-b from-slate-900/90 via-[#0a1120]/90 to-slate-950/95 border border-slate-800 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1.5 cyber-glow-card cyber-glow-card-hover flex flex-col justify-between"
            >
              {/* Glowing Corner Indicator */}
              <div className="absolute top-0 left-0 w-12 h-12 overflow-hidden pointer-events-none rounded-tl-2xl">
                <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 group-hover:w-full group-hover:h-full group-hover:bg-cyan-500/10 transition-all duration-500" />
              </div>

              <div>
                {/* Top Number & Tag Header */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  {/* Number Badge (01, 02, 03, 04, 05, 06) */}
                  <span className="font-english font-black text-2xl sm:text-3xl text-slate-700 group-hover:text-cyan-400/80 transition-colors">
                    {service.number}
                  </span>

                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-cyan-300 border border-slate-700 group-hover:border-cyan-500/40 transition-colors font-tajawal">
                    {service.tag}
                  </span>
                </div>

                {/* Service Icon with futuristic box */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-950/90 to-blue-950/80 border border-cyan-500/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all">
                  {getIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white font-cairo mb-3 group-hover:text-cyan-200 transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Service Detailed Description */}
                <p className="text-slate-300 font-tajawal text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Bullet Features */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80 mb-6">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 font-tajawal">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link Footer */}
              <button
                onClick={() => onSelectService?.(service)}
                className="w-full mt-2 py-2.5 px-4 rounded-xl bg-slate-800/60 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-100 border border-slate-700/80 hover:border-cyan-500/40 text-xs sm:text-sm font-bold font-cairo flex items-center justify-center gap-2 transition-all group-hover:shadow-sm"
              >
                <span>طلب هذه الخدمة</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-transform" />
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
