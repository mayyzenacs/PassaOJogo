import React from "react";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { INITIAL_GAMES } from "@/src/lib/data";
import { GameDetailsPage } from "@/src/components/features/GameCard";
import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";

// Next.js 15: params é uma Promise e precisa ser aguardado
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Simulação de busca no banco de dados
  const game = INITIAL_GAMES.find((g) => g.id === Number(id));

  // Se não achar o jogo, mostra erro simples
  if (!game) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4">
          Jogo não encontrado :(
        </h1>
        <Link
          href="/"
          className="text-indigo-600 font-bold hover:underline flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" /> Voltar para a loja
        </Link>
      </div>
    );
  }

  // Se achar, renderiza os detalhes
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
      {/* Passamos uma função vazia no onBack pois agora usamos Links */}
      <Navbar
        onOpenLogin={function (): void {
          throw new Error("Function not implemented.");
        }}
        isLoggedIn={false}
        onReset={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 pt-8">
        <GameDetailsPage
          game={game}
          onBack={() => {}}
          allGames={INITIAL_GAMES}
        />
      </div>
      <Footer />
    </div>
  );
}
