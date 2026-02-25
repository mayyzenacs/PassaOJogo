import { Search, User, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-8 py-6 border-b-4 border-neo-text bg-white sticky top-0 z-50 gap-6">
      {/* Branding - Agora com Link para facilitar a volta */}
      <Link
        to="/"
        className="text-3xl font-heading font-black tracking-tighter uppercase whitespace-nowrap hover:text-neo-indigo transition-colors"
      >
        Passa<span className="text-neo-indigo">O</span>Jogo
      </Link>

      {/* Barra de Busca - Ocupa o centro */}
      <div className="flex w-full max-w-xl border-4 border-neo-text shadow-neo overflow-hidden">
        <input
          type="text"
          placeholder="Busque por Catan, Terraforming Mars..."
          className="flex-1 px-4 py-2 font-bold outline-none bg-white placeholder:text-slate-400"
        />
        <button className="bg-neo-indigo text-white px-6 border-l-4 border-neo-text hover:bg-neo-text transition-colors">
          <Search strokeWidth={4} />
        </button>
      </div>

      {/* Grupo de Ações do Usuário */}
      <div className="flex items-center gap-6">
        {/* ANUNCIAR: Estilo "Primary" - Máximo destaque */}
        <Link
          to="/anunciar"
          className="bg-neo-yellow border-4 border-neo-text px-6 py-2 font-black shadow-neo active:shadow-none active:translate-x-1 active:translate-y-1 transition-all flex items-center gap-2 whitespace-nowrap uppercase italic text-sm"
        >
          Anunciar <Plus size={20} strokeWidth={4} />
        </Link>
        {/* Entrar: Estilo "Secondary" - Menos peso visual */}
        <Link
          to="/login"
          className="flex items-center gap-2 font-bold hover:text-neo-indigo transition-all group"
        >
          <div className="p-2 border-2 border-transparent group-hover:border-neo-indigo transition-all">
            <User size={20} strokeWidth={3} />
          </div>
          <span className="hidden lg:inline uppercase text-sm tracking-tight">
            Entrar
          </span>
        </Link>
      </div>
    </nav>
  );
}
