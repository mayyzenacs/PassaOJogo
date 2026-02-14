"use client";
import React, { useState, useEffect } from "react";
import { Crown, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { PREMIUM_ADS } from "@/src/lib/data";

export const PremiumCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % PREMIUM_ADS.length),
      5000,
    );
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % PREMIUM_ADS.length);
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? PREMIUM_ADS.length - 1 : prev - 1));

  return (
    <div className="mb-12 relative group z-10">
      <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
        <Crown className="w-6 h-6 text-purple-600 fill-purple-600 drop-shadow-[1px_1px_0px_rgba(30,30,46,1)]" />
        <h3 className="font-heading font-black text-2xl tracking-tight text-purple-900">
          Destaques Patrocinados
        </h3>
      </div>
      <div className="relative h-96 md:h-80 w-full overflow-hidden rounded-3xl border-4 border-purple-600 shadow-[6px_6px_0px_0px_rgba(30,30,46,1)] bg-white">
        {PREMIUM_ADS.map((ad, index) => (
          <div
            key={ad.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out flex flex-col md:flex-row`}
            style={{ transform: `translateX(${(index - current) * 100}%)` }}
          >
            <div className="w-full md:w-1/2 h-48 md:h-full relative overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-slate-900">
              <img
                src={ad.image}
                alt={ad.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-purple-600 text-white font-black px-3 py-1 rounded-lg border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(30,30,46,1)] text-xs tracking-wider flex items-center gap-1">
                <Zap className="w-3 h-3 fill-white" /> DESTAQUE
              </div>
            </div>
            <div
              className={`w-full md:w-1/2 h-full p-6 md:p-10 flex flex-col justify-center bg-purple-50`}
            >
              <span className="inline-block px-3 py-1 rounded-full border-2 border-purple-900 bg-white text-purple-900 text-xs font-black uppercase tracking-widest self-start mb-3 shadow-[2px_2px_0px_0px_rgba(30,30,46,1)]">
                {ad.tag}
              </span>
              <h2 className="font-heading font-black text-2xl md:text-3xl leading-none mb-2 text-slate-900 line-clamp-2">
                {ad.title}
              </h2>
              <p className="text-slate-700 font-bold mb-6 text-sm">
                Vendedor: {ad.seller}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="font-black text-2xl text-slate-900">
                  R$ {ad.price.toFixed(2)}
                </div>
                <button className="bg-purple-600 text-white font-bold px-4 py-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(30,30,46,1)] hover:translate-y-1 hover:shadow-none border-2 border-slate-900 transition-all active:scale-95 text-sm md:text-base">
                  Ver Oferta
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={prev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white border-2 border-purple-600 text-purple-600 p-2 rounded-full shadow-[3px_3px_0px_0px_rgba(30,30,46,1)] hover:bg-purple-50"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white border-2 border-purple-600 text-purple-600 p-2 rounded-full shadow-[3px_3px_0px_0px_rgba(30,30,46,1)] hover:bg-purple-50"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
