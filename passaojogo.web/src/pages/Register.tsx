import { Link } from "react-router-dom";
import { UserPlus, Mail, Lock, User, ChevronLeft } from "lucide-react";
import { Footer } from "../components/Footer";

export default function Register() {
  return (
    <div className="min-h-screen bg-neo-bg flex flex-col font-body">
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-8 py-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-black uppercase text-xs group transition-all"
          >
            <div className="p-2 border-2 border-neo-text group-hover:bg-neo-yellow transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-px group-hover:translate-y-px">
              <ChevronLeft size={16} strokeWidth={4} />
            </div>
            <span>Voltar para a loja</span>
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center p-6 pb-20">
        <div className="w-full max-w-md bg-white border-4 border-neo-text p-10 shadow-[8px_8px_0px_0px_rgba(16,185,129,0.2)]">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-heading font-black uppercase tracking-tighter mb-2">
              Criar Conta
            </h1>
            <p className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.2em]">
              Junte-se à maior comunidade de boardgames
            </p>
          </header>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-xs font-black uppercase">
                Nome Completo
              </label>
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full pl-12 pr-4 py-3 border-2 border-neo-text font-bold outline-none focus:bg-emerald-50 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-black uppercase">E-mail</label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full pl-12 pr-4 py-3 border-2 border-neo-text font-bold outline-none focus:bg-emerald-50 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-black uppercase">Senha</label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 border-2 border-neo-text font-bold outline-none focus:bg-yellow-50 transition-all"
                />
              </div>
            </div>

            <button className="w-full bg-neo-emerald text-white border-4 border-neo-text py-4 font-black text-lg uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-3 mt-4">
              Criar Minha Conta <UserPlus size={20} strokeWidth={3} />
            </button>
          </form>

          <p className="text-center mt-8 font-bold text-xs uppercase">
            Já tem conta?{" "}
            <Link
              to="/login"
              className="text-neo-indigo underline decoration-2 underline-offset-4"
            >
              Fazer Login
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
