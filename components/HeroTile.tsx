'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroTile() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="col-span-1 md:col-span-2 lg:col-span-3 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 min-h-[160px] flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      
      <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white relative z-10">
        Welcome back, Explorer
      </h1>
      <p className="text-neutral-400 text-sm mt-2 max-w-xl relative z-10 leading-relaxed">
        Your telemetry is stable. You are currently holding a <span className="text-indigo-400 font-bold">7-day learning streak</span>. Keep the core runtime active.
      </p>
    </motion.section>
  );
}