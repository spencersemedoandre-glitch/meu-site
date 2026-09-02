import React from 'react';
import { EbookConfig } from '../types';
import { ShieldCheck, Mail, Lock } from 'lucide-react';

interface FooterProps {
  config: EbookConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 sm:py-16 text-xs border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-800/60 items-center text-center md:text-left">
          {/* Brand Info */}
          <div>
            <h4 className="text-sm font-bold text-white mb-2">
              {config.productName}
            </h4>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Material digital de alto impacto projetado para acelerar seus resultados práticos sem perda de tempo.
            </p>
          </div>

          {/* Security Summary */}
          <div className="flex flex-col items-center md:items-start space-y-1.5">
            <div className="flex items-center gap-2 text-slate-300 font-semibold text-xs">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>Compra Criptografada SSL 256-Bit</span>
            </div>
            <p className="text-slate-500 text-[11px]">
              Seus dados estão protegidos com total privacidade e segurança.
            </p>
          </div>

          {/* Support */}
          <div className="flex flex-col items-center md:items-end space-y-1">
            <span className="text-slate-300 font-bold">Dúvidas ou Suporte?</span>
            <a 
              href={`mailto:${config.supportEmail}`} 
              className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{config.supportEmail}</span>
            </a>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 text-center space-y-3">
          <p className="text-slate-500 text-[11px] max-w-2xl mx-auto leading-relaxed">
            Aviso Legal: Os resultados podem variar de pessoa para pessoa. Este produto não substitui parecer profissional e a aplicação consistente do método é fundamental para o sucesso.
          </p>

          <p className="text-slate-400">
            &copy; {config.year} {config.productName}. Todos os direitos reservados.
          </p>

          <div className="flex justify-center gap-4 text-slate-500 text-[11px]">
            <a href="#comprar" className="hover:text-slate-300 transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#comprar" className="hover:text-slate-300 transition-colors">Políticas de Privacidade</a>
            <span>•</span>
            <a href="#comprar" className="hover:text-slate-300 transition-colors">Aviso de Isenção</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
