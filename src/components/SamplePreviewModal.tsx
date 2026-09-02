import React, { useState } from 'react';
import { Chapter } from '../types';
import { BookOpen, X, ChevronRight, ChevronLeft, CheckCircle, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface SamplePreviewModalProps {
  chapters: Chapter[];
  initialChapterId?: number;
  onClose: () => void;
  onScrollToCheckout: () => void;
}

export const SamplePreviewModal: React.FC<SamplePreviewModalProps> = ({
  chapters,
  initialChapterId = 1,
  onClose,
  onScrollToCheckout,
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState(initialChapterId);

  const activeChapter = chapters.find(c => c.id === selectedChapterId) || chapters[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl max-w-3xl w-full h-[85vh] shadow-2xl border border-slate-200 flex flex-col overflow-hidden relative"
      >
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                Leitor de Amostra Digital
                <span className="text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Prévia Gratuita
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Amostra oficial do {activeChapter.numberStr}: {activeChapter.title}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chapter Tabs */}
        <div className="bg-slate-100 px-6 py-2 border-b border-slate-200 flex gap-2 overflow-x-auto shrink-0">
          {chapters.map((chap) => (
            <button
              key={chap.id}
              onClick={() => setSelectedChapterId(chap.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                selectedChapterId === chap.id
                  ? 'bg-white text-indigo-700 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>{chap.numberStr}</span>
            </button>
          ))}
        </div>

        {/* Reader Book Content (scrollable simulated book page) */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#faf8f5] text-slate-800 font-serif leading-relaxed select-text">
          <div className="max-w-xl mx-auto space-y-6">
            
            <div className="text-center pb-6 border-b border-stone-200">
              <span className="text-xs uppercase font-sans tracking-widest text-indigo-600 font-bold block mb-1">
                {activeChapter.numberStr}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-sans">
                {activeChapter.title}
              </h2>
              <p className="text-sm font-sans text-stone-500 mt-1 italic">
                {activeChapter.subtitle}
              </p>
            </div>

            <div className="prose prose-stone text-base sm:text-lg space-y-4">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-indigo-600 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                {activeChapter.sampleExcerpt || activeChapter.description}
              </p>

              <div className="p-4 rounded-xl bg-indigo-50/60 border-l-4 border-indigo-500 font-sans text-xs sm:text-sm text-indigo-950 my-6 not-italic">
                <strong className="block font-bold mb-1">💡 Destaque do Trecho:</strong>
                Ao aplicar a regra dos 20 minutos diários deste capítulo, você reduz a sobrecarga mental em mais de 70% e constrói tração real desde o dia 1.
              </div>

              <div className="font-sans space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Pontos abordados na versão integral:
                </h4>
                {activeChapter.keyPoints.map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Teaser Lock Overlay */}
            <div className="mt-8 pt-8 border-t border-stone-200/80 text-center space-y-3 font-sans">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold">
                <Zap className="w-3.5 h-3.5" /> Fim da Amostra Gratuita
              </div>
              <p className="text-sm text-stone-600 max-w-md mx-auto">
                Deseja desbloquear as <strong>mais de 120 páginas completas</strong>, roteiros práticos, templates e os 3 bônus exclusivos?
              </p>
            </div>

          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-center sm:text-left">
            <span className="text-xs text-slate-400 block">Oferta especial por tempo limitado:</span>
            <span className="text-lg font-black text-indigo-600">Apenas R$ 29,90</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 rounded-full"
            >
              Continuar Lendo Depois
            </button>
            <button
              onClick={() => {
                onClose();
                onScrollToCheckout();
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              <span>Desbloquear Livro Completo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
