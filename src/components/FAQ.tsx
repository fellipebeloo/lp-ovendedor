import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'O treinamento é ao vivo ou gravado?',
    a: 'É ao vivo, no dia 31/03 às 19h. Você assiste em tempo real e pode participar da aula interativamente.'
  },
  {
    q: 'Vou receber algum material após o treinamento?',
    a: 'Sim. Ao final você recebe certificado de participação e o plano de ação trabalhado durante a aula.'
  },
  {
    q: 'Para que tipo de loja serve esse treinamento?',
    a: 'Para qualquer loja que trabalha com vendas presenciais no varejo — lojas de roupas, calçados, pet shops, cosméticos, eletros e muito mais. Se você tem vendedor e quer que ele venda mais, esse treinamento é para você.'
  },
  {
    q: 'O conteúdo é muito básico para quem já tem experiência?',
    a: 'Não. O treinamento é focado em estruturar método — algo que a maioria das lojas, mesmo as mais experientes, ainda não tem de forma organizada. Se você ainda depende da sorte ou do "talento" do vendedor, vai encontrar muito valor aqui.'
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Você realiza o pagamento pelo link (Pix, cartão ou boleto) e recebe acesso imediato ao link da aula por e-mail e WhatsApp.'
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-brand-500/50 bg-slate-900/50' : 'border-slate-800 bg-slate-900/20 hover:border-slate-700 hover:bg-slate-900/40'}`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                >
                  <span className={`font-bold text-lg ${isOpen ? 'text-white' : 'text-slate-300'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'text-brand-500 rotate-180' : 'text-slate-500'}`} />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-5 text-slate-400 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
