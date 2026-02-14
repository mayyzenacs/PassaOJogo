import { AlertCircle, ImagePlus, Plus, X } from "lucide-react";
import React from "react";

interface ImageUploadSectionProps {
  images: string[];
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveImage: (index: number) => void;
  onTriggerInput: () => void;
}

export function ImageUploadSection({
  images,
  fileInputRef,
  onImageChange,
  onRemoveImage,
  onTriggerInput,
}: ImageUploadSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end">
        <label className="font-black text-sm uppercase tracking-widest text-slate-500 ml-1">
          Fotos do Jogo
        </label>
        <span className="text-xs font-bold text-indigo-600">
          {images.length} fotos adicionadas
        </span>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={onImageChange}
        className="hidden"
      />

      <div
        onClick={images.length === 0 ? onTriggerInput : undefined}
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
              onClick={() => onRemoveImage(0)}
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

      {images.length > 0 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 animate-in slide-in-from-top-2">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative aspect-square rounded-xl border-2 overflow-hidden group ${index === 0 ? "border-[#FFD23F] ring-2 ring-[#FFD23F] ring-offset-2" : "border-slate-900"}`}
            >
              <img src={img} className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => onRemoveImage(index)}
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

          <button
            type="button"
            onClick={onTriggerInput}
            className="aspect-square rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center text-slate-400 hover:border-indigo-500 hover:text-indigo-500 hover:bg-indigo-50 transition-all"
          >
            <Plus className="w-8 h-8" />
          </button>
        </div>
      )}

      <p className="text-[10px] font-bold text-slate-400 ml-2 flex items-center gap-1">
        <AlertCircle className="w-3 h-3" /> A primeira imagem será a capa do
        anúncio.
      </p>
    </div>
  );
}
