import React from 'react';
import { Target, Users, Filter, MessagesSquare, Settings, Rocket } from 'lucide-react';

const modules = [
  {
    number: '01',
    icon: Users,
    title: 'O comportamento do vendedor de sucesso',
    desc: 'O que diferencia um vendedor comum de um vendedor que fecha — mentalidade, postura e abordagem.'
  },
  {
    number: '02',
    icon: Target,
    title: 'As 3 alavancas da venda',
    desc: 'As três variáveis que, quando ajustadas, mudam o faturamento da loja sem precisar de mais clientes.'
  },
  {
    number: '03',
    icon: Filter,
    title: 'Funil de vendas aplicado ao varejo',
    desc: 'Como funciona o caminho do cliente dentro da loja e em qual etapa você está perdendo dinheiro.'
  },
  {
    number: '04',
    icon: MessagesSquare,
    title: 'Técnicas práticas de vendas',
    desc: 'Abordagem, condução, contorno de objeções e fechamento — técnicas que funcionam no varejo real.'
  },
  {
    number: '05',
    icon: Settings,
    title: 'Como criar um método comercial para a loja',
    desc: 'Estruture um processo que funciona independente do vendedor do dia. Resultado previsível, não dependente de sorte.'
  },
  {
    number: '06',
    icon: Rocket,
    title: 'Plano de ação para aplicar imediatamente',
    desc: 'Você sai da aula sabendo exatamente o que fazer na sua loja no dia seguinte.'
  }
];

export default function Modules() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/10 blur-[100px] rounded-full point-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 md:flex md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              3 horas de aula direta ao ponto.
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Sem enrolação. Sem teoria inútil. Conteúdo pensado para quem trabalha com vendas no varejo e quer resultado na semana seguinte.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, idx) => (
            <div 
              key={idx}
              className="relative p-8 rounded-2xl bg-gradient-to-b from-slate-800/40 to-slate-900/40 border border-slate-700/50 hover:border-brand-500/50 transition-colors group"
            >
              <div className="absolute top-0 right-0 p-8 text-7xl font-black text-slate-800/30 select-none group-hover:text-brand-900/20 transition-colors z-0">
                {mod.number}
              </div>
              <div className="relative z-10">
                <mod.icon className="w-8 h-8 text-brand-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-100 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
