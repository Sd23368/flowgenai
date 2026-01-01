import React from 'react';
import { motion } from 'motion/react';
import { FEATURES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const FeatureBento: React.FC = () => {
  return (
    <section id="features" className="py-8 md:py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {/* Card 1: Large - Voice AI */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="md:col-span-8 glass p-6 md:p-10 rounded-2xl md:rounded-3xl relative overflow-hidden group hover:border-primary/50 transition-colors"
        >
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="mb-4 md:mb-6 p-3 md:p-4 bg-primary/10 rounded-xl md:rounded-2xl w-fit">
                {FEATURES[0].icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{FEATURES[0].title}</h3>
              <p className="text-slate-400 text-sm md:text-lg max-w-md mb-6">{FEATURES[0].description}</p>
              
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 mt-4">
                {FEATURES[0].subFeatures?.map((sub, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    {sub}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
        </motion.div>

        {/* Card 2: Workflow Logic */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4 glass p-6 md:p-10 rounded-2xl md:rounded-3xl group hover:border-secondary/50 transition-colors"
        >
          <div className="mb-4 md:mb-6 p-3 md:p-4 bg-secondary/10 rounded-xl md:rounded-2xl w-fit">
            {FEATURES[1].icon}
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{FEATURES[1].title}</h3>
          <p className="text-slate-400 text-sm mb-6">{FEATURES[1].description}</p>
          <ul className="space-y-2.5">
            {FEATURES[1].subFeatures?.map((sub, i) => (
              <li key={i} className="flex items-center gap-2 text-[11px] md:text-xs text-slate-300 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                {sub}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Card 3: Document AI */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 glass p-6 md:p-10 rounded-2xl md:rounded-3xl group hover:border-primary/50 transition-colors"
        >
          <div className="mb-4 md:mb-6 p-3 md:p-4 bg-primary/10 rounded-xl md:rounded-2xl w-fit">
            {FEATURES[2].icon}
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{FEATURES[2].title}</h3>
          <p className="text-slate-400 text-sm mb-6">{FEATURES[2].description}</p>
          <ul className="space-y-2.5">
            {FEATURES[2].subFeatures?.map((sub, i) => (
              <li key={i} className="flex items-center gap-2 text-[11px] md:text-xs text-slate-300 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {sub}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Card 4: CRM Sync */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-8 glass p-6 md:p-10 rounded-2xl md:rounded-3xl group hover:border-secondary/50 transition-colors"
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 h-full">
            <div className="flex-1">
              <div className="mb-4 md:mb-6 p-3 md:p-4 bg-secondary/10 rounded-xl md:rounded-2xl w-fit">
                {FEATURES[3].icon}
              </div>
              <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">{FEATURES[3].title}</h3>
              <p className="text-slate-400 text-sm md:text-base mb-6">{FEATURES[3].description}</p>
              <div className="flex flex-wrap gap-2">
                {FEATURES[3].subFeatures?.map((sub, i) => (
                  <span key={i} className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 rounded-full border border-white/10 whitespace-nowrap">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden sm:block flex-1 bg-black/40 border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 font-mono text-[10px] md:text-xs">
               <div className="text-primary mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Infrastructure Monitor
               </div>
               <div className="space-y-2">
                 <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                   <span className="text-slate-500">HubSpot Sync:</span> <span className="text-green-400">OK</span>
                 </div>
                 <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                   <span className="text-slate-500">OCR Conf:</span> <span className="text-primary">99.8%</span>
                 </div>
                 <div className="flex justify-between items-center py-1.5">
                   <span className="text-slate-500">Latency:</span> <span className="text-secondary">0.08ms</span>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureBento;