import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

export default function Instructor() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-slate-900/80 rounded-3xl border border-slate-800 overflow-hidden flex flex-col md:flex-row shadow-2xl">
          
          {/* Diego Photo */}
          <div className="md:w-2/5 relative min-h-[400px]">
            <img 
              src="/diego.jpg" 
              alt="Diego Braga - Especialista em Vendas"
              className="absolute inset-0 w-full h-full object-cover object-[center_top]"
            />
            {/* Ambient vignette effect for depth over the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent opacity-50 hidden md:block" />
          </div>

          <div className="md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-2">Diego Braga</h2>
            <p className="text-brand-400 font-medium text-lg mb-8">Especialista em Vendas no Varejo</p>
            
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-500/50 to-transparent rounded-full" />
              <p>
                Diego atua há <span className="text-white font-bold">26 anos no varejo</span>, testando, errando e validando modelos de precificação que funcionam de verdade no dia a dia da loja — com foco especial no mercado pet.
              </p>
              <p>
                Aqui não tem teoria distante da realidade. Não tem planilha complicada.
              </p>
              <p>
                O conteúdo é prático, direto e aplicável, pensado para quem precisa vender mais sem sacrificar a margem e quer começar a ver resultado já nos próximos dias.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-lg border border-slate-800/80 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Abordagem Prática
              </div>
              <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-lg border border-slate-800/80 text-sm text-slate-300">
                 <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Focado no Varejo Brasileiro
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
