import React from 'react';
import { Calendar, Clock, MonitorPlay, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat">
      {/* Background Overlay para garantir leitura do texto */}
      <div className="absolute inset-0 bg-slate-950/70 bg-gradient-to-b from-transparent via-slate-950/80 to-slate-950 pointer-events-none" />
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-brand-500/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-brand-400 font-medium text-sm mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          Treinamento ao vivo · 31/03
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          O Vendedor
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Um treinamento de 3 horas ensinando como estruturar <span className="text-white font-semibold">vendas de verdade</span> dentro da loja — método, técnica e plano de ação para aplicar imediatamente.
        </p>

        {/* Event Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12 text-slate-300 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-brand-500" />
            <span>31 de março</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-700" />
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-brand-500" />
            <span>19h (online)</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-700" />
          <div className="flex items-center gap-2">
            <MonitorPlay className="w-5 h-5 text-brand-500" />
            <span>3 horas</span>
          </div>
        </div>

        {/* CTA */}
        <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <button className="group relative inline-flex items-center justify-center gap-3 bg-brand-600 hover:bg-brand-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] focus:ring-4 focus:ring-brand-500/50 w-full sm:w-auto">
            Garantir minha vaga por R$ 97
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Acesso imediato após confirmação. Certificado incluso.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
