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
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&w=2600&q=80" 
          alt="Bioluminescence abstract" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
      </div>

      {/* Content pushed to bottom-left */}
      <div className="relative z-10 max-w-5xl text-background">
        <h1 className="flex flex-col gap-2">
          <span className="hero-text font-sans font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Modernize your brand.
          </span>
          <span className="hero-text font-drama italic text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] text-accent mt-2">
            Instantly.
          </span>
        </h1>
        <p className="hero-text mt-8 max-w-xl text-background/80 font-sans text-lg md:text-xl font-light">
          Frontview Digital helps small businesses refresh their digital presence with modern websites, stronger branding, and smart AI automations.
        </p>
        <div className="hero-cta mt-12 w-fit">
          <a href="#contact" className="magnetic relative inline-flex items-center justify-center bg-accent text-white px-10 py-4 rounded-full font-semibold text-lg overflow-hidden group">
            <span className="relative z-10">Get Free Brand Audit</span>
            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
