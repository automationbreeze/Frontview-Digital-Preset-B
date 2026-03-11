import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full px-8 py-3 flex items-center justify-between gap-12 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border border-dark/10 text-primary shadow-2xl' 
        : 'bg-transparent text-background border-transparent'
    }`}>
      <div className="font-sans font-bold text-xl tracking-tight whitespace-nowrap">Frontview.</div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#features" className="link-hover">Features</a>
        <a href="#philosophy" className="link-hover">Philosophy</a>
        <a href="#protocol" className="link-hover">Protocol</a>
      </div>
      <a href="#contact" className="magnetic bg-accent text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
        Start Project
      </a>
    </nav>
  );
}
