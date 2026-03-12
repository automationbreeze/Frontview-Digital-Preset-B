import React, { useState, useRef } from 'react';

export default function Transformation() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  };

  return (
    <section className="relative w-full py-24 px-8 md:px-16 bg-transparent z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Text */}
        <div className="w-full lg:w-5/12 text-slate-800">
           <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-5xl tracking-tight mb-4 leading-tight">
             The Transformation<br />
             <span className="text-accent">From Dated to Digital.</span>
           </h2>
           <p className="font-sans text-xl text-slate-600 font-light leading-relaxed mb-12">
             We don't just change colors; we rebuild your brand's authority. See how we transform outdated small business presences into professional, competitive assets.
           </p>

           <div className="flex flex-col gap-8">
             {/* Before Point */}
             <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 text-red-500 font-bold font-mono flex items-center justify-center text-xl">B</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Before</h4>
                  <p className="text-slate-500 font-light leading-relaxed">Outdated website, inconsistent branding, slow performance, and manual lead handling.</p>
                </div>
             </div>
             {/* After Point */}
             <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-50 text-accent font-bold font-mono flex items-center justify-center text-xl">A</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">After</h4>
                  <p className="text-slate-500 font-light leading-relaxed">Modern website, clean visuals, professional presence, and automated workflows.</p>
                </div>
             </div>
           </div>
        </div>

        {/* Right Side: Interactive Image Slider */}
        <div className="w-full lg:w-7/12 relative">
          <div 
            ref={containerRef}
            className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-white cursor-ew-resize select-none border border-slate-200"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
            onTouchStart={handleMove}
          >
            {/* 1. BEFORE WEBSITE (Base Image Layer) */}
            <div className="absolute inset-0 pointer-events-none bg-slate-100 flex items-center justify-center overflow-hidden">
              <img src="/before.png" alt="Outdated Website" className="w-[105%] h-[105%] object-cover object-top opacity-90" />
            </div>

            {/* "BEFORE" Badge */}
            <div className="absolute top-6 left-6 z-20 pointer-events-none">
              <div className="bg-red-600 text-white font-bold px-4 py-2 rounded-full shadow-[0_4px_10px_rgba(220,38,38,0.5)] border-2 border-white text-sm tracking-wider">BEFORE</div>
            </div>

            {/* 2. AFTER WEBSITE (Clipped Image Layer) */}
            <div 
              className="absolute inset-0 pointer-events-none bg-white shadow-[inset_5px_0_20px_rgba(0,0,0,0.08)] flex items-center justify-center overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
            >
              <img src="/after.png" alt="Modern Dashboard" className="w-[105%] h-[105%] object-cover object-top" />
            </div>

            {/* "AFTER" Badge */}
            <div 
              className="absolute top-6 right-6 z-20 pointer-events-none transition-opacity duration-300"
              style={{ opacity: sliderPos < 80 ? 1 : 0 }}
            >
              <div className="bg-accent text-white font-bold px-4 py-2 rounded-full shadow-[0_4px_10px_rgba(56,189,248,0.5)] border-2 border-white text-sm tracking-wider">AFTER</div>
            </div>

            {/* SLIDER HANDLE */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(30,41,59,0.2)] z-30 pointer-events-none flex items-center justify-center translate-x-[-50%]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-10 h-10 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center text-slate-400">
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-2" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" className="rotate-90"/>
                </svg>
              </div>
            </div>

            {/* Hidden native input for accessibility/fallback */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPos}
              onChange={(e) => setSliderPos(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
