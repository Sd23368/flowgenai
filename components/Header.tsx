import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CALENDLY_URL } from '../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', id: 'features' },
    { name: 'Industries', id: 'industries' },
    { name: 'Success', id: 'success' },
    { name: 'Pricing', id: 'pricing' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      window.history.pushState(null, '', `#${id}`);
    }
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 lg:p-8 pointer-events-none">
      <nav className="glass rounded-full px-5 lg:px-10 py-3 lg:py-4 flex items-center justify-between w-full max-w-6xl shadow-2xl pointer-events-auto border border-white/10 relative z-[101]">
        {/* Logo Section */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          className="flex items-center gap-3 lg:gap-4 group transition-transform hover:scale-105 active:scale-95 flex-shrink-0"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-primary/30 rounded-lg blur group-hover:bg-primary/50 transition-all"></div>
            <div className="relative w-9 h-9 lg:w-12 lg:h-12 bg-[#FF6B00] rounded-xl flex items-center justify-center overflow-hidden border border-white/20 shadow-lg">
              <svg viewBox="0 0 100 100" className="w-6 h-6 lg:w-8 lg:h-8">
                <path 
                  d="M25 35 L50 20 L75 35 L75 65 L50 80 L25 65 Z" 
                  fill="none" 
                  stroke="black" 
                  strokeWidth="8" 
                />
                <path 
                  d="M50 35 L65 42 L65 58 L50 65 L35 58 L35 42 Z" 
                  fill="white" 
                />
              </svg>
            </div>
          </div>
          <span className="font-bold text-lg lg:text-2xl tracking-tighter italic text-slate-50 hidden sm:inline-block">
            flow<span className="not-italic font-black text-primary">G</span>enix
          </span>
        </a>
        
        {/* Main Navigation - Visible only on Desktop (LG breakpoint) */}
        <div className="hidden lg:flex items-center gap-12 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              onClick={(e) => scrollToSection(e, link.id)} 
              className="hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-2 lg:gap-6">
          <a 
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-orange-600 px-4 lg:px-8 py-2 lg:py-3 rounded-full text-black text-[10px] lg:text-sm font-black transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/30 flex items-center justify-center whitespace-nowrap"
          >
            <span className="hidden xs:inline">Book Discovery Call</span>
            <span className="xs:hidden">Book Now</span>
          </a>

          {/* Menu Toggle - Visible on Mobile and Tablet (below LG) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile/Tablet Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[calc(100%+12px)] left-0 right-0 lg:hidden z-[100]"
            >
              <div className="bg-[#050505] rounded-[2rem] p-4 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] mx-2 flex flex-col gap-2 ring-1 ring-white/10">
                {navLinks.map((link) => (
                  <a 
                    key={link.id}
                    href={`#${link.id}`} 
                    onClick={(e) => scrollToSection(e, link.id)} 
                    className="text-lg font-bold text-slate-200 hover:text-primary p-4 rounded-2xl hover:bg-white/5 transition-all flex items-center justify-between group active:bg-white/10"
                  >
                    {link.name}
                    <ArrowRight size={20} className="text-primary opacity-50 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Click outside to close - backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-[-1] pointer-events-auto lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;