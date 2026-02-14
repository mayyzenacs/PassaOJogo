"use client";

import React, { useState, useRef } from "react";
import {
  ArrowLeft,
  Upload,
  DollarSign,
  Tag,
  AlertCircle,
  ImagePlus,
  X,
  Plus,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Tags disponíveis
const AVAILABLE_TAGS = [
  {
    id: "SLEEVED",
    label: "Sleevado",
    color: "bg-emerald-100 border-emerald-500 text-emerald-800",
  },
  {
    id: "INSERT",
    label: "Com Insert",
    color: "bg-blue-100 border-blue-500 text-blue-800",
  },
  {
    id: "PROMO_CARDS",
    label: "Cartas Promo",
    color: "bg-purple-100 border-purple-500 text-purple-800",
  },
  {
    id: "DAMAGED_BOX",
    label: "Caixa Danificada",
    color: "bg-rose-100 border-rose-500 text-rose-800",
  },
  {
    id: "PAINTED",
    label: "Minis Pintadas",
    color: "bg-orange-100 border-orange-500 text-orange-800",
  },
];

export default function AnunciarPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  // Estado do Formulário
  const [images, setImages] = useState<string[]>([]); // Agora é um array de URLs
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("used");
  const [description, setDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Handlers
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );
      setImages((prev) => [...prev, ...newImages]); // Adiciona às existentes
    }
  };

  const removeImage = (indexToRemove: number) => {
    setImages(images.filter((_, index) => index !== indexToRemove));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const toggleTag = (tagId: string) => {
    if (selectedTags.includes(tagId)) {
      setSelectedTags(selectedTags.filter((id) => id !== tagId));
    } else {
      setSelectedTags([...selectedTags, tagId]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (images.length === 0) {
      alert("Adicione pelo menos uma foto do jogo!");
      return;
    }
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Anúncio criado com sucesso! (Modo Demo)");
    setLoading(false);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1e1e2e] font-sans pb-20">
      <nav className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md p-4 border-b-2 border-slate-900 flex items-center justify-between">
        <Link
          href="/"
          className="p-2 border-2 border-slate-900 rounded-full hover:bg-slate-100 transition-all active:translate-y-0.5"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="font-heading font-black text-xl tracking-tight">
          CRIAR ANÚNCIO
        </h1>
        <div className="w-10"></div>
      </nav>

      <main className="max-w-2xl mx-auto px-4 pt-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* SEÇÃO DE IMAGENS (Hero + Grid) */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="font-black text-sm uppercase tracking-widest text-slate-500 ml-1">
                Fotos do Jogo
              </label>
              <span className="text-xs font-bold text-indigo-600">
                {images.length} fotos adicionadas
              </span>
            </div>

            {/* Input Invisível Global */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="hidden"
            />

            {/* 1. Área Principal (Capa) */}
            <div
              onClick={images.length === 0 ? triggerFileInput : undefined}
              className={`relative w-full aspect-video rounded-3xl border-4 border-dashed overflow-hidden group transition-all
              ${
                images.length > 0
                  ? "border-slate-900 bg-slate-900"
                  : "border-slate-300 bg-slate-100 hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer"
              }`}
            >
              {images.length > 0 ? (
                <>
                  <img
                    src={images[0]}
                    alt="Capa"
                    className="w-full h-full object-cover opacity-100"
                  />
                  <div className="absolute top-4 left-4 bg-[#FFD23F] text-slate-900 font-black px-3 py-1 rounded-lg border-2 border-slate-900 text-xs shadow-sm z-10">
                    CAPA DO ANÚNCIO
                  </div>
                  <button
                    type="button"
                    onClick={() => removeImage(0)}
                    className="absolute top-4 right-4 bg-white border-2 border-slate-900 p-2 rounded-full shadow-sm hover:bg-red-100 hover:text-red-600 transition-all z-20"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-slate-400 group-hover:text-indigo-500 transition-colors">
                  <div className="bg-white p-4 rounded-full border-2 border-dashed border-current mb-3 shadow-sm">
                    <ImagePlus className="w-8 h-8" />
                  </div>
                  <span className="font-bold text-sm">
                    Toque para adicionar fotos
                  </span>
                </div>
              )}
            </div>

            {/* 2. Grid de Thumbnails (Quadradinhos) */}
            {images.length > 0 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 animate-in slide-in-from-top-2">
                {/* Lista de Imagens Adicionais (Pula a primeira que já é capa) */}
                {images.map((img, index) => (
                  // Mostra todas no grid para facilitar edição, inclusive a capa com destaque
                  <div
                    key={index}
                    className={`relative aspect-square rounded-xl border-2 overflow-hidden group ${index === 0 ? "border-[#FFD23F] ring-2 ring-[#FFD23F] ring-offset-2" : "border-slate-900"}`}
                  >
                    <img src={img} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-white/90 p-1 rounded-full text-slate-900 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <X className="w-3 h-3" />
                    </button>
                    {index === 0 && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-white font-black text-[8px] uppercase tracking-widest">
                        Capa
                      </div>
                    )}
                  </div>
                ))}

                {/* Botão de Adicionar Mais (+) */}
                <button
                  type="button"
                  onClick={triggerFileInput}
                  className="aspect-square rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center text-slate-400 hover:border-indigo-500 hover:text-indigo-500 hover:bg-indigo-50 transition-all"
                >
                  <Plus className="w-8 h-8" />
                </button>
              </div>
            )}

            <p className="text-[10px] font-bold text-slate-400 ml-2 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> A primeira imagem será a capa
              do anúncio.
            </p>
          </div>

          {/* INFORMAÇÕES DO JOGO */}
          <div className="space-y-4">
            <div>
              <label className="font-black text-sm uppercase tracking-widest text-slate-500 ml-1 mb-2 block">
                Nome do Jogo
              </label>
              <input
                required
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: Catan, Ticket to Ride..."
                className="w-full bg-white border-2 border-slate-900 rounded-xl p-4 font-bold text-lg placeholder:text-slate-300 focus:outline-none focus:border-indigo-600 focus:shadow-[4px_4px_0px_0px_rgba(79,70,229,1)] transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-black text-sm uppercase tracking-widest text-slate-500 ml-1 mb-2 block">
                  Preço
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    required
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="0,00"
                    className="w-full bg-white border-2 border-slate-900 rounded-xl p-4 pl-12 font-bold text-lg placeholder:text-slate-300 focus:outline-none focus:border-emerald-500 focus:shadow-[4px_4px_0px_0px_rgba(16,185,129,1)] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="font-black text-sm uppercase tracking-widest text-slate-500 ml-1 mb-2 block">
                  Condição
                </label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="w-full bg-white border-2 border-slate-900 rounded-xl p-4 font-bold text-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] appearance-none"
                >
                  <option value="new">Novo (Lacrado)</option>
                  <option value="open">Aberto (Nunca Jogado)</option>
                  <option value="used">Usado (Excelente)</option>
                  <option value="worn">Com Marcas de Uso</option>
                </select>
              </div>
            </div>
          </div>

          {/* TAGS */}
          <div className="space-y-3">
            <label className="font-black text-sm uppercase tracking-widest text-slate-500 ml-1 block">
              Detalhes Extras
            </label>
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_TAGS.map((tag) => {
                const isSelected = selectedTags.includes(tag.id);
                return (
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() => toggleTag(tag.id)}
                    className={`px-4 py-2 rounded-xl border-2 font-bold text-xs uppercase tracking-wide transition-all active:scale-95
                      ${
                        isSelected
                          ? `${tag.color} shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] -translate-y-0.5`
                          : "bg-white border-slate-200 text-slate-400 hover:border-slate-400"
                      }`}
                  >
                    {tag.label} {isSelected && "✓"}
                  </button>
                );
              })}
            </div>
          </div>

          {/* DESCRIÇÃO */}
          <div>
            <label className="font-black text-sm uppercase tracking-widest text-slate-500 ml-1 mb-2 block">
              Descrição
            </label>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="Conte sobre o estado do jogo, se falta alguma peça, motivo da venda..."
              className="w-full bg-white border-2 border-slate-900 rounded-xl p-4 font-medium text-slate-700 placeholder:text-slate-300 focus:outline-none focus:border-indigo-600 focus:shadow-[4px_4px_0px_0px_rgba(79,70,229,1)] transition-all resize-none"
            />
          </div>

          {/* SUBMIT */}
          <div className="pt-4 pb-12">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-5 rounded-2xl border-2 border-slate-900 font-black text-xl shadow-[6px_6px_0px_0px_#000] flex items-center justify-center gap-3 transition-all
                ${
                  loading
                    ? "bg-slate-100 text-slate-400 cursor-not-allowed translate-y-1 shadow-none"
                    : "bg-[#FFD23F] text-slate-900 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000] active:translate-y-0 active:shadow-[2px_2px_0px_0px_#000]"
                }`}
            >
              {loading ? (
                <>Enviando...</>
              ) : (
                <>
                  <Upload className="w-6 h-6 stroke-[3]" /> PUBLICAR ANÚNCIO
                </>
              )}
            </button>
            <p className="text-center text-xs font-bold text-slate-400 mt-4">
              Ao publicar, você concorda com nossas regras de comunidade.
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}
