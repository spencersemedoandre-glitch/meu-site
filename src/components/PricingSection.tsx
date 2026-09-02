import React, { useState } from 'react';
import { EbookConfig } from '../types';
import { 
  Check, 
  ShieldCheck, 
  Lock, 
  Sparkles, 
  ArrowRight, 
  QrCode, 
  CreditCard, 
  FileText, 
  Zap, 
  Copy,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';

interface PricingSectionProps {
  config: EbookConfig;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ config }) => {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'link'>('pix');
  const [copiedPix, setCopiedPix] = useState(false);
  const [simulatedBuyerName, setSimulatedBuyerName] = useState('');
  const [simulatedBuyerEmail, setSimulatedBuyerEmail] = useState('');
  const [orderCompleted, setOrderCompleted] = useState(false);

  const mockPixKey = "00020126580014br.gov.bcb.pix0136e80d5e35-261d-4add-ae1b-44c8fc177c5e520400005303986540529.905802BR5925EBOOK TRANSFORME SUA VIDA6009SAO PAULO62070503***6304E8A2";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(mockPixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderCompleted(true);
  };

  const resetModal = () => {
    setCheckoutModalOpen(false);
    setOrderCompleted(false);
  };

  return (
    <section className="py-20 sm:py-28 bg-white relative border-b border-slate-200" id="comprar">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-300">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Vagas Promocionais Abertas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            OFERTA ESPECIAL POR TEMPO LIMITADO
          </h2>
          <p className="text-base text-slate-600">
            Receba o Ebook completo + Todos os Bônus Exclusivos diretamente no seu e-mail.
          </p>
        </div>

        {/* Pricing Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border-2 border-indigo-600 shadow-[0_20px_50px_-15px_rgba(79,70,229,0.25)] p-6 sm:p-10 relative overflow-hidden max-w-2xl mx-auto"
        >
          {/* Top highlight ribbon */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-500 to-emerald-600 text-slate-950 font-extrabold text-xs uppercase px-8 py-1.5 shadow-sm transform rotate-0 rounded-bl-xl tracking-wider">
            {config.discountPercentage}% DE DESCONTO
          </div>

          <div className="text-center pt-3 pb-6 border-b border-slate-100">
            <p className="text-xs uppercase font-bold tracking-wider text-slate-400">
              Acesso Completo & Vitalício
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              {config.productName}
            </h3>

            {/* Price values */}
            <div className="mt-5">
              <span className="text-slate-400 line-through text-base sm:text-lg font-medium">
                De R$ {config.originalPrice.toFixed(2).replace('.', ',')}
              </span>
              <div className="flex items-baseline justify-center gap-1.5 my-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-800">Por apenas</span>
                <span className="text-4xl sm:text-5xl md:text-6xl font-black text-indigo-600 tracking-tight">
                  R$ {config.promoPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-emerald-600 flex items-center justify-center gap-1">
                <Zap className="w-4 h-4 fill-current" />
                ou em {config.installmentsCount}x de R$ {config.installmentsValue.toFixed(2).replace('.', ',')} no cartão
              </p>
            </div>
          </div>

          {/* Included Features List */}
          <div className="py-6 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Tudo o que você vai receber imediatamente:
            </h4>

            <div className="flex items-start gap-3 text-sm text-slate-700">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <strong className="text-slate-900 font-semibold">Ebook Completo em formato PDF + EPUB</strong>
                <span className="text-slate-500 block text-xs">Os 4 capítulos estruturados para download imediato.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm text-slate-700">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <strong className="text-slate-900 font-semibold">Leitura 100% compatível com celular, tablet e PC</strong>
                <span className="text-slate-500 block text-xs">Acesse pelo smartphone, Kindle ou computador.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm text-slate-700">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <strong className="text-slate-900 font-semibold">BÔNUS 1: Checklist em PDF de 30 Dias</strong>
                <span className="text-slate-500 block text-xs">Roteiro diário passo a passo para execução guiada.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm text-slate-700">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <strong className="text-slate-900 font-semibold">BÔNUS 2 & 3: Planilha de Metas + Audio-resumo MP3</strong>
                <span className="text-slate-500 block text-xs">Materiais VIP inclusos gratuitamente nesta oferta.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm text-slate-700">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <strong className="text-slate-900 font-semibold">Garantia Incondicional de {config.guaranteeDays} Dias</strong>
                <span className="text-slate-500 block text-xs">Risco zero: se não gostar, devolvemos 100% do valor.</span>
              </div>
            </div>
          </div>

          {/* Checkout CTA Buttons */}
          <div className="pt-4 space-y-4">
            <button
              type="button"
              onClick={() => setCheckoutModalOpen(true)}
              className="w-full py-4 px-6 rounded-full font-extrabold text-base sm:text-lg text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_10px_25px_-5px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>COMPRAR AGORA COM DESCONTO</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Direct Link Option */}
            <div className="text-center">
              <a
                href={config.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-indigo-600 hover:text-indigo-800 font-semibold"
              >
                <span>Ou pagar via checkout externo (Hotmart, Kiwify, Eduzz)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Security Badges */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1 font-medium">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                Pagamento 100% Seguro
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1 font-medium">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                Liberação Imediata
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                Garantia de 7 Dias
              </span>
            </div>

            {/* Payment Icons */}
            <div className="pt-2 flex justify-center items-center gap-3 text-slate-400 text-xs grayscale hover:grayscale-0 transition-all">
              <span className="px-2 py-1 rounded-sm bg-slate-100 border border-slate-200 font-bold text-[10px] text-slate-600">PIX</span>
              <span className="px-2 py-1 rounded-sm bg-slate-100 border border-slate-200 font-bold text-[10px] text-slate-600">CARTÃO</span>
              <span className="px-2 py-1 rounded-sm bg-slate-100 border border-slate-200 font-bold text-[10px] text-slate-600">BOLETO</span>
              <span className="px-2 py-1 rounded-sm bg-slate-100 border border-slate-200 font-bold text-[10px] text-slate-600">SSL 256-BIT</span>
            </div>
          </div>

        </motion.div>

      </div>

      {/* Checkout Simulator Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={resetModal}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-bold"
            >
              ✕
            </button>

            {orderCompleted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Pedido Confirmado com Sucesso!
                </h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Enviamos o link de download do <strong>{config.productName}</strong> e dos 3 Bônus para o e-mail:
                  <br />
                  <span className="font-semibold text-slate-900">{simulatedBuyerEmail || 'seu-email@exemplo.com'}</span>
                </p>

                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left space-y-2 text-xs">
                  <p className="font-bold text-slate-800 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-emerald-600" /> Detalhes do Acesso:
                  </p>
                  <p className="text-slate-600">✓ Formato: PDF + EPUB (Alta Resolução)</p>
                  <p className="text-slate-600">✓ Checklist de 30 Dias Desbloqueado</p>
                  <p className="text-slate-600">✓ Suporte Vitalício incluso</p>
                </div>

                <button
                  onClick={resetModal}
                  className="w-full py-3 rounded-full font-bold text-sm bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Concluir e Voltar à Página
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                    Ambiente 100% Criptografado
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                    Finalizar Aquisição do Ebook
                  </h3>
                  <p className="text-xs text-slate-500">
                    Total a pagar hoje: <strong className="text-emerald-600 text-sm">R$ {config.promoPrice.toFixed(2).replace('.', ',')}</strong>
                  </p>
                </div>

                {/* Payment Tabs */}
                <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-xl mb-5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'pix' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    <QrCode className="w-3.5 h-3.5" /> PIX (Imediato)
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'card' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" /> Cartão (3x)
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('link')}
                    className={`py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'link' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" /> Checkout Link
                  </button>
                </div>

                {paymentMethod === 'pix' && (
                  <div className="space-y-4">
                    <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 text-center">
                      <p className="text-xs font-bold text-emerald-900 mb-2">
                        Escaneie o QR Code ou copie o código Pix abaixo:
                      </p>

                      {/* Mock QR Code Visual */}
                      <div className="w-40 h-40 bg-white p-2 rounded-xl border border-slate-200 mx-auto flex items-center justify-center shadow-xs">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900 fill-current">
                          <rect x="10" y="10" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="4" />
                          <rect x="18" y="18" width="14" height="14" />
                          <rect x="60" y="10" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="4" />
                          <rect x="68" y="18" width="14" height="14" />
                          <rect x="10" y="60" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="4" />
                          <rect x="18" y="68" width="14" height="14" />
                          <rect x="50" y="50" width="12" height="12" />
                          <rect x="70" y="70" width="16" height="16" />
                          <rect x="50" y="75" width="8" height="8" />
                          <rect x="75" y="50" width="10" height="8" />
                        </svg>
                      </div>

                      <div className="mt-3">
                        <button
                          type="button"
                          onClick={handleCopyPix}
                          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                        >
                          {copiedPix ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Código PIX Copiado com Sucesso!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Copiar Código Pix (Copia e Cola)</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <form onSubmit={handleCompleteOrder} className="space-y-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Seu Nome Completo
                        </label>
                        <input
                          type="text"
                          required
                          value={simulatedBuyerName}
                          onChange={(e) => setSimulatedBuyerName(e.target.value)}
                          placeholder="Ex: João da Silva"
                          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Seu Melhor E-mail (onde receberá o Ebook)
                        </label>
                        <input
                          type="email"
                          required
                          value={simulatedBuyerEmail}
                          onChange={(e) => setSimulatedBuyerEmail(e.target.value)}
                          placeholder="joao@exemplo.com"
                          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-full font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md transition-all"
                      >
                        Já realizei o Pix! Liberar Meu Acesso
                      </button>
                    </form>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <form onSubmit={handleCompleteOrder} className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Nome no Cartão</label>
                      <input
                        type="text"
                        required
                        placeholder="NOME COMO NO CARTÃO"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 uppercase"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Número do Cartão</label>
                      <input
                        type="text"
                        required
                        placeholder="0000 0000 0000 0000"
                        maxLength={19}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Validade</label>
                        <input
                          type="text"
                          required
                          placeholder="MM/AA"
                          maxLength={5}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">CVV</label>
                        <input
                          type="text"
                          required
                          placeholder="123"
                          maxLength={4}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">E-mail para entrega</label>
                      <input
                        type="email"
                        required
                        value={simulatedBuyerEmail}
                        onChange={(e) => setSimulatedBuyerEmail(e.target.value)}
                        placeholder="seu-email@exemplo.com"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md transition-all mt-2"
                    >
                      Pagar R$ {config.promoPrice.toFixed(2).replace('.', ',')} com Cartão
                    </button>
                  </form>
                )}

                {paymentMethod === 'link' && (
                  <div className="text-center py-6 space-y-4">
                    <p className="text-xs text-slate-600">
                      Você pode integrar sua página com sua plataforma de pagamentos favorita (Kiwify, Hotmart, Eduzz, Monetizze, Mercado Pago).
                    </p>
                    <a
                      href={config.checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full font-bold text-sm bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all"
                    >
                      <span>Ir para o Checkout Oficial</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
};
