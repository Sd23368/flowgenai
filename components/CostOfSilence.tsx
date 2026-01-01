import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { REVENUE_DATA } from '../constants';

const CostOfSilence: React.FC = () => {
  return (
    <section id="logic" className="py-16 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-gradient">The Cost of Silence.</h2>
          <div className="space-y-6 text-lg text-slate-400">
            <p>
              Did you know that <span className="text-primary font-bold">82% of prospects</span> hang up and call the next business if they reach voicemail?
            </p>
            <p>
              A missed call isn't just a missed conversation—it's thousands in lost revenue, marketing spend wasted, and a client handed directly to your competition.
            </p>
            <div className="pt-8 grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-slate-200 mb-2">$42k</div>
                <div className="text-sm uppercase tracking-wider text-primary">Avg. Lost Rev / Mo</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-200 mb-2">15%</div>
                <div className="text-sm uppercase tracking-wider text-secondary">Marketing Decay</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] p-8 min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden"
        >
          {/* Fix: Added min-w-0 and block container for Recharts stability */}
          <div className="h-[300px] w-full min-w-0 relative block">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={REVENUE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {REVENUE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="text-center mt-4">
            <div className="text-xl font-bold text-slate-200">Revenue Breakdown</div>
            <div className="text-slate-500 text-sm">Industry Average across Professional Services</div>
          </div>
          {/* Subtle decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50" />
        </motion.div>
      </div>
    </section>
  );
};

export default CostOfSilence;