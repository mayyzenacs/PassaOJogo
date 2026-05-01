import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, ExternalLink, Home } from "lucide-react";
import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export default function AdPublished() {
  const [searchParams] = useSearchParams();
  const adId = searchParams.get("id");

  return (
    <div className="min-h-screen bg-neo-bg flex flex-col font-body">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
        <div className="bg-white border-2 border-neo-text rounded-md shadow-neo p-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-md bg-neo-emerald border-2 border-neo-text flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <CheckCircle2 className="text-white" size={28} strokeWidth={3} />
            </div>

            <div>
              <h1 className="text-3xl font-heading font-black uppercase tracking-tighter">
                Anúncio publicado com sucesso
              </h1>
              <p className="text-sm font-bold text-slate-500 uppercase mt-1">
                Seu desapego já está no ar.
              </p>
            </div>
          </div>

          {!adId ? (
            <div className="bg-neo-yellow/20 border-2 border-neo-text p-4 rounded-md">
              <p className="text-xs font-black uppercase">
                Atenção: não foi possível identificar o anúncio (id ausente).
              </p>
              <p className="text-xs font-bold text-slate-600 mt-2">
                Isso acontece porque hoje o publish ainda é mock. Quando você
                integrar com o backend, esse id precisa vir da resposta do POST.
              </p>
            </div>
          ) : (
            <div className="bg-emerald-50 border-2 border-emerald-500 p-4 rounded-md">
              <p className="text-xs font-black uppercase text-emerald-800">
                ID do anúncio: {adId}
              </p>
            </div>
          )}

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            {adId && (
              <Link
                to={`/anuncio/${adId}`}
                className="flex-1 rounded-md bg-neo-indigo text-white border-2 border-neo-text py-4 px-6 font-black uppercase shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-3"
              >
                Ver meu anúncio <ExternalLink size={18} strokeWidth={3} />
              </Link>
            )}

            <Link
              to="/"
              className="flex-1 rounded-md bg-neo-yellow border-2 border-neo-text py-4 px-6 font-black uppercase shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-3"
            >
              Voltar para a Home <Home size={18} strokeWidth={3} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
