import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostAd from "./pages/PostAd";
import Profile from "./pages/Profile";

function ScrollHandler() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  // Simulação de login (mude para 'true' para testar a página de anúncio)
  const [isLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      <ScrollHandler />
      <main className="min-h-screen bg-[#FDFBF7]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anuncio/:id" element={<GameDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />

          {/* LÓGICA DO BOTÃO ANUNCIAR */}
          <Route
            path="/anunciar"
            element={isLoggedIn ? <PostAd /> : <Navigate to="/registrar" />}
          />

          {/* Rota explícita para o registro */}
          <Route path="/registrar" element={<Register />} />

          <Route
            path="*"
            element={
              <div className="p-20 font-black text-2xl uppercase text-center">
                404 - Jogo não encontrado
              </div>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
