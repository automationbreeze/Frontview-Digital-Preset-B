import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { MousePointer2 } from 'lucide-react';
import gsap from 'gsap';

function DiagnosticShuffler() {
  const [cards, setCards] = useState([
    { id: 1, label: "Value Analysis" },
    { id: 2, label: "Budget Optimization" },
    { id: 3, label: "ROI Modeling" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const arr = [...prev];
        const last = arr.pop();
        arr.unshift(last);
        return arr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-48 w-full flex justify-center items-center perspective-1000 mt-6">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className="absolute w-3/4 max-w-[240px] bg-white border border-dark/5 shadow-2xl rounded-2xl p-4 flex items-center justify-between"
          style={{
            transform: `translateY(${index * 16}px) scale(${1 - index * 0.08})`,
            zIndex: 10 - index,
            opacity: 1 - index * 0.2,
            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          <div className="font-mono text-xs text-primary/60">MDL-0{card.id}</div>
          <div className="font-sans text-sm font-semibold">{card.label}</div>
        </div>
      ))}
    </div>
  );
}

function TelemetryTypewriter() {
  const [text, setText] = useState("");
  const messages = [
    "Initializing rapid deployment...",
    "Optimizing time-to-market metrics...",
    "Establishing live feedback loop...",
    "Fast turnaround achieved."
  ];
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    let currentText = "";
    let targetText = messages[msgIdx];
    let i = 0;
    
    let isCancelled = false;
    
    const typeWriter = () => {
      if (isCancelled) return;
      if (i < targetText.length) {
        currentText += targetText.charAt(i);
        setText(currentText);
        i++;
        setTimeout(typeWriter, Math.random() * 50 + 30);
      } else {
        setTimeout(() => {
          if (!isCancelled) {
            setMsgIdx((prev) => (prev + 1) % messages.length);
          }
        }, 2000);
      }
    };
    
    typeWriter();
    return () => { isCancelled = true; };
  }, [msgIdx]);

  return (
    <div className="relative h-48 w-full mt-6 bg-dark rounded-2xl p-4 text-background/90 flex flex-col font-mono text-xs shadow-inner overflow-hidden border border-primary/20">
      <div className="flex items-center gap-2 mb-4 border-b border-background/10 pb-2">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
        <span className="text-accent tracking-widest uppercase font-semibold text-[10px]">Live Feed</span>
      </div>
      <div className="flex-1 text-background/80 relative">
        <p className="leading-relaxed">
          &gt; {text}<span className="inline-block w-1.5 h-3 ml-1 bg-accent animate-pulse align-middle"></span>
        </p>
      </div>
      {/* Decorative scanner line */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-accent/20 to-transparent opacity-50 translate-y-[-100%] animate-[scan_4s_ease-in-out_infinite]"></div>
    </div>
  );
}

function CursorProtocolScheduler() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const cellRef = useRef(null);
  const saveBtnRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });
      tl.set(cursorRef.current, { x: 0, y: 150, opacity: 0, scale: 1 });
      tl.set(cellRef.current, { backgroundColor: "transparent", color: "inherit" });
      tl.set(saveBtnRef.current, { scale: 1 });

      tl.to(cursorRef.current, { opacity: 1, duration: 0.3 })
        .to(cursorRef.current, { x: 120, y: 40, duration: 1, ease: "power2.inOut" })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, ease: "power1.in" })
        .to(cellRef.current, { backgroundColor: "#7B61FF", color: "#F0EFF4", duration: 0.2 }, "+=0.1")
        .to(cursorRef.current, { scale: 1, duration: 0.1, ease: "power1.out" })
        .to(cursorRef.current, { x: 200, y: 120, duration: 0.8, ease: "power2.inOut", delay: 0.3 })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, ease: "power1.in" })
        .to(saveBtnRef.current, { scale: 0.95, duration: 0.1 }, "+=0.1")
        .to(cursorRef.current, { scale: 1, duration: 0.1, ease: "power1.out" })
        .to(saveBtnRef.current, { scale: 1, duration: 0.1 })
        .to(cursorRef.current, { opacity: 0, duration: 0.3, delay: 0.2 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div ref={containerRef} className="relative h-48 w-full mt-6 bg-background rounded-2xl p-4 border border-dark/10 shadow-sm flex flex-col justify-between">
      <div>
        <div className="font-mono text-[10px] uppercase text-primary/50 tracking-widest mb-2">Frictionless Onboarding</div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((d, i) => (
            <div key={i} ref={i === 2 ? cellRef : null} className={`text-center py-1 text-xs font-medium rounded-md border border-dark/5 transition-colors duration-300 ${i === 2 ? 'relative z-10' : ''}`}>
              {d}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-end mt-4">
        <button ref={saveBtnRef} className="bg-primary text-background font-sans text-xs px-4 py-1.5 rounded-full">
          Save Timeline
        </button>
      </div>

      {/* The Animated Cursor */}
      <div ref={cursorRef} className="absolute top-0 left-0 z-50 pointer-events-none drop-shadow-md text-primary">
        <MousePointer2 size={24} fill="white" strokeWidth={1.5} />
      </div>
    </div>
  );
}

export default function Features() {
  const handleMouseEnter = (e, type) => {
    const q = gsap.utils.selector(e.currentTarget);
    if (type === 'web') {
      gsap.to(q('.browser-window'), { y: -5, duration: 0.3, ease: 'power2.out' });
      gsap.to(q('.mobile-window'), { y: -10, x: -5, duration: 0.3, delay: 0.1, ease: 'power2.out' });
    } else if (type === 'social') {
      gsap.to(q('.social-card-1'), { rotation: -15, x: -5, duration: 0.4, ease: "back.out(1.5)", transformOrigin: '50px 50px' });
      gsap.to(q('.social-card-2'), { rotation: 10, x: 5, duration: 0.4, ease: "back.out(1.5)", transformOrigin: '50px 50px' });
      gsap.to(q('.social-heart'), { scale: 1.25, rotation: 5, y: -5, duration: 0.4, ease: "back.out(2)", transformOrigin: '68px 35px' });
    } else if (type === 'ai') {
      gsap.to(q('.ai-core'), { scale: 1.1, duration: 0.4, ease: "back.out(1.5)", transformOrigin: '50px 50px' });
      gsap.to(q('.ai-dot-outer'), { scale: 1.3, duration: 0.3, stagger: 0.05, ease: "back.out(2)", transformOrigin: 'center center' });
      gsap.to(q('.ai-dot-inner'), { opacity: 1, duration: 0.3, stagger: 0.05 });
    }
  };

  const handleMouseLeave = (e, type) => {
    const q = gsap.utils.selector(e.currentTarget);
    if (type === 'web') {
      gsap.to(q('.browser-window, .mobile-window'), { y: 0, x: 0, duration: 0.4, ease: 'power2.inOut' });
    } else if (type === 'social') {
      gsap.to(q('.social-card-1'), { rotation: -10, x: 0, duration: 0.4, ease: "power2.inOut" });
      gsap.to(q('.social-card-2'), { rotation: 5, x: 0, duration: 0.4, ease: "power2.inOut" });
      gsap.to(q('.social-heart'), { scale: 1, rotation: 15, y: 0, duration: 0.4, ease: "power2.inOut" });
    } else if (type === 'ai') {
      gsap.to(q('.ai-core'), { scale: 1, duration: 0.4, ease: "power2.inOut" });
      gsap.to(q('.ai-dot-outer'), { scale: 1, duration: 0.4, ease: "power2.inOut" });
      gsap.to(q('.ai-dot-inner'), { opacity: 0.3, duration: 0.4 });
    }
  };

  return (
    <section id="services" className="relative w-full py-32 px-8 md:px-16 bg-transparent z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 md:flex justify-between items-end">
          <h2 className="font-sans font-bold text-4xl md:text-6xl tracking-tight max-w-2xl text-slate-800">
            Functional <span className="font-drama italic text-accent font-normal text-6xl md:text-7xl align-middle">Advantage.</span>
          </h2>
          <p className="font-sans text-xl text-slate-500 max-w-md mt-6 md:mt-0 font-light text-balance">
            We engineer high-performance digital assets designed to convert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Diagnostic */}
          <div 
            onMouseEnter={(e) => handleMouseEnter(e, 'web')}
            onMouseLeave={(e) => handleMouseLeave(e, 'web')}
            className="feature-card glass-panel rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[450px] relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(56,189,248,0.15)] hover:border-accent/40">
            <div className="relative z-10">
              <div className="text-xs font-mono tracking-widest text-accent mb-8">01 / CAPABILITY</div>
              <h3 className="font-sans font-bold text-3xl mb-4 text-slate-800">Website Redesign</h3>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                Modern, fast, and mobile-first websites that look incredible and drive results.
              </p>
            </div>
            
            {/* Feature Art 1 */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 opacity-50 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full text-accent drop-shadow-md pb-4 pr-4">
                <g className="browser-window">
                  <rect x="20" y="30" width="50" height="35" rx="2" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <line x1="20" y1="36" x2="70" y2="36" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="23" cy="33" r="1.5" fill="currentColor"/>
                  <circle cx="27" cy="33" r="1.5" fill="currentColor"/>
                  <rect x="25" y="42" width="20" height="15" rx="1" fill="currentColor" className="opacity-20"/>
                  <rect x="50" y="42" width="15" height="2" rx="1" fill="currentColor"/>
                  <rect x="50" y="46" width="10" height="2" rx="1" fill="currentColor"/>
                </g>
                <g className="mobile-window">
                  <rect x="55" y="45" width="25" height="40" rx="3" fill="white" stroke="currentColor" strokeWidth="1" className="drop-shadow-sm"/>
                  <rect x="59" y="50" width="17" height="15" rx="1" fill="currentColor" className="opacity-10"/>
                  <line x1="62" y1="70" x2="73" y2="70" stroke="currentColor" strokeWidth="1"/>
                  <line x1="62" y1="74" x2="70" y2="74" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="67.5" cy="80" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </g>
              </svg>
            </div>
          </div>

          {/* Card 2: Telemetry */}
          <div 
            onMouseEnter={(e) => handleMouseEnter(e, 'social')}
            onMouseLeave={(e) => handleMouseLeave(e, 'social')}
            className="feature-card glass-panel rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[450px] relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(56,189,248,0.15)] hover:border-accent/40">
            <div className="relative z-10">
              <div className="text-xs font-mono tracking-widest text-accent mb-8">02 / STRATEGY</div>
              <h3 className="font-sans font-bold text-3xl mb-4 text-slate-800">Social Media Refresh</h3>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                Updated visuals, profiles, and content structure that elevate your brand image.
              </p>
            </div>
            
            {/* Feature Art 2 */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 opacity-50 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full text-accent drop-shadow-md pb-4 pr-4">
                <g className="social-card-1" style={{ transform: 'rotate(-10deg)', transformOrigin: '50px 50px' }}>
                  <rect x="30" y="25" width="40" height="50" rx="4" fill="white" stroke="currentColor" strokeWidth="1" className="opacity-80"/>
                </g>
                <g className="social-card-2" style={{ transform: 'rotate(5deg)', transformOrigin: '50px 50px' }}>
                  <rect x="35" y="30" width="40" height="50" rx="4" fill="white" stroke="currentColor" strokeWidth="1" className="shadow-lg"/>
                  <rect x="40" y="38" width="30" height="25" rx="2" fill="currentColor" className="opacity-20"/>
                  <circle cx="43" cy="69" r="4" fill="currentColor" className="opacity-40"/>
                  <line x1="50" y1="67" x2="68" y2="67" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                  <line x1="50" y1="72" x2="60" y2="72" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                </g>
                <path className="social-heart drop-shadow-md text-sky-400" style={{ transform: 'rotate(15deg)', transformOrigin: '68px 35px' }} d="M75 35 C75 30 70 30 68 33 C66 30 61 30 61 35 C61 40 68 45 68 45 C68 45 75 40 75 35 Z" fill="currentColor" stroke="none" />
              </svg>
            </div>
          </div>

          {/* Card 3: Cursor Protocol */}
          <div 
            onMouseEnter={(e) => handleMouseEnter(e, 'ai')}
            onMouseLeave={(e) => handleMouseLeave(e, 'ai')}
            className="feature-card glass-panel rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[450px] relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(56,189,248,0.15)] hover:border-accent/40">
            <div className="relative z-10">
              <div className="text-xs font-mono tracking-widest text-accent mb-8">03 / AUTOMATION</div>
              <h3 className="font-sans font-bold text-3xl mb-4 text-slate-800">Smart AI Automations</h3>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                Lightweight AI tools that automate responses, capture leads, and streamline workflows.
              </p>
            </div>
            
            {/* Feature Art 3 */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 opacity-50 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full text-accent drop-shadow-md pb-4 pr-4">
                <g className="ai-core">
                  <circle cx="50" cy="50" r="12" fill="white" stroke="currentColor" strokeWidth="1.5" className="shadow-inner"/>
                  <circle cx="50" cy="50" r="5" fill="currentColor" className="opacity-50"/>
                </g>
                <g>
                  <line x1="50" y1="38" x2="50" y2="25" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="50" cy="20" r="5" fill="white" stroke="currentColor" strokeWidth="1" className="ai-dot-outer"/>
                  <circle cx="50" cy="20" r="2" fill="currentColor" className="opacity-30 ai-dot-inner"/>
                </g>
                <g>
                  <line x1="60" y1="58" x2="75" y2="68" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="80" cy="72" r="6" fill="white" stroke="currentColor" strokeWidth="1" className="ai-dot-outer"/>
                  <circle cx="80" cy="72" r="2" fill="currentColor" className="opacity-30 ai-dot-inner"/>
                </g>
                <g>
                  <line x1="38" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="20" cy="50" r="5" fill="white" stroke="currentColor" strokeWidth="1" className="ai-dot-outer"/>
                  <circle cx="20" cy="50" r="2" fill="currentColor" className="opacity-30 ai-dot-inner"/>
                </g>
                <g>
                  <line x1="42" y1="58" x2="30" y2="70" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="25" cy="75" r="7" fill="white" stroke="currentColor" strokeWidth="1" className="ai-dot-outer"/>
                  <circle cx="25" cy="75" r="3" fill="currentColor" className="opacity-30 ai-dot-inner"/>
                </g>
                <g>
                  <line x1="60" y1="42" x2="72" y2="30" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="76" cy="26" r="4" fill="white" stroke="currentColor" strokeWidth="1" className="ai-dot-outer"/>
                  <circle cx="76" cy="26" r="1.5" fill="currentColor" className="opacity-30 ai-dot-inner"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
