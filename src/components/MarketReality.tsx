import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Wrench, Zap } from 'lucide-react';

const MarketReality = () => {
  const gaps = [
    {
      title: 'The "Advice" Gap',
      subtitle: 'Traditional Consulting',
      description: 'High-level strategy that often ends with a recommendation, leaving the execution burden on the client.',
      icon: <MessageSquare className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: 'The "Tooling" Gap',
      subtitle: 'Product & SaaS',
      description: 'Powerful features that provide the "how," but still require manual human effort to drive the "what."',
      icon: <Wrench className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: 'The "Agility" Gap',
      subtitle: 'System Integrators',
      description: 'Custom builds that are robust but often too rigid to keep pace with the speed of agentic evolution.',
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
    },
  ];

  return (
    <section id="market-reality" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Implementation Gap</h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto font-medium">
            We are redefining the category for productised consulting by closing the gaps left by traditional models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gaps.map((gap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all group"
            >
              <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl group-hover:bg-emerald-500/10 transition-colors">
                {gap.icon}
              </div>
              <h3 className="text-xl font-bold mb-1">{gap.title}</h3>
              <p className="text-emerald-400 text-sm font-semibold mb-4">{gap.subtitle}</p>
              <p className="text-white/60 leading-relaxed font-medium">{gap.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-lg font-bold">
             AgentForge closes these gaps by merging domain expertise with autonomous execution.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketReality;
