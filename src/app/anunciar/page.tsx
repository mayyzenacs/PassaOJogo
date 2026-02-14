"use client";

import React, { useState } from "react";
import { ArrowLeft, Upload } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DescriptionField } from "@/src/components/features/anunciar/DescreptionField";
import { GameInfoFields } from "@/src/components/features/anunciar/GameInfoFields";
import { ImageUploadSection } from "@/src/components/features/anunciar/ImageUplaodSection";
import { useAnuncioForm } from "@/src/hooks/useAdvertisement";
import { useImageUpload } from "@/src/hooks/userImageUpload";
import { AVAILABLE_TAGS } from "@/src/lib/constants";
import { TagsSelector } from "@/src/components/features/anunciar/TagsSelector";

export default function AnunciarPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Hooks customizados
  const imageUpload = useImageUpload();
  const form = useAnuncioForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (imageUpload.images.length === 0) {
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
          {/* SEÇÃO DE IMAGENS */}
          <ImageUploadSection
            images={imageUpload.images}
            fileInputRef={imageUpload.fileInputRef}
            onImageChange={imageUpload.handleImageChange}
            onRemoveImage={imageUpload.removeImage}
            onTriggerInput={imageUpload.triggerFileInput}
          />

          {/* INFORMAÇÕES DO JOGO */}
          <GameInfoFields
            title={form.formData.title}
            price={form.formData.price}
            condition={form.formData.condition}
            onTitleChange={(value) => form.updateField("title", value)}
            onPriceChange={(value) => form.updateField("price", value)}
            onConditionChange={(value) =>
              form.updateField("condition", value as any)
            }
          />

          {/* TAGS */}
          <TagsSelector
            availableTags={AVAILABLE_TAGS}
            selectedTagIds={form.formData.selectedTags}
            onToggleTag={form.toggleTag}
          />

          {/* DESCRIÇÃO */}
          <DescriptionField
            value={form.formData.description}
            onChange={(value) => form.updateField("description", value)}
          />

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
