import React from "react";
import {
  ArrowLeft,
  Box,
  Store,
  CheckCircle2,
  Star,
  ThumbsUp,
  MapPin,
  Handshake,
  ShieldCheck,
  MessageCircle,
  Crown,
} from "lucide-react";
import { Game } from "@/src/types";
import { TagBadge } from "../ui/Icons";
import { PREMIUM_ADS } from "@/src/lib/data";
import { GameCard } from "../ui/GameCard";

interface GameDetailsPageProps {
  game: Game;
  onBack: () => void;
  allGames: Game[];
}

export const GameDetailsPage = ({
  game,
  onBack,
  allGames,
}: GameDetailsPageProps) => {
  const getWhatsAppLink = () => {
    const text = `Olá ${game.seller.name}, vi seu anúncio do *${game.title}* no PassaOJogo e tenho interesse! Ainda está disponível?`;
    return `https://wa.me/${game.seller.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const similarGames = allGames.filter((g) => g.id !== game.id).slice(0, 4);

  // AQUI ESTÁ A PARTE DOS REVIEWS (DENTRO DO DETALHE)
  const SellerInfoCard = () => (
    <div
      className={`p-5 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(30,30,46,1)] ${game.seller.type === "STORE" ? "bg-purple-50" : "bg-white"}`}
    >
      <div className="flex items-center justify-between mb-4 border-b-2 border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-14 h-14 rounded-2xl border-2 border-slate-900 flex items-center justify-center font-black text-2xl ${game.seller.type === "STORE" ? "bg-purple-200 text-purple-800" : "bg-indigo-100 text-indigo-700"}`}
          >
            {game.seller.type === "STORE" ? (
              <Store className="w-8 h-8" />
            ) : game.seller.name ? (
              game.seller.name.charAt(0)
            ) : (
              "V"
            )}
          </div>
          <div>
            <div className="flex items-center gap-1 font-bold text-slate-900 text-lg">
              {game.seller.name}
              {game.seller.verified && (
                <CheckCircle2 className="w-5 h-5 text-blue-500 fill-blue-100" />
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wide">
                Membro desde {game.seller.joined}
              </span>
              {game.seller.type === "STORE" && (
                <span className="text-[10px] text-purple-700 font-black bg-purple-200 px-2 py-0.5 rounded-full self-start mt-1 border border-purple-300">
                  LOJA OFICIAL
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="text-center bg-white p-2 rounded-xl border border-slate-200">
          <div className="flex items-center gap-1 text-orange-500 font-black text-xl justify-center">
            {game.seller.reputation} <Star className="w-5 h-5 fill-current" />
          </div>
          <div className="text-[9px] text-slate-400 font-black uppercase">
            Nota
          </div>
        </div>
      </div>

      {/* LISTA DE REVIEWS AQUI */}
      {game.seller.reviews && game.seller.reviews.length > 0 ? (
        <div className="space-y-3">
          <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
            <ThumbsUp className="w-4 h-4 text-slate-400" /> Últimas avaliações:
          </h4>
          {game.seller.reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-3 rounded-xl border border-slate-200 text-sm shadow-sm"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-slate-700 text-xs">
                  {review.user}
                </span>
                <div className="flex text-orange-400 gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 italic text-xs">
                "{review.comment}"
              </p>
              <div className="text-[10px] text-slate-400 mt-1 text-right">
                {review.date}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-400 italic text-center py-2">
          Este vendedor ainda não recebeu avaliações escritas.
        </p>
      )}
    </div>
  );

  const BuyCTA = () => (
    <div className="mt-6 sticky bottom-4 z-30">
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-emerald-500 text-white font-black text-xl py-4 rounded-2xl border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(30,30,46,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(30,30,46,1)] active:translate-y-0 active:translate-x-0 active:shadow-[2px_2px_0px_0px_rgba(30,30,46,1)] transition-all flex items-center justify-center gap-3 group"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-emerald-500 group-hover:scale-110 transition-transform" />
        COMPRAR AGORA
      </a>
      <p className="text-center text-xs font-bold text-slate-400 mt-3 flex items-center justify-center gap-1">
        <ShieldCheck className="w-3 h-3" /> Pagamento seguro e negociação direta
      </p>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 relative z-10">
      <div className="md:hidden sticky top-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-md p-4 border-b-2 border-slate-900 flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 bg-white border-2 border-slate-900 rounded-full shadow-[2px_2px_0px_0px_rgba(30,30,46,1)] active:translate-y-0.5 active:shadow-none transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-heading font-bold text-lg truncate flex-1">
          {game.title}
        </span>
      </div>

      <div className="max-w-6xl mx-auto md:py-8 px-4 pb-20">
        <button
          onClick={onBack}
          className="hidden md:flex items-center gap-2 mb-8 text-slate-500 hover:text-indigo-600 font-bold transition-colors group"
        >
          <div className="p-1 rounded-full border-2 border-transparent group-hover:border-slate-900 group-hover:bg-white transition-all">
            <ArrowLeft className="w-5 h-5" />
          </div>
          Voltar para a loja
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 space-y-6">
            <div
              className={`aspect-video bg-white border-4 rounded-[40px] overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] ${game.isPremium ? "border-purple-600 shadow-[10px_10px_0px_0px_#A855F7]" : "border-slate-900"}`}
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-24 h-24 flex-shrink-0 rounded-xl border-2 border-slate-900 overflow-hidden cursor-pointer hover:translate-y-[-2px] hover:shadow-md transition-all bg-slate-200"
                >
                  <img
                    src={game.image}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>

            <div className="hidden lg:block">
              {/* AQUI NO DESKTOP, O SELLER VEM NA ESQUERDA */}
              <SellerInfoCard />
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-4">
              <h1 className="font-heading font-black text-4xl md:text-5xl text-slate-900 leading-[0.95] mb-4">
                {game.title}
              </h1>

              <div className="flex flex-wrap gap-2 mb-4">
                {game.tags.map((tag) => (
                  <TagBadge key={tag} type={tag} />
                ))}
              </div>

              <div className="flex flex-col gap-3 p-4 bg-slate-50 border-2 border-slate-200 rounded-xl mb-6">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                  <MapPin className="w-4 h-4 text-indigo-600" />
                  <span>{game.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold">
                  {game.acceptsPickup ? (
                    <>
                      <div className="bg-emerald-100 p-1 rounded-full">
                        <Handshake className="w-4 h-4 text-emerald-700" />
                      </div>
                      <span className="text-emerald-700">
                        Aceita retirada em mãos
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="bg-slate-200 p-1 rounded-full">
                        <Box className="w-4 h-4 text-slate-500" />
                      </div>
                      <span className="text-slate-500">
                        Apenas envio por correio
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="text-4xl font-black text-indigo-600 flex items-center gap-2">
                R$ {game.price.toFixed(2)}
                <span className="text-sm font-bold text-slate-400 font-sans mt-2">
                  à vista
                </span>
              </div>
            </div>

            <BuyCTA />

            <div className="my-8 p-1">
              <h3 className="font-heading font-bold text-xl mb-3 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#FFD23F] rounded-sm border border-slate-900"></span>
                Sobre o item
              </h3>
              <p className="text-slate-700 leading-relaxed font-medium text-base md:text-lg">
                {game.description}
              </p>
            </div>

            <div className="lg:hidden">
              {/* NO MOBILE, O SELLER VEM NO FIM */}
              <SellerInfoCard />
            </div>
          </div>
        </div>

        <div className="mt-20 border-t-2 border-slate-200 pt-12">
          <div className="mb-16 bg-indigo-50 rounded-3xl p-6 md:p-10 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(30,30,46,1)]">
            <div className="flex items-center gap-2 mb-6">
              <Crown className="w-6 h-6 text-[#FFD23F] fill-[#FFD23F] drop-shadow-[1px_1px_0px_rgba(30,30,46,1)]" />
              <h3 className="font-heading font-black text-2xl tracking-tight">
                Destaques da Comunidade
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PREMIUM_ADS.map((ad) => (
                <div
                  key={ad.id}
                  className="bg-white rounded-2xl border-2 border-slate-900 overflow-hidden flex flex-col shadow-sm hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(30,30,46,1)] transition-all cursor-pointer"
                >
                  <div className="h-40 relative border-b-2 border-slate-900">
                    <img
                      src={ad.image}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 text-[10px] font-black bg-[#FFD23F] px-2 py-0.5 border border-slate-900 rounded shadow-sm">
                      {ad.tag}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h4 className="font-heading font-bold text-lg leading-tight mb-1">
                      {ad.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-bold mb-3">
                      {ad.seller}
                    </p>
                    <div className="mt-auto flex justify-between items-center">
                      <span className="font-black text-indigo-700">
                        R$ {ad.price.toFixed(2)}
                      </span>
                      <button className="text-[10px] font-bold bg-slate-900 text-white px-3 py-1.5 rounded-lg hover:bg-indigo-600 transition-colors">
                        VER
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-heading font-black text-2xl mb-6 flex items-center gap-2">
              <Box className="w-6 h-6 text-slate-900" />
              Jogos Semelhantes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarGames.map((similar) => (
                <GameCard
                  key={similar.id}
                  game={similar}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
