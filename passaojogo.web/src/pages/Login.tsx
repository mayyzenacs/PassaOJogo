import { Link } from "react-router-dom";
import { LogIn, Mail, Lock, ChevronLeft } from "lucide-react";
import { Footer } from "../components/Footer";

export default function Login() {
  return (
    <div className="min-h-screen bg-neo-bg flex flex-col font-body">
      {/* Container de Topo - Fixado para não ser atropelado */}
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-8 py-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-black uppercase text-xs group transition-all"
          >
            {/* Um pouco de estilo no ícone para facilitar o clique */}
            <div className="p-2 border-2 border-neo-text group-hover:bg-neo-yellow transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-px group-hover:translate-y-px">
              <ChevronLeft size={16} strokeWidth={4} />
            </div>
            <span className="group-hover:text-neo-indigo transition-colors">
              Voltar para a loja
            </span>
          </Link>
        </div>
      </nav>

      {/* Main sem o -mt-12 que quebrava o layout */}
      <main className="flex-1 flex items-center justify-center p-6 pb-20">
        <div className="w-full max-w-md bg-white border-4 border-neo-text p-10 shadow-[8px_8px_0px_0px_rgba(99,102,241,0.2)]">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-heading font-black uppercase tracking-tighter mb-2">
              Acesse sua Conta
            </h1>
            <p className="font-bold text-slate-500 uppercase text-[10px] tracking-[0.2em]">
              O mercado de boardgames te espera
            </p>
          </header>

          <button className="w-full flex items-center justify-center gap-3 border-4 border-neo-text py-4 font-black uppercase text-sm hover:bg-slate-50 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] active:shadow-none active:translate-x-1 active:translate-y-1 mb-8">
            <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.92 3.32-2.12 4.4-1.36 1.36-3.44 2.4-6.48 2.4-5.08 0-9.16-4.12-9.16-9.16s4.08-9.16 9.16-9.16c2.68 0 4.88.92 6.52 2.48l2.32-2.32C18.24 1.08 15.48 0 12.48 0 5.64 0 0 5.64 0 12.48S5.64 24.96 12.48 24.96c3.68 0 6.64-1.2 8.96-3.6 2.32-2.32 3-5.56 3-8.16 0-.6-.04-1.2-.12-1.76h-11.84z" />
            </svg>
            Entrar com Google
          </button>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t-2 border-slate-100"></span>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase font-black">
              <span className="bg-white px-4 text-slate-400">
                Ou use seu e-mail
              </span>
            </div>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-xs font-black uppercase">E-mail</label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="exemplo@email.com"
                  className="w-full pl-12 pr-4 py-3 border-2 border-neo-text font-bold outline-none focus:bg-indigo-50 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between">
                <label className="text-xs font-black uppercase">Senha</label>
                <Link
                  to="#"
                  className="text-[10px] font-bold text-neo-indigo uppercase"
                >
                  Esqueceu?
                </Link>
              </div>
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

            <button className="w-full bg-neo-indigo text-white border-4 border-neo-text py-4 font-black text-lg uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-3 mt-4">
              Acessar Conta <LogIn size={20} strokeWidth={3} />
            </button>
          </form>

          <p className="text-center mt-8 font-bold text-xs uppercase">
            Novo por aqui?{" "}
            <Link
              to="/anunciar"
              className="text-neo-indigo underline decoration-2 underline-offset-4"
            >
              Criar conta
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
