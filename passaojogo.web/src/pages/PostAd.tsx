import { useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  Package,
  CheckCircle2,
  Send,
  Camera,
  DollarSign,
  X,
  Image as ImageIcon,
  Search,
  Check,
} from "lucide-react";
import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { AddressForm } from "../components/AndressForm";

export default function PostAd() {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [phone, setPhone] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCatalogGame, setSelectedCatalogGame] = useState<{
    id: number;
    title: string;
    thumb: string;
  } | null>(null);
  const [adTitle, setAdTitle] = useState("");

  const mockCatalogResults = [
    {
      id: 101,
      title: "Mansions of Madness: 2ª Edição",
      thumb:
        "https://cf.geekdo-images.com/okM0dq_bEXnbyQTOvHZwlw__micro/img/xP1tG0Bq3E_q8hGZ2S_F0oZ7e5s=/fit-in/64x64/filters:strip_icc()/pic3118622.png",
    },
    {
      id: 102,
      title: "Mansions of Madness: 1ª Edição",
      thumb:
        "https://cf.geekdo-images.com/39hP8n_d6TGu2-G2HIfz1w__micro/img/h7_04hY4-y_Z7s4rB_xN29o-oQk=/fit-in/64x64/filters:strip_icc()/pic924254.jpg",
    },
    {
      id: 103,
      title: "Catan",
      thumb:
        "https://cf.geekdo-images.com/W3BsA1cbO0svvXQ3oWrtCQ__micro/img/1m-X9yv5XzO1-b9w0i0g5rQ6P5k=/fit-in/64x64/filters:strip_icc()/pic2419375.jpg",
    },
  ];

  const handleSelectGame = (game: {
    id: number;
    title: string;
    thumb: string;
  }) => {
    setSelectedCatalogGame(game);
    setAdTitle(game.title);
    setSearchQuery("");
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 11) {
      setPhone(value);
    }
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file),
      );
      setPreviews((prev) => [...prev, ...filesArray].slice(0, 4));
    }
  };

  const removePhoto = (photoIndex: number) => {
    setPreviews((prev) => prev.filter((_, i) => i !== photoIndex));
  };

  const statusOptions = [
    "Novo / Lacrado",
    "Novo / Aberto",
    "Usado / Excelente",
    "Usado / Marcas de Uso",
    "Usado / Mofo",
    "Usado / Falta Peças",
  ];

  const tagOptions = [
    "Sleevado",
    "Minis pintadas",
    "Unpuched",
    "Insert",
    "Cartas Promocionais",
    "Raro",
  ];

  return (
    <div className="min-h-screen bg-neo-bg flex flex-col font-body">
      <Navbar />

      <main className="max-w-4xl mx-auto w-full px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-black uppercase text-xs mb-8 group"
        >
          <div className="p-2 group-hover:bg-neo-yellow transition-all">
            <ChevronLeft size={16} strokeWidth={4} />
          </div>
          <span>Cancelar e voltar</span>
        </Link>

        <header className="mb-6">
          <h1 className="text-5xl font-heading font-black uppercase tracking-tighter leading-none">
            Anunciar <span className="text-neo-indigo italic">Desapego</span>
          </h1>
        </header>

        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          <section className="rounded-md bg-white border-2 border-neo-text p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Package className="text-neo-indigo" size={24} strokeWidth={3} />
              <h2 className="text-xl font-black uppercase tracking-tight">
                O que você está vendendo?
              </h2>
            </div>

            <div className="space-y-4">
              {!selectedCatalogGame ? (
                <div className="space-y-1 relative">
                  <label className="text-xs font-black uppercase text-slate-500">
                    Busque o jogo oficial no catálogo
                  </label>
                  <div className="rounded-md relative border-2 border-neo-text focus-within:ring-2 focus-within:ring-neo-indigo transition-all flex bg-white">
                    <div className="p-4 text-slate-400">
                      <Search size={20} strokeWidth={3} />
                    </div>
                    <input
                      type="text"
                      placeholder="Ex: Mansions of Madness, Catan..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full py-4 pr-4 font-bold outline-none bg-transparent"
                    />
                  </div>

                  {searchQuery.length > 2 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border-2 border-neo-text shadow-neo flex flex-col">
                      {mockCatalogResults.map((game) => (
                        <button
                          key={game.id}
                          type="button"
                          onClick={() => handleSelectGame(game)}
                          className="flex items-center gap-4 p-3 hover:bg-neo-yellow/20 border-b-2 border-slate-100 text-left transition-colors"
                        >
                          <img
                            src={game.thumb}
                            alt="Capa"
                            className="rounded-md w-10 h-10 border-2 border-neo-text object-cover"
                          />
                          <span className="font-bold text-sm uppercase">
                            {game.title}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="rounded-md bg-emerald-50 border-2 border-emerald-500 p-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <img
                        src={selectedCatalogGame.thumb}
                        alt="Capa"
                        className="rounded-md w-12 h-12 border-2 border-neo-text object-cover"
                      />
                      <div>
                        <div className="flex items-center gap-2 text-emerald-700">
                          <Check size={16} strokeWidth={4} />
                          <span className="text-[10px] font-black uppercase tracking-widest">
                            Vinculado ao Catálogo
                          </span>
                        </div>
                        <p className="font-bold uppercase text-sm">
                          {selectedCatalogGame.title}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedCatalogGame(null)}
                      className="text-[10px] font-black uppercase text-slate-500 hover:text-red-500 transition-colors underline"
                    >
                      Trocar Jogo
                    </button>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-black uppercase text-slate-500 flex justify-between">
                      <span>Título do seu anúncio</span>
                      <span className="text-[10px] text-neo-indigo italic">
                        Pode editar titulo
                      </span>
                    </label>
                    <input
                      type="text"
                      value={adTitle}
                      onChange={(e) => setAdTitle(e.target.value)}
                      className="rounded-md w-full px-4 py-4 border-2 border-neo-text font-black outline-none focus:bg-indigo-50 transition-all text-lg"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1 pt-2">
                <label className="text-xs font-black uppercase text-slate-500">
                  Descrição Detalhada
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva o estado dos componentes, da caixa e se há itens faltantes..."
                  className="rounded-md w-full px-4 py-4 border-2 border-neo-text font-bold outline-none focus:bg-indigo-50 transition-all resize-none"
                />
              </div>
            </div>
          </section>

          <section className="rounded-md bg-white border-2 border-neo-text p-8 shadow-[8px_8px_0px_0px_rgba(99,102,241,0.1)] space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle2
                className="text-neo-indigo"
                size={24}
                strokeWidth={3}
              />
              <h2 className="text-xl font-black uppercase tracking-tight">
                Estado e Detalhes
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-500">
                  Condição Geral
                </label>
                <div className="relative">
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full bg-white border-2 border-neo-text px-4 py-3 font-bold appearance-none outline-none focus:bg-indigo-50 cursor-pointer"
                  >
                    <option value="" disabled>
                      Selecione o estado...
                    </option>
                    {statusOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronLeft
                      size={16}
                      strokeWidth={4}
                      className="-rotate-90"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-500">
                  Características Extras
                </label>
                <div className="flex flex-wrap gap-2">
                  {tagOptions.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 text-[10px] font-black uppercase border-2 transition-all ${selectedTags.includes(tag) ? "bg-neo-indigo text-white border-neo-text shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" : "bg-white border-slate-200 text-slate-400 hover:border-neo-text hover:text-neo-text"}`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-md bg-white border-2 border-neo-text p-8 shadow-[8px_8px_0px_0px_rgba(250,204,21,0.2)]">
            <div className="flex items-center gap-3 mb-6">
              <Camera className="text-neo-yellow" size={24} strokeWidth={3} />
              <h2 className="text-xl font-black uppercase tracking-tight">
                Galeria de Fotos
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <label className="rounded-md aspect-square border-4 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 hover:border-neo-indigo hover:bg-indigo-50 transition-all text-slate-400 hover:text-neo-indigo cursor-pointer">
                <ImageIcon size={32} />
                <span className="text-[10px] font-black uppercase">
                  Adicionar
                </span>
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                />
              </label>
              {previews.map((src, photoIndex) => (
                <div
                  key={`preview-${photoIndex}`}
                  className="relative aspect-square border-2 border-neo-text overflow-hidden group"
                >
                  <img
                    src={src}
                    className="w-full h-full object-cover"
                    alt="Preview"
                  />
                  <button
                    type="button"
                    onClick={() => removePhoto(photoIndex)}
                    className="absolute top-1 right-1 bg-red-500 text-white p-1 border-2 border-neo-text shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-red-600 transition-colors"
                  >
                    <X size={12} strokeWidth={4} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <section className="rounded-md bg-white border-2 border-neo-text p-8 shadow-[8px_8px_0px_0px_rgba(16,185,129,0.2)]">
              <div className="flex items-center gap-3 mb-6">
                <DollarSign
                  className="text-neo-emerald"
                  size={24}
                  strokeWidth={3}
                />
                <h2 className="text-xl font-black uppercase tracking-tight">
                  Quanto Custa?
                </h2>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-2xl italic">
                  R$
                </span>
                <input
                  type="number"
                  placeholder="0,00"
                  className="rounded-md w-full pl-14 pr-4 py-4 border-2 border-neo-text font-black text-4xl outline-none focus:bg-emerald-50 transition-all"
                />
              </div>
            </section>

            <section className="rounded-md bg-white border-2 border-neo-text p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] space-y-6">
              <AddressForm />

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-2">
                  <label className="phone text-[10px] font-black uppercase text-slate-500 tracking-tight">
                    WhatsApp para Contato de Venda
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowHelp(!showHelp)}
                    className="w-4 h-4 flex items-center justify-center rounded-full bg-neo-text text-white text-[9px] font-black hover:bg-neo-indigo transition-colors"
                  >
                    ?
                  </button>
                </div>

                {showHelp && (
                  <div className="rounded-md bg-neo-yellow/10 border-2 border-neo-text p-3 text-[10px] font-bold leading-tight animate-in fade-in slide-in-from-top-1">
                    <p>
                      <span className="text-neo-indigo uppercase">
                        Privacidade:
                      </span>{" "}
                      Usamos seu número apenas para criar o link de chat direto.
                      O comprador não vê seu número até clicar no botão de
                      compra.
                    </p>
                  </div>
                )}

                <div className="rounded-md relative flex border-2 border-neo-text overflow-hidden bg-white focus-within:ring-2 focus-within:ring-neo-indigo transition-all">
                  <span className="flex items-center justify-center px-3 bg-slate-50 border-r-2 border-neo-text font-black text-ms text-slate-400">
                    +55
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="DDD + Número"
                    className="w-full px-4 py-3 font-bold outline-none bg-transparent placeholder:text-slate-300"
                  />
                </div>
                <p className="text-[9px] font-black uppercase text-slate-400">
                  Somente dígitos. Formato: 11999999999
                </p>
              </div>
            </section>
          </div>

          <button className="rounded-md w-full bg-neo-yellow border-2 border-neo-text py-6 font-black text-2xl uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-4">
            Publicar Desapego <Send size={24} strokeWidth={3} />
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
