import { Instagram, Twitter, MessageCircle, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t-8 border-neo-text mt-20">
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Coluna 1: Branding & Social */}
          <div className="space-y-6">
            <span className="text-4xl font-heading font-black tracking-tighter uppercase">
              Passa<span className="text-neo-indigo">O</span>Jogo
            </span>
            <p className="font-bold leading-tight max-w-xs">
              A maior comunidade de boardgames do Brasil. Gire seu estoque com
              segurança e atitude.
            </p>
            <div className="flex gap-4">
              <SocialButton icon={<Instagram />} href="#" />
              <SocialButton icon={<Twitter />} href="#" />
              <SocialButton icon={<MessageCircle />} href="#" />
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="space-y-6">
            <h4 className="text-xl font-heading font-black uppercase">
              Marketplace
            </h4>
            <ul className="space-y-3 font-bold">
              <li>
                <a
                  href="#"
                  className="hover:text-neo-indigo hover:underline decoration-4 underline-offset-4"
                >
                  Comprar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-neo-indigo hover:underline decoration-4 underline-offset-4"
                >
                  Anunciar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-neo-indigo hover:underline decoration-4 underline-offset-4"
                >
                  Destaques
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Institucional */}
          <div className="space-y-6">
            <h4 className="text-xl font-heading font-black uppercase">Sobre</h4>
            <ul className="space-y-3 font-bold">
              <li>
                <a
                  href="#"
                  className="hover:text-neo-indigo hover:underline decoration-4 underline-offset-4"
                >
                  Quem Somos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-neo-indigo hover:underline decoration-4 underline-offset-4"
                >
                  Termos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-neo-indigo hover:underline decoration-4 underline-offset-4"
                >
                  Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Suporte */}
          <div className="space-y-6">
            <h4 className="text-xl font-heading font-black uppercase">Ajuda</h4>
            <button className="w-full bg-neo-yellow border-4 border-neo-text p-4 font-black shadow-neo hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase">
              Central de Ajuda
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 font-black text-xs uppercase hover:text-neo-indigo transition-colors"
            >
              Voltar ao topo <ArrowUp size={14} strokeWidth={4} />
            </button>
          </div>
        </div>

        {/* Bottom Strip - Ajustada para eliminar o branco excessivo */}
        <div className="pt-8 border-t-4 border-neo-text flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="font-black uppercase text-xs tracking-tighter">
            © 2026 PASSAOJOGO — Desenvolvido por Mayra Pereira
          </p>
        </div>
      </div>
    </footer>
  );
}

// Sub-componente para os ícones sociais
function SocialButton({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="p-3 border-4 border-neo-text bg-white shadow-neo hover:bg-neo-yellow hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
    >
      {icon}
    </a>
  );
}
