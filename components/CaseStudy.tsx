import React from 'react';
import { motion } from 'framer-motion';
import { CASE_STUDIES } from '../constants';
import { TrendingUp, Zap, Clock } from 'lucide-react';

const CaseStudy: React.FC = () => {
  return (
    <section id="success" className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-left">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4"
          >
            Proof of Concept
          </motion.div>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter leading-tight">
            Transformations <br />
            <span className="text-slate-500">In Real-Time.</span>
          </h2>
        </div>
        <p className="text-slate-400 max-w-sm mb-2 text-sm md:text-base mx-auto md:mx-0">
          We don't just promise efficiency; we deliver measurable bottom-line growth for our enterprise partners.
        </p>
      </div>

      <div className="space-y-8 md:space-y-12">
        {CASE_STUDIES.map((study, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-3xl md:rounded-[3rem] p-6 md:p-12 relative overflow-hidden group hover:border-white/20 transition-all"
          >
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 relative z-10">
              {/* Left Side: Story */}
              <div className="lg:w-7/12">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-6 md:mb-8">
                  <span className={`px-3 md:px-4 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest ${
                    study.color === 'primary' ? 'bg-primary text-black' : 'bg-secondary text-white'
                  }`}>
                    {study.industry}
                  </span>
                  <span className="text-slate-200 font-bold text-lg md:text-xl">{study.company}</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-center md:text-left">
                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-slate-500 font-bold text-[10px] md:text-xs uppercase tracking-widest">The Challenge</h4>
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed">{study.challenge}</p>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest">The AI Solution</h4>
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed">{study.solution}</p>
                  </div>
                </div>
              </div>

              {/* Right Side: Metrics Grid */}
              <div className="lg:w-5/12 flex flex-col justify-center">
                <div className="grid grid-cols-3 gap-2 md:gap-4">
                  {study.results.map((res, i) => (
                    <div key={i} className="glass border-white/5 bg-white/[0.02] rounded-2xl md:rounded-3xl p-3 md:p-6 flex flex-col items-center justify-center text-center group-hover:bg-white/[0.05] transition-all min-w-0">
                      <div className={`text-xl sm:text-2xl md:text-3xl font-black mb-1 md:mb-2 truncate w-full ${
                        study.color === 'primary' ? 'text-primary' : 'text-secondary'
                      }`}>
                        {res.value}
                      </div>
                      <div className="text-[7px] sm:text-[9px] md:text-[10px] uppercase tracking-tighter text-slate-500 font-bold leading-tight line-clamp-2">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
                  <div className="flex items-center gap-2 text-[10px] md:text-xs text-slate-500 font-medium whitespace-nowrap">
                    <Clock className="w-3 h-3" />
                    Implementation: 14 Days
                  </div>
                  <div className="flex items-center gap-2 text-[10px] md:text-xs text-slate-500 font-medium whitespace-nowrap">
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    Verified ROI
                  </div>
                </div>
              </div>
            </div>

            {/* Gradient Background Decoration */}
            <div className={`absolute top-0 right-0 w-[400px] h-[400px] blur-[100px] opacity-10 pointer-events-none -mr-40 -mt-40 transition-opacity group-hover:opacity-20 ${
              study.color === 'primary' ? 'bg-primary' : 'bg-secondary'
            }`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;