# 📊 Next-Gen Telemetry Dashboard Platform

A high-performance, dark-mode administrative matrix dashboard built with **Next.js 16 (App Router + Turbopack)**, **Tailwind CSS**, **Framer Motion**, and **Supabase (SSR)**. Featuring an ultra-premium, high-density editorial typographic design with choreographed fluid entrance animations.

---

## ⚡ Tech Stack & Architecture

* **Framework:** Next.js 16.2 (Using App Router & Turbopack Compiler Engine)
* **Database & Auth:** Supabase Client/Server Architecture (via `@supabase/ssr`)
* **Motion Matrix:** Framer Motion (Orchestrated staggered fluid easing parameters)
* **Styling Engine:** Tailwind CSS (Neutral-950 high-contrast layout parameters)

---

## 🧩 Dashboard Viewport Matrix (Bento Layout)

The application leverages a responsive **3-column Bento Grid design standard** (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) optimized for analytical visualization:

### 1. 🧭 Structural Side-Pinned Layout Control (`/components/Sidebar.tsx`)
A permanently left-anchored interactive console with micro-state collapse properties. Connected layout architecture handles independent page-view scrolling contexts flawlessly.

### 2. 🛡️ Profile Verification Unit (`/components/HeroTile.tsx`)
Spans across the entire layout head (`col-span-1 md:col-span-2 lg:col-span-3`). Integrates structured spring motion parameters (`[0.16, 1, 0.3, 1]`) to eliminate sharp page transitions on load.

### 3. 🌊 Carousel Course Track Controller (`/app/page.tsx` & `/components/CourseCard.tsx`)
Fetches live data records over Client Component WebSocket tunnels directly from Supabase. Includes custom physical navigation arrow nodes (`◀` and `▶`) linked via programmatic `useRef` targeting to allow smooth carousel glides on non-touch screens.

### 4. 📊 High-Density Activity Index (`/components/ActivityTile.tsx`)
An interactive animated daily bar-graph telemetry visualization. Includes smooth height staging calculations on initialization and interactive typography hover-tooltips displaying current session thresholds.

---

## 📁 Repository Map

```text
├── app/
│   ├── analytics/
│   │   └── page.tsx        # High-density metrics telemetry viewport
│   ├── courses/
│   │   └── page.tsx        # Complete grid array layout for active tracks
│   ├── layout.tsx          # Screen constraint engine (Pins structural layout columns)
│   ├── loading.tsx         # Fallback shimmer layout matrix for route resolves
│   └── page.tsx            # Main interactive Client-side Bento Dashboard stream
├── components/
│   ├── ActivityTile.tsx    # Responsive data chart module with tooltip triggers
│   ├── CourseCard.tsx      # Spring-animated progress indicator items
│   ├── HeroTile.tsx        # Welcome layout slot with entry-path animation
│   └── Sidebar.tsx         # Fixed viewport left-anchored navigation frame
├── utils/
│   └── supabase/
│       ├── client.ts       # Synchronous client-side browser hook initializer
│       └── server.ts       # Asynchronous server-side node controller (Cookies module)