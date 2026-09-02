import React from 'react';
import { motion } from 'motion/react';
import { Book3D } from './Book3D';
import { EbookConfig } from '../types';
import { 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Lock 
} from 'lucide-react';

interface HeroSectionProps {
  config: EbookConfig;
  onScrollToCheckout: () => void;
  onOpenPreview: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  config,
  onScrollToCheckout,
  onOpenPreview,
}) => {
  return (
    <header className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden border-b border-slate-800">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Social proof tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-200 text-xs sm:text-sm font-medium shadow-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9/5.0</span>
              <span className="text-indigo-300/80">• +{config.salesCount.toLocaleString('pt-BR')} leitores transformados</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.15] text-white">
              {config.title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 block sm:inline">
                {config.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {config.subtitle}
            </p>

            {/* Key bullet highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Leitura rápida de 2 horas</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Checklist de 30 dias incluso</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Acesso vitalício sem mensalidades</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Download imediato em PDF</span>
              </div>
            </div>

            {/* Primary CTA button & Pricing callout */}
            <div className="pt-4 space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <motion.button
                  onClick={onScrollToCheckout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  id="hero-cta-btn"
                  className="w-full sm:w-auto px-8 py-4 rounded-full font-extrabold text-base sm:text-lg text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_10px_30px_-5px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <Zap className="w-5 h-5 fill-current text-slate-950 group-hover:scale-110 transition-transform" />
                  <span>QUERO GARANTIR MEU EBOOK AGORA</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Trust micro-row below button */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" /> Compra 100% Segura
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" /> Garantia de {config.guaranteeDays} Dias
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1">
                  <Smartphone className="w-3.5 h-3.5 text-slate-300" /> Celular, Tablet e PC
                </span>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Column: 3D Ebook Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center items-center py-6"
          >
            <Book3D 
              title="Transforme Sua Vida"
              subtitle="O Método Prático Para Resultados Rápidos"
              author={config.author}
              coverColor={config.coverColor}
              coverAccent={config.coverAccent}
              onOpenPreview={onOpenPreview}
              size="lg"
            />
          </motion.div>

        </div>
      </div>
    </header>
  );
};
