'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Course } from '@/types/database.types';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.article 
      // 🚀 Hover Effects: High-fidelity lift physics with custom borders
      whileHover={{ 
        y: -6,
        scale: 1.015,
        borderColor: 'rgba(99, 102, 241, 0.6)',
        boxShadow: '0 20px 40px -15px rgba(99, 102, 241, 0.08)'
      }}
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 380, damping: 26 }}
      className="bg-neutral-900 border border-neutral-800/80 rounded-2xl p-6 min-h-[190px] flex flex-col justify-between relative overflow-hidden group cursor-pointer select-none"
    >
      {/* Internal interactive linear shine flare */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-transparent to-purple-500/0 group-hover:from-indigo-500/[0.03] group-hover:to-purple-500/[0.03] transition-all duration-700 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full justify-between w-full space-y-6">
        
        {/* Card Metadata Header Block */}
        <div className="flex items-center justify-between w-full">
          <div className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20 tracking-[0.12em] font-bold">
            {course.icon_name ? course.icon_name.toUpperCase() : 'CORE'}
          </div>
          <span className="text-[10px] font-mono text-neutral-500 font-bold tracking-wider">{course.progress}% COMPLETED</span>
        </div>

        {/* Title and Linear Progress Layout */}
        <div>
          <h4 className="text-base font-black text-neutral-200 tracking-tight group-hover:text-white uppercase transition-colors line-clamp-1">
            {course.title}
          </h4>
          
          {/* Progress bar background track */}
          <div className="w-full bg-neutral-950 h-1.5 rounded-full mt-4 overflow-hidden relative border border-neutral-800/40">
            {/* Smooth spring loading animation */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${course.progress}%` }}
              transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
              className="h-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-purple-500 rounded-full" 
            />
          </div>
        </div>

      </div>
    </motion.article>
  );
}