import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';
import { CALENDLY_URL } from '../constants';

const FooterCTA: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="contact" className="pt-12 md:pt-16 pb-8 md:pb-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          viewport={{ once: true }}
          className="glass rounded-3xl md:rounded-[3rem] p-8 md:p-20 text-center mb-16 md:mb-24 relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tighter text-white leading-tight">Ready to Build Your Custom Workflow?</h2>
            <p className="text-base md:text-lg text-slate-400 mb-10 md:mb-12">
              Join 400+ businesses scaling with <span className="text-slate-200 font-semibold">flowGenix</span>. Book a 15-minute discovery call today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-primary rounded-full text-black font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-primary/20 flex items-center justify-center"
              >
                Secure Your Spot
              </a>
              <button 
                onClick={scrollToPricing}
                className="w-full sm:w-auto px-10 py-5 glass rounded-full text-white font-bold text-lg hover:bg-white/10 transition-all"
              >
                View Pricing
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 border-t border-white/5 pt-12 pb-8">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 md:w-9 md:h-9 bg-primary rounded-lg flex items-center justify-center overflow-hidden border border-white/10">
                <svg viewBox="0 0 100 100" className="w-5 h-5 md:w-6 md:h-6">
                  <path d="M25 35 L50 20 L75 35 L75 65 L50 80 L25 65 Z" fill="none" stroke="black" strokeWidth="8" />
                  <path d="M50 35 L65 42 L65 58 L50 65 L35 58 L35 42 Z" fill="white" />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tighter italic text-slate-200">
                flow<span className="not-italic font-black text-primary">G</span>enix
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Empowering service businesses with frontier AI infrastructure.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-200 mb-5 md:mb-6 uppercase text-[10px] tracking-widest">Platform</h4>
            <ul className="space-y-3 md:space-y-4 text-slate-400 text-sm">
              <li className="hover:text-primary cursor-pointer transition-colors">AI Receptionist</li>
              <li className="hover:text-primary cursor-pointer transition-colors">CRM Integrations</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Call Analytics</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Pricing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-200 mb-5 md:mb-6 uppercase text-[10px] tracking-widest">Industries</h4>
            <ul className="space-y-3 md:space-y-4 text-slate-400 text-sm">
              <li className="hover:text-primary cursor-pointer transition-colors">Solar & Energy</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Legal Firms</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Real Estate</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-200 mb-5 md:mb-6 uppercase text-[10px] tracking-widest">Contact</h4>
            <ul className="space-y-3 md:space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" /> contact@flowgenix.in
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" /> sam@flowgenix.in
              </li>
              <li className="flex items-center gap-2 leading-tight">
                <MapPin className="w-4 h-4 text-primary" /> Palo Alto, CA
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-slate-600 text-[10px] pt-10 md:pt-12 italic border-t border-white/5">
          &copy; 2025 flowGenix Automation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
