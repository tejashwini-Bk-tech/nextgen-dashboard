import React from 'react';

export default function Activity() {
  return (
    <section className="col-span-1 md:col-span-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 min-h-50 flex flex-col justify-between">
      <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
        Activity Index Matrix
      </h3>
      
      {/* Mock Grid Graph Box */}
      <div className="flex-1 bg-neutral-950/50 border border-neutral-800 rounded-xl mt-4 flex items-center justify-center text-xs font-mono text-neutral-700">
        [Simulated Graph Array]
      </div>
    </section>
  );
}