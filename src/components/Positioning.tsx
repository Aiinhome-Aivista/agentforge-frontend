import React from 'react';
import { motion } from 'motion/react';

const Positioning = () => {
  return (
    <section id="positioning" className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-20">
        <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] bg-emerald-500/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-cyan-500/20 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-emerald-400 mb-8 uppercase tracking-[0.2em] opacity-80">What We Are</h2>
          
          <div className="space-y-6 md:space-y-10">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tight"
            >
              We are not a product company.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tight"
            >
              We are not a traditional services firm.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
            >
              We are the Operational Intelligence Fabric of the enterprise.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto pt-12 space-y-6"
        >
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-medium">
            A new breed of productised consulting. We don’t just provide a map; we provide the engine. We embed directly into your business processes to deliver measurable outcomes—not recommendations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Positioning;
