import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-full px-4 ${isScrolled ? 'opacity-100' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
      <div
        ref={containerRef}
        className="mx-auto w-[90%] md:w-full max-w-5xl rounded-full bg-white/50 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)] px-6 py-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-2 magnetic cursor-pointer z-10 transition-transform duration-300 hover:scale-105">
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-accent">
            <path d="M12 2L2 22h20L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <circle cx="12" cy="15" r="3" fill="currentColor"/>
          </svg>
          <span className="font-sans font-bold text-xl tracking-tight text-primary mt-1">frontview</span>
        </div>

        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {['Services', 'Philosophy', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-secondary hover:text-accent transition-all duration-300 hover:-translate-y-0.5"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="magnetic relative z-10 overflow-hidden group rounded-full bg-gradient-to-r from-accent to-blue-400 px-6 py-2.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(56,189,248,0.4)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(56,189,248,0.6)] hover:scale-105"
        >Start Project
      </a>
      </div>
    </nav>
  );
}
