import { Tag } from "@/src/types/advertisement";

interface TagsSelectorProps {
  availableTags: Tag[];
  selectedTagIds: string[];
  onToggleTag: (tagId: string) => void;
}

export function TagsSelector({
  availableTags,
  selectedTagIds,
  onToggleTag,
}: TagsSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="font-black text-sm uppercase tracking-widest text-slate-500 ml-1 block">
        Detalhes Extras
      </label>
      <div className="flex flex-wrap gap-2">
        {availableTags.map((tag) => {
          const isSelected = selectedTagIds.includes(tag.id);
          return (
            <button
              key={tag.id}
              type="button"
              onClick={() => onToggleTag(tag.id)}
              className={`px-4 py-2 rounded-xl border-2 font-bold text-xs uppercase tracking-wide transition-all active:scale-95
                ${
                  isSelected
                    ? `${tag.color} shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] -translate-y-0.5`
                    : "bg-white border-slate-200 text-slate-400 hover:border-slate-400"
                }`}
            >
              {tag.label} {isSelected && "✓"}
            </button>
          );
        })}
      </div>
    </div>
  );
}
