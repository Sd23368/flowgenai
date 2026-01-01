import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Layers } from 'lucide-react';
import { CALENDLY_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-12 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary text-[10px] md:text-xs font-bold mb-6 md:8 uppercase tracking-widest mx-auto"
        >
          <Layers className="w-3 h-3 md:w-4 md:h-4" />
          The OS for High-Growth Firms
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 md:mb-8 leading-[1.1] md:leading-[1.15] py-2"
        >
          <span className="text-gradient">Your Business on</span><br />
          <span className="text-primary orange-glow inline-block">Autonomous Autopilot.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed px-2 md:px-0"
        >
        Scale your Solar, Legal, or Real Estate firm with elite <span className="text-slate-200">AI Receptionists</span>, <span className="text-slate-200">Document Intelligence</span>, and <span className="text-slate-200">Autonomous Workflows</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 md:px-0"
        >
          <a 
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-primary rounded-full text-black font-bold text-base md:text-lg flex items-center justify-center gap-3 hover:bg-orange-600 transition-all group shadow-[0_0_20px_rgba(255,107,0,0.2)]"
          >
            <span className="whitespace-nowrap">Automate Workflow</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 glass rounded-full text-slate-100 font-bold text-base md:text-lg hover:bg-white/10 transition-all">
            Watch Engine Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;