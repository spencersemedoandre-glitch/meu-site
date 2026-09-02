import React from 'react';
import { Benefit } from '../types';
import { Rocket, BookOpen, Infinity as InfinityIcon, ShieldCheck, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface BenefitsSectionProps {
  benefits: Benefit[];
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket':
        return <Rocket className="w-7 h-7 text-indigo-600" />;
      case 'BookOpen':
        return <BookOpen className="w-7 h-7 text-emerald-600" />;
      case 'Infinity':
        return <InfinityIcon className="w-7 h-7 text-purple-600" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-7 h-7 text-amber-600" />;
    }
  };

  const getBgColor = (index: number) => {
    switch (index % 4) {
      case 0:
        return 'bg-indigo-50 border-indigo-100 group-hover:border-indigo-300';
      case 1:
        return 'bg-emerald-50 border-emerald-100 group-hover:border-emerald-300';
      case 2:
        return 'bg-purple-50 border-purple-100 group-hover:border-purple-300';
      case 3:
      default:
        return 'bg-amber-50 border-amber-100 group-hover:border-amber-300';
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Vantagens Exclusivas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            O que você vai aprender?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Um guia desenhado com precisão para economizar meses de erros, frustrações e tentativas sem rumo.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border transition-colors ${getBgColor(index)}`}>
                  {getIcon(benefit.icon)}
                </div>

                {benefit.tag && (
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    {benefit.tag}
                  </span>
                )}

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Pronto para aplicar</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
