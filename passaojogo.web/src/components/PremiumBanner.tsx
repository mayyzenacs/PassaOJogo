import { useState, useEffect, memo } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

export interface BannerItem {
  id: number;
  title: string;
  price: string;
  image: string;
  color: string;
}

interface PremiumBannerProps {
  items: BannerItem[];
  autoPlay?: boolean;
  interval?: number;
}

export const PremiumBanner = memo(
  ({ items, autoPlay = true, interval = 5000 }: PremiumBannerProps) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      if (!autoPlay || items.length <= 1) return;
      const timer = setInterval(() => {
        setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
      }, interval);
      return () => clearInterval(timer);
    }, [items.length, autoPlay, interval]);

    if (!items.length) return null;

    return (
      // Removido max-w-fit, border e shadow. Adicionado w-screen e left-1/2 para sangria total se estiver em container.
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-zinc-900">
        <div
          className="flex h-full transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((banner) => (
            <div key={banner.id} className="min-w-full h-full relative group">
              {/* Imagem de Fundo Full */}
              <img
                src={banner.image}
                className="absolute inset-0 w-full h-full object-cover"
                alt={banner.title}
                loading="lazy"
              />

              {/* Overlay de Gradiente para Legibilidade (O Scrim) */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

              {/* Conteúdo Flutuante */}
              <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center text-white">
                <span className="inline-block bg-neo-yellow text-black px-3 py-1 font-black text-sm mb-4 w-fit uppercase italic">
                  Destaque da Semana
                </span>
                <h2 className="text-5xl md:text-8xl font-heading font-black uppercase leading-[0.9] max-w-3xl mb-6">
                  {banner.title}
                </h2>
                <div className="flex items-center gap-6">
                  <p className="text-3xl font-light italic">
                    A partir de{" "}
                    <span className="font-black">R$ {banner.price}</span>
                  </p>
                  <button className="bg-white text-black px-8 py-4 font-black text-lg uppercase flex items-center gap-2 hover:bg-neo-yellow transition-colors">
                    Ver Detalhes <ArrowUpRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navegação Minimalista */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 transition-all duration-300 ${
                current === idx ? "w-12 bg-white" : "w-4 bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Setas Laterais (Invisíveis no Mobile, visíveis no Hover no Desktop) */}
        <div className="hidden md:block">
          <button
            onClick={() =>
              setCurrent(current === 0 ? items.length - 1 : current - 1)
            }
            className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-4 bg-black/20 hover:bg-black/60 text-white transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
          <button
            onClick={() =>
              setCurrent(current === items.length - 1 ? 0 : current + 1)
            }
            className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-4 bg-black/20 hover:bg-black/60 text-white transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>
        </div>
      </section>
    );
  },
);
