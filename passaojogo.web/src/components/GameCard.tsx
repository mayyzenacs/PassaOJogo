import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface GameCardProps {
  id: string | number;
  title: string;
  price: number;
  location: string;
  image: string;
  tags?: string[];
}

export default function GameCard({
  id,
  title,
  price,
  location,
  image,
  tags = [],
}: GameCardProps) {
  // Helper para cores neobrutalistas
  const getTagStyle = (tag: string) => {
    const t = tag.toLowerCase();
    if (t.includes("lacrado")) return "bg-neo-yellow";
    if (t.includes("sleeved")) return "bg-neo-emerald text-white";
    return "bg-slate-200";
  };

  return (
    <article className="group bg-white border-4 border-neo-text shadow-neo hover:shadow-neo-hover hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
      <Link
        to={`/anuncio/${id}`}
        className="block h-64 border-b-4 border-neo-text overflow-hidden"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      <div className="p-6">
        <h3 className="text-2xl font-heading font-black uppercase mb-2 tracking-tighter">
          {title}
        </h3>

        {/* Localização */}
        <div className="flex items-center gap-2 text-sm font-bold opacity-70 mb-3">
          <MapPin size={16} strokeWidth={3} />
          <span>{location}</span>
        </div>

        {/* AS TAGS ABAIXO DA CIDADE */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.length > 0 ? (
            tags.map((tag) => (
              <span
                key={tag}
                className={`${getTagStyle(tag)} border-2 border-neo-text px-2 py-0.5 text-[10px] font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
              >
                {tag}
              </span>
            ))
          ) : (
            <span className="text-[10px] font-bold opacity-30 italic">
              Sem tags
            </span>
          )}
        </div>

        <div className="flex justify-between items-end border-t-2 border-slate-100 pt-4">
          <div className="flex flex-col">
            <span className="text-4xl font-black italic">R$ {price}</span>
          </div>
          <Link
            to={`/anuncio/${id}`}
            className="bg-neo-indigo text-white p-4 border-4 border-neo-text shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
          >
            <ArrowRight size={24} strokeWidth={4} />
          </Link>
        </div>
      </div>
    </article>
  );
}
