import { useParams, Link } from "react-router-dom";
import { ShieldCheck, MapPin, ChevronLeft, MessageCircle } from "lucide-react";
import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { gamesMock } from "../mocks/games"; // CERTIFIQUE-SE QUE O STATUS ESTÁ NO MOCK

export default function GameDetails() {
  const { id } = useParams();

  // Busca o jogo no mock compartilhado
  const game = gamesMock.find((g) => g.id.toString() === id);

  // Fallback de segurança (Guard Clause)
  if (!game) {
    return (
      <div className="min-h-screen bg-neo-bg flex flex-col items-center justify-center font-body">
        <h1 className="text-4xl font-black uppercase mb-4">
          Jogo não encontrado
        </h1>
        <Link
          to="/"
          className="bg-neo-indigo text-white px-8 py-4 border-4 border-neo-text shadow-neo uppercase font-black"
        >
          Voltar ao Catálogo
        </Link>
      </div>
    );
  }

  // Configuração do Link do WhatsApp Dinâmico
  const whatsappNumber = "5511999999999"; // No futuro, virá de game.sellerPhone
  const text = encodeURIComponent(
    `Olá! Tenho interesse no jogo "${game.title}" anunciado por R$ ${game.price}. Ainda está disponível?`,
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

  const getTagStyle = (tag: string) => {
    const t = tag.toLowerCase();

    if (t.includes("lacrado"))
      return "bg-yellow-100 text-yellow-800 border-yellow-400 shadow-yellow-200";

    if (t.includes("sleevado"))
      return "bg-emerald-100 text-emerald-800 border-emerald-400 shadow-emerald-200";

    if (t.includes("insert"))
      return "bg-indigo-100 text-indigo-800 border-indigo-400 shadow-indigo-200";

    if (t.includes("unpuched"))
      return "bg-blue-100 text-blue-800 border-blue-400 shadow-blue-200";

    if (t.includes("cartas promocionais"))
      return "bg-orange-100 text-orange-800 border-orange-400 shadow-orange-200";

    if (t.includes("raro"))
      return "bg-lime-100 text-lime-800 border-lime-400 shadow-lime-200";
  };

  return (
    <div className="min-h-screen bg-neo-bg font-body">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <Link
          to="/"
          className="flex items-center gap-2 font-black uppercase text-sm mb-8 hover:text-neo-indigo transition-colors"
        >
          <ChevronLeft strokeWidth={4} size={16} /> Voltar para o catálogo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LADO ESQUERDO: GALERIA E DESCRIÇÃO */}
          <div className="lg:col-span-7 space-y-8">
            <div className="border-4 border-neo-text bg-white shadow-neo overflow-hidden">
              <img
                src={game.image}
                alt={game.title}
                className="w-full aspect-video object-cover"
              />
            </div>

            <div className="bg-white border-4 border-neo-text p-8 shadow-neo">
              <h2 className="text-3xl font-heading font-black uppercase mb-6">
                Descrição do Produto
              </h2>
              <p className="text-lg font-bold leading-relaxed opacity-80 whitespace-pre-line">
                {game.description}
              </p>
            </div>
          </div>

          {/* LADO DIREITO: INFO DE COMPRA */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border-4 border-neo-text p-8 shadow-neo-lg">
              {/* TAGS DINÂMICAS */}
              <div className="flex flex-wrap gap-2 mb-8">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`${getTagStyle(tag)} border-2 px-2 py-1 text-[10px] font-black uppercase shadow-[3px_3px_0px_0px]`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl font-heading font-black uppercase leading-none mb-4">
                {game.title}
              </h1>

              <div className="flex items-center gap-2 mb-8 opacity-70">
                <MapPin size={18} strokeWidth={3} />
                <span className="font-bold">{game.location}</span>
              </div>

              {/* STATUS/ESTADO - AQUI ESTÁ O QUE VOCÊ PEDIU */}
              <div className="flex mb-6">
                <span className="bg-neo-yellow border-2 border-neo-text px-3 py-1 text-sm font-black uppercase">
                  {game.status}
                </span>
              </div>

              <div className="text-5xl font-black italic mb-8">
                R$ {game.price},00
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-neo-emerald border-4 border-neo-text py-4 font-black text-2xl shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase"
              >
                <MessageCircle size={28} strokeWidth={3} /> Comprar no Whatsapp
              </a>
            </div>

            {/* CARD VENDEDOR */}
            <div className="bg-neo-emerald text-white border-4 border-neo-text p-6 shadow-neo">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 bg-neo-yellow border-4 border-neo-text rounded-full flex items-center justify-center text-neo-text font-black text-2xl">
                  FA
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase leading-none">
                    Fábio Akita
                  </h4>
                  <p className="text-sm font-bold opacity-80 italic">
                    Membro desde 2024
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t-2 border-white/30 pt-4 text-center">
                <div>
                  <p className="text-2xl font-black">12</p>
                  <p className="text-xs uppercase font-bold">Vendas</p>
                </div>
                <div>
                  <p className="text-2xl font-black">4.8 ★</p>
                  <p className="text-xs uppercase font-bold text-white/70">
                    Média
                  </p>
                </div>
              </div>
            </div>

            {/* SEGURANÇA */}
            <div className="bg-white border-4 border-neo-text p-6 shadow-neo border-l-12 border-l-neo-yellow">
              <div className="flex items-center gap-3 mb-4 text-neo-text">
                <ShieldCheck size={24} strokeWidth={3} />
                <h4 className="font-black uppercase text-lg">
                  Compra Garantida
                </h4>
              </div>
              <ul className="space-y-3 text-sm font-bold opacity-80 list-disc pl-5">
                <li>Nunca pague antecipado sem ver o produto.</li>
                <li>Prefira encontros em locais públicos.</li>
                <li>Confira os componentes antes de finalizar.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
