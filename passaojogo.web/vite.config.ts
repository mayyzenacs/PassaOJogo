import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Configuração otimizada para o motor de build do Vite
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // O Tailwind 4 agora é um plugin nativo que processa o CSS no pipeline
  ],
  server: {
    port: 3000, // Padronize a porta para o time de dev
    strictPort: true,
  },
});
