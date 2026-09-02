import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, Award } from 'lucide-react';

interface Book3DProps {
  title: string;
  subtitle?: string;
  author: string;
  coverColor?: string;
  coverAccent?: string;
  onOpenPreview?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export const Book3D: React.FC<Book3DProps> = ({
  title,
  subtitle = 'O Método Prático Para Resultados Rápidos',
  author,
  coverColor = '#4F46E5',
  coverAccent = '#10B981',
  onOpenPreview,
  size = 'lg',
}) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: -18 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth angle bounds
    const rotateY = -22 + ((x - centerX) / centerX) * 16;
    const rotateX = 6 - ((y - centerY) / centerY) * 14;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: -18 });
  };

  const widthClass = size === 'sm' ? 'w-48 h-64' : size === 'md' ? 'w-64 h-84' : 'w-72 sm:w-80 h-96 sm:h-[430px]';

  return (
    <div 
      className="relative flex flex-col items-center justify-center select-none group"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
    >
      {/* Dynamic ambient backdrop glow */}
      <div 
        className="absolute -inset-4 rounded-3xl opacity-35 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
        style={{
          background: `radial-gradient(circle, ${coverColor} 0%, ${coverAccent} 100%)`
        }}
      />

      {/* Main 3D Book wrapper with dynamic transform */}
      <motion.div
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className={`relative ${widthClass} cursor-pointer transition-shadow`}
      >
        {/* Book Spine (Left 3D side) */}
        <div
          className="absolute top-0 left-0 h-full w-9 origin-right rounded-l-sm flex flex-col justify-between items-center py-6 text-white text-[10px] font-bold tracking-widest uppercase shadow-inner"
          style={{
            transform: 'rotateY(-90deg) translateZ(0px)',
            background: 'linear-gradient(90deg, #1e1b4b 0%, #312e81 60%, #4338ca 100%)',
          }}
        >
          <span className="rotate-90 origin-center whitespace-nowrap opacity-80">EBOOK OFICIAL</span>
          <span className="rotate-90 origin-center whitespace-nowrap text-emerald-300 font-extrabold truncate max-w-[140px]">{author}</span>
          <span className="rotate-90 origin-center whitespace-nowrap opacity-80">2026</span>
        </div>

        {/* Book Pages (Right 3D edge thickness) */}
        <div
          className="absolute top-1 right-0 h-[calc(100%-8px)] w-8 origin-left rounded-r-xs shadow-md"
          style={{
            transform: 'rotateY(90deg) translateZ(0px)',
            background: 'repeating-linear-gradient(to right, #f8fafc 0px, #e2e8f0 1px, #f1f5f9 2px, #cbd5e1 3px)',
          }}
        />

        {/* Book Bottom Pages Edge */}
        <div
          className="absolute bottom-0 left-0 w-full h-8 origin-top rounded-b-xs shadow-md"
          style={{
            transform: 'rotateX(-90deg) translateZ(0px)',
            background: 'repeating-linear-gradient(to bottom, #f8fafc 0px, #e2e8f0 1px, #f1f5f9 2px, #cbd5e1 3px)',
          }}
        />

        {/* Front Cover */}
        <div
          className="absolute inset-0 rounded-r-xl rounded-l-xs overflow-hidden border border-white/20 shadow-2xl flex flex-col justify-between p-6 text-white relative"
          style={{
            background: `linear-gradient(145deg, #1e1b4b 0%, ${coverColor} 45%, #0f172a 100%)`,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 4px 0 8px rgba(0,0,0,0.5)',
          }}
        >
          {/* Subtle light reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

          {/* Spine crease shadow on left */}
          <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none" />

          {/* Header of Book Cover */}
          <div className="relative z-10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-emerald-300">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                Edição Definitiva
              </span>
              <span className="text-[11px] font-semibold text-indigo-200">
                PDF + EPUB
              </span>
            </div>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-indigo-300 font-semibold block">
                Manual Prático
              </span>
            </div>
          </div>

          {/* Center Title */}
          <div className="relative z-10 my-auto py-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md">
              {title}
            </h3>
            {subtitle && (
              <p className="mt-2 text-xs sm:text-sm text-indigo-100/90 leading-relaxed font-normal">
                {subtitle}
              </p>
            )}
            <div className="mt-4 w-12 h-1 rounded-full bg-emerald-400" />
          </div>

          {/* Footer of Book Cover */}
          <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-indigo-300 font-medium">Autor</p>
              <p className="text-xs sm:text-sm font-bold text-white tracking-wide">{author}</p>
            </div>
            
            <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
              <Award className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* 3D Drop Shadow on Floor */}
        <div 
          className="absolute -bottom-8 left-4 right-4 h-8 bg-black/60 blur-xl rounded-full pointer-events-none"
          style={{
            transform: 'rotateX(90deg) translateZ(-20px)',
          }}
        />
      </motion.div>

      {/* Preview Peek Trigger */}
      {onOpenPreview && (
        <motion.button
          onClick={onOpenPreview}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700/80 backdrop-blur-md shadow-lg transition-all"
        >
          <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
          <span>Espiar Amostra Grátis (Capítulo 1)</span>
        </motion.button>
      )}
    </div>
  );
};
