import React from "react";
import { ArrowLeft, Instagram, Twitter } from "lucide-react";

export const Footer = () => (
  <footer className="bg-slate-900 text-white pt-16 pb-32 md:pb-16 border-t-4 border-indigo-500 relative z-10">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="font-heading font-black text-3xl tracking-tighter text-white mb-4">
          PassaOJogo<span className="text-indigo-400">.</span>
        </div>
        <p className="text-slate-400 font-medium max-w-sm mb-6">
          A maior comunidade de compra e venda de board games do Brasil.
        </p>
        <div className="flex gap-4">
          <button className="p-2 bg-slate-800 rounded-lg border border-slate-700 hover:bg-indigo-600 transition-all">
            <Instagram className="w-5 h-5" />
          </button>
          <button className="p-2 bg-slate-800 rounded-lg border border-slate-700 hover:bg-indigo-600 transition-all">
            <Twitter className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div>
        <h4 className="font-heading font-bold text-lg mb-4 text-indigo-300">
          Plataforma
        </h4>
        <ul className="space-y-3 text-slate-400 font-medium text-sm">
          <li>Como Funciona</li>
          <li>Segurança</li>
          <li>Para Lojistas</li>
        </ul>
      </div>
      <div>
        <h4 className="font-heading font-bold text-lg mb-4 text-indigo-300">
          Novidades
        </h4>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Email..."
            className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm w-full"
          />
          <button className="bg-indigo-600 p-2 rounded-lg border border-indigo-500">
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </button>
        </div>
      </div>
    </div>
  </footer>
);
