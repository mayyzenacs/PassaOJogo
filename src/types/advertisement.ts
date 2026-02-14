export interface AnuncioFormData {
  images: string[];
  title: string;
  price: string;
  condition: "new" | "open" | "used" | "worn";
  description: string;
  selectedTags: string[];
}

export interface Tag {
  id: string;
  label: string;
  color: string;
}
