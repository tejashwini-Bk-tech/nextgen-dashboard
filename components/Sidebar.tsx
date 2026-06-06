'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.nav 
      animate={{ 
        width: typeof window !== 'undefined' && window.innerWidth >= 768 
          ? (isExpanded ? 240 : 76) 
          : '100%' 
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      className="
        w-full md:w-20
        bg-neutral-900 border-b md:border-b-0 md:border-r border-neutral-800 
        p-4 flex md:flex-col justify-between md:justify-start gap-4
        fixed bottom-0 left-0 right-0 z-50 md:sticky md:top-0 md:h-screen
        overflow-hidden
      "
    >
      {/* BRAND HEADER AREA */}
      <div className="hidden md:flex items-center justify-between h-12 px-1 w-full gap-3">
        
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-3 cursor-pointer group/logo min-w-0 flex-1"
        >
          <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center font-mono font-bold text-indigo-400 shrink-0 group-hover/logo:border-indigo-400 transition-colors">
            Ω
          </div>

          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col min-w-0"
            >
              {/* Brand Title: Extra Bold, Tracked Tight */}
              <span className="font-black tracking-tight text-xs text-neutral-100 uppercase leading-none">
                Nexus Labs
              </span>
              {/* Version Tag: Dimmed, Monospace */}
              <span className="text-[9px] font-mono text-neutral-500 tracking-wider mt-1 leading-none">
                V.2026.06
              </span>
            </motion.div>
          )}
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-6 h-6 rounded-lg bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 flex items-center justify-center text-[10px] font-mono text-neutral-500 hover:text-indigo-400 transition-colors cursor-pointer shrink-0"
        >
          {isExpanded ? '◀' : '▶'}
        </button>
      </div>

      {/* NAVIGATION ITEMS */}
      <ul className="flex md:flex-col gap-2 w-full justify-around md:justify-start mt-0 md:mt-12">
        
        {/* Item 1: Active Dashboard */}
        <li className="h-11 px-3 rounded-xl bg-neutral-800/80 border border-neutral-700/30 text-indigo-400 flex items-center gap-4 cursor-pointer w-full transition-all">
          <div className="w-4 h-4 bg-indigo-500/20 border border-indigo-500/40 rounded block shrink-0" />
          {isExpanded && (
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="truncate text-xs font-bold tracking-wide text-neutral-200 uppercase"
            >
              Dashboard
            </motion.span>
          )}
        </li>

        {/* Item 2: Courses */}
        <li className="h-11 px-3 rounded-xl text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40 flex items-center gap-4 cursor-pointer w-full transition-all group">
          <div className="w-4 h-4 bg-neutral-950 border border-neutral-800 rounded block shrink-0 group-hover:border-neutral-600 transition-colors" />
          {isExpanded && (
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="truncate text-xs font-medium tracking-wide uppercase"
            >
              Courses
            </motion.span>
          )}
        </li>

        {/* Item 3: Analytics */}
        <li className="h-11 px-3 rounded-xl text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40 flex items-center gap-4 cursor-pointer w-full transition-all group">
          <div className="w-4 h-4 bg-neutral-950 border border-neutral-800 rounded block shrink-0 group-hover:border-neutral-600 transition-colors" />
          {isExpanded && (
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="truncate text-xs font-medium tracking-wide uppercase"
            >
              Analytics
            </motion.span>
          )}
        </li>
      </ul>
    </motion.nav>
  );
}
