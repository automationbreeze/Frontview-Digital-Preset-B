import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-800 rounded-t-[4rem] px-10 py-20 md:py-24 relative -mt-8 z-20 shadow-[0_-10px_40px_rgba(30,41,59,0.05)] overflow-hidden border-t border-slate-200">
      {/* Background glowing accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-blue-300/40 blur-[2px]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-40 bg-sky-200/30 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Col */}
          <div className="md:col-span-6 flex flex-col gap-8">
            <div className="font-sans font-bold text-4xl tracking-tight text-slate-900 drop-shadow-sm">Frontview<span className="text-accent">.</span></div>
            <p className="font-sans text-slate-500 max-w-sm font-light leading-relaxed text-lg">
              Precision web modernization. We build high-fidelity digital instruments to elevate your brand.
            </p>
            {/* System Status */}
            <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-full px-5 py-2.5 mt-2 w-fit shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)] animate-pulse"></div>
              <span className="font-mono text-xs uppercase tracking-widest text-slate-600 font-medium pt-px">System Operational</span>
            </div>
          </div>
          
          {/* Nav Cols */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <h4 className="font-mono text-[10px] text-accent uppercase tracking-widest mb-2 font-semibold">Navigation</h4>
            <a href="#services" className="font-sans text-slate-600 hover:text-accent transition-colors w-fit link-hover text-sm">Features</a>
            <a href="#philosophy" className="font-sans text-slate-600 hover:text-accent transition-colors w-fit link-hover text-sm">Philosophy</a>
            <a href="#protocol" className="font-sans text-slate-600 hover:text-accent transition-colors w-fit link-hover text-sm">Protocol</a>
          </div>
          
          <div className="md:col-span-4 flex flex-col gap-5">
            <h4 className="font-mono text-[10px] text-accent uppercase tracking-widest mb-2 font-semibold">Direct Channel</h4>
            <a href="mailto:frontviewdigital@gmail.com" className="font-sans text-slate-600 hover:text-accent transition-colors w-fit link-hover text-sm tracking-wide">
              frontviewdigital@gmail.com
            </a>
            <p className="font-sans text-slate-400 text-xs mt-4 leading-relaxed max-w-[200px]">Available for tactical deployments internationally.</p>
          </div>
        </div>

        {/* Bottom Loop / Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-200 pt-10 gap-6">
          <div className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
            © {new Date().getFullYear()} Frontview Digital. All access recorded.
          </div>
          <div className="flex gap-8 font-mono text-[10px] text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-accent transition-colors">Privacy Lexicon</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
