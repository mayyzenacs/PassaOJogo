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
    "Lacrado",
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
          <div className="p-2 border-2 border-neo-text group-hover:bg-neo-yellow transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <ChevronLeft size={16} strokeWidth={4} />
          </div>
          <span>Cancelar e voltar</span>
        </Link>

        <header className="mb-12">
          <h1 className="text-5xl font-heading font-black uppercase tracking-tighter leading-none mb-4">
            Anunciar <span className="text-neo-indigo italic">Desapego</span>
          </h1>
        </header>

        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          <section className="bg-white border-4 border-neo-text p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Package className="text-neo-indigo" size={24} strokeWidth={3} />
              <h2 className="text-xl font-black uppercase tracking-tight">
                O que você está vendendo?
              </h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-black uppercase text-slate-500">
                  Título do Jogo
                </label>
                <input
                  type="text"
                  placeholder="Ex: Catan - Edição de Aniversário"
                  className="w-full px-4 py-4 border-2 border-neo-text font-bold outline-none focus:bg-indigo-50 transition-all text-lg"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-black uppercase text-slate-500">
                  Descrição Detalhada
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva o estado dos componentes, da caixa e se há itens faltantes..."
                  className="w-full px-4 py-4 border-2 border-neo-text font-bold outline-none focus:bg-indigo-50 transition-all resize-none"
                />
              </div>
            </div>
          </section>

          <section className="bg-white border-4 border-neo-text p-8 shadow-[8px_8px_0px_0px_rgba(99,102,241,0.1)] space-y-8">
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

          <section className="bg-white border-4 border-neo-text p-8 shadow-[8px_8px_0px_0px_rgba(250,204,21,0.2)]">
            <div className="flex items-center gap-3 mb-6">
              <Camera className="text-neo-yellow" size={24} strokeWidth={3} />
              <h2 className="text-xl font-black uppercase tracking-tight">
                Galeria de Fotos
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <label className="aspect-square border-4 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 hover:border-neo-indigo hover:bg-indigo-50 transition-all text-slate-400 hover:text-neo-indigo cursor-pointer">
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
            <section className="bg-white border-4 border-neo-text p-8 shadow-[8px_8px_0px_0px_rgba(16,185,129,0.2)]">
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
                  className="w-full pl-14 pr-4 py-4 border-2 border-neo-text font-black text-4xl outline-none focus:bg-emerald-50 transition-all"
                />
              </div>
            </section>

            <section className="bg-white border-4 border-neo-text p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] space-y-6">
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
                  <div className="bg-neo-yellow/10 border-2 border-neo-text p-3 text-[10px] font-bold leading-tight animate-in fade-in slide-in-from-top-1">
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

                <div className="relative flex border-2 border-neo-text overflow-hidden bg-white focus-within:ring-2 focus-within:ring-neo-indigo transition-all">
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

          <button className="w-full bg-neo-yellow border-4 border-neo-text py-6 font-black text-2xl uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-4">
            Publicar Desapego <Send size={24} strokeWidth={3} />
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
