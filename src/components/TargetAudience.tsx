import React from 'react';
import { UserCircle, TrendingUp, Users, Zap } from 'lucide-react';

const profiles = [
  {
    icon: UserCircle,
    title: 'Lojistas e donos de loja',
    desc: 'Que querem que a equipe converta mais — sem depender de sorte ou do vendedor "talentoso".'
  },
  {
    icon: TrendingUp,
    title: 'Vendedores',
    desc: 'Que querem crescer e entendem que técnica é o que separa quem fecha de quem só atende.'
  },
  {
    icon: Users,
    title: 'Gerentes e líderes de equipe',
    desc: 'Que precisam estruturar um processo comercial e parar de improvisar.'
  },
  {
    icon: Zap,
    title: 'Quem quer resultado rápido',
    desc: 'Método prático, plano de ação para aplicar na semana seguinte.'
  }
];

export default function TargetAudience() {
  return (
    <section className="py-24 bg-slate-950 relative border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Se você trabalha com varejo, é para você.
          </h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {profiles.map((profile, idx) => (
            <div key={idx} className="flex gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-brand-500/10 group-hover:border-brand-500/50 transition-all duration-300">
                <profile.icon className="w-8 h-8 text-brand-400 group-hover:text-brand-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-100 transition-colors">
                  {profile.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {profile.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
