import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-24 relative overflow-hidden bg-slate-900 border-t border-slate-800/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-full bg-brand-500/5 blur-[120px] rounded-full point-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight">
          Sua loja pode vender mais. <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
            Começa no dia 31.
          </span>
        </h2>

        <button className="group relative inline-flex items-center justify-center gap-3 bg-brand-600 hover:bg-brand-500 text-white font-bold text-lg px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] focus:ring-4 focus:ring-brand-500/50 mb-16 w-full sm:w-auto">
          Garantir minha vaga por R$ 97
          <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
        </button>

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800/80 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} O Vendedor. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Política de Privacidade</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
