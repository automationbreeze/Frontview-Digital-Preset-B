import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', details: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name / Company: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Project Details:\n${formData.details}`
    );
    window.location.href = `mailto:frontviewdigital@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-32 px-8 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto glass-panel shadow-[0_20px_40px_rgba(30,41,59,0.08)] border-white/60 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
        {/* Decorative ambient blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-300/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-sky-200/40 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="relative z-10 text-center mb-12">
          <h2 className="font-sans font-bold text-4xl md:text-5xl tracking-tight mb-4 text-slate-800">Initialize <span className="font-drama font-semibold align-middle text-5xl md:text-6xl mx-1 bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent pb-2">Connection.</span></h2>
          <p className="font-sans text-slate-500 text-lg max-w-md mx-auto">Get a free brand audit. Ready to modernize your brand?</p>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest ml-2">Identity / Entity</label>
              <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="bg-white/50 border border-white/60 rounded-[1.5rem] px-6 py-4 font-sans text-slate-800 focus:outline-none focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-400 shadow-sm backdrop-blur-md" placeholder="John Doe, Inc." />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest ml-2">Return Address</label>
              <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="bg-white/50 border border-white/60 rounded-[1.5rem] px-6 py-4 font-sans text-slate-800 focus:outline-none focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-400 shadow-sm backdrop-blur-md" placeholder="john@example.com" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-mono text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest ml-2">Message</label>
            <textarea required rows={4} value={formData.details} onChange={e => setFormData({...formData, details: e.target.value})} className="bg-white/50 border border-white/60 rounded-[1.5rem] px-6 py-4 font-sans text-slate-800 focus:outline-none focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none placeholder:text-slate-400 shadow-sm backdrop-blur-md" placeholder="Tell us about your project or how we can help..."></textarea>
          </div>
          <button type="submit" className="magnetic mt-4 bg-gradient-to-r from-accent to-blue-400 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_12px_30px_rgba(56,189,248,0.6)] hover:scale-105 transition-all w-full md:w-auto md:self-center shadow-[0_8px_20px_rgba(56,189,248,0.4)]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
