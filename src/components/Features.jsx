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
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 px-8 md:px-16 bg-background relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-tight mb-4">Functional<br/><span className="font-drama italic text-accent font-normal text-5xl md:text-6xl">Advantage.</span></h2>
          <p className="font-sans text-primary/70 max-w-md">Our methodology transforms your web presence through three core interactive artifacts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="feature-card bg-background rounded-[2rem] p-8 border border-dark/5 shadow-xl shadow-dark/5 flex flex-col">
            <h3 className="font-sans font-bold text-xl mb-2">Website Redesign</h3>
            <p className="font-sans text-sm text-primary/60">Modern, fast, mobile-first websites that convert visitors into customers.</p>
            <div className="mt-auto pt-6">
              <DiagnosticShuffler />
            </div>
          </div>

          {/* Card 2 */}
          <div className="feature-card bg-background rounded-[2rem] p-8 border border-dark/5 shadow-xl shadow-dark/5 flex flex-col">
            <h3 className="font-sans font-bold text-xl mb-2">Social Media Refresh</h3>
            <p className="font-sans text-sm text-primary/60">Updated visuals, profiles, and content structure that elevate your brand image.</p>
            <div className="mt-auto pt-6">
              <TelemetryTypewriter />
            </div>
          </div>

          {/* Card 3 */}
          <div className="feature-card bg-background rounded-[2rem] p-8 border border-dark/5 shadow-xl shadow-dark/5 flex flex-col">
            <h3 className="font-sans font-bold text-xl mb-2">Smart AI Automations</h3>
            <p className="font-sans text-sm text-primary/60">Lightweight AI tools that automate responses, capture leads, and streamline workflows.</p>
            <div className="mt-auto pt-6">
              <CursorProtocolScheduler />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
