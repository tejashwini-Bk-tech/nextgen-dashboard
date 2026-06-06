import React from 'react';
import Sidebar from '@/components/Sidebar';
import '@/app/globals.css'; // Make sure your global Tailwind file is imported here

export const metadata = {
  title: 'Next-Gen Dashboard Platform',
  description: 'High-performance engineering telemetry stream dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-950 text-neutral-100 selection:bg-indigo-500/30">
      <body className="min-h-screen flex flex-col md:flex-row antialiased select-none font-sans overflow-x-hidden">
        
        {/* 🧭 Structural Blueprint: Sidebar stays mounted globally */}
        <Sidebar />

        {/* 🧩 Dynamic Core Content Area */}
        <div className="flex-1 min-w-0 overflow-y-auto">
          {children}
        </div>

      </body>
    </html>
  );
}
