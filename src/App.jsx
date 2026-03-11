import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="noise-overlay"></div>
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Contact />
      <Footer />
    </>
  );
}
