import React from 'react';
import { Store, UserX, MessageSquareX, TrendingDown } from 'lucide-react';

const cards = [
  {
    icon: UserX,
    text: 'O cliente entra, olha e sai. O vendedor pergunta "posso ajudar?" e ouve "só estou olhando". A venda morre antes de começar.'
  },
  {
    icon: Store,
    text: 'Cada vendedor atende de um jeito diferente. Não há processo. Venda vira sorte. Você depende do humor do dia.'
  },
  {
    icon: MessageSquareX,
    text: 'Você confunde atendimento com venda. Atendimento é passivo. Venda é condução — e são coisas completamente diferentes.'
  },
  {
    icon: TrendingDown,
    text: 'Você trabalha o dia inteiro, tem movimento na loja, mas no fim do mês sobra pouco. Não é esforço que falta — é método.'
  }
];

export default function Diagnostic() {
  return (
    <section className="py-24 bg-slate-950 relative border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Sua loja tem movimento. Mas no fim do mês, o lucro some.
          </h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:bg-slate-800/50 hover:border-slate-700 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-500/10 group-hover:border-brand-500/30 transition-all duration-300">
                <card.icon className="w-6 h-6 text-brand-400 group-hover:text-brand-500" />
              </div>
              <p className="text-slate-300 text-lg leading-relaxed group-hover:text-slate-200 transition-colors">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
