import React from "react";
import { ArrowLeft, Lock, Mail } from "lucide-react";
import { BackgroundDecorations, GoogleIcon } from "../ui/Icons";

interface LoginPageProps {
  onLogin: () => void;
  onBack: () => void;
}

export const LoginPage = ({ onLogin, onBack }: LoginPageProps) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* FUNDO SÓLIDO (Sem transparência) com Meeples */}
      <div className="absolute inset-0 bg-[#FDFBF7]">
        <BackgroundDecorations />
      </div>

      <button
        onClick={onBack}
        className="absolute top-6 left-6 p-2 bg-white border-2 border-slate-900 rounded-full shadow-[2px_2px_0px_0px_rgba(30,30,46,1)] hover:bg-slate-50 transition-all z-20"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      <div className="w-full max-w-md bg-white border-2 border-slate-900 rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(30,30,46,1)] relative overflow-hidden z-10">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full border-2 border-slate-900 opacity-50"></div>

        <div className="text-center mb-8 relative z-10">
          <div className="w-16 h-16 bg-[#FFD23F] rounded-2xl border-2 border-slate-900 flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_0px_rgba(30,30,46,1)] rotate-3">
            <Lock className="w-8 h-8 text-slate-900" />
          </div>
          <h2 className="font-heading font-black text-3xl text-slate-900 mb-2">
            Bem-vindo de volta!
          </h2>
          <p className="text-slate-500 font-medium">
            Entre para anunciar, comprar e gerenciar sua coleção.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={onLogin}
            className="w-full bg-white border-2 border-slate-900 rounded-xl p-4 flex items-center justify-center gap-3 font-bold text-slate-700 hover:bg-slate-50 hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(30,30,46,1)] transition-all"
          >
            <GoogleIcon className="w-5 h-5 text-red-500" />
            Continuar com Google
          </button>

          <button
            onClick={onLogin}
            className="w-full bg-indigo-600 border-2 border-slate-900 rounded-xl p-4 flex items-center justify-center gap-3 font-bold text-white shadow-[4px_4px_0px_0px_rgba(30,30,46,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(30,30,46,1)] active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(30,30,46,1)] transition-all"
          >
            <Mail className="w-5 h-5" />
            Entrar com Email
          </button>
        </div>

        <div className="mt-8 text-center border-t-2 border-slate-100 pt-6">
          <p className="text-sm font-bold text-slate-400">
            Não tem conta?{" "}
            <span
              className="text-indigo-600 cursor-pointer hover:underline"
              onClick={onLogin}
            >
              Criar agora
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
