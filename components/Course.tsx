'use client'; // 💡 This marks this file as a Client Component Boundary

import React from 'react';
import { motion } from 'framer-motion';
import { Course } from '@/types/database.types';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.article 
      // 🚀 Hover Micro-interactions using smooth spring dynamics
      whileHover={{ 
        y: -6,
        scale: 1.015,
        borderColor: 'rgb(99, 102, 241)' // Fades border to indigo-500
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 400, 
        damping: 25 
      }}
      className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 min-h-[180px] flex flex-col justify-between relative overflow-hidden group cursor-pointer shadow-lg transition-shadow hover:shadow-indigo-500/5 select-none"
    >
      {/* Animated Background Flare */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full justify-between w-full">
        {/* Card Header telemetry */}
        <div className="flex items-center justify-between w-full">
          <div className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20 tracking-wider">
            [{course.icon_name || 'CORE'}]
          </div>
          <span className="text-xs font-mono text-neutral-500">{course.progress}% Complete</span>
        </div>

        {/* Course Title and Progress Bar */}
        <div className="mt-4">
          <h2 className="text-base font-semibold text-neutral-200 tracking-tight group-hover:text-white transition-colors">
            {course.title}
          </h2>
          
          <div className="w-full bg-neutral-800 h-1.5 rounded-full mt-3 overflow-hidden relative">
            {/* Animated Progress Fill on initial load */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${course.progress}%` }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" 
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}