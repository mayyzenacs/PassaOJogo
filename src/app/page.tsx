"use client";

import React, { useState } from "react";
import { Star, Plus, Home, Search, ShoppingBag, Tag, User } from "lucide-react";
import { FaqSection } from "../components/features/FaqSection";
import { GameDetailsPage } from "../components/features/GameCard";
import { LoginPage } from "../components/features/LoginPage";
import { PremiumCarousel } from "../components/features/PremiumCarousel";
import { Footer } from "../components/layout/Footer";
import { MobileNav } from "../components/layout/MobileNav";
import { Navbar } from "../components/layout/Navbar";
import { GameCard } from "../components/ui/GameCard";
import { BackgroundDecorations, NavIcon } from "../components/ui/Icons";
import { INITIAL_GAMES } from "../lib/data";
import { Game } from "../types";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGameClick = (game: Game) => {
    setSelectedGame(game);
    window.scrollTo(0, 0);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoginOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1e1e2e] pb-0 selection:bg-indigo-200 flex flex-col relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;500;700&family=Outfit:wght@400;700;900&display=swap');
        body { font-family: 'DM Sans', sans-serif; }
        h1, h2, h3, h4, .font-heading { font-family: 'Outfit', sans-serif; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-10px) rotate(-6deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(6deg); }
          50% { transform: translateY(-8px) rotate(6deg); }
        }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 5s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}</style>

      {/* --- MEEPLE DECORATION (BACKGROUND) --- */}
      <BackgroundDecorations />

      {/* --- LOGIN MODAL --- */}
      {isLoginOpen && (
        <LoginPage onLogin={handleLogin} onBack={() => setIsLoginOpen(false)} />
      )}

      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-sm border-b-2 border-slate-900 px-4 py-3 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div
            onClick={() => {
              setSelectedGame(null);
              setIsLoginOpen(false);
            }}
            className="font-heading font-black text-2xl md:text-3xl tracking-tighter text-indigo-600 drop-shadow-[2px_2px_0px_rgba(30,30,46,1)] select-none cursor-pointer hover:-translate-y-0.5 transition-transform"
          >
            PassaOJogo<span className="text-slate-900">.</span>
          </div>
          <div className="hidden md:flex flex-1 max-w-md relative group">
            <input
              type="text"
              placeholder="Buscar jogo..."
              className="w-full bg-white border-2 border-slate-900 rounded-lg px-4 py-2.5 font-bold placeholder:text-slate-400 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(99,102,241,1)] focus:-translate-y-1 transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-slate-100 rounded-md transition-colors">
              <Search className="w-5 h-5 text-slate-900" />
            </button>
          </div>
          <div className="flex items-center gap-4">
            {!isLoggedIn ? (
              <button
                onClick={() => setIsLoginOpen(true)}
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
              onClick={() => !isLoggedIn && setIsLoginOpen(true)}
              className="w-10 h-10 bg-indigo-100 border-2 border-slate-900 rounded-lg flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(30,30,46,1)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all cursor-pointer group"
            >
              <User className="w-6 h-6 text-indigo-700 group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </nav>

      {/* --- CONTEÚDO --- */}
      <main className="flex-1 max-w-6xl mx-auto px-4 pt-8 md:pt-16 w-full relative z-10">
        {selectedGame ? (
          <GameDetailsPage
            game={selectedGame}
            onBack={() => setSelectedGame(null)}
            allGames={INITIAL_GAMES}
          />
        ) : (
          <>
            {/* HERO HOME */}
            <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto mb-20 px-4">
              <div className="absolute top-0 md:top-4 left-0 md:-left-4 animate-float-slow hidden md:block">
                <div className="bg-purple-200 border-2 border-slate-900 p-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(30,30,46,1)] rotate-[-6deg]">
                  <Star className="w-8 h-8 text-purple-600 fill-purple-600 mx-auto mb-1" />
                  <span className="font-heading font-black text-purple-900 text-sm">
                    RAROS
                  </span>
                </div>
              </div>
              <div className="absolute bottom-10 md:bottom-10 right-0 md:-right-4 animate-float-reverse hidden md:block">
                <div className="bg-emerald-100 border-2 border-slate-900 p-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(30,30,46,1)] rotate-[6deg]">
                  <Tag className="w-8 h-8 text-emerald-600 fill-emerald-600 mx-auto mb-1" />
                  <span className="font-heading font-black text-emerald-900 text-sm">
                    BARATOS
                  </span>
                </div>
              </div>

              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] text-slate-900 tracking-tight mb-6 z-10 relative">
                GIRE O <br />
                <span className="relative inline-block mx-2">
                  <span className="absolute inset-0 bg-indigo-200 transform -rotate-1 border-2 border-slate-900 rounded-xl translate-y-3 scale-110"></span>
                  <span className="relative text-indigo-700 z-10">ESTOQUE</span>
                </span>{" "}
                <br />
                JOGUE MAIS.
              </h1>

              <p className="text-lg md:text-2xl text-slate-600 font-medium max-w-xl mx-auto mb-10 leading-relaxed">
                O marketplace onde a comunidade negocia jogos parados e renova a
                diversão.
              </p>

              <button
                onClick={() => (!isLoggedIn ? setIsLoginOpen(true) : null)}
                className="bg-[#FFD23F] text-slate-900 font-black text-xl px-10 py-5 rounded-full border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(30,30,46,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(30,30,46,1)] active:translate-y-0 active:translate-x-0 active:shadow-[2px_2px_0px_0px_rgba(30,30,46,1)] transition-all flex items-center justify-center gap-3 group relative z-20"
              >
                <span className="bg-white border-2 border-slate-900 rounded-full p-1.5 group-hover:rotate-90 transition-transform duration-500">
                  <Plus className="w-6 h-6" />
                </span>
                QUERO ANUNCIAR AGORA
              </button>
            </div>

            {/* --- VITRINE PATROCINADA (CARROSSEL GIRATÓRIO ROXO) --- */}
            <PremiumCarousel />

            <div className="mb-10">
              <h3 className="font-heading font-bold text-4xl mb-8 flex items-center gap-2">
                <span className="w-3 h-8 bg-indigo-600 rounded-sm shadow-[2px_2px_0px_0px_rgba(30,30,46,1)]"></span>
                Explorar Categorias
              </h3>
              <div className="overflow-x-auto -mx-4 px-4 pt-2 pb-6 hide-scrollbar">
                <div className="flex gap-4 min-w-max px-1">
                  {[
                    "Recentes",
                    "Estratégia",
                    "Party Games",
                    "Wargames",
                    "Familiares",
                    "Raros",
                    "Kickstarter",
                  ].map((filter, idx) => (
                    <button
                      key={filter}
                      className={`px-6 py-2.5 rounded-xl font-bold border-2 border-slate-900 transition-all duration-200
                            ${
                              idx === 0
                                ? "bg-slate-900 text-white shadow-[4px_4px_0px_0px_#FFD23F] hover:shadow-[2px_2px_0px_0px_#FFD23F] hover:translate-y-[2px]"
                                : "bg-white text-slate-900 hover:bg-indigo-50 shadow-[4px_4px_0px_0px_rgba(200,200,200,1)] hover:shadow-[2px_2px_0px_0px_rgba(30,30,46,1)] hover:-translate-y-1"
                            }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-20">
              {INITIAL_GAMES.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  onClick={() => handleGameClick(game)}
                  isPremium={game.isPremium}
                />
              ))}
            </div>
          </>
        )}
      </main>

      {/* --- SEÇÃO DE CONFIANÇA/FAQ --- */}
      <FaqSection />

      {/* --- FOOTER GLOBAL --- */}
      <Footer />

      {/* --- MOBILE NAV --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-slate-900 px-6 py-2 flex justify-between items-end z-50 pb-safe shadow-[0px_-4px_0px_0px_rgba(0,0,0,0.05)]">
        <NavIcon
          icon={Home}
          label="Início"
          isActive={activeTab === "home" && !selectedGame}
          onClick={() => {
            setActiveTab("home");
            setSelectedGame(null);
          }}
        />
        <NavIcon
          icon={Search}
          label="Buscar"
          isActive={activeTab === "search"}
          onClick={() => setActiveTab("search")}
        />
        <div className="relative -top-5 group cursor-pointer">
          <button
            onClick={() => (!isLoggedIn ? setIsLoginOpen(true) : null)}
            className="bg-indigo-600 text-white p-4 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(30,30,46,1)] active:translate-y-1 active:shadow-none transition-all hover:bg-indigo-700"
          >
            <Plus className="w-7 h-7 stroke-[3]" />
          </button>
        </div>
        <NavIcon
          icon={ShoppingBag}
          label="Vendas"
          isActive={activeTab === "sales"}
          onClick={() => setActiveTab("sales")}
        />
        <NavIcon
          icon={User}
          label="Perfil"
          isActive={activeTab === "profile"}
          onClick={() =>
            isLoggedIn ? setActiveTab("profile") : setIsLoginOpen(true)
          }
        />
      </div>
    </div>
  );
}
