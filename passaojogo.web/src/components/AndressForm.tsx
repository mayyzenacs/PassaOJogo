import { useState } from "react";
import { MapPin, Loader2 } from "lucide-react";

export function AddressForm() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({ rua: "", bairro: "", cidade: "" });
  const [loading, setLoading] = useState(false);

  const handleCEPBlur = async () => {
    if (cep.length !== 8) return;

    setLoading(true);
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await res.json();
      if (!data.erro) {
        setAddress({
          rua: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="space-y-1">
        <label className="text-xs font-black uppercase">
          CEP para Entrega/Retirada
        </label>
        <div className="relative">
          <MapPin
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            maxLength={8}
            value={cep}
            onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
            onBlur={handleCEPBlur}
            placeholder="00000000"
            className="w-full pl-12 pr-4 py-3 border-2 border-neo-text font-bold outline-none focus:bg-blue-50 transition-all"
          />
          {loading && (
            <Loader2
              className="absolute right-4 top-1/2 -translate-y-1/2 animate-spin text-neo-indigo"
              size={18}
            />
          )}
        </div>
      </div>

      {address.cidade && (
        <div className="p-4 bg-slate-50 border-2 border-dashed border-slate-300">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">
            Localizado:
          </p>
          <p className="font-black text-sm uppercase">
            {address.rua}, {address.bairro}
          </p>
          <p className="font-black text-sm uppercase text-neo-indigo">
            {address.cidade}
          </p>
        </div>
      )}
    </div>
  );
}
