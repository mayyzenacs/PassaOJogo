import { Navbar } from "../components/NavBar";
import { PremiumBanner, type BannerItem } from "../components/PremiumBanner";
import { Footer } from "../components/Footer";
import GameCard from "../components/GameCard";

const BANNER_ITEMS: BannerItem[] = [
  {
    id: 1,
    title: "Ark Nova: Nova Era",
    price: "580,00",
    image: "https://img.olx.com.br/images/54/547637639485064.jpg",
    color: "bg-emerald-900",
  },
  {
    id: 2,
    title: "Brass Birmingham",
    price: "620,00",
    image:
      "https://unspielbar.com/cdn/shop/files/UN_Brass_Birmingham_SHOP_BRASS_BIRMINGHAM_RETAIL_Insert_Detail_03_UNSPIELBAR.com.jpg?v=1745657487&width=1486",
    color: "bg-zinc-900",
  },
  {
    id: 3,
    title: "Spirit Island",
    price: "490,00",
    image: "https://img.olx.com.br/images/15/154625742244161.jpg",
    color: "bg-blue-900",
  },
];

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

const TopAnnouncement = () => (
  <div className="bg-indigo-300 border-b-4 border-neo-text py-3 px-4 z-40 relative">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <h1 className="text-xl md:text-2xl font-heading font-black uppercase tracking-tighter">
        Gire o Estoque — <span className="text-white">Jogue Mais!</span>
      </h1>
      <p className="hidden md:block text-black font-bold text-sm border-l-4 border-neo-indigo pl-3 uppercase">
        compre, venda e troque jogos de tabuleiro na primeira comunidade de
        venda de boardgames do brasil
      </p>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-neo-bg text-neo-text">
      <Navbar />

      <TopAnnouncement />

      <PremiumBanner items={BANNER_ITEMS} />

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
