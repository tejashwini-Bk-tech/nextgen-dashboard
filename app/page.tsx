import React from 'react';
import { createClient } from '@/utils/supabase/server';
import Sidebar from '@/components/Sidebar';
import HeroTile from '@/components/HeroTile';
import CourseCard from '@/components/Course';
import ActivityTile from '@/components/Activity';

export const revalidate = 0;

export default async function DashboardPage() {
  const supabase = await createClient();
  
  const { data: courses, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center p-6">
        <div className="border border-red-500/20 bg-red-500/5 rounded-2xl p-6 text-center max-w-md w-full">
          <h2 className="text-sm font-bold text-red-400 font-mono tracking-tight">SYSTEM_ERROR // LINK_FAILED</h2>
          <p className="text-xs text-neutral-500 mt-2 font-sans">Could not retrieve active learning records from the data layer.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col md:flex-row antialiased select-none font-sans">
      
      <Sidebar />

      <div className="flex-1 min-w-0 overflow-y-auto pb-32 md:pb-12">
        
        {/* 📋 TOP HEADER BLOCK: TYPOGRAPHY FOCUS */}
        <header className="h-24 border-b border-neutral-900 px-8 flex items-center justify-between mb-12">
          <div className="flex flex-col">
            {/* Telemetry Label: Tiny, Monospace, Wide Spacing */}
            <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-[0.2em] font-semibold leading-none">
              Core System // Operational
            </span>
            {/* Main Title: Bold, Tight Tracking, Sharp Contrast */}
            <h1 className="text-xl font-black text-neutral-100 uppercase tracking-tight mt-2 leading-none">
              Next-Gen Dashboard
            </h1>
          </div>
          <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[10px] font-mono text-neutral-500">
            SYS
          </div>
        </header>

        {/* Spaced Content Grid */}
        <div className="px-4 md:px-8 max-w-7xl mx-auto w-full space-y-16">
          
          <HeroTile />

          {/* Section: Courses Horizontal Reel */}
          <section className="w-full">
            <div className="flex items-baseline justify-between mb-4 border-b border-neutral-900 pb-3 px-1">
              <h3 className="text-[11px] font-mono text-neutral-400 uppercase tracking-[0.15em] font-bold">
                Active Learning Tracks
              </h3>
              <span className="text-[10px] font-mono text-neutral-600">
                Count: {courses?.length || 0} Blocks
              </span>
            </div>
            
            <div className="
              w-full flex gap-6 overflow-x-auto pb-6 pt-2
              snap-x snap-mandatory scroll-smooth
              scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
            ">
              {courses && courses.map((course) => (
                <div key={course.id} className="w-[300px] md:w-[340px] shrink-0 snap-start">
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </section>

          {/* Section: Analytics Panel */}
          <section className="w-full">
            <div className="mb-4 border-b border-neutral-900 pb-3 px-1">
              <h3 className="text-[11px] font-mono text-neutral-400 uppercase tracking-[0.15em] font-bold">
                Performance Diagnostics
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ActivityTile />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}