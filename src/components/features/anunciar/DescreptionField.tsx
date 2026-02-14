interface DescriptionFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function DescriptionField({ value, onChange }: DescriptionFieldProps) {
  return (
    <div>
      <label className="font-black text-sm uppercase tracking-widest text-slate-500 ml-1 mb-2 block">
        Descrição
      </label>
      <textarea
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        placeholder="Conte sobre o estado do jogo, se falta alguma peça, motivo da venda..."
        className="w-full bg-white border-2 border-slate-900 rounded-xl p-4 font-medium text-slate-700 placeholder:text-slate-300 focus:outline-none focus:border-indigo-600 focus:shadow-[4px_4px_0px_0px_rgba(79,70,229,1)] transition-all resize-none"
      />
    </div>
  );
}
