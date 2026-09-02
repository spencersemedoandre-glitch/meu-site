import React, { useState } from 'react';
import { FaqItem } from '../types';
import { ChevronDown, HelpCircle, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqSectionProps {
  faqs: FaqItem[];
  supportEmail: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs, supportEmail }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-base text-slate-600">
            Tudo o que você precisa saber antes de adquirir o seu exemplar digital.
          </p>
        </div>

        {/* FAQs list */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-indigo-500 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-slate-100 px-5 sm:px-6 pb-6 pt-4 text-slate-600 text-sm sm:text-base leading-relaxed bg-slate-50/50"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 p-6 rounded-2xl bg-indigo-50/80 border border-indigo-100 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-slate-900 text-base">Ainda tem alguma dúvida?</h4>
            <p className="text-xs sm:text-sm text-slate-600">Nossa equipe de suporte está pronta para te atender.</p>
          </div>
          <a
            href={`mailto:${supportEmail}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-indigo-600 hover:text-indigo-700 font-bold text-xs sm:text-sm border border-indigo-200 shadow-xs transition-colors shrink-0"
          >
            <Mail className="w-4 h-4" />
            <span>Falar com Suporte</span>
          </a>
        </div>

      </div>
    </section>
  );
};
