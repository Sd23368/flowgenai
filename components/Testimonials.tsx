
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll specifically for this section to make the parallax feel responsive to user position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Different speeds for different background elements to create depth (parallax)
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yMedium = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const yFast = useTransform(scrollYProgress, [0, 1], [100, -300]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section 
      id="testimonials" 
      ref={containerRef}
      className="py-16 px-6 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Dynamic Parallax Background Elements */}
      <motion.div 
        style={{ y: ySlow }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0"
      />
      <motion.div 
        style={{ y: yMedium, rotate }}
        className="absolute top-1/2 -right-20 w-80 h-80 bg-secondary/5 blur-[100px] rounded-full pointer-events-none z-0 border border-white/5"
      />
      <motion.div 
        style={{ y: yFast }}
        className="absolute -bottom-20 left-1/3 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none z-0"
      />

      <div className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-bold text-sm tracking-[0.3em] uppercase mb-4"
        >
          Customer Success
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">Loved by Modern Businesses</h2>
        <p className="text-slate-400">Join the elite businesses who have reclaimed their time and revenue.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: index * 0.15 
            }}
            whileHover={{ y: -10 }}
            className="glass p-10 rounded-[2.5rem] flex flex-col justify-between group hover:border-primary/40 hover:bg-white/[0.05] transition-all cursor-default"
          >
            <div>
              <div className="mb-8 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                <Quote className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xl text-slate-200 font-medium leading-relaxed mb-10 italic">
                "{testimonial.quote}"
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <motion.div 
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-black text-sm shadow-lg overflow-hidden border border-white/10 ring-2 ring-white/5"
              >
                {testimonial.image}
              </motion.div>
              <div>
                <div className="font-bold text-slate-100 group-hover:text-primary transition-colors">
                  {testimonial.name}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background Grid Pattern Subtle */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
    </section>
  );
};

export default Testimonials;
