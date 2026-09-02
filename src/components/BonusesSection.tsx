import React from 'react';
import { Bonus } from '../types';
import { Gift, FileText, BarChart2, Headphones, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface BonusesSectionProps {
  bonuses: Bonus[];
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ bonuses }) => {
  const getBonusIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FileText className="w-6 h-6 text-indigo-600" />;
      case 1:
        return <BarChart2 className="w-6 h-6 text-emerald-600" />;
      case 2:
      default:
        return <Headphones className="w-6 h-6 text-purple-600" />;
    }
  };

  const totalBonusValue = bonuses.reduce((acc, b) => acc + b.valueOriginal, 0);

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5" />
            <span>Presentes Especiais</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprando Hoje Você Também Ganha 3 Bônus Exclusivos
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Mais de <strong className="text-emerald-400">R$ {totalBonusValue.toFixed(2).replace('.', ',')}</strong> em materiais complementares que você receberá <span className="underline decoration-emerald-400 font-bold">100% GRÁTIS</span>.
          </p>
        </div>

        {/* Bonuses Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bonuses.map((bonus, idx) => (
            <motion.div
              key={bonus.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 hover:border-indigo-500/50 transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                    {getBonusIcon(idx)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-400 text-slate-950 uppercase tracking-wide">
                    {bonus.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-indigo-300 transition-colors">
                  {bonus.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {bonus.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  Preço normal: <span className="line-through text-slate-500 font-medium">R$ {bonus.valueOriginal.toFixed(2).replace('.', ',')}</span>
                </span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> HOJE: R$ 0,00
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
