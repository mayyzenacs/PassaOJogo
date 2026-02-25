import { useState } from "react";
import {
  User,
  Settings,
  ShoppingBag,
  Heart,
  Edit3,
  Trash2,
  ExternalLink,
} from "lucide-react";
import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { AddressForm } from "../components/AndressForm";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("anuncios");

  // Mock de anúncios do usuário
  const myAds = [
    {
      id: 1,
      title: "Terraforming Mars",
      price: 350,
      status: "Ativo",
      views: 124,
    },
    { id: 2, title: "Catan", price: 210, status: "Pausado", views: 45 },
  ];

  return (
    <div className="min-h-screen bg-neo-bg flex flex-col font-body">
      <Navbar />

      <main className="max-w-7xl mx-auto w-full px-6 py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* SIDEBAR */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white border-4 border-neo-text p-8 shadow-neo">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-neo-yellow border-4 border-neo-text rounded-full flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <User size={64} strokeWidth={3} />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tighter">
                  Fábio Akita
                </h2>
                <p className="text-sm font-bold text-slate-500 italic mb-4">
                  Membro desde Jan 2024
                </p>

                {/* Alteração 1: Métricas de Avaliação no lugar de Vendas/Ativos */}
                <div className="grid grid-cols-2 w-full gap-4 border-t-4 border-neo-text pt-6">
                  <div className="text-center">
                    <p className="text-2xl font-black">12</p>
                    <p className="text-[10px] font-black uppercase text-slate-400 leading-tight">
                      Avaliações
                      <br />
                      Recebidas
                    </p>
                  </div>
                  <div className="text-center border-l-4 border-neo-text border-dotted">
                    <p className="text-2xl font-black italic">4.8</p>
                    <p className="text-[10px] font-black uppercase text-slate-400 leading-tight">
                      Média de
                      <br />
                      Estrelas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <nav className="flex flex-col border-4 border-neo-text bg-white shadow-neo overflow-hidden">
              <button
                onClick={() => setActiveTab("anuncios")}
                className={`flex items-center gap-3 px-6 py-4 font-black uppercase text-sm border-b-4 border-neo-text transition-all ${activeTab === "anuncios" ? "bg-neo-indigo text-white" : "hover:bg-slate-50"}`}
              >
                <ShoppingBag size={20} /> Meus Anúncios
              </button>
              <button
                onClick={() => setActiveTab("favoritos")}
                className={`flex items-center gap-3 px-6 py-4 font-black uppercase text-sm border-b-4 border-neo-text transition-all ${activeTab === "favoritos" ? "bg-neo-indigo text-white" : "hover:bg-slate-50"}`}
              >
                <Heart size={20} /> Favoritos
              </button>
              <button
                onClick={() => setActiveTab("config")}
                className={`flex items-center gap-3 px-6 py-4 font-black uppercase text-sm transition-all ${activeTab === "config" ? "bg-neo-indigo text-white" : "hover:bg-slate-50"}`}
              >
                <Settings size={20} /> Configurações
              </button>
            </nav>
          </aside>

          {/* CONTEÚDO PRINCIPAL */}
          <section className="lg:col-span-8">
            {/* TAB: MEUS ANÚNCIOS */}
            {activeTab === "anuncios" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-4xl font-heading font-black uppercase tracking-tighter leading-none">
                    Gerenciar Anúncios
                  </h3>
                  {/* Alteração 2: Texto de resumo abaixo do título */}
                  <p className="text-sm font-bold uppercase text-slate-500 mt-2">
                    2 ativos | 1 pausado
                  </p>
                </div>

                <div className="space-y-4">
                  {myAds.map((ad) => (
                    <div
                      key={ad.id}
                      className="bg-white border-4 border-neo-text p-6 shadow-neo flex flex-col md:flex-row justify-between items-center gap-6"
                    >
                      <div className="flex items-center gap-6 w-full">
                        <div className="w-20 h-20 bg-slate-100 border-2 border-neo-text shrink-0"></div>
                        <div>
                          <h4 className="text-xl font-black uppercase leading-none mb-1">
                            {ad.title}
                          </h4>
                          <p className="text-lg font-bold text-neo-indigo italic">
                            R$ {ad.price}
                          </p>
                          <div className="flex gap-4 mt-2 text-[10px] font-black uppercase text-slate-400">
                            <span>{ad.views} Visualizações</span>
                            <span
                              className={
                                ad.status === "Ativo"
                                  ? "text-neo-emerald"
                                  : "text-orange-500"
                              }
                            >
                              ● {ad.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 w-full md:w-auto">
                        <button className="flex-1 md:flex-none p-3 border-2 border-neo-text hover:bg-neo-yellow shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                          <Edit3 size={18} />
                        </button>
                        <button className="flex-1 md:flex-none p-3 border-2 border-neo-text hover:bg-red-500 hover:text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                          <Trash2 size={18} />
                        </button>
                        <button className="flex-1 md:flex-none p-3 bg-neo-text text-white border-2 border-neo-text shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <ExternalLink size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: CONFIGURAÇÕES */}
            {activeTab === "config" && (
              <div className="bg-white border-4 border-neo-text p-8 shadow-neo space-y-10">
                <h3 className="text-4xl font-heading font-black uppercase tracking-tighter leading-none">
                  Dados da Conta
                </h3>

                <form
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-xs font-black uppercase">
                        Nome de Exibição
                      </label>
                      <input
                        type="text"
                        defaultValue="Fábio Akita"
                        className="w-full px-4 py-3 border-2 border-neo-text font-bold outline-none focus:bg-indigo-50"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-black uppercase">
                        E-mail
                      </label>
                      <input
                        type="email"
                        defaultValue="akita@passaojogo.com"
                        className="w-full px-4 py-3 border-2 border-neo-text font-bold outline-none focus:bg-indigo-50"
                      />
                    </div>

                    {/* Alteração 3: Adição do campo de Telefone/WhatsApp */}
                    <div className="space-y-1 md:col-span-2">
                      <label className="text-xs font-black uppercase flex items-center gap-2">
                        WhatsApp (DDI + DDD + Número)
                      </label>
                      <input
                        type="tel"
                        placeholder="Ex: 5511999999999"
                        className="w-full px-4 py-3 border-2 border-neo-text font-bold outline-none focus:bg-green-50"
                      />
                      <p className="text-[10px] font-bold text-slate-400 italic">
                        Obrigatório para receber propostas de compra.
                      </p>
                    </div>
                  </div>

                  <div className="border-t-4 border-dashed border-slate-100 pt-8">
                    <AddressForm />
                  </div>

                  <button className="bg-neo-emerald text-white border-4 border-neo-text px-8 py-4 font-black uppercase shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                    Salvar Alterações
                  </button>
                </form>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
