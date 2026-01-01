import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { PRICING_PLANS, CALENDLY_URL } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-bold text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4"
        >
          Investment
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tighter">Tailored for Your Ambition</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base px-2">
          We scale with your call volume and workflow complexity. Contact us for a bespoke automation audit.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {PRICING_PLANS.map((plan, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`glass p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-between relative group overflow-hidden ${
              plan.featured ? 'border-primary/40 ring-1 ring-primary/20 bg-primary/[0.02]' : ''
            }`}
          >
            {plan.featured && (
              <div className="absolute top-4 right-6 px-3 py-0.5 bg-primary rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black">
                Most Popular
              </div>
            )}

            <div>
              <div className={`mb-6 md:mb-8 p-3 md:p-4 rounded-xl md:rounded-2xl w-fit ${
                plan.color === 'primary' ? 'bg-primary/10' : 
                plan.color === 'secondary' ? 'bg-secondary/10' : 'bg-white/10'
              }`}>
                {plan.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed">
                {plan.description}
              </p>

              <div className="mb-8 md:mb-10">
                <div className="text-3xl md:text-4xl font-bold mb-1 tracking-tighter text-white">Custom</div>
                <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Quoted per requirements</div>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-10 md:mb-12">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs md:text-sm text-slate-300">
                    <Check className={`w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0 ${plan.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group/btn text-sm md:text-base ${
                plan.featured 
                  ? 'bg-primary text-black hover:bg-orange-600 shadow-lg shadow-primary/20' 
                  : 'glass text-white hover:bg-white/10 border-white/10'
              }`}
            >
              <span className="whitespace-normal px-2 text-center">Request Custom Quote</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform flex-shrink-0" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;