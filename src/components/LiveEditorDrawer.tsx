import React, { useState } from 'react';
import { EbookConfig } from '../types';
import { Sliders, X, RotateCcw, Check, Sparkles, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LiveEditorDrawerProps {
  config: EbookConfig;
  onUpdateConfig: (updated: Partial<EbookConfig>) => void;
  onResetDefault: () => void;
}

export const LiveEditorDrawer: React.FC<LiveEditorDrawerProps> = ({
  config,
  onUpdateConfig,
  onResetDefault,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed top-12 right-4 z-40 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg border border-indigo-400/40 flex items-center gap-1.5 transition-transform hover:scale-105"
      >
        <Sliders className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Editar Textos & Preço</span>
      </button>

      {/* Editor Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-slate-200"
            >
              {/* Drawer Header */}
              <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-indigo-400" />
                  <h3 className="font-bold text-sm">Personalizador da Landing Page</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body Fields */}
              <div className="p-5 overflow-y-auto space-y-4 flex-1 text-xs">
                <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-950 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>
                    Edite os campos abaixo para testar títulos, preços e detalhes do seu produto em tempo real!
                  </span>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Título do Produto / Ebook</label>
                  <input
                    type="text"
                    value={config.productName}
                    onChange={(e) => onUpdateConfig({ productName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Chamada Principal (Headline)</label>
                  <input
                    type="text"
                    value={config.title}
                    onChange={(e) => onUpdateConfig({ title: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 font-medium mb-1.5"
                  />
                  <input
                    type="text"
                    value={config.titleHighlight}
                    onChange={(e) => onUpdateConfig({ titleHighlight: e.target.value })}
                    placeholder="Texto em Destaque"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 text-indigo-600 font-bold"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Subtítulo / Descrição Rápida</label>
                  <textarea
                    rows={2}
                    value={config.subtitle}
                    onChange={(e) => onUpdateConfig({ subtitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Preço Normal (De: R$)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={config.originalPrice}
                      onChange={(e) => onUpdateConfig({ originalPrice: parseFloat(e.target.value) || 0 })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Preço Oferta (Por: R$)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={config.promoPrice}
                      onChange={(e) => onUpdateConfig({ promoPrice: parseFloat(e.target.value) || 0 })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 font-bold text-emerald-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Nome do Autor(a)</label>
                  <input
                    type="text"
                    value={config.author}
                    onChange={(e) => onUpdateConfig({ author: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Link de Checkout (Hotmart/Kiwify)</label>
                  <input
                    type="url"
                    value={config.checkoutUrl}
                    onChange={(e) => onUpdateConfig({ checkoutUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 font-mono text-[11px]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">E-mail de Suporte</label>
                  <input
                    type="email"
                    value={config.supportEmail}
                    onChange={(e) => onUpdateConfig({ supportEmail: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={onResetDefault}
                  className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restaurar</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm"
                >
                  Salvar e Visualizar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
