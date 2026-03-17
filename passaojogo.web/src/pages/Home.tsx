import { Navbar } from "../components/NavBar";
import { PremiumBanner, type BannerItem } from "../components/PremiumBanner";
import { Footer } from "../components/Footer";
import GameCard from "../components/GameCard";

// --- MOCK DE BANNERS (O que aparece no topo, sangria total) ---
const BANNER_ITEMS: BannerItem[] = [
  {
    id: 1,
    title: "Ark Nova: Nova Era",
    price: "580,00",
    image:
      "https://images.unsplash.com/photo-1610812384504-436697b09325?q=80&w=1600",
    color: "bg-emerald-900",
  },
  {
    id: 2,
    title: "Brass Birmingham",
    price: "620,00",
    image:
      "https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=1600",
    color: "bg-zinc-900",
  },
  {
    id: 3,
    title: "Spirit Island",
    price: "490,00",
    image:
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=1600",
    color: "bg-blue-900",
  },
];

// --- MOCK DE JOGOS (O que aparece no grid centralizado) ---
const GAMES_MOCK = [
  {
    id: 1,
    title: "Terraforming Mars",
    price: 350,
    location: "São Paulo, SP - Vila Mariana",
    image: "https://storage.googleapis.com/ludopedia-posts/bc218_95tc3w.jpg",
    tags: ["Sleevado", "Insert", "Raro"],
  },
  {
    id: 2,
    title: "Catan: Edição 25 Anos",
    price: 420,
    location: "Curitiba, PR - Batel",
    image:
      "https://m.media-amazon.com/images/I/71GhUyHjWcL._AC_UF894,1000_QL80_.jpg",
    tags: ["Lacrado", "Promos"],
  },
  {
    id: 3,
    title: "Everdell",
    price: 480,
    location: "Rio de Janeiro, RJ - Barra",
    image:
      "https://images.unsplash.com/photo-1590130541708-37299a918940?q=80&w=600",
    tags: ["Pintado", "Sleeved"],
  },
  {
    id: 4,
    title: "Wingspan",
    price: 390,
    location: "Belo Horizonte, MG",
    image:
      "https://images.unsplash.com/photo-1611996598103-d29e88093ae3?q=80&w=600",
    tags: ["Componentes Upgrade"],
  },
];

// --- COMPONENTE INTERNO: Barra de Anúncio Superior ---
const TopAnnouncement = () => (
  <div className="bg-neo-yellow border-b-4 border-neo-text py-3 px-4 z-40 relative">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <h1 className="text-xl md:text-2xl font-heading font-black uppercase tracking-tighter">
        Gire o Estoque — <span className="text-neo-indigo">Jogue Mais</span>
      </h1>
      <p className="hidden md:block font-bold text-sm border-l-4 border-neo-indigo pl-3 uppercase">
        Compre, venda e troque na maior comunidade do Brasil.
      </p>
      <button className="bg-white px-4 py-1 text-xs font-black uppercase border-2 border-neo-text shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all">
        Assine Premium
      </button>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-neo-bg text-neo-text">
      {/* 1. Navbar (Lógica de Navegação) */}
      <Navbar />

      {/* 2. TopAnnouncement (Identidade e Proposta de Valor) */}
      <TopAnnouncement />

      {/* 3. PremiumBanner (Destaque Visual Full-Width) 
          Note que ele não está dentro de nenhuma div limitadora.
      */}
      <PremiumBanner items={BANNER_ITEMS} />

      {/* 4. Conteúdo Centralizado (Grid de Jogos) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-heading font-black uppercase italic tracking-tighter">
              Jogos em Destaque
            </h2>
            <div className="h-2 flex-grow mx-6 bg-neo-text opacity-10 hidden md:block" />
            <button className="font-black uppercase underline decoration-4 underline-offset-4 hover:text-neo-indigo">
              Ver tudo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {GAMES_MOCK.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
