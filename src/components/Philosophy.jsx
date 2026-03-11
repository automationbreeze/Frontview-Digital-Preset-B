import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function Philosophy() {
  const container = useRef(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax background image
      gsap.to(".parallax-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Text reveal animation
      gsap.from(".reveal-text", {
        scrollTrigger: {
          trigger: ".text-content",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        rotationX: -20,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out"
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="philosophy" className="relative w-full py-40 overflow-hidden bg-gradient-to-b from-transparent via-sky-50 to-white text-primary flex items-center justify-center -mt-px">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=2600&q=80" 
          alt="Ethereal abstract texture"
          className="parallax-bg absolute w-full h-[120%] object-cover opacity-30 mix-blend-multiply -top-[10%]"
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="text-content relative z-10 max-w-6xl px-8 text-center flex flex-col gap-10">
        <p className="reveal-text font-sans text-xl md:text-2xl lg:text-3xl text-slate-500 tracking-tight font-light">
          Stop Living in the <span className="text-slate-800 font-medium">Past.</span>
        </p>
        <h2 className="reveal-text font-drama font-semibold text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.9] text-slate-800">
          Look Forward with <span className="bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent not-italic font-sans font-bold tracking-tighter inline-block mx-2 pb-2">Frontview</span>.
        </h2>
      </div>
    </section>
  );
}
