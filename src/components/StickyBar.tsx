import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function StickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 500px to not clash with Hero CTA
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full z-50 transition-transform duration-500 ease-out p-4 md:p-6 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="max-w-5xl mx-auto rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col sm:flex-row items-center justify-between p-4 gap-4">
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 to-transparent pointer-events-none" />
        
        <div className="relative z-10 hidden md:flex items-center gap-4 text-slate-300">
          <span className="font-bold text-white text-lg">O Vendedor</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
          <span>31/03 às 19h</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
          <span className="text-emerald-400 font-semibold">R$ 97</span>
        </div>

        {/* Mobile quick view */}
        <div className="relative z-10 flex md:hidden w-full justify-between items-center text-slate-300 px-2">
          <span className="font-bold text-white">31/03</span>
          <span className="text-emerald-400 font-semibold">R$ 97</span>
        </div>

        <button className="relative z-10 w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-500/20 active:scale-95">
          Garantir vaga
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
}
