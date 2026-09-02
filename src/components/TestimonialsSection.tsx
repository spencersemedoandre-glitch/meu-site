import React, { useState } from 'react';
import { Testimonial } from '../types';
import { Star, ShieldCheck, MessageSquarePlus, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials: initialList }) => {
  const [list, setList] = useState<Testimonial[]>(initialList);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState('');
  const [addedSuccess, setAddedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newText.trim()) return;

    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      name: newName.trim(),
      role: newCity.trim() ? `Leitor(a) • ${newCity.trim()}` : 'Leitor(a) Verificado(a)',
      avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80`,
      rating: newRating,
      text: newText.trim(),
      verified: true,
      date: 'Agora mesmo'
    };

    setList([newTestimonial, ...list]);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      setShowAddModal(false);
      setNewName('');
      setNewCity('');
      setNewText('');
    }, 1500);
  };

  return (
    <section className="py-20 sm:py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Prova Social & Avaliações
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            O que os leitores dizem
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Pessoas reais que aplicaram o passo a passo e transformaram seus resultados.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {item.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      Compra Verificada
                    </span>
                  )}
                </div>

                {/* Review Body */}
                <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed mb-6">
                  "{item.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {item.role} • <span className="text-slate-400">{item.date}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add Testimonial Trigger */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Você já leu o livro? Deixe sua avaliação aqui</span>
          </button>
        </div>

      </div>

      {/* Add Review Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Deixe seu depoimento sobre o Ebook
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Sua avaliação ajuda outros leitores a tomarem uma decisão informada.
            </p>

            {addedSuccess ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
                <p className="font-bold text-slate-900">Depoimento publicado com sucesso!</p>
                <p className="text-xs text-slate-500">Obrigado por compartilhar sua experiência.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Seu Nome *</label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Ex: Mariana Costa"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Cidade / Estado</label>
                  <input
                    type="text"
                    value={newCity}
                    onChange={(e) => setNewCity(e.target.value)}
                    placeholder="Ex: Porto Alegre, RS"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Sua Nota</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setNewRating(s)}
                        className={`p-1.5 rounded-lg border text-amber-400 ${
                          newRating >= s ? 'bg-amber-50 border-amber-300' : 'border-slate-200 opacity-40'
                        }`}
                      >
                        <Star className="w-5 h-5 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Seu Comentário *</label>
                  <textarea
                    required
                    rows={3}
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    placeholder="Conte como o livro te ajudou na prática..."
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 rounded-lg"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm"
                  >
                    Enviar Depoimento
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
