import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const BANNERS = [
  {
    id: 1,
    title: "Gloomhaven: Edição Especial",
    price: "1.200",
    image:
      "https://ludopedia-posts.nyc3.cdn.digitaloceanspaces.com/22113_jas4cx.webp",
    color: "bg-neo-indigo",
  },
  {
    id: 2,
    title: "Catan: 25 Anos",
    price: "450",
    image:
      "https://m.media-amazon.com/images/I/71GhUyHjWcL._AC_UF894,1000_QL80_.jpg",
    color: "bg-neo-yellow",
  },
];

export function PremiumBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === BANNERS.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // O segredo do "rodar" está no translateX relativo ao índice
  return (
    <section className="w-full bg-white border-4 border-neo-text shadow-neo-lg overflow-hidden relative">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {BANNERS.map((banner) => (
          <div
            key={banner.id}
            className="min-w-full h-100 md:h-125 flex flex-col md:flex-row"
          >
            {/* Lado Texto */}
            <div
              className={`flex-1 p-8 md:p-16 flex flex-col justify-center ${banner.color} border-b-4 md:border-b-0 md:border-r-4 border-neo-text`}
            >
              <h2 className="text-5xl md:text-7xl font-heading font-black uppercase leading-[0.85] mb-4 text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                {banner.title}
              </h2>
              <p className="text-3xl font-black italic mb-8">
                R$ {banner.price}
              </p>
              <button className="w-fit bg-white border-4 border-neo-text px-8 py-4 font-black text-xl shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2">
                VER JOGO <ArrowUpRight strokeWidth={4} />
              </button>
            </div>
            {/* Lado Imagem */}
            <div className="flex-[1.2] relative">
              <img
                src={banner.image}
                className="w-full h-full object-cover"
                alt={banner.title}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Controles e Badge de Destaque */}
      <div className="absolute top-0 left-0 z-20 bg-neo-yellow border-r-4 border-b-4 border-neo-text px-4 py-1 font-black italic uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        Destaque ★
      </div>

      <div className="absolute bottom-6 right-6 flex gap-4 z-20">
        <button
          onClick={() =>
            setCurrent(current === 0 ? BANNERS.length - 1 : current - 1)
          }
          className="bg-white p-3 border-4 border-neo-text shadow-neo active:shadow-none transition-all"
        >
          <ChevronLeft strokeWidth={4} />
        </button>
        <button
          onClick={() =>
            setCurrent(current === BANNERS.length - 1 ? 0 : current + 1)
          }
          className="bg-white p-3 border-4 border-neo-text shadow-neo active:shadow-none transition-all"
        >
          <ChevronRight strokeWidth={4} />
        </button>
      </div>
    </section>
  );
}
