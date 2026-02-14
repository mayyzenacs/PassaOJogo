import { Ad, Game } from "../types";

export const INITIAL_GAMES: Game[] = [
  {
    id: 1,
    title: "Catan: O Jogo (Premium)",
    price: 280.0,
    image:
      "https://x.boardgamearena.net/data/gamemedia/catan/box/en_280.png?h=1751536970",
    condition: "Usado - Excelente",
    location: "São Paulo, SP",
    acceptsPickup: true,
    description: "Jogo base completo, cartas com sleeves. Anúncio em destaque.",
    tags: ["SLEEVED", "INSERT"],
    isPremium: true,
    seller: {
      name: "Marcos V.",
      type: "USER",
      verified: true,
      whatsapp: "5511999999999",
      joined: "Jan 2024",
      reputation: 4.8,
      reviews: [
        {
          id: 1,
          user: "Lucas M.",
          rating: 5,
          comment: "Rápido!",
          date: "29-03-199",
        },
        {
          id: 2,
          user: "Lucas M.",
          rating: 5,
          comment: "Rápido!",
          date: "29-03-199",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Terraforming Mars (Premium)",
    price: 350.0,
    image:
      "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=800&auto=format&fit=crop",
    condition: "Novo - Lacrado",
    location: "Curitiba, PR",
    acceptsPickup: false,
    description: "Versão com componentes 3D. Oportunidade única.",
    tags: ["INSERT"],
    isPremium: true,
    seller: {
      name: "Ana Clara",
      type: "USER",
      verified: false,
      whatsapp: "5511999999999",
      joined: "Mar 2024",
      reputation: 0,
      reviews: [],
    },
  },
  {
    id: 3,
    title: "Azul (Premium)",
    price: 190.0,
    image:
      "https://images.unsplash.com/photo-1626388912534-118c7ae08665?q=80&w=800&auto=format&fit=crop",
    condition: "Aberto - Nunca jogado",
    location: "Belo Horizonte, MG",
    acceptsPickup: true,
    description: "Tiles imaculados. Loja oficial em destaque.",
    tags: ["PROMO_CARDS"],
    isPremium: true,
    seller: {
      name: "Loja Geek BH",
      type: "STORE",
      verified: true,
      whatsapp: "5531999999999",
      joined: "Fev 2024",
      reputation: 4.9,
      reviews: [],
    },
  },
  {
    id: 10,
    title: "Dixit",
    price: 150.0,
    image:
      "https://images.unsplash.com/photo-1611891487122-207579d67d98?q=80&w=800&auto=format&fit=crop",
    condition: "Usado",
    location: "Rio, RJ",
    acceptsPickup: true,
    description: "Cartas em bom estado.",
    tags: [],
    seller: {
      name: "Pedro H.",
      type: "USER",
      verified: true,
      whatsapp: "5521999999999",
      joined: "Dez 2023",
      reputation: 5.0,
      reviews: [],
    },
  },
  {
    id: 11,
    title: "Wingspan",
    price: 320.0,
    image:
      "https://images.unsplash.com/photo-1611371805429-897c8d9c1e0a?q=80&w=800&auto=format&fit=crop",
    condition: "Excelente",
    location: "Floripa, SC",
    acceptsPickup: false,
    description: "Versão em português.",
    tags: ["SLEEVED"],
    seller: {
      name: "Carlos D.",
      type: "USER",
      verified: true,
      whatsapp: "5548999999999",
      joined: "Nov 2023",
      reputation: 5.0,
      reviews: [],
    },
  },
  {
    id: 6,
    title: "Zombicide: Black Plague",
    price: 550.0,
    image:
      "https://images.unsplash.com/photo-1606503118017-c253d53d105c?q=80&w=800&auto=format&fit=crop",
    condition: "Jogado - Pintado",
    location: "Porto Alegre, RS",
    acceptsPickup: true,
    description:
      "Miniaturas pintadas à mão (nível tabletop). Insert customizado.",
    tags: ["INSERT"],
    seller: {
      name: "Studio Minis",
      type: "USER",
      verified: true,
      whatsapp: "5511999999999",
      joined: "Jan 2024",
      reputation: 5.0,
      reviews: [],
    },
  },
  {
    id: 19,
    title: "Zombicide: Black Plague",
    price: 550.0,
    image:
      "https://images.unsplash.com/photo-1606503118017-c253d53d105c?q=80&w=800&auto=format&fit=crop",
    condition: "Jogado - Pintado",
    location: "Porto Alegre, RS",
    acceptsPickup: true,
    description:
      "Miniaturas pintadas à mão (nível tabletop). Insert customizado.",
    tags: ["INSERT"],
    seller: {
      name: "Studio Minis",
      type: "USER",
      verified: true,
      whatsapp: "5511999999999",
      joined: "Jan 2024",
      reputation: 5.0,
      reviews: [],
    },
  },
];

export const PREMIUM_ADS: Ad[] = [
  {
    id: 101,
    title: "Scythe + Expansões",
    price: 1200.0,
    image:
      "https://loja.galapagosjogos.com.br/ccstore/v1/images/?source=/file/v7245874018294054316/products/SCY003_02.png",
    tag: "RARIDADE",
    seller: "Roberto Colecionador",
    condition: "Item de Colecionador",
    description:
      "Edição de colecionador com todas as expansões e moedas de metal. Impecável.",
  },
  {
    id: 102,
    title: "Mansions of Madness",
    price: 150.0,
    image: "https://m.media-amazon.com/images/I/91qka6W9n8L.jpg",
    tag: "OPORTUNIDADE",
    seller: "Família Silva",
    condition: "Preço Baixo",
    description:
      "Lote com Coup, The Resistance e Uno. Ótimo para começar a coleção.",
  },
  {
    id: 103,
    title: "Nemesis: Lockdown",
    price: 950.0,
    image:
      "https://a-static.mlcdn.com.br/470x352/jogo-de-tabuleiro-nemesis-lockdown-sci-fi-horror-para-criancas-e-adultos-com-mais-de-14-anos-rebel-studio/nocnocestadosunidos/buybox-cpb09s3tg967/daa1ddbd3d7286947d5cfa331bed1c6a.jpeg",
    tag: "KICKSTARTER",
    seller: "BoardGame House",
    condition: "Exclusivo",
    description:
      "Versão Kickstarter com Stretch Goals. Aberto apenas para conferência.",
  },
];
