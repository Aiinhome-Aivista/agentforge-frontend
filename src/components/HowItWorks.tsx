import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb } from 'lucide-react';

const HowItWorks = () => {
  const features = [
    {
      title: 'Theory of Constraints–Driven Execution',
      description: 'We identify the single most critical bottleneck in your business process and focus the Fabric on unlocking it first.',
      icon: Target,
    },
    {
      title: 'Codified Industry Intelligence',
      description: 'We turn tacit consulting expertise into scalable, repeatable execution logic—embedding domain knowledge directly into your workflows.',
      icon: Lightbulb,
    },
  ];

  return (
    <section id="platform" className="py-24 px-6 bg-white/[0.02] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            The Fabric: How We Deliver
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto font-medium"
          >
            Our Operational Intelligence Fabric isn't just software; it's the codified expertise of world-class consultants operating at machine speed.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl border border-white/5 hover:border-emerald-500/20 transition-all group"
            >
              <div className="mb-8 w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all">
                <feature.icon className="w-8 h-8 text-emerald-400 group-hover:text-inherit" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;