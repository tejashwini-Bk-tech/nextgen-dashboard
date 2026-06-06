'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroTile() {
  return (
    <motion.section 
      // 🚀 Entry Transition: Smooth glide and clean opacity fade-in
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-br from-neutral-900 to-neutral-900/40 border border-neutral-800 rounded-2xl p-6 md:p-10 min-h-[180px] flex flex-col justify-center relative overflow-hidden group shadow-2xl"
    >
      {/* Structural Decorative Ambient Light Orb */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none translate-x-1/4 -translate-y-1/4 transition-transform group-hover:scale-110 duration-700" />
      
      <div className="relative z-10 space-y-3">
        <span className="text-[9px] font-mono text-indigo-400 border border-indigo-500/20 bg-indigo-500/5 px-2.5 py-1 rounded-md tracking-widest font-bold uppercase inline-block">
          Profile // Verification_Success
        </span>
        <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white uppercase mt-1">
          Welcome back, Explorer
        </h2>
        <p className="text-neutral-400 text-sm max-w-2xl leading-relaxed font-normal normal-case">
          Your cloud telemetry stream is stable. You are currently maintaining a <span className="text-indigo-400 font-bold underline decoration-indigo-500/40 underline-offset-4">7-day continuous track session</span>. Keep the active compute runtime driving forward.
        </p>
      </div>
    </motion.section>
  );
}