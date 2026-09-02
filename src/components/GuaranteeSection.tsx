import React from 'react';
import { ShieldCheck, Check, ArrowRight } from 'lucide-react';

interface GuaranteeSectionProps {
  guaranteeDays: number;
  onScrollToCheckout: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({
  guaranteeDays,
  onScrollToCheckout,
}) => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Guarantee Seal Visual */}
          <div className="shrink-0 text-center relative">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-300 p-1.5 shadow-xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-slate-950 text-white flex flex-col items-center justify-center p-3 text-center border-2 border-amber-300/40">
                <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400 mb-1" />
                <span className="text-2xl sm:text-3xl font-black text-amber-400 leading-none">
                  {guaranteeDays} DIAS
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-300 mt-1">
                  Garantia Total
                </span>
                <span className="text-[8px] text-slate-400 font-medium">100% Incondicional</span>
              </div>
            </div>
          </div>

          {/* Guarantee Text */}
          <div className="space-y-4 text-center md:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
              Risco Zero Para Você
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              Experimente por {guaranteeDays} dias. Se não gostar, devolvemos seu dinheiro.
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Temos tanta certeza do valor prático deste material que assumimos todo o risco por você. Baixe o Ebook, leia os 4 capítulos e acesse os bônus. Se por qualquer motivo achar que não valeu a pena, basta nos enviar um e-mail em até {guaranteeDays} dias e estornaremos 100% do seu investimento.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-500" /> Sem burocracia
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-500" /> Sem letras miúdas
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-emerald-500" /> Reembolso integral
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={onScrollToCheckout}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <span>Quero garantir meu acesso com risco zero</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
