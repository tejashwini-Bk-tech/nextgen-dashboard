import React from 'react';

export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col md:flex-row antialiased select-none animate-pulse">
      
      {/* 1. MOCK SIDEBAR SKELETON */}
      <nav className="
        w-full md:w-20 lg:w-64 
        bg-neutral-900 border-b md:border-b-0 md:border-r border-neutral-800 
        p-4 flex md:flex-col justify-between md:justify-start gap-4
        fixed bottom-0 left-0 right-0 z-50 md:sticky md:top-0 md:h-screen
      ">
        <div className="hidden md:flex items-center justify-center lg:justify-start gap-3 h-12 px-2">
          <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700" />
          <div className="hidden lg:block h-4 w-24 bg-neutral-800 rounded" />
        </div>
        <div className="flex md:flex-col gap-2 w-full justify-around md:justify-start mt-0 md:mt-8">
          <div className="h-10 w-full bg-neutral-800 rounded-xl" />
          <div className="h-10 w-full bg-neutral-800/50 rounded-xl" />
          <div className="h-10 w-full bg-neutral-800/50 rounded-xl" />
        </div>
      </nav>

      {/* 2. MAIN SPACE SKELETON */}
      <div className="flex-1 min-w-0 overflow-y-auto pb-24 md:pb-0">
        <header className="h-16 border-b border-neutral-900 px-8 flex items-center justify-between">
          <div className="h-3 w-32 bg-neutral-900 rounded" />
          <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800" />
        </header>

        {/* 3. BENTO GRID SKELETON MATRIX */}
        {/* We use the exact same grid structural classes as page.tsx */}
        <main className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto w-full">
          
          {/* Tile A: Hero Banner Skeleton */}
          <section className="col-span-1 md:col-span-2 lg:col-span-3 bg-neutral-900/60 border border-neutral-900 rounded-2xl p-6 md:p-8 min-h-[160px] flex flex-col justify-center gap-3">
            <div className="h-7 w-48 bg-neutral-800 rounded-lg" />
            <div className="h-4 w-full max-w-md bg-neutral-800/60 rounded" />
          </section>

          {/* Tile B, C, D: Replicating three Course Card dimensions exactly */}
          {[1, 2, 3].map((index) => (
            <article key={index} className="bg-neutral-900/60 border border-neutral-900 rounded-2xl p-6 min-h-[180px] flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-neutral-800" />
              <div className="space-y-3">
                <div className="h-4 w-3/4 bg-neutral-800 rounded" />
                <div className="w-full bg-neutral-800 h-1.5 rounded-full" />
              </div>
            </article>
          ))}

          {/* Tile E: Activity Matrix Skeleton */}
          <section className="col-span-1 md:col-span-2 bg-neutral-900/60 border border-neutral-900 rounded-2xl p-6 min-h-[200px] flex flex-col justify-between">
            <div className="h-3 w-28 bg-neutral-800 rounded" />
            <div className="flex-1 bg-neutral-950/30 border border-neutral-900 rounded-xl mt-4" />
          </section>

        </main>
      </div>
    </div>
  );
}