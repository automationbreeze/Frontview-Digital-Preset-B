import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        
        // As soon as THIS card hits the sticky top, it starts to scale and blur.
        // It finishes when the user has scrolled past its entire height + margin.
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.3,
          filter: "blur(20px)",
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 100px", 
            end: "bottom top",
            scrub: true,
          }
        });
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={container} className="relative w-full bg-transparent pt-24 pb-48 z-10">
      <style>{`
        #ekg {
          stroke-dasharray: 250;
          stroke-dashoffset: 250;
          animation: pulseWave 3s ease-in-out infinite;
        }
        @keyframes pulseWave {
          0% { stroke-dashoffset: 250; }
          40%, 60% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -250; }
        }
        @keyframes scanY {
          0%, 100% { top: 0; transform: translateY(0); }
          50% { top: 100%; transform: translateY(-100%); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative">
        <h2 className="font-sans font-bold text-4xl md:text-6xl tracking-tight mb-24 text-slate-800 text-center">
          Our Simple <span className="font-drama italic text-accent font-normal text-6xl md:text-8xl align-middle">Process.</span>
        </h2>
        
        <div className="relative pt-12">
          {/* Card 1 */}
          <div className="protocol-card sticky top-24 w-full h-[70vh] min-h-[500px] mb-[60vh] glass-panel shadow-[0_20px_40px_rgba(30,41,59,0.08)] border-white/60 rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center justify-between p-12 md:p-24 origin-top transition-transform duration-500">
            <div className="max-w-lg mb-12 md:mb-0 relative z-10">
              <div className="font-mono text-xl text-accent mb-6 font-semibold tracking-widest">01</div>
              <h3 className="font-sans font-bold text-4xl md:text-5xl mb-6 text-slate-800">Brand Audit</h3>
              <p className="font-sans text-xl text-slate-600 leading-relaxed font-light">
                We analyze your current presence and identify gaps in your modernization strategy.
              </p>
            </div>
            
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex justify-center items-center">
                {/* Brand Audit: Scanning Radar / Lens */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-slate-300 drop-shadow-xl absolute top-0 left-0">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" className="animate-[spin_30s_linear_infinite]" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="50" r="15" fill="none" className="stroke-accent/50" strokeWidth="2" />
                  {/* Crosshairs */}
                  <line x1="50" y1="5" x2="50" y2="40" stroke="currentColor" strokeWidth="0.5" className="opacity-50" />
                  <line x1="50" y1="60" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5" className="opacity-50" />
                  <line x1="5" y1="50" x2="40" y2="50" stroke="currentColor" strokeWidth="0.5" className="opacity-50" />
                  <line x1="60" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.5" className="opacity-50" />
                </svg>
                {/* Scanning sweep */}
                <div className="absolute w-full h-full rounded-full border border-accent/20 overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 w-full h-full bg-gradient-to-tr from-accent/20 to-transparent origin-top-left animate-[spin_4s_linear_infinite]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="protocol-card sticky top-24 w-full h-[70vh] min-h-[500px] mb-[60vh] glass-panel shadow-[0_20px_40px_rgba(30,41,59,0.08)] border-white/60 rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center justify-between p-12 md:p-24 origin-top transition-transform duration-500">
            <div className="max-w-lg mb-12 md:mb-0 relative z-10">
              <div className="font-mono text-xl text-accent mb-6 font-semibold tracking-widest">02</div>
              <h3 className="font-sans font-bold text-4xl md:text-5xl mb-6 text-slate-800">Strategy & Design</h3>
              <p className="font-sans text-xl text-slate-600 leading-relaxed font-light">
                We craft a custom visual identity and digital roadmap tailored to your business.
              </p>
            </div>
            
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex justify-center items-center group">
                 {/* Strategy & Design: Morphing Organic Geometry */}
                 
                 {/* Base glowing core */}
                 <div className="absolute w-32 h-32 bg-sky-200/40 rounded-full blur-2xl animate-[pulse_4s_ease-in-out_infinite]"></div>

                 {/* Shape 1: Orbiting glass circle */}
                 <div className="absolute w-40 h-40 border border-slate-300 bg-white/10 backdrop-blur-sm rounded-full animate-[spin_12s_linear_infinite] flex items-center justify-center transform-gpu shadow-sm">
                   <div className="w-4 h-4 rounded-full bg-accent/60 absolute -top-2 shadow-[0_0_15px_rgba(56,189,248,0.5)]"></div>
                 </div>

                 {/* Shape 2: Counter-rotating rounded square */}
                 <div className="absolute w-32 h-32 border border-sky-300/60 bg-white/20 backdrop-blur-md rounded-2xl animate-[spin_18s_linear_infinite_reverse] transform-gpu shadow-[inset_0_0_20px_rgba(255,255,255,0.5)] mix-blend-overlay"></div>

                 {/* Shape 3: Inner delicate rings */}
                 <div className="absolute w-20 h-20 border border-dashed border-accent/40 rounded-full animate-[spin_8s_linear_infinite]"></div>
                 <div className="absolute w-12 h-12 bg-slate-50 border border-white/60 rounded-full shadow-inner flex items-center justify-center backdrop-blur-xl">
                   <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></div>
                 </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="protocol-card sticky top-24 w-full h-[70vh] min-h-[500px] mb-[60vh] glass-panel shadow-[0_20px_40px_rgba(30,41,59,0.08)] border-white/60 rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center justify-between p-12 md:p-24 origin-top transition-transform duration-500">
            <div className="max-w-lg mb-12 md:mb-0 relative z-10">
              <div className="font-mono text-xl text-accent mb-6 font-semibold tracking-widest">03</div>
              <h3 className="font-sans font-bold text-4xl md:text-5xl mb-6 text-slate-800">Implementation</h3>
              <p className="font-sans text-xl text-slate-600 leading-relaxed font-light">
                Our team builds your modern website and sets up your smart AI automations.
              </p>
            </div>
            
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
              {/* Implementation: Precision Data Flow Ring */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center perspective-[1000px]">
                {/* Outer rotating track */}
                <div className="absolute w-56 h-56 border-2 border-slate-200 rounded-full animate-[spin_20s_linear_infinite] transform-gpu rotate-x-60 shadow-[0_10px_30px_rgba(56,189,248,0.15)]">
                  {/* Data packets traveling on the ring */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_rgba(56,189,248,0.8)]"></div>
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-sky-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.6)]"></div>
                </div>
                
                {/* Inner counter-rotating track */}
                <div className="absolute w-40 h-40 border-2 border-dashed border-slate-300/70 rounded-full animate-[spin_15s_linear_infinite_reverse] transform-gpu rotate-x-60"></div>
                
                {/* Central processing column */}
                <div className="absolute w-16 h-32 bg-gradient-to-b from-white/80 to-white/20 backdrop-blur-md border border-white/50 rounded-xl flex flex-col items-center justify-evenly py-2 shadow-lg z-10">
                   <div className="w-8 h-1 bg-slate-200 rounded-full animate-pulse"></div>
                   <div className="w-10 h-1 bg-sky-300 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
                   <div className="w-6 h-1 bg-slate-200 rounded-full animate-pulse"></div>
                   <div className="w-10 h-1 bg-accent/60 rounded-full animate-[pulse_2s_ease-in-out_infinite]"></div>
                </div>
                
                {/* Vertical laser beams */}
                <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="protocol-card sticky top-24 w-full h-[70vh] min-h-[500px] mb-[20vh] glass-panel shadow-[0_20px_40px_rgba(30,41,59,0.08)] border-white/60 rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center justify-between p-12 md:p-24 origin-top transition-transform duration-500">
            <div className="max-w-lg mb-12 md:mb-0 relative z-10">
              <div className="font-mono text-xl text-accent mb-6 font-semibold tracking-widest">04</div>
              <h3 className="font-sans font-bold text-4xl md:text-5xl mb-6 text-slate-800">Launch & Growth</h3>
              <p className="font-sans text-xl text-slate-600 leading-relaxed font-light">
                We launch your new presence and provide tools for sustained digital growth.
              </p>
            </div>
            
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
              {/* Launch & Growth: Minimal Expanding Orbit */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex justify-center items-center group">
                 {/* Outer faint solid ring connecting the orbit */}
                 <div className="absolute w-full h-full rounded-full border border-sky-200/50 shadow-[0_0_50px_rgba(186,230,253,0.3)]"></div>
                 
                 {/* Inner dashed ring */}
                 <div className="absolute w-3/4 h-3/4 rounded-full border border-dashed border-slate-200/80"></div>
                 
                 {/* Soft solid core ring */}
                 <div className="absolute w-1/2 h-1/2 rounded-full bg-slate-50 border border-white/40 shadow-inner flex justify-center items-center backdrop-blur-sm">
                    {/* Tiny center core dot */}
                    <div className="w-3 h-3 bg-slate-200 rounded-full"></div>
                 </div>
                 
                 {/* Orbiting blue dot */}
                 <div className="absolute w-full h-full animate-[spin_8s_linear_infinite]">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-sky-400 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.6)] border-2 border-white"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
