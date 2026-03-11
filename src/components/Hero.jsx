import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });
      gsap.from(".hero-cta", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.9
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="relative h-[100dvh] w-full flex items-end pb-32 px-8 md:px-16 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Abstract Light Image */}
        <img 
          src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=2600&q=80" 
          alt="Abstract ethereal gradient" 
          className="w-full h-full object-cover scale-105 opacity-60"
        />
        {/* Soft white fade from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        {/* Soft blue tint from top right */}
        <div className="absolute inset-0 bg-gradient-to-bl from-accent/10 via-transparent to-transparent"></div>
      </div>

      {/* Content pushed to bottom-left */}
      <div className="relative z-10 max-w-5xl text-primary drop-shadow-sm">
        <h1 className="flex flex-col gap-2">
          <span className="hero-text font-sans font-bold text-4xl md:text-5xl lg:text-7xl tracking-tight text-slate-800">
            Modernize your brand.
          </span>
          <span className="hero-text font-drama font-semibold text-6xl md:text-7xl lg:text-[9rem] leading-[0.85] bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent mt-2 pb-2">
            Instantly.
          </span>
        </h1>
        <p className="hero-text mt-8 max-w-2xl text-slate-600 font-sans text-lg md:text-2xl font-normal leading-relaxed text-balance">
          Frontview Digital helps small businesses refresh their digital presence with modern websites, stronger branding, and smart AI automations.
        </p>
        <div className="hero-cta mt-12 w-fit">
          <a href="#contact" className="magnetic relative inline-flex items-center justify-center bg-gradient-to-r from-accent to-blue-400 text-white px-10 py-4 rounded-full font-bold text-lg shadow-[0_8px_20px_rgba(56,189,248,0.4)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(56,189,248,0.6)] hover:scale-105 group">
            <span className="relative z-10">Get Free Brand Audit</span>
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
