import React, { useState, useEffect } from 'react';
import { EbookConfig } from '../types';
import { Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface StickyCtaProps {
  config: EbookConfig;
  onScrollToCheckout: () => void;
}

export const StickyCta: React.FC<StickyCtaProps> = ({ config, onScrollToCheckout }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 400px
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 text-white py-3 px-4 shadow-2xl"
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <span className="text-[10px] uppercase font-bold text-emerald-400 block tracking-wider">
                  Oferta com {config.discountPercentage}% OFF
                </span>
                <span className="text-sm font-extrabold text-white truncate max-w-xs block">
                  {config.productName}
                </span>
              </div>

              <div className="flex items-baseline gap-1.5">
                <span className="text-slate-400 line-through text-xs font-medium hidden xs:inline">
                  R$ {config.originalPrice.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-lg sm:text-xl font-black text-emerald-400">
                  R$ {config.promoPrice.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-[10px] text-slate-400 hidden md:inline">
                  (ou {config.installmentsCount}x de R$ {config.installmentsValue.toFixed(2).replace('.', ',')})
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-1 text-xs text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>7 dias de garantia</span>
              </div>

              <button
                onClick={onScrollToCheckout}
                className="px-5 sm:px-6 py-2.5 rounded-full font-black text-xs sm:text-sm bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-md flex items-center gap-1.5 cursor-pointer transition-all shrink-0"
              >
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>GARANTIR EBOOK AGORA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
