import React from 'react';
import { motion } from 'motion/react';
import {
    Activity, 
    Cpu, 
    Globe, 
    Users
} from 'lucide-react';


const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/10">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <a href="#home" className="flex items-center gap-2 mb-6 group/logo hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Cpu className="text-black w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tighter">AgentForge</span>
          </a>
          <p className="text-white/40 max-w-sm leading-relaxed">
            The Enterprise Agentic Workflows Platform. Bridging the gap between raw operational data and autonomous execution.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6">The Fabric</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="#platform" className="hover:text-emerald-400">Constraints-Driven Execution</a></li>
            <li><a href="#platform" className="hover:text-emerald-400">Codified Intelligence</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="#why-agents" className="hover:text-emerald-400">The Shift</a></li>
            <li><a href="#" className="hover:text-emerald-400">Careers</a></li>
            <li><a href="#" className="hover:text-emerald-400">Contact</a></li>
            <li><a href="#" className="hover:text-emerald-400">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-xs text-white/20">
        <p>© 2026 AgentForge. Human-Led. Agent-Operated. Outcome-Driven.</p>
        <div className="flex gap-6">
          <Globe className="w-4 h-4 hover:text-white cursor-pointer" />
          <Users className="w-4 h-4 hover:text-white cursor-pointer" />
          <Activity className="w-4 h-4 hover:text-white cursor-pointer" />
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;