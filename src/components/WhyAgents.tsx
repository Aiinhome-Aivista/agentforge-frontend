import React from 'react';
import { motion } from 'motion/react';  
import { 

  Layers, 
  Database, 
  ShieldCheck, 
  Terminal
} from 'lucide-react';



const WhyAgents = () => (
  <section id="why-agents" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8">Why Enterprise Agentic Workflows Over Traditional Automation?</h2>
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
                  Agentic workflows boast roughly 40% higher accuracy than RPA when dealing with variable document layouts and unstructured inputs.
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

export default WhyAgents;