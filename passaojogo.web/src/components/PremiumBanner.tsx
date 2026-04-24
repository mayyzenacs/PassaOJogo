import { useState, useEffect, memo } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

export interface BannerItem {
  id: number;
  title: string;
  price: string;
  image: string;
  color: string;
  isCTA?: boolean;
}

interface PremiumBannerProps {
  items: BannerItem[];
  autoPlay?: boolean;
  interval?: number;
}

export const PremiumBanner = memo(
  ({ items, autoPlay = true, interval = 6000 }: PremiumBannerProps) => {
    const [current, setCurrent] = useState(0);

    const displayItems: BannerItem[] = [
      ...items,
      {
        id: 999,
        title: "Assine o Premium e destaque seu jogo!",
        price: "Consiga mais vendas!",
        image:
          "https://preview.redd.it/modern-games-in-shops-v0-fyadj0oney9g1.jpg?width=640&crop=smart&auto=webp&s=e973d35c380b6d7048efb9f0712e6e3c4864a95d",
        color: "",
        isCTA: true,
      },
    ];

    useEffect(() => {
      if (!autoPlay || displayItems.length <= 1) return;
      const timer = setInterval(() => {
        setCurrent((prev) => (prev === displayItems.length - 1 ? 0 : prev + 1));
      }, interval);
      return () => clearInterval(timer);
    }, [displayItems.length, autoPlay, interval]);

    return (
      <section className="relative w-full h-125 md:h-150 overflow-hidden bg-zinc-900">
        <div
          className="flex h-full transition-transform duration-1500 cubic-bezier(0.4, 0, 0.2, 1)"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {displayItems.map((banner) => (
            <div key={banner.id} className="min-w-full h-full relative group">
              <img
                src={banner.image}
                className="absolute inset-0 w-full h-full object-cover"
                alt={banner.title}
                loading="lazy"
              />

              <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent z-10" />

              <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center text-white">
                <span className="inline-block bg-neo-yellow text-black px-3 py-1 font-black text-sm mb-4 w-fit uppercase italic">
                  {banner.isCTA ? "Anuncie Aqui" : "Destaque da Semana"}
                </span>
                <h2 className="text-5xl md:text-8xl font-heading font-black uppercase leading-[0.9] max-w-3xl mb-6 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  {banner.title}
                </h2>
                <div className="flex items-center gap-6">
                  <p className="text-3xl font-black italic">
                    {banner.isCTA ? "" : "Por apenas "}
                    <span className="font-black text-amber-300 text-5xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                      {banner.isCTA ? banner.price : `R$ ${banner.price}`}
                    </span>
                  </p>
                  <button className="bg-white rounded-md text-black px-4 py-4 font-black text-sm uppercase flex items-center gap-2 hover:bg-neo-yellow transition-colors">
                    {banner.isCTA ? "Quero Destacar" : "Ver Detalhes"}{" "}
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
          {displayItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 transition-all duration-300 ${
                current === idx ? "w-12 bg-white" : "w-4 bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={() =>
              setCurrent(current === 0 ? displayItems.length - 1 : current - 1)
            }
            className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-4 bg-black/20 hover:bg-black/60 text-white transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
          <button
            onClick={() =>
              setCurrent(current === displayItems.length - 1 ? 0 : current + 1)
            }
            className="absolute rounded-2xl right-3 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/40 hover:bg-black/80 text-white transition-all opacity-30 group-hover:opacity-100 hover:scale-110"
          >
            <ChevronRight size={30} strokeWidth={2} />
          </button>
        </div>
      </section>
    );
  },
);
