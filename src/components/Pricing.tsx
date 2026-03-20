import React from 'react';
import { Check, Shield, ArrowRight } from 'lucide-react';

const includes = [
  '3 horas de aula ao vivo com Diego Braga',
  'As 3 alavancas da venda',
  'Funil de vendas aplicado ao varejo',
  'Técnicas práticas de vendas',
  'Método comercial para a loja',
  'Plano de ação para aplicar imediatamente',
  'Certificado de participação'
];

export default function Pricing() {
  return (
    <section className="py-24 bg-slate-950 relative border-y border-slate-800/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-brand-500/10 blur-[100px] rounded-full point-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-b from-slate-900 to-slate-900/50 border border-brand-500/30 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col md:flex-row gap-12">
          
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-bold uppercase tracking-wider mb-6">
              Investimento Único
            </div>
            
            <div className="mb-6">
              <span className="text-6xl font-black text-white tracking-tight">R$ 97</span>
            </div>
            
            <p className="text-slate-400 mb-8 border-b border-slate-800 pb-8">
              Pagamento único · acesso imediato
            </p>

            <a href="https://pay.kiwify.com.br/lo9JhQG" target="_blank" rel="noopener noreferrer" className="w-full group relative flex items-center justify-center gap-3 bg-brand-600 hover:bg-brand-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)] focus:ring-4 focus:ring-brand-500/50">
              Quero participar do treinamento
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-400">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>Pagamento seguro · Pix, cartão de crédito ou boleto</span>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-white font-bold text-xl mb-6">O que está incluso:</h3>
            <ul className="space-y-4">
              {includes.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-300">
                  <Check className="w-6 h-6 text-brand-500 flex-shrink-0" />
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
