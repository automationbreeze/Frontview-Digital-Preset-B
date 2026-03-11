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
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                {/* Strategy & Design: Strategic Workflow */}
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                   {/* Base workflow paths */}
                   <path d="M 20 50 C 20 20, 50 20, 50 50 C 50 80, 80 80, 80 50" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200" strokeDasharray="2 2" />
                   
                   {/* Animated drawing path */}
                   <path d="M 20 50 C 20 20, 50 20, 50 50 C 50 80, 80 80, 80 50" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent/60" strokeDasharray="200" strokeDashoffset="200">
                     <animate attributeName="stroke-dashoffset" values="200;0" dur="4s" repeatCount="indefinite" />
                   </path>
                   
                   {/* Node 1 */}
                   <circle cx="20" cy="50" r="8" className="fill-white stroke-slate-300" strokeWidth="1" />
                   <circle cx="20" cy="50" r="3" className="fill-accent">
                     <animate attributeName="r" values="3;5;3" dur="4s" repeatCount="indefinite" />
                   </circle>
                   
                   {/* Node 2 */}
                   <circle cx="50" cy="50" r="8" className="fill-white stroke-slate-300" strokeWidth="1" />
                   <circle cx="50" cy="50" r="3" className="fill-accent">
                     <animate attributeName="r" values="3;5;3" dur="4s" begin="1.33s" repeatCount="indefinite" />
                   </circle>
                   
                   {/* Node 3 */}
                   <circle cx="80" cy="50" r="8" className="fill-white stroke-slate-300" strokeWidth="1" />
                   <circle cx="80" cy="50" r="3" className="fill-accent">
                     <animate attributeName="r" values="3;5;3" dur="4s" begin="2.66s" repeatCount="indefinite" />
                   </circle>
                </svg>
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
              {/* Implementation: Installing Puzzle Pieces */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                <div className="relative w-40 h-40">
                  {/* Base grid outline */}
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-[2px] p-[2px] border-2 border-dashed border-slate-200 rounded-2xl bg-white/30 backdrop-blur-sm">
                    <div className="w-full h-full rounded-tl-xl rounded-br-sm bg-slate-100/30"></div>
                    <div className="w-full h-full rounded-tr-xl rounded-bl-sm bg-slate-100/30"></div>
                    <div className="w-full h-full rounded-bl-xl rounded-tr-sm bg-slate-100/30"></div>
                    <div className="w-full h-full rounded-br-xl rounded-tl-sm bg-slate-100/30"></div>
                  </div>
                  
                  {/* Piece 1 (Top Left) */}
                  <div className="absolute top-[2px] left-[2px] w-[calc(50%-1px)] h-[calc(50%-1px)] bg-white border border-slate-200 rounded-tl-xl rounded-br-sm shadow-sm flex items-center justify-center animate-[puzzleTL_4s_ease-in-out_infinite]">
                     <div className="w-3 h-3 bg-accent/40 rounded-full"></div>
                  </div>
                  
                  {/* Piece 2 (Top Right) */}
                  <div className="absolute top-[2px] right-[2px] w-[calc(50%-1px)] h-[calc(50%-1px)] bg-white border border-slate-200 rounded-tr-xl rounded-bl-sm shadow-sm flex items-center justify-center animate-[puzzleTR_4s_ease-in-out_infinite]">
                     <div className="w-3 h-3 bg-sky-300/60 rounded-full"></div>
                  </div>
                  
                  {/* Piece 3 (Bottom Left) */}
                  <div className="absolute bottom-[2px] left-[2px] w-[calc(50%-1px)] h-[calc(50%-1px)] bg-white border border-slate-200 rounded-bl-xl rounded-tr-sm shadow-sm flex items-center justify-center animate-[puzzleBL_4s_ease-in-out_infinite]">
                     <div className="w-3 h-3 bg-blue-300/50 rounded-full"></div>
                  </div>
                  
                  {/* Piece 4 (Bottom Right) */}
                  <div className="absolute bottom-[2px] right-[2px] w-[calc(50%-1px)] h-[calc(50%-1px)] bg-gradient-to-br from-accent to-blue-400 border border-blue-300 rounded-br-xl rounded-tl-sm shadow-[0_5px_15px_rgba(56,189,248,0.4)] flex items-center justify-center animate-[puzzleBR_4s_ease-in-out_infinite]">
                     <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white drop-shadow-sm">
                       <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                  </div>
                </div>
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
