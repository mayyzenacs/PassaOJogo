import React from "react";
import { Store, CheckCircle2, Zap, MapPin, Handshake } from "lucide-react";
import { TagBadge } from "../ui/Icons";
import { Game } from "@/src/types";

interface GameCardProps {
  game: Game;
  onClick: () => void;
  isPremium?: boolean;
}

export const GameCard = ({
  game,
  onClick,
  isPremium = false,
}: GameCardProps) => (
  <div
    onClick={onClick}
    className={`group bg-white rounded-2xl border-2 overflow-hidden relative flex flex-col shadow-[6px_6px_0px_0px_rgba(30,30,46,1)] hover:shadow-[2px_2px_0px_0px_rgba(30,30,46,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 cursor-pointer h-full
    ${isPremium ? "border-purple-600" : "border-slate-900"}`}
  >
    <div className="h-48 overflow-hidden border-b-2 border-slate-900 bg-slate-100 relative">
      <img
        src={game.image}
        alt={game.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      {isPremium && (
        <div className="absolute top-2 left-2 bg-[#FFD23F] text-slate-900 font-heading font-black text-[10px] px-2 py-0.5 rounded border-2 border-slate-900 shadow-[1px_1px_0px_0px_rgba(30,30,46,1)] z-10 flex items-center gap-1">
          <Zap className="w-3 h-3 fill-slate-900" /> DESTAQUE
        </div>
      )}
      <div className="absolute bottom-2 right-2 bg-[#FFD23F] text-slate-900 font-heading font-black text-lg px-3 py-1 rounded-lg border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(30,30,46,1)] rotate-2 z-10 group-hover:rotate-0 transition-transform">
        R$ {game.price.toFixed(2)}
      </div>
    </div>

    <div className="p-4 flex-1 flex flex-col pt-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div
            className={`w-6 h-6 rounded bg-indigo-100 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold ${game.seller?.type === "STORE" ? "text-purple-700 bg-purple-100" : "text-indigo-700"}`}
          >
            {game.seller?.type === "STORE" ? (
              <Store className="w-3 h-3" />
            ) : game.seller?.name ? (
              game.seller.name.charAt(0)
            ) : (
              "V"
            )}
          </div>
          <span className="text-xs font-bold text-slate-500 truncate max-w-[100px]">
            {game.seller.name}
          </span>
        </div>
        {game.seller?.verified && (
          <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-100" />
        )}
      </div>

      <h3 className="font-heading font-bold text-lg leading-tight mb-2 text-slate-900 group-hover:text-indigo-700 transition-colors line-clamp-2">
        {game.title}
      </h3>

      <div className="mb-3 flex flex-col gap-2">
        {game.tags && game.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {game.tags.map((tag) => (
              <TagBadge key={tag} type={tag} />
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-1">
          {game.condition && (
            <p className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
              <span
                className={`w-2 h-2 rounded-full ${game.condition.includes("Novo") ? "bg-emerald-500" : "bg-orange-400"}`}
              ></span>
              {game.condition}
            </p>
          )}
          {game.acceptsPickup && (
            <div
              title="Aceita Retirada"
              className="bg-slate-100 p-1 rounded-md border border-slate-200"
            >
              <Handshake className="w-3 h-3 text-slate-600" />
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
