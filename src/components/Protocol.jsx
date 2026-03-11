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
    <section id="protocol" ref={container} className="relative w-full bg-background pt-24 pb-48">
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
        <h2 className="font-sans font-bold text-4xl md:text-6xl tracking-tight mb-24 text-primary text-center">
          Our Simple <span className="font-drama italic text-accent font-normal text-6xl md:text-8xl align-middle">Process.</span>
        </h2>
        
        <div className="relative pt-12">
          {/* Card 1 */}
          <div className="protocol-card sticky top-24 w-full h-[70vh] min-h-[500px] mb-[60vh] bg-background border border-dark/10 shadow-2xl rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center justify-between p-12 md:p-24 origin-top">
            <div className="max-w-lg mb-12 md:mb-0 relative z-10">
              <div className="font-mono text-xl text-accent mb-6 font-semibold tracking-widest">01</div>
              <h3 className="font-sans font-bold text-4xl md:text-5xl mb-6">Brand Audit</h3>
              <p className="font-sans text-xl text-primary/70 leading-relaxed font-light">
                We analyze your current presence and identify gaps in your modernization strategy.
              </p>
            </div>
            
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
              <svg viewBox="0 0 100 100" className="w-64 h-64 md:w-96 md:h-96 animate-[spin_20s_linear_infinite] opacity-80 text-primary drop-shadow-2xl">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-accent" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" />
                <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.5" className="opacity-30" />
              </svg>
            </div>
          </div>

          {/* Card 2 */}
          <div className="protocol-card sticky top-24 w-full h-[70vh] min-h-[500px] mb-[60vh] bg-background border border-dark/10 shadow-2xl rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center justify-between p-12 md:p-24 origin-top">
            <div className="max-w-lg mb-12 md:mb-0 relative z-10">
              <div className="font-mono text-xl text-accent mb-6 font-semibold tracking-widest">02</div>
              <h3 className="font-sans font-bold text-4xl md:text-5xl mb-6">Strategy & Design</h3>
              <p className="font-sans text-xl text-primary/70 leading-relaxed font-light">
                We craft a custom visual identity and digital roadmap tailored to your business.
              </p>
            </div>
            
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden border border-primary/20 bg-dark/5 rounded-[2rem] flex items-center justify-center text-primary/20 shadow-inner">
                <div className="grid grid-cols-8 grid-rows-8 gap-4 w-full h-full p-8 relative z-0">
                  {Array.from({length:64}).map((_,i)=><div key={i} className="w-2 h-2 rounded-full bg-current"></div>)}
                </div>
                {/* Laser line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-accent shadow-[0_0_20px_4px_rgba(123,97,255,1)] animate-[scanY_4s_ease-in-out_infinite] z-10"></div>
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-accent/20 to-transparent animate-[scanY_4s_ease-in-out_infinite] z-0"></div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="protocol-card sticky top-24 w-full h-[70vh] min-h-[500px] mb-[60vh] bg-background border border-dark/10 shadow-2xl rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center justify-between p-12 md:p-24 origin-top">
            <div className="max-w-lg mb-12 md:mb-0 relative z-10">
              <div className="font-mono text-xl text-accent mb-6 font-semibold tracking-widest">03</div>
              <h3 className="font-sans font-bold text-4xl md:text-5xl mb-6">Implementation</h3>
              <p className="font-sans text-xl text-primary/70 leading-relaxed font-light">
                Our team builds your modern website and sets up your smart AI automations.
              </p>
            </div>
            
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
              <svg viewBox="0 0 120 60" className="w-64 h-32 md:w-96 md:h-48 text-accent drop-shadow-[0_0_15px_rgba(123,97,255,0.6)]">
                {/* Background trace */}
                <path 
                  d="M 0 30 L 20 30 L 30 10 L 45 50 L 55 5 L 70 40 L 80 30 L 120 30" 
                  fill="none" stroke="currentColor" strokeWidth="1" className="opacity-20"
                />
                {/* Animated pulse */}
                <path 
                  id="ekg"
                  d="M 0 30 L 20 30 L 30 10 L 45 50 L 55 5 L 70 40 L 80 30 L 120 30" 
                  fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" 
                />
              </svg>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="protocol-card sticky top-24 w-full h-[70vh] min-h-[500px] mb-[20vh] bg-background border border-dark/10 shadow-2xl rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center justify-between p-12 md:p-24 origin-top">
            <div className="max-w-lg mb-12 md:mb-0 relative z-10">
              <div className="font-mono text-xl text-accent mb-6 font-semibold tracking-widest">04</div>
              <h3 className="font-sans font-bold text-4xl md:text-5xl mb-6">Launch & Growth</h3>
              <p className="font-sans text-xl text-primary/70 leading-relaxed font-light">
                We launch your new presence and provide tools for sustained digital growth.
              </p>
            </div>
            
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 border-2 border-accent/20 rounded-full flex justify-center items-center shadow-[0_0_40px_rgba(123,97,255,0.1)]">
                 <div className="absolute w-full h-full border border-primary/20 rounded-full animate-[spin_10s_linear_infinite_reverse]">
                   <div className="absolute -top-2 left-1/2 w-4 h-4 bg-accent rounded-full shadow-[0_0_10px_2px_rgba(123,97,255,0.8)]"></div>
                 </div>
                 <div className="absolute w-3/4 h-3/4 border-2 border-dashed border-primary/10 rounded-full animate-[spin_15s_linear_infinite]"></div>
                 <div className="absolute w-1/2 h-1/2 bg-gradient-to-tr from-accent/10 to-transparent rounded-full backdrop-blur-sm flex justify-center items-center">
                    <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
