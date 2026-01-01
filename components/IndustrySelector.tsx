import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INDUSTRY_BENEFITS } from '../constants';
import { Industry } from '../types';
import { Sun, Scale, Home, Activity, ArrowRight } from 'lucide-react';

const IndustrySelector: React.FC = () => {
  const [active, setActive] = useState<Industry>('Solar');

  const icons = {
    'Solar': <Sun className="w-4 h-4 md:w-5 md:h-5" />,
    'Law': <Scale className="w-4 h-4 md:w-5 md:h-5" />,
    'Real Estate': <Home className="w-4 h-4 md:w-5 md:h-5" />,
  };

  const current = INDUSTRY_BENEFITS.find(i => i.id === active)!;

  return (
    <section id="industries" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-bold text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4"
        >
          Industry Specificity
        </motion.div>
        <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tighter">Precision Built for You</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
          Generic AI prompts aren't enough. We've built deep vertical integrations that understand your unique logic.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-16">
        {INDUSTRY_BENEFITS.map((ind) => (
          <button
            key={ind.id}
            onClick={() => setActive(ind.id)}
            className={`flex items-center gap-2 md:gap-3 px-4 md:px-10 py-3 md:py-5 rounded-xl md:rounded-2xl transition-all font-bold group relative text-sm md:text-lg ${
              active === ind.id 
                ? 'bg-primary text-black shadow-lg shadow-primary/20 scale-105' 
                : 'glass text-slate-400 hover:text-slate-100'
            }`}
          >
            {icons[ind.id]}
            <span className="tracking-tight">{ind.id}</span>
            {active === ind.id && (
              <motion.div 
                layoutId="activeTabGlow"
                className="absolute inset-0 rounded-xl md:rounded-2xl border-2 border-primary/50 pointer-events-none"
              />
            )}
          </button>
        ))}
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-3xl md:rounded-[4rem] p-6 md:p-16 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12"
          >
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest mb-6">
                <Activity className="w-3 h-3" />
                Workflow Engine Active
              </div>
              <h3 className="text-2xl md:text-5xl font-bold mb-6 leading-tight">
                Accelerating <span className="text-primary">{current.id}</span> <br className="hidden md:block" /> 
                Operations.
              </h3>
              <p className="text-slate-400 text-base md:text-xl leading-relaxed mb-10">
                {current.detailedSolution}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
                {current.features.map((feature, idx) => (
                  <div key={idx} className="glass border-white/5 bg-white/[0.02] p-5 md:p-6 rounded-2xl hover:bg-white/[0.05] transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <h4 className="font-bold text-slate-100 text-sm md:text-base">{feature.title}</h4>
                    </div>
                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 text-primary text-sm md:text-base font-bold hover:underline group">
                Download {current.id} Whitepaper
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-5">
              <div className="flex flex-col h-full gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-primary/10 via-[#050505] to-secondary/10 rounded-2xl md:rounded-[3rem] p-8 md:p-12 flex flex-col items-center justify-center border border-white/10 relative overflow-hidden">
                  <div className="relative z-10 text-center">
                    <motion.div 
                      key={current.stat}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-1"
                    >
                      {current.stat}
                    </motion.div>
                    <div className="text-xs md:text-lg font-bold text-primary tracking-widest uppercase mb-4">{current.statLabel}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 md:gap-4">
                  {current.kpis.map((kpi, idx) => (
                    <div key={idx} className="glass p-4 md:p-6 rounded-xl md:rounded-3xl text-center border-white/5">
                      <div className="text-lg md:text-2xl font-bold text-slate-100 mb-0.5">{kpi.value}</div>
                      <div className="text-[8px] md:text-[10px] uppercase tracking-tighter text-slate-500 font-bold leading-none">{kpi.label}</div>
                    </div>
                  ))}
                </div>

                <div className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl border-primary/20 bg-primary/[0.01]">
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed italic">
                    "{current.painPoint}"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IndustrySelector;