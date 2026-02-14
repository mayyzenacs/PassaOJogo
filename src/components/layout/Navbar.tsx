import React from "react";
import { Search, User } from "lucide-react";

interface NavbarProps {
  onOpenLogin: () => void;
  isLoggedIn: boolean;
  onReset: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenLogin,
  isLoggedIn,
  onReset,
}) => {
  return (
    <nav className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-sm border-b-2 border-slate-900 px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div
          onClick={onReset}
          className="font-heading font-black text-2xl md:text-3xl tracking-tighter text-indigo-600 drop-shadow-[2px_2px_0px_rgba(30,30,46,1)] cursor-pointer"
        >
          PassaOJogo<span className="text-slate-900">.</span>
        </div>

        <div className="hidden md:flex flex-1 max-w-md relative group">
          <input
            type="text"
            placeholder="Buscar jogo..."
            className="w-full bg-white border-2 border-slate-900 rounded-lg px-4 py-2.5 font-bold placeholder:text-slate-400 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(99,102,241,1)] transition-all"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-slate-100 rounded-md transition-colors">
            <Search className="w-5 h-5 text-slate-900" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <button
              onClick={onOpenLogin}
              className="hidden md:block font-bold text-sm hover:text-indigo-600 transition-colors"
            >
              Entrar
            </button>
          ) : (
            <span className="hidden md:block font-bold text-sm text-indigo-600">
              Olá, Jogador!
            </span>
          )}
          <div
            onClick={onOpenLogin}
            className="w-10 h-10 bg-indigo-100 border-2 border-slate-900 rounded-lg flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(30,30,46,1)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all cursor-pointer"
          >
            <User className="w-6 h-6 text-indigo-700" />
          </div>
        </div>
      </div>
    </nav>
  );
};
