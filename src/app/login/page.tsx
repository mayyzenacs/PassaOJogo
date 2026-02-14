"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { LoginPage as LoginComponent } from "@/src/components/features/LoginPage"; // Importe seu componente existente

export default function Page() {
  const router = useRouter();
  const { login } = useAuth();

  const handleBack = () => {
    router.push("/"); // Volta para a home em vez de apenas fechar modal
  };

  const handleLogin = () => {
    login(); // Chama a função do contexto
    // O redirecionamento já deve estar sendo tratado dentro do 'login' no Context ou aqui:
    router.push("/");
  };

  return <LoginComponent onBack={handleBack} onLogin={handleLogin} />;
}
function useAuth(): { login: any } {
  throw new Error("Function not implemented.");
}
