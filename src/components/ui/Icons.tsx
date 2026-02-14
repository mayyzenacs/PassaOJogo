import React from "react";

export const MeepleIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0.5C13.6569 0.5 15 1.84315 15 3.5C15 3.92276 14.9123 4.32457 14.7523 4.69351C15.8239 5.09337 16.6877 5.95925 17.0858 7.03261C17.4537 6.87321 17.8543 6.78571 18.2759 6.78571C19.9327 6.78571 21.2759 8.12886 21.2759 9.78571C21.2759 11.2373 20.2443 12.4485 18.8872 12.7214C18.6657 14.505 17.147 15.8929 15.2759 15.8929H14.5259V20.5C14.5259 22.1569 13.1827 23.5 11.5259 23.5C9.86901 23.5 8.52586 22.1569 8.52586 20.5V15.8929H7.77586C5.90472 15.8929 4.38605 14.505 4.16455 12.7214C2.80743 12.4485 1.77586 11.2373 1.77586 9.78571C1.77586 8.12886 3.11901 6.78571 4.77586 6.78571C5.19741 6.78571 5.59805 6.87321 5.96593 7.03261C6.36402 5.95925 7.22781 5.09337 8.29946 4.69351C8.1394 4.32457 8.05172 3.92276 8.05172 3.5C8.05172 1.84315 9.39487 0.5 11.0517 0.5H12Z" />
  </svg>
);

export const GoogleIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.24.81-.6z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

export const BackgroundDecorations = () => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
    <div className="absolute top-20 -left-10 text-[#FFD23F] animate-float-slow opacity-30">
      <MeepleIcon className="w-64 h-64" />
    </div>
    <div className="absolute top-1/3 -right-12 text-indigo-300 animate-float-reverse opacity-30">
      <MeepleIcon className="w-48 h-48 rotate-12" />
    </div>
    <div className="absolute bottom-32 left-10 text-emerald-200 animate-pulse-slow opacity-40">
      <MeepleIcon className="w-32 h-32 -rotate-12" />
    </div>
    <div className="absolute top-10 right-20 text-slate-300 animate-bounce-slow opacity-30">
      <MeepleIcon className="w-16 h-16 rotate-45" />
    </div>
  </div>
);

export const TagBadge = ({ type }: { type: string }) => {
  const styles: Record<string, string> = {
    SLEEVED: "bg-emerald-100 text-emerald-900 border-emerald-900",
    INSERT: "bg-blue-100 text-blue-900 border-blue-900",
    DAMAGED_BOX: "bg-rose-100 text-rose-900 border-rose-900",
    PROMO_CARDS: "bg-purple-100 text-purple-900 border-purple-900",
  };
  if (!styles[type]) return null;
  return (
    <span
      className={`text-[10px] font-bold px-2 py-0.5 border-2 rounded-full uppercase tracking-wide ${styles[type]}`}
    >
      {type}
    </span>
  );
};

interface NavIconProps {
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function NavIcon({
  icon: Icon,
  label,
  isActive,
  onClick,
}: NavIconProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition-all duration-200 ${isActive ? "text-indigo-600 -translate-y-1" : "text-slate-400"}`}
    >
      <Icon
        className={`w-6 h-6 ${isActive ? "fill-indigo-100 stroke-[2.5px]" : "stroke-2"}`}
      />
      <span
        className={`text-[10px] font-bold ${isActive ? "text-indigo-900" : ""}`}
      >
        {label}
      </span>
    </button>
  );
}
