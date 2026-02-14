import React from "react";
import { Home, Search, Plus, ShoppingBag, User } from "lucide-react";

interface MobileNavProps {
  view: string;
  setView: (view: "home" | "login" | "details") => void;
  isLoggedIn: boolean;
}

export const MobileNav = ({ view, setView, isLoggedIn }: MobileNavProps) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-slate-900 px-6 py-2 flex justify-between items-end z-50 pb-safe shadow-[0px_-4px_0px_0px_rgba(0,0,0,0.05)]">
      <div
        onClick={() => setView("home")}
        className={`flex flex-col items-center gap-1 ${view === "home" ? "text-indigo-600" : "text-slate-400"}`}
      >
        <Home className="w-6 h-6" />
        <span className="text-[10px] font-bold">Início</span>
      </div>
      <div className="flex flex-col items-center text-slate-400">
        <Search className="w-6 h-6" />
        <span className="text-[10px] font-bold">Buscar</span>
      </div>
      <div className="relative -top-5 group cursor-pointer">
        <button
          onClick={() => !isLoggedIn && setView("login")}
          className="bg-indigo-600 text-white p-4 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(30,30,46,1)] active:translate-y-1 active:shadow-none transition-all hover:bg-indigo-700"
        >
          <Plus className="w-7 h-7 stroke-[3]" />
        </button>
      </div>
      <div className="flex flex-col items-center text-slate-400">
        <ShoppingBag className="w-6 h-6" />
        <span className="text-[10px] font-bold">Vendas</span>
      </div>
      <div
        onClick={() => (isLoggedIn ? setView("home") : setView("login"))}
        className="flex flex-col items-center text-slate-400"
      >
        <User className="w-6 h-6" />
        <span className="text-[10px] font-bold">Perfil</span>
      </div>
    </div>
  );
};
