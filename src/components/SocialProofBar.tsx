import React from 'react';
import { Award, Users, BookMarked, Sparkles } from 'lucide-react';

interface SocialProofBarProps {
  salesCount: number;
  ratingScore: number;
}

export const SocialProofBar: React.FC<SocialProofBarProps> = ({
  salesCount,
  ratingScore,
}) => {
  return (
    <div className="bg-slate-900 border-b border-slate-800 py-6 text-slate-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="flex flex-col items-center space-y-1">
            <div className="w-10 h-10 rounded-full bg-indigo-950/80 border border-indigo-700/40 flex items-center justify-center text-indigo-400 mb-1">
              <Users className="w-5 h-5" />
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-white">+{salesCount.toLocaleString('pt-BR')}</p>
            <p className="text-xs text-slate-400">Leitores Satisfeitos</p>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <div className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-700/40 flex items-center justify-center text-emerald-400 mb-1">
              <Award className="w-5 h-5" />
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-white">{ratingScore} / 5.0</p>
            <p className="text-xs text-slate-400">Avaliação Média</p>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <div className="w-10 h-10 rounded-full bg-purple-950/80 border border-purple-700/40 flex items-center justify-center text-purple-400 mb-1">
              <BookMarked className="w-5 h-5" />
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-white">100% Prático</p>
            <p className="text-xs text-slate-400">Direto ao Ponto</p>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <div className="w-10 h-10 rounded-full bg-amber-950/80 border border-amber-700/40 flex items-center justify-center text-amber-400 mb-1">
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-white">3 Bônus VIP</p>
            <p className="text-xs text-slate-400">Inclusos Grátis Hoje</p>
          </div>

        </div>
      </div>
    </div>
  );
};
