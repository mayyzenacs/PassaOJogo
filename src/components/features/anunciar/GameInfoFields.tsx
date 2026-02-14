import { DollarSign } from "lucide-react";

interface GameInfoFieldsProps {
  title: string;
  price: string;
  condition: string;
  onTitleChange: (value: string) => void;
  onPriceChange: (value: string) => void;
  onConditionChange: (value: string) => void;
}

export function GameInfoFields({
  title,
  price,
  condition,
  onTitleChange,
  onPriceChange,
  onConditionChange,
}: GameInfoFieldsProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="font-black text-sm uppercase tracking-widest text-slate-500 ml-1 mb-2 block">
          Nome do Jogo
        </label>
        <input
          required
          type="text"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="Ex: Catan, Ticket to Ride..."
          className="w-full bg-white border-2 border-slate-900 rounded-xl p-4 font-bold text-lg placeholder:text-slate-300 focus:outline-none focus:border-indigo-600 focus:shadow-[4px_4px_0px_0px_rgba(79,70,229,1)] transition-all"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="font-black text-sm uppercase tracking-widest text-slate-500 ml-1 mb-2 block">
            Preço
          </label>
          <div className="relative">
            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              required
              type="number"
              value={price}
              onChange={(e) => onPriceChange(e.target.value)}
              placeholder="0,00"
              className="w-full bg-white border-2 border-slate-900 rounded-xl p-4 pl-12 font-bold text-lg placeholder:text-slate-300 focus:outline-none focus:border-emerald-500 focus:shadow-[4px_4px_0px_0px_rgba(16,185,129,1)] transition-all"
            />
          </div>
        </div>

        <div>
          <label className="font-black text-sm uppercase tracking-widest text-slate-500 ml-1 mb-2 block">
            Condição
          </label>
          <select
            value={condition}
            onChange={(e) => onConditionChange(e.target.value)}
            className="w-full bg-white border-2 border-slate-900 rounded-xl p-4 font-bold text-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] appearance-none"
          >
            <option value="new">Novo (Lacrado)</option>
            <option value="open">Aberto (Nunca Jogado)</option>
            <option value="used">Usado (Excelente)</option>
            <option value="worn">Com Marcas de Uso</option>
          </select>
        </div>
      </div>
    </div>
  );
}
