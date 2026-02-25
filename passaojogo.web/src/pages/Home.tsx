import { Navbar } from "../components/NavBar";
import { PremiumBanner } from "../components/PremiumBanner";
import { Footer } from "../components/Footer";
import GameCard from "../components/GameCard"; // Use o componente!

export default function Home() {
  // Simulação de dados que virão do seu backend C# via useGames()
  const gamesMock = [
    {
      id: 1,
      title: "Terraforming Mars",
      price: 350,
      location: "São Paulo, SP",
      image: "https://storage.googleapis.com/ludopedia-posts/bc218_95tc3w.jpg",
      tags: ["Sleeved", "Lacrado"],
    },
    {
      id: 2,
      title: "Catan",
      price: 210,
      location: "Curitiba, PR",
      image:
        "https://images.unsplash.com/photo-1611996598103-d29e88093ae3?q=80&w=600",
      tags: ["Lacrado"],
    },
    {
      id: 3,
      title: "Everdell",
      price: 480,
      location: "Rio de Janeiro, RJ",
      image:
        "https://images.unsplash.com/photo-1590130541708-37299a918940?q=80&w=600",
      tags: ["Insert"],
    },
  ];

  return (
    <div className="min-h-screen bg-neo-bg">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4">
        {/* HERO SECTION */}
        <header className="py-20">
          <h1 className="text-6xl md:text-8xl font-heading font-black uppercase leading-[0.85] mb-8 tracking-tighter">
            Gire o <br />
            <span className="bg-neo-yellow px-4 border-5 border-neo-text inline-block -rotate-2">
              Estoque
            </span>
            <span className="block mt-2">JOGUE MAIS</span>
          </h1>
          <p className="max-w-xl text-xl font-bold leading-relaxed border-l-8 border-neo-indigo pl-6">
            Compre, venda e troque jogos de tabuleiro com a maior comunidade do
            Brasil.
          </p>
        </header>

        {/* BANNER PREMIUM - Contido no layout */}
        <div className="mb-20">
          <PremiumBanner />
        </div>

        {/* GRID DE JOGOS - Limpo e Componentizado */}
        <section className="pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {gamesMock.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              title={game.title}
              price={game.price}
              location={game.location}
              image={game.image}
              tags={game.tags}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
