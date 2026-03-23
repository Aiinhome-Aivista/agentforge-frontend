/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  Zap,
  Cpu,
  Database,
  ArrowRight,
  Workflow,

} from 'lucide-react';
import ProductCatalogue from './components/ProductCatalouge';
import OurSolutions from './components/OurSolutions';
import HowItWorks from './components/HowItWorks';
import WhyAgents from './components/WhyAgents';

import MarketReality from './components/MarketReality';
import Positioning from './components/Positioning';
import Footer from "../src/layout/Footer"

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass px-6 py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <a href="#home" className="flex items-center gap-2 group/logo hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
          <Cpu className="text-black w-5 h-5" />
        </div>
        <span className="text-xl font-bold tracking-tighter">AgentForge</span>
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        
        <a href="#platform" className="hover:text-emerald-400 transition-colors">How It Works</a>
        <a href="#why-agents" className="hover:text-emerald-400 transition-colors">Why Agents</a>
        <a href="#positioning" className="hover:text-emerald-400 transition-colors">Positioning</a>
        <a href="#our-solutions" className="hover:text-emerald-400 transition-colors">Outcome Solutions</a>
        <a href="#product-catalogue" className="hover:text-emerald-400 transition-colors">Product Catalogue</a>
        <a href="#market-reality" className="hover:text-emerald-400 transition-colors">Market Reality</a>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-sm font-medium hover:text-emerald-400 transition-colors">Login</button>
        <button className="bg-emerald-500 text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-emerald-400 transition-all">
          Start with one workflow
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-48 pb-20 px-6 overflow-hidden">
    <div className="absolute inset-0 bg-brand-dark -z-20" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-radial-at-t from-emerald-500/10 via-transparent to-transparent opacity-50" />

    <div className="max-w-7xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-8xl font-black tracking-tight mb-8 leading-[1.05] text-white">
          From Consulting to an <br className="hidden md:block" />
          <span className="gradient-text">Operational Intelligence Fabric</span>
        </h1>
        <p className="text-lg md:text-2xl text-white/70 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
          Clients no longer pay for advice without outcomes. AgentForge converts business processes into agentic workflows—an Operational Intelligence Fabric embedded into your systems to deliver measurable outcomes at scale.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto bg-emerald-500 text-black px-10 py-5 rounded-full font-bold text-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
            Start with one workflow
          </button>
          <button className="w-full sm:w-auto glass px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all border border-white/20 active:scale-95">
            Watch the Vision
          </button>
        </div>
      </motion.div>
    </div>

    <div className="mt-24 border-y border-white/5 py-10 bg-white/[0.01] relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-white/40 text-sm md:text-base tracking-[0.2em] uppercase font-bold"
        >
          The market is moving from <span className="text-emerald-400">capability</span> <span className="mx-4 text-white/20">→</span> <span className="text-cyan-400">outcome</span>.
        </motion.p>
      </div>
    </div>
  </section>
);




export default function App() {
  return (
    <div id="home" className="min-h-screen selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <MarketReality />
        <Positioning />
        <HowItWorks />
        <WhyAgents />
        
        <section className="py-24 px-6 border-t border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight">The Outcome</h2>
            <p className="text-white/70 text-xl md:text-3xl max-w-5xl mx-auto leading-relaxed font-medium italic">
              "A hybrid workforce of humans and agents, operating through orchestrated workflows, delivering accelerated outcomes at scale."
            </p>
          </div>
        </section>

        <ProductCatalogue />
        <OurSolutions />

        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto glass p-12 rounded-[3rem] text-center relative overflow-hidden text-balance">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -z-10" />
            <p className="text-emerald-400 font-bold mb-4 uppercase tracking-widest text-sm">We don’t sell AI or consulting — we operationalise outcomes.</p>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Ready to Operationalise Your Outcomes?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-emerald-500 text-black px-12 py-6 rounded-full font-bold text-xl hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 active:scale-95">
                Book an Outcome Assessment
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
