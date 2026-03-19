/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Workflow,
  Globe,
  Users,
  Terminal
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass px-6 py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
          <Cpu className="text-black w-5 h-5" />
        </div>
        <span className="text-xl font-bold tracking-tighter">AgentForge</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How It Works</a>
        <a href="#why-agents" className="hover:text-emerald-400 transition-colors">Why Agents</a>
        <a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-sm font-medium hover:text-emerald-400 transition-colors">Login</button>
        <button className="bg-emerald-500 text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-emerald-400 transition-all">
          Request Demo
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
    </div>
    
    <div className="max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
          The Enterprise AI Execution Platform
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
          Welcome to <span className="gradient-text">AgentForge</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed">
          Agentification is not just about productivity — it’s about creating new business models. 
          Stop guessing how your business operates and stop wrapping legacy systems in simple chatbots.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-emerald-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 group">
            Request a Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto glass px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
            Start Your Free Trial
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-20 relative"
      >
        <div className="glass rounded-2xl p-4 aspect-video max-w-5xl mx-auto overflow-hidden shadow-2xl shadow-emerald-500/5">
          <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="bg-white/5 rounded px-3 py-1 text-[10px] font-mono text-white/40">
              agentforge.ai/dashboard/orchestrator
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 h-full">
            <div className="col-span-3 space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-20 bg-white/5 rounded-lg animate-pulse" />
              ))}
            </div>
            <div className="col-span-9 bg-white/5 rounded-lg overflow-hidden relative group/dashboard">
              <img 
                src="https://picsum.photos/seed/ai-orchestrator/1200/800" 
                alt="AI Orchestrator Illustration" 
                className="w-full h-full object-cover opacity-30 group-hover/dashboard:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
              
              {/* Floating Nodes */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 glass p-3 rounded-xl flex items-center gap-3 z-20"
              >
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Database className="w-4 h-4 text-black" />
                </div>
                <div className="text-[10px] font-bold">ERP Ingestion</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/3 right-1/4 glass p-3 rounded-xl flex items-center gap-3 z-20"
              >
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-black" />
                </div>
                <div className="text-[10px] font-bold">Agent Execution</div>
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
                <Workflow className="w-16 h-16 text-emerald-400 relative z-10" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 space-y-2 z-20">
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "70%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="h-full bg-emerald-500"
                  />
                </div>
                <div className="flex justify-between text-[8px] font-mono text-white/40">
                  <span>ORCHESTRATION_LOAD</span>
                  <span>70% OPTIMIZED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description, index }: { icon: any, title: string, description: string, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="glass p-8 rounded-2xl hover:bg-white/10 transition-all group"
  >
    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-black transition-all">
      <Icon className="w-6 h-6 text-emerald-400 group-hover:text-inherit" />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-white/60 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 px-6 bg-white/[0.02]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-6">How It Works: The Agentic Transformation Framework</h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Our platform bridges the gap between raw operational data and autonomous execution through a rigorous three-step process.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          index={0}
          icon={Activity}
          title="1. Unearth the Trueness"
          description="Utilize advanced business process discovery algorithms to ingest event logs. We create a Digital Twin of an Organization (DTO) to give you complete process observability."
        />
        <FeatureCard 
          index={1}
          icon={BarChart3}
          title="2. Analyze & Score"
          description="Evaluate workflows using our Three-Axis Scoring model: Variability, Risk, and Volume. We triage between traditional RPA and AI Agentification."
        />
        <FeatureCard 
          index={2}
          icon={Zap}
          title="3. Deploy & Execute"
          description="Move from insight to autonomous execution in our 90-Day Velocity program. Follow our 6-step lifecycle: Ingestion to Evaluation."
        />
      </div>
    </div>
  </section>
);

const WhyAgents = () => (
  <section id="why-agents" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8">Why Enterprise AI Agents Over Traditional Automation?</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 glass rounded-full flex items-center justify-center">
                <Layers className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Goal-Based Cognitive Architecture</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Unlike deterministic RPA, our agents exhibit inference-time reasoning. They operate on a continuous loop of perception and execution.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 glass rounded-full flex items-center justify-center">
                <Database className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Unstructured Data Mastery</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  AI agents boast roughly 40% higher accuracy than RPA when dealing with variable document layouts and unstructured inputs.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 glass rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Governance Built-In</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  We maintain Human-in-the-Loop (HITL) workflows. Agents execute under defined delegation rules and threshold approval gates.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full" />
          <div className="relative glass p-8 rounded-3xl border-emerald-500/20">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Agent Execution Log</span>
              </div>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
              </div>
            </div>
            <div className="space-y-4 font-mono text-xs">
              <div className="flex gap-3">
                <span className="text-emerald-500/50">08:42:11</span>
                <span className="text-white/80">[SYSTEM] Ingesting unstructured invoice data...</span>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-500/50">08:42:12</span>
                <span className="text-emerald-400">[AGENT] Reasoning: Layout variant detected. Applying cognitive extraction.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-500/50">08:42:14</span>
                <span className="text-white/80">[SYSTEM] Confidence score: 0.98. Proceeding to ERP entry.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-500/50">08:42:15</span>
                <span className="text-blue-400">[HITL] Threshold met. Manual approval bypassed per rule #42.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-500/50">08:42:16</span>
                <span className="text-emerald-500 font-bold">[SUCCESS] Transaction executed in SAP S/4HANA.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PricingCard = ({ title, description, features, workflows, data, highlighted = false }: any) => (
  <div className={`relative p-8 rounded-3xl transition-all ${highlighted ? 'bg-emerald-500 text-black scale-105 z-10' : 'glass'}`}>
    {highlighted && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold mb-6">{title}</h3>
    <p className={`text-sm mb-8 ${highlighted ? 'text-black/80' : 'text-white/60'}`}>{description}</p>
    
    <div className="space-y-4 mb-8">
      <div className="flex items-center gap-3">
        <Workflow className={`w-5 h-5 ${highlighted ? 'text-black' : 'text-emerald-400'}`} />
        <span className="text-sm font-bold">{workflows}</span>
      </div>
      <div className="flex items-center gap-3">
        <Database className={`w-5 h-5 ${highlighted ? 'text-black' : 'text-emerald-400'}`} />
        <span className="text-sm font-bold">{data}</span>
      </div>
    </div>
    
    <div className="space-y-3 mb-10">
      {features.map((f: string, i: number) => (
        <div key={i} className="flex items-start gap-3">
          <CheckCircle2 className={`w-4 h-4 mt-0.5 ${highlighted ? 'text-black' : 'text-emerald-400'}`} />
          <span className="text-xs leading-tight">{f}</span>
        </div>
      ))}
    </div>
    
    <button className={`w-full py-4 rounded-xl font-bold transition-all ${highlighted ? 'bg-black text-white hover:bg-black/80' : 'bg-emerald-500 text-black hover:bg-emerald-400'}`}>
      Choose {title}
    </button>
  </div>
);

const Pricing = () => (
  <section id="pricing" className="py-24 px-6 bg-white/[0.02]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-6">Flexible, Outcome-Based Subscription Pricing</h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          We align to your P&L through outcome-based pricing. No per-token or per-API call fees.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <PricingCard 
          title="Basic"
          description="Ideal for teams beginning their process discovery and agentification journey."
          workflows="Up to 5 Active Workflows"
          data="50GB Process Data"
          features={[
            "Core business process discovery",
            "Basic RPA vs. AI triage",
            "Enterprise Agent Marketplace access",
            "Community support"
          ]}
        />
        <PricingCard 
          title="Advanced"
          highlighted={true}
          description="Built for scaling enterprises ready to automate complex, unstructured workflows."
          workflows="Up to 20 Active Workflows"
          data="150GB Process Data"
          features={[
            "Everything in Basic",
            "Multi-agent orchestration",
            "Unstructured data processing",
            "Hybrid AI Framework integration",
            "Real-time DTO performance monitoring"
          ]}
        />
        <PricingCard 
          title="Pro"
          description="For large-scale organizations requiring full process observability."
          workflows="Unlimited Active Workflows"
          data="500GB+ Process Data"
          features={[
            "Everything in Advanced",
            "Deep ERP/CRM embedded execution",
            "Human-in-the-Loop governance",
            "Continuous ML optimization",
            "Outcome-aligned strategic scaling"
          ]}
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/10">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Cpu className="text-black w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tighter">AgentForge</span>
          </div>
          <p className="text-white/40 max-w-sm leading-relaxed">
            The Enterprise AI Execution Platform. Bridging the gap between raw operational data and autonomous execution.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Platform</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="#" className="hover:text-emerald-400">Process Discovery</a></li>
            <li><a href="#" className="hover:text-emerald-400">Agent Marketplace</a></li>
            <li><a href="#" className="hover:text-emerald-400">Governance</a></li>
            <li><a href="#" className="hover:text-emerald-400">Integrations</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="#" className="hover:text-emerald-400">About Us</a></li>
            <li><a href="#" className="hover:text-emerald-400">Careers</a></li>
            <li><a href="#" className="hover:text-emerald-400">Contact</a></li>
            <li><a href="#" className="hover:text-emerald-400">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-xs text-white/20">
        <p>© 2026 AgentForge AI. All rights reserved.</p>
        <div className="flex gap-6">
          <Globe className="w-4 h-4 hover:text-white cursor-pointer" />
          <Users className="w-4 h-4 hover:text-white cursor-pointer" />
          <Activity className="w-4 h-4 hover:text-white cursor-pointer" />
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhyAgents />
        <Pricing />
        
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto glass p-12 rounded-[3rem] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -z-10" />
            <h2 className="text-4xl font-bold mb-6">Ready to stop mapping processes and start transforming them?</h2>
            <p className="text-white/60 mb-10 text-lg">
              Join the 90-Day Velocity program and unearth the absolute trueness of your organizational processes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-emerald-500 text-black px-10 py-5 rounded-full font-bold text-xl hover:bg-emerald-400 transition-all">
                Request a Demo
              </button>
              <button className="w-full sm:w-auto glass px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all">
                Start Your Free Trial
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
