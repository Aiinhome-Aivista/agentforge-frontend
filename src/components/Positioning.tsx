import React from 'react';
import { motion } from 'motion/react';

const Positioning = () => {
  const cards = [
    {
      number: '01',
      title: 'We are not a product company.',
      description: 'Software alone is static. We represent the dynamic integration of tools and human intent, ensuring that technology serves the strategy, not the reverse.',
      highlight: false,
    },
    {
      number: '02',
      title: 'We are not a traditional services firm.',
      description: 'Billable hours are a legacy metric. We focus on architectural permanence and autonomous systems that continue to perform long after deployment.',
      highlight: false,
    },
    {
      number: '03',
      title: 'WE ARE THE OPERATIONAL INTELLIGENCE FABRIC OF THE ENTERPRISE.',
      description: '',
      highlight: true,
    },
  ];

  return (
    <section id="positioning" className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-10">
              <span className="text-emerald-400 text-sm font-bold tracking-[0.3em] uppercase block mb-3">What We Are</span>
              <div className="w-16 h-1 bg-emerald-500" />
            </div>

            <h2 className="text-4xl md:text-7xl font-black text-white leading-[1] mb-8 uppercase w-full">
              The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic pr-3">Evolution</span> <br />
              Of <br />
              Operational <br />
              Scale.
            </h2>

            <p className="text-white/60 text-lg max-w-lg leading-relaxed font-medium">
              A new breed of productised consulting. We don’t just provide a map; we provide the engine. We embed directly into your business processes to deliver measurable outcomes—not recommendations.
            </p>
          </motion.div>
        </div>

        {/* Right Column - Strategic Cards */}
        <div className="space-y-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`group p-6 md:p-8 rounded-xl relative transition-all duration-500 overflow-hidden ${card.highlight
                  ? 'bg-zinc-900 border-l-[4px] border-emerald-500 shadow-xl shadow-emerald-500/5'
                  : 'bg-zinc-900/40 border-l-[4px] border-emerald-500/20 hover:border-emerald-500/50'
                }`}
            >
              <div className="flex gap-6 items-start">
                {/* Card Number */}
                <div className={`w-12 h-12 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${card.highlight
                    ? 'bg-emerald-500 border-emerald-400 text-black shadow-lg shadow-emerald-500/40'
                    : 'border-white/10 text-white/30 group-hover:border-emerald-500/30 group-hover:text-emerald-400'
                  }`}>
                  <span className="text-lg font-black">{card.number}</span>
                </div>

                <div className="space-y-4">
                  <h3 className={`text-xl md:text-2xl font-black tracking-tight leading-tight ${card.highlight ? 'text-white italic font-bold uppercase' : 'text-white/90'
                    }`}>
                    {card.highlight ? (
                      <>
                        WE ARE THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 pr-3">
                          OPERATIONAL <br />
                          INTELLIGENCE FABRIC
                        </span> <br />
                        OF THE ENTERPRISE.
                      </>
                    ) : card.title}
                  </h3>

                  {card.highlight ? (
                    <div className="relative">
                      {/* Decorative background element for Card 3 */}
                      <div className="absolute -bottom-6 -right-50 opacity-[0.03] text-emerald-500 rotate-12">
                        <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5Z" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <p className="text-white/40 text-lg leading-relaxed font-medium group-hover:text-white/60 transition-colors">
                      {card.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Positioning;
