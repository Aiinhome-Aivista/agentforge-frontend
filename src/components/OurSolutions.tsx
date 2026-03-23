import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap,
  ShieldCheck,
  TrendingUp,
  ChevronRight
} from 'lucide-react';

const OutcomeCard = ({ title, description, icon: Icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="glass p-8 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-colors" />
    <div className="mb-6 w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
      <Icon className="w-7 h-7 text-emerald-400" />
    </div>
    <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-emerald-400 transition-colors">{title}</h3>
    <p className="text-white/60 leading-relaxed mb-8 font-medium italic">
      {description}
    </p>
    <div className="flex items-center gap-2 text-sm font-bold text-emerald-400 group-hover:gap-4 transition-all uppercase tracking-widest">
      Deploy Solution <ChevronRight className="w-4 h-4" />
    </div>
  </motion.div>
);

const OurSolutions = () => {
  const solutions = [
    {
      title: 'Agentic Conversion Rate Optimisation (CRO)',
      description: 'Move from static testing to agentic loops that adapt to user behavior in real-time.',
      icon: Zap,
    },
    {
      title: 'Agentic Commercial Due Diligence (CDD)',
      description: 'Accelerate investment cycles with automated data synthesis and risk-profile orchestration.',
      icon: ShieldCheck,
    },
    {
      title: 'Working Capital Optimisation',
      description: 'Deploy agentic workflows to identify and capture liquidity gaps across the enterprise.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="our-solutions" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            What We Build
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto font-medium"
          >
            Industry-specific agentic solutions designed for rapid deployment and measurable impact.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <OutcomeCard
              key={index}
              {...solution}
              delay={0.1 * (index + 3)}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block glass px-8 py-4 rounded-full border-emerald-500/20">
            <p className="text-white/80 font-bold">
              Each solution is built to deploy rapidly, scale across the enterprise, and deliver measurable business outcomes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurSolutions;