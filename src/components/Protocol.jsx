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
        // Sticky scale & fade logic for cards 1-3
        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.85,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 100px", 
              end: "bottom top",
              scrub: true,
            }
          });
        }

        // Dedicated animation timeline for the SVG artwork inside the card
        const tl = gsap.timeline({ paused: true, repeat: -1 });

        if (i === 0) {
          // Brand Audit Animation (High-Tech Radar)
          tl.to(card.querySelector('.radar-sweep'), { rotation: 360, duration: 4, ease: 'linear' }, 0)
            .to(card.querySelector('.target-blip-1'), { opacity: 1, duration: 0.1 }, 0.5)
            .to(card.querySelector('.target-blip-1'), { opacity: 0, duration: 2 }, 0.6)
            .fromTo(card.querySelector('.target-blip-1-ring'), { scale: 0.5, opacity: 1, transformOrigin: 'center' }, { scale: 2.5, opacity: 0, duration: 1 }, 0.5)
            
            .to(card.querySelector('.target-blip-2'), { opacity: 0.8, duration: 0.1 }, 2.6)
            .to(card.querySelector('.target-blip-2'), { opacity: 0, duration: 1.5 }, 2.7)
            
            .to(card.querySelector('.target-blip-3'), { opacity: 0.8, duration: 0.1 }, 3.7)
            .to(card.querySelector('.target-blip-3'), { opacity: 0, duration: 1.5 }, 3.8);
        } else if (i === 1) {
          // Strategy & Design Animation
          tl.fromTo(card.querySelector('.draw-path'), 
              { strokeDashoffset: 200 },
              { strokeDashoffset: 0, duration: 4, ease: 'power1.inOut' })
            .to(card.querySelectorAll('.node-pulse'), { attr: { r: 5 }, duration: 2, yoyo: true, stagger: 1.33 }, 0);
        } else if (i === 2) {
          // Implementation Puzzle Pieces
          tl.to(card.querySelector('.puzzle-tl'), { x: -5, y: -5, duration: 2, yoyo: true, ease: 'power1.inOut' })
            .to(card.querySelector('.puzzle-tr'), { x: 5, y: -5, duration: 2, yoyo: true, ease: 'power1.inOut', delay: 0.5 }, 0)
            .to(card.querySelector('.puzzle-bl'), { x: -5, y: 5, duration: 2, yoyo: true, ease: 'power1.inOut', delay: 1 }, 0)
            .to(card.querySelector('.puzzle-br'), { x: 5, y: 5, duration: 2, yoyo: true, ease: 'power1.inOut', delay: 1.5 }, 0);
        } else if (i === 3) {
          // Launch & Growth Rocket Launch
          tl.fromTo(card.querySelector('.rocket-ship'), 
              { y: 50, opacity: 0 }, 
              { y: -100, opacity: 1, duration: 2.5, ease: 'power2.in' })
            .to(card.querySelector('.rocket-thrust'), { scaleY: 1.5, opacity: 0.8, duration: 0.2, yoyo: true, repeat: 10 }, 0)
            .fromTo(card.querySelectorAll('.rocket-spark'),
              { y: 0, opacity: 1, scale: 1 },
              { y: 40, opacity: 0, scale: 0, duration: 0.6, stagger: 0.1, repeat: 3 }, 0)
            .to(card.querySelector('.rocket-ship'), { opacity: 0, duration: 0.2 }, 2.3);
        }

        // Only play timeline when card is actively visible
        ScrollTrigger.create({
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          onEnter: () => tl.play(),
          onLeave: () => tl.pause(),
          onEnterBack: () => tl.play(),
          onLeaveBack: () => tl.pause()
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
          <div className="protocol-card sticky top-24 w-full h-[70vh] min-h-[500px] mb-[60vh] glass-panel shadow-[0_20px_40px_rgba(30,41,59,0.08)] border-white/60 rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center justify-between p-12 md:p-24 origin-top">
            <div className="max-w-lg mb-12 md:mb-0 relative z-10">
              <div className="font-mono text-xl text-accent mb-6 font-semibold tracking-widest">01</div>
              <h3 className="font-sans font-bold text-4xl md:text-5xl mb-6 text-slate-800">Brand Audit</h3>
              <p className="font-sans text-xl text-slate-600 leading-relaxed font-light">
                We analyze your current presence and identify gaps in your modernization strategy.
              </p>
            </div>
            
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex justify-center items-center rounded-full bg-slate-900/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)] border border-slate-200/60 overflow-hidden">
                {/* Grid lines background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.1)_1px,transparent_1px)] bg-[size:15px_15px] rounded-full [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"></div>
                
                {/* Radar Sweep (CSS conic-gradient for true smooth radar) */}
                <div className="absolute inset-0 rounded-full radar-sweep origin-center" style={{ background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(56,189,248,0.1) 330deg, rgba(56,189,248,0.4) 360deg)' }}>
                  {/* Leading edge line */}
                  <div className="absolute top-0 left-1/2 w-[1.5px] h-1/2 bg-accent shadow-[0_0_12px_rgba(56,189,248,0.9)] -translate-x-1/2"></div>
                </div>

                <svg viewBox="0 0 100 100" className="w-full h-full text-slate-400 absolute top-0 left-0">
                  {/* Concentric rings */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.2" className="opacity-40" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.3" className="opacity-40" strokeDasharray="1 2" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.2" className="opacity-40" />
                  <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.2" className="opacity-40" />
                  
                  {/* Main Crosshairs */}
                  <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.2" className="opacity-50" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.2" className="opacity-50" />
                  
                  {/* Degree ticks on outer edge */}
                  <g className="opacity-30">
                    <line x1="50" y1="5" x2="50" y2="10" stroke="currentColor" strokeWidth="0.4" />
                    <line x1="50" y1="90" x2="50" y2="95" stroke="currentColor" strokeWidth="0.4" />
                    <line x1="5" y1="50" x2="10" y2="50" stroke="currentColor" strokeWidth="0.4" />
                    <line x1="90" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.4" />
                    {/* Diagonal ticks */}
                    <line x1="18" y1="18" x2="22" y2="22" stroke="currentColor" strokeWidth="0.3" />
                    <line x1="82" y1="82" x2="78" y2="78" stroke="currentColor" strokeWidth="0.3" />
                    <line x1="18" y1="82" x2="22" y2="78" stroke="currentColor" strokeWidth="0.3" />
                    <line x1="82" y1="18" x2="78" y2="22" stroke="currentColor" strokeWidth="0.3" />
                  </g>

                  {/* Radar Blips (Targets) */}
                  <g className="radar-blips">
                    {/* Blip 1: 45deg approx */}
                    <circle cx="65" cy="35" r="1.5" className="fill-accent opacity-0 target-blip-1" style={{ transformOrigin: '65px 35px' }} />
                    <circle cx="65" cy="35" r="3" fill="none" className="stroke-accent opacity-0 target-blip-1-ring" style={{ transformOrigin: '65px 35px' }} strokeWidth="0.5" />
                    
                    {/* Blip 2: 240deg approx */}
                    <circle cx="30" cy="65" r="1.2" className="fill-sky-400 opacity-0 target-blip-2" />
                    
                    {/* Blip 3: 340deg approx */}
                    <circle cx="40" cy="20" r="1.4" className="fill-accent opacity-0 target-blip-3" />
                  </g>
                </svg>
                
                {/* Center Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-slate-50 rounded-full shadow-[0_0_10px_rgba(56,189,248,1)] border-[1.5px] border-accent"></div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="protocol-card sticky top-24 w-full h-[70vh] min-h-[500px] mb-[60vh] glass-panel shadow-[0_20px_40px_rgba(30,41,59,0.08)] border-white/60 rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center justify-between p-12 md:p-24 origin-top">
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
                   
                   {/* Drawn path */}
                   <path d="M 20 50 C 20 20, 50 20, 50 50 C 50 80, 80 80, 80 50" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sky-300 draw-path" strokeDasharray="200" />
                   
                   {/* Node 1 */}
                   <circle cx="20" cy="50" r="6" className="fill-white stroke-slate-200" strokeWidth="1" />
                   <circle cx="20" cy="50" r="3" className="fill-sky-400 node-pulse origin-center" />
                   
                   {/* Node 2 */}
                   <circle cx="50" cy="50" r="6" className="fill-white stroke-slate-200" strokeWidth="1" />
                   <circle cx="50" cy="50" r="3" className="fill-sky-400 node-pulse origin-center" />
                   
                   {/* Node 3 */}
                   <circle cx="80" cy="50" r="6" className="fill-white stroke-slate-200" strokeWidth="1" />
                   <circle cx="80" cy="50" r="3" className="fill-sky-400 node-pulse origin-center" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="protocol-card sticky top-24 w-full h-[70vh] min-h-[500px] mb-[60vh] glass-panel shadow-[0_20px_40px_rgba(30,41,59,0.08)] border-white/60 rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center justify-between p-12 md:p-24 origin-top">
            <div className="max-w-lg mb-12 md:mb-0 relative z-10">
              <div className="font-mono text-xl text-accent mb-6 font-semibold tracking-widest">03</div>
              <h3 className="font-sans font-bold text-4xl md:text-5xl mb-6 text-slate-800">Implementation</h3>
              <p className="font-sans text-xl text-slate-600 leading-relaxed font-light">
                Our team builds your modern website and sets up your smart AI automations.
              </p>
            </div>
            
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
              {/* Implementation: Puzzle Pieces */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                <div className="relative w-36 h-36">
                  {/* Base grid outline */}
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-[2px] p-[2px] border-2 border-dashed border-slate-200 rounded-2xl bg-white/30 backdrop-blur-sm">
                  </div>
                  
                  {/* Piece 1 (Top Left) */}
                  <div className="absolute top-[2px] left-[2px] w-[calc(50%-1px)] h-[calc(50%-1px)] bg-white border border-slate-200 rounded-tl-xl rounded-br-sm shadow-sm flex items-center justify-center puzzle-tl">
                     <div className="w-3 h-3 bg-sky-200 rounded-full"></div>
                  </div>
                  
                  {/* Piece 2 (Top Right) */}
                  <div className="absolute top-[2px] right-[2px] w-[calc(50%-1px)] h-[calc(50%-1px)] bg-white border border-slate-200 rounded-tr-xl rounded-bl-sm shadow-sm flex items-center justify-center puzzle-tr">
                     <div className="w-3 h-3 bg-sky-300/60 rounded-full"></div>
                  </div>
                  
                  {/* Piece 3 (Bottom Left) */}
                  <div className="absolute bottom-[2px] left-[2px] w-[calc(50%-1px)] h-[calc(50%-1px)] bg-white border border-slate-200 rounded-bl-xl rounded-tr-sm shadow-sm flex items-center justify-center puzzle-bl">
                     <div className="w-3 h-3 bg-blue-300/50 rounded-full"></div>
                  </div>
                  
                  {/* Piece 4 (Bottom Right) */}
                  <div className="absolute bottom-[2px] right-[2px] w-[calc(50%-1px)] h-[calc(50%-1px)] bg-gradient-to-br from-accent to-blue-400 border border-blue-300 rounded-br-xl rounded-tl-sm shadow-[0_5px_15px_rgba(56,189,248,0.4)] flex items-center justify-center puzzle-br">
                     <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white drop-shadow-sm">
                       <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="protocol-card sticky top-24 w-full h-[70vh] min-h-[500px] mb-[20vh] glass-panel shadow-[0_20px_40px_rgba(30,41,59,0.08)] border-white/60 rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center justify-between p-12 md:p-24 origin-top">
            <div className="max-w-lg mb-12 md:mb-0 relative z-10">
              <div className="font-mono text-xl text-accent mb-6 font-semibold tracking-widest">04</div>
              <h3 className="font-sans font-bold text-4xl md:text-5xl mb-6 text-slate-800">Launch & Growth</h3>
              <p className="font-sans text-xl text-slate-600 leading-relaxed font-light">
                We launch your new presence and provide tools for sustained digital growth.
              </p>
            </div>
            
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
              {/* Launch & Growth: Rocket Launch */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex justify-center items-center overflow-hidden">
                 <svg viewBox="0 0 100 100" className="w-full h-full text-slate-300 drop-shadow-xl overflow-visible">
                   
                   {/* Background stars/particles */}
                   <circle cx="20" cy="20" r="1" fill="currentColor" className="opacity-20" />
                   <circle cx="80" cy="30" r="1.5" fill="currentColor" className="opacity-30" />
                   <circle cx="30" cy="70" r="1" fill="currentColor" className="opacity-20" />
                   <circle cx="70" cy="80" r="1.5" fill="currentColor" className="opacity-30" />
                   <circle cx="60" cy="15" r="1" fill="currentColor" className="opacity-40" />
                   
                   {/* Main Rocket Group */}
                   <g className="rocket-ship">
                     {/* Thrust fire */}
                     <path className="rocket-thrust origin-top" d="M 45 70 Q 50 85 55 70 Z" fill="#38BDF8" opacity="0.8" />
                     <path className="rocket-thrust origin-top" d="M 47 70 Q 50 80 53 70 Z" fill="#BAE6FD" opacity="0.9" />
                     
                     {/* Rocket body */}
                     <path d="M 50 20 C 60 40, 60 70, 60 70 L 40 70 C 40 70, 40 40, 50 20 Z" fill="url(#rocket-grad)" stroke="#0E172A" strokeWidth="1" />
                     
                     {/* Fins */}
                     <path d="M 40 60 L 30 75 L 40 70 Z" fill="#38BDF8" stroke="#0E172A" strokeWidth="1" />
                     <path d="M 60 60 L 70 75 L 60 70 Z" fill="#38BDF8" stroke="#0E172A" strokeWidth="1" />
                     
                     {/* Window */}
                     <circle cx="50" cy="45" r="5" fill="#F0F9FF" stroke="#0E172A" strokeWidth="1" />
                     <circle cx="52" cy="43" r="1.5" fill="white" />
                   </g>
                   
                   {/* Sparks trails below rocket */}
                   <circle cx="48" cy="75" r="1" fill="#38BDF8" className="rocket-spark" />
                   <circle cx="52" cy="78" r="1.5" fill="#BAE6FD" className="rocket-spark" />
                   <circle cx="50" cy="82" r="1" fill="#7DD3FC" className="rocket-spark" />
                   
                   <defs>
                     <linearGradient id="rocket-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                       <stop offset="0%" stopColor="#FFFFFF" />
                       <stop offset="100%" stopColor="#E2E8F0" />
                     </linearGradient>
                   </defs>
                 </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
