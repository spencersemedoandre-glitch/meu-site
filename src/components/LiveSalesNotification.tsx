import React, { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const mockSales = [
  { name: 'Juliana P.', city: 'São Paulo, SP', time: 'há 3 minutos' },
  { name: 'Lucas M.', city: 'Belo Horizonte, MG', time: 'há 7 minutos' },
  { name: 'Renata C.', city: 'Curitiba, PR', time: 'há 12 minutos' },
  { name: 'Marcos V.', city: 'Rio de Janeiro, RJ', time: 'há 18 minutos' },
  { name: 'Camila S.', city: 'Salvador, BA', time: 'há 24 minutos' },
];

export const LiveSalesNotification: React.FC = () => {
  const [currentSale, setCurrentSale] = useState<typeof mockSales[0] | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show initial sale toast after 4s
    const initialTimer = setTimeout(() => {
      setCurrentSale(mockSales[0]);
    }, 4000);

    // Rotate every 20s
    let index = 1;
    const interval = setInterval(() => {
      setCurrentSale(mockSales[index % mockSales.length]);
      index++;
      // Auto hide after 6s
      setTimeout(() => {
        setCurrentSale(null);
      }, 6000);
    }, 22000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed || !currentSale) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -50, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="fixed bottom-20 left-4 z-40 max-w-xs bg-slate-900/95 text-white rounded-2xl p-3 shadow-xl border border-slate-700/80 backdrop-blur-md flex items-center gap-3 hidden sm:flex"
      >
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
          <ShoppingBag className="w-5 h-5" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-slate-100 truncate">
            {currentSale.name} <span className="font-normal text-slate-400">({currentSale.city})</span>
          </p>
          <p className="text-[11px] text-emerald-400 font-medium">
            Acabou de adquirir o Ebook • <span className="text-slate-400">{currentSale.time}</span>
          </p>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="text-slate-400 hover:text-slate-200 text-xs p-1"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
