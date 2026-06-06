'use client';

import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '@/components/Sidebar';
import HeroTile from '@/components/HeroTile';
import CourseCard from '@/components/Course';
import ActivityTile from '@/components/Activity';

// 🚀 Imports the synchronous browser-safe client utility
import { createClient } from '@/utils/supabase/clients'; 

export default function DashboardPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // 🎯 Reference pointer attached directly to the horizontal scrolling element
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchMatrixData = async () => {
      // Instantiated synchronously without 'await' to fix the Promise type error
      const supabase = createClient(); 
      
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (error) {
        console.error("Supabase Stream Exception:", error.message);
        return;
      }
      
      if (data) setCourses(data);
      setLoading(false);
    };
    
    fetchMatrixData();
  }, []);

  // 🚀 Programmatic Carousel Scroll Calculation
  const scrollTrack = (direction: 'LEFT' | 'RIGHT') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Shift offset: Card Width (340px) + Gap Margin Spacing (24px) = 364px
    const cardTranslationOffset = 364; 
    const currentScrollPosition = container.scrollLeft;

    const targetDestination = direction === 'LEFT' 
      ? currentScrollPosition - cardTranslationOffset 
      : currentScrollPosition + cardTranslationOffset;

    // Leverages browser engine for native animation easing
    container.scrollTo({
      left: targetDestination,
      behavior: 'smooth'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-500 flex items-center justify-center font-mono text-xs tracking-widest uppercase animate-pulse">
        Loading_Telemetry_Stream...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col md:flex-row antialiased select-none font-sans overflow-x-hidden selection:bg-indigo-500/30">
      
      {/* 🧭 Sidebar Component Frame */}
      <Sidebar />

      {/* 🧩 Scrollable Viewport Container */}
      <div className="flex-1 min-w-0 overflow-y-auto pb-32 md:pb-12">
        
        {/* 📋 HEADER LOG BAR */}
        <header className="h-24 border-b border-neutral-900 px-8 flex items-center justify-between mb-12 bg-neutral-950/40 backdrop-blur-md sticky top-0 z-40">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-[0.25em] font-bold leading-none">
              Core Runtime Telemetry // Operational
            </span>
            <h1 className="text-xl font-black text-white uppercase tracking-tight mt-2.5 leading-none">
              Next-Gen Dashboard
            </h1>
          </div>
        </header>

        {/* MAIN SPACED GRID PLATFORM */}
        <div className="px-4 md:px-8 max-w-7xl mx-auto w-full space-y-16">
          
          {/* Bento Slot 1: Dynamic Welcoming Area */}
          <HeroTile />

          {/* Bento Slot 2: Course Horizontal Reel Block */}
          <section className="w-full">
            <div className="flex items-baseline justify-between mb-6 border-b border-neutral-900 pb-3 px-1">
              <h3 className="text-[11px] font-mono text-neutral-400 uppercase tracking-[0.18em] font-bold">
                Active Learning Tracks
              </h3>
              
              {/* 🎯 INTEGRATED CAROUSEL NAVIGATION BUTTONS */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollTrack('LEFT')}
                  className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 flex items-center justify-center text-xs text-neutral-400 hover:text-indigo-400 transition-colors cursor-pointer shadow-md active:scale-95 transform font-mono"
                  title="Scroll Left"
                >
                  ◀
                </button>
                <button
                  onClick={() => scrollTrack('RIGHT')}
                  className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 flex items-center justify-center text-xs text-neutral-400 hover:text-indigo-400 transition-colors cursor-pointer shadow-md active:scale-95 transform font-mono"
                  title="Scroll Right"
                >
                  ▶
                </button>
              </div>
            </div>
            
            {/* Horizontal Track Element */}
            <div 
              ref={scrollContainerRef}
              className="
                w-full flex gap-6 overflow-x-auto pb-6 pt-2
                snap-x snap-mandatory scroll-smooth
                scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
              "
            >
              {courses.map((course) => (
                <div key={course.id} className="w-[300px] md:w-[340px] shrink-0 snap-start">
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </section>

          {/* Bento Slot 3: Performance Matrix Panel */}
          <section className="w-full">
            <div className="mb-6 border-b border-neutral-900 pb-3 px-1">
              <h3 className="text-[11px] font-mono text-neutral-400 uppercase tracking-[0.18em] font-bold">
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