'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ActivityTile() {
  // Mock dataset mapping out weekly system engagement/learning hours
  const activityData = [
    { day: 'MON', hours: 4.5, percentage: 65, status: 'OPTIMAL' },
    { day: 'TUE', hours: 6.2, percentage: 88, status: 'PEAK' },
    { day: 'WED', hours: 3.0, percentage: 40, status: 'STABLE' },
    { day: 'THU', hours: 5.8, percentage: 82, status: 'PEAK' },
    { day: 'FRI', hours: 7.0, percentage: 100, status: 'MAX_CAP' },
    { day: 'SAT', hours: 2.1, percentage: 30, status: 'MAINTENANCE' },
    { day: 'SUN', hours: 4.0, percentage: 55, status: 'STABLE' },
  ];

  return (
    <section className="col-span-1 md:col-span-2 lg:col-span-3 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 min-h-[380px] flex flex-col justify-between relative overflow-hidden group">
      
      {/* 📋 HEADER LOG UNIT: TYPOGRAPHY CONTRAST */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800/60 pb-6 w-full">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono text-purple-400 uppercase tracking-[0.2em] font-semibold leading-none">
            Metric Analytics // Log_Stream
          </span>
          <h3 className="text-lg font-black text-neutral-200 uppercase tracking-tight mt-2 leading-none">
            Activity Index Matrix
          </h3>
        </div>
        
        {/* Telemetry Live Feed Stats */}
        <div className="flex items-center gap-6 font-mono text-[11px]">
          <div className="flex flex-col">
            <span className="text-neutral-500 uppercase tracking-wider">Weekly Mean</span>
            <span className="text-neutral-200 font-bold mt-1">4.64 Hrs/Day</span>
          </div>
          <div className="w-px h-6 bg-neutral-800" />
          <div className="flex flex-col">
            <span className="text-neutral-500 uppercase tracking-wider">Core Status</span>
            <span className="text-emerald-400 font-bold mt-1 uppercase tracking-wide">Nominal</span>
          </div>
        </div>
      </div>

      {/* 📊 THE GRAPH CONTAINER AREA */}
      <div className="flex-1 w-full min-h-[200px] mt-8 flex flex-col justify-end">
        
        {/* Main Grid Graphic Track */}
        <div className="w-full flex items-end justify-between gap-2 md:gap-4 h-48 px-2 border-b border-neutral-800 pb-2">
          {activityData.map((data, index) => (
            <div key={data.day} className="flex-1 flex flex-col items-center group/bar relative h-full justify-end">
              
              {/* Floating Typography Tooltip on Hover */}
              <div className="absolute -top-10 opacity-0 group-hover/bar:opacity-100 bg-neutral-950 border border-neutral-800 px-2 py-1 rounded-md text-[9px] font-mono text-purple-400 pointer-events-none transition-all duration-200 transform translate-y-1 group-hover/bar:translate-y-0 z-20 whitespace-nowrap shadow-xl">
                {data.hours} hrs // {data.status}
              </div>

              {/* The Rendered Graph Bar Block */}
              <div className="w-full bg-neutral-950 rounded-t-lg overflow-hidden h-full flex flex-col justify-end relative border border-neutral-900">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${data.percentage}%` }}
                  transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: index * 0.05 }}
                  className="w-full bg-gradient-to-t from-indigo-600 via-purple-500 to-purple-400 rounded-t-md opacity-85 group-hover/bar:opacity-100 transition-opacity"
                />
              </div>

            </div>
          ))}
        </div>

        {/* X-Axis Horizontal Day Label Row */}
        <div className="w-full flex justify-between gap-2 md:gap-4 px-2 mt-3 font-mono text-[10px] text-neutral-500">
          {activityData.map((data) => (
            <span key={data.day} className="flex-1 text-center font-bold tracking-wider group-hover/bar:text-neutral-300 transition-colors">
              {data.day}
            </span>
          ))}
        </div>

      </div>

      {/* 📝 FOOTER RUNTIME CONSOLE */}
      <div className="mt-6 pt-4 border-t border-neutral-800/40 flex items-center justify-between text-[9px] font-mono text-neutral-600">
        <span>DATA_SET // REFRESH_RATE_DELTA: 0.00ms</span>
        <span className="uppercase tracking-widest text-neutral-500">Secure Node Matrix Connection [OK]</span>
      </div>

    </section>
  );
}