
import React from 'react';
import { motion } from 'motion/react';
import {
  Zap,
  ArrowRight,
  Sparkles
} from 'lucide-react';



const ProductCatalogue = () => (
  <section id="product-catalogue" className="py-24 px-6 cursor-pointer">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-6">Product Catalogue</h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Discover our specialized Agentic Workflows built for enterprise operations.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass p-10 rounded-[2rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 blur-[60px] -z-10 group-hover:bg-emerald-500/20 transition-all duration-500" />
          <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
            <Sparkles className="w-7 h-7 text-emerald-400" />
          </div>
          <h3 className="text-3xl font-bold mb-4">DAgent</h3>
          <p className="text-white/60 mb-8 leading-relaxed">
            A data analysis tool that connects to databases, imports files, and gathers data from multiple sources to generate insights and enable interactive querying.          </p>
          <button className="flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors group/btn cursor-pointer" onClick={() => window.open("http://157.173.221.226:3000/", "_blank")}>
            Proceed to DAgent <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="glass p-10 rounded-[2rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 blur-[60px] -z-10 group-hover:bg-cyan-500/20 transition-all duration-500" />
          <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
            <Zap className="w-7 h-7 text-emerald-400" />
          </div>
          <h3 className="text-3xl font-bold mb-4">AgentforceX</h3>
          <p className="text-white/60 mb-8 leading-relaxed">
            Process analysis tool that transforms raw business data into structured workflows, identifies inefficiencies, and recommends automation to improve speed, accuracy, and operational efficiency.          </p>
          <button className="flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors group/btn cursor-pointer" onClick={() => window.open("https://agentforge.services/agentforcex/", "_blank")}>
            Proceed  to AgentforceX <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default ProductCatalogue;