import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      q: "Como funciona o pagamento?",
      a: "Toda negociação é feita diretamente com o vendedor via WhatsApp.",
    },
    {
      q: "É seguro comprar aqui?",
      a: "Verificamos a identidade dos vendedores (Selo Verified).",
    },
    {
      q: "Posso anunciar minha loja?",
      a: "Sim! Temos planos especiais para Lojistas.",
    },
    {
      q: "Como envio os jogos?",
      a: "Correios, Transportadora ou Retirada em Mãos.",
    },
  ];

  return (
    <div className="py-12 bg-indigo-50 border-t-2 border-slate-900 relative z-10">
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="font-heading font-black text-2xl mb-8 text-center flex items-center justify-center gap-2">
          <HelpCircle className="w-8 h-8 text-indigo-600" /> Dúvidas Frequentes
        </h3>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-slate-900 rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(30,30,46,1)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 font-bold text-left hover:bg-slate-50 transition-colors"
              >
                {item.q}
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openIndex === idx ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === idx && (
                <div className="p-4 pt-0 text-slate-600 font-medium text-sm leading-relaxed border-t-2 border-slate-100">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
