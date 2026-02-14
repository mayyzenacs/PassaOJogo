export interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Seller {
  name: string;
  type: "USER" | "STORE";
  verified: boolean;
  whatsapp: string;
  joined: string;
  reputation: number;
  reviews: Review[];
}

export interface Game {
  id: number;
  title: string;
  price: number;
  image: string;
  condition: string;
  location: string;
  acceptsPickup: boolean;
  description: string;
  tags: string[];
  seller: Seller;
  isPremium?: boolean;
}

export interface Ad {
  id: number;
  title: string;
  price: number;
  image: string;
  tag: string;
  seller: string;
  condition: string;
  description: string;
}
