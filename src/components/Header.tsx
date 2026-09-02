import React, { useState, useEffect } from 'react';
import { Clock, ShieldCheck, Flame, Download } from 'lucide-react';

interface HeaderProps {
  onScrollToCheckout: () => void;
  discountPercentage: number;
}

export const Header: React.FC<HeaderProps> = ({
  onScrollToCheckout,
  discountPercentage,
}) => {
  // Countdown timer (e.g. 14 mins 52 secs)
  const [timeLeft, setTimeLeft] = useState({
    minutes: 14,
    seconds: 52,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="bg-slate-950 text-white text-xs sm:text-sm border-b border-slate-800/80 sticky top-0 z-40 backdrop-blur-md bg-opacity-95">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        {/* Urgent offer badge */}
        <div className="flex items-center gap-2 font-medium text-slate-200">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="hidden sm:inline font-semibold text-emerald-400 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5" /> Condição Especial:
          </span>
          <span>{discountPercentage}% de desconto hoje</span>
        </div>

        {/* Timer */}
        <div className="flex items-center gap-2 bg-slate-900 px-3 py-1 rounded-full border border-slate-700/60 font-mono text-xs">
          <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="text-slate-400">Expira em:</span>
          <span className="font-bold text-amber-300">
            {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
          </span>
        </div>

        {/* Quick CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1 text-slate-400 text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Download Imediato</span>
          </div>
          <button
            onClick={onScrollToCheckout}
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-full transition-colors shadow-sm"
          >
            <Download className="w-3 h-3" />
            <span>Garantir Vaga</span>
          </button>
        </div>
      </div>
    </div>
  );
};
