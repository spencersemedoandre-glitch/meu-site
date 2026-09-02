import React, { useState } from 'react';
import { Chapter } from '../types';
import { 
  CheckCircle, 
  ChevronDown, 
  Clock, 
  BookOpen, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ModulesSectionProps {
  chapters: Chapter[];
  onOpenPreviewChapter?: (chapterId: number) => void;
  onScrollToCheckout: () => void;
}

export const ModulesSection: React.FC<ModulesSectionProps> = ({
  chapters,
  onOpenPreviewChapter,
  onScrollToCheckout,
}) => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleChapter = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 sm:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Estrutura Completa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Confira o conteúdo do Ebook
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Uma jornada estruturada em 4 capítulos práticos, pensada para levar você do zero ao resultado em tempo recorde.
          </p>
        </div>

        {/* Modules List */}
        <div className="space-y-4">
          {chapters.map((chapter) => {
            const isExpanded = expandedId === chapter.id;

            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? 'border-indigo-400/80 bg-slate-50/70 shadow-md ring-1 ring-indigo-500/20' 
                    : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
                }`}
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    {/* Chapter Number Badge */}
                    <div className={`shrink-0 w-12 h-12 rounded-xl flex flex-col items-center justify-center font-extrabold transition-colors ${
                      isExpanded 
                        ? 'bg-indigo-600 text-white shadow-sm' 
                        : 'bg-indigo-50 text-indigo-600'
                    }`}>
                      <span className="text-[10px] uppercase font-bold tracking-tight opacity-80">Cap.</span>
                      <span className="text-sm leading-none">{chapter.id.toString().padStart(2, '0')}</span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                          {chapter.numberStr}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                          <Clock className="w-3.5 h-3.5 text-slate-400" /> ~{chapter.estimatedMinutes} min de leitura
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                        {chapter.title}
                      </h3>
                      <p className="text-sm text-slate-600 hidden sm:block">
                        {chapter.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 p-1 rounded-full text-slate-400 hover:text-slate-700 bg-white border border-slate-200">
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-indigo-600' : ''}`} />
                  </div>
                </button>

                {/* Accordion Body */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-slate-200/80 px-5 sm:px-6 pb-6 pt-4"
                    >
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                        {chapter.description}
                      </p>

                      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 space-y-3 mb-5">
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                          O que você vai dominar neste capítulo:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                          {chapter.keyPoints.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Chapter Excerpt Preview Action */}
                      {onOpenPreviewChapter && (
                        <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
                          <button
                            type="button"
                            onClick={() => onOpenPreviewChapter(chapter.id)}
                            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                          >
                            <BookOpen className="w-4 h-4" />
                            <span>Ler trecho exclusivo deste capítulo</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <span className="text-xs text-slate-400 font-medium">
                            Disponível instantaneamente após a compra
                          </span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Callout below modules */}
        <div className="mt-12 text-center">
          <button
            onClick={onScrollToCheckout}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
          >
            <span>Quero Ter Acesso aos 4 Capítulos Completos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
