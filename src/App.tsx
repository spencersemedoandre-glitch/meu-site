import React, { useState } from 'react';
import { 
  initialEbookConfig, 
  defaultBenefits, 
  defaultChapters, 
  defaultBonuses, 
  defaultTestimonials, 
  defaultFaqs 
} from './data/ebookData';
import { EbookConfig } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SocialProofBar } from './components/SocialProofBar';
import { BenefitsSection } from './components/BenefitsSection';
import { ModulesSection } from './components/ModulesSection';
import { BonusesSection } from './components/BonusesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { SamplePreviewModal } from './components/SamplePreviewModal';
import { StickyCta } from './components/StickyCta';
import { LiveSalesNotification } from './components/LiveSalesNotification';
import { LiveEditorDrawer } from './components/LiveEditorDrawer';

export default function App() {
  const [config, setConfig] = useState<EbookConfig>(initialEbookConfig);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [previewChapterId, setPreviewChapterId] = useState(1);

  const scrollToCheckout = () => {
    const el = document.getElementById('comprar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPreviewChapter = (chapterId: number) => {
    setPreviewChapterId(chapterId);
    setPreviewModalOpen(true);
  };

  const handleUpdateConfig = (updated: Partial<EbookConfig>) => {
    setConfig(prev => ({ ...prev, ...updated }));
  };

  const handleResetDefault = () => {
    setConfig(initialEbookConfig);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-indigo-500 selection:text-white relative">
      {/* Top Countdown Offer Header */}
      <Header 
        onScrollToCheckout={scrollToCheckout}
        discountPercentage={config.discountPercentage}
      />

      {/* Hero Section */}
      <HeroSection 
        config={config}
        onScrollToCheckout={scrollToCheckout}
        onOpenPreview={() => handleOpenPreviewChapter(1)}
      />

      {/* Social Proof Numbers Bar */}
      <SocialProofBar 
        salesCount={config.salesCount}
        ratingScore={config.ratingScore}
      />

      {/* Benefits Grid */}
      <BenefitsSection 
        benefits={defaultBenefits}
      />

      {/* Chapters / Modules Breakdown */}
      <ModulesSection 
        chapters={defaultChapters}
        onOpenPreviewChapter={handleOpenPreviewChapter}
        onScrollToCheckout={scrollToCheckout}
      />

      {/* 3 VIP Bonuses */}
      <BonusesSection 
        bonuses={defaultBonuses}
      />

      {/* Testimonials / Social Proof */}
      <TestimonialsSection 
        testimonials={defaultTestimonials}
      />

      {/* Pricing / Checkout Card */}
      <PricingSection 
        config={config}
      />

      {/* 7-Day Guarantee Section */}
      <GuaranteeSection 
        guaranteeDays={config.guaranteeDays}
        onScrollToCheckout={scrollToCheckout}
      />

      {/* FAQ Accordion */}
      <FaqSection 
        faqs={defaultFaqs}
        supportEmail={config.supportEmail}
      />

      {/* Footer */}
      <Footer 
        config={config}
      />

      {/* Interactive Sample Reading Modal */}
      {previewModalOpen && (
        <SamplePreviewModal
          chapters={defaultChapters}
          initialChapterId={previewChapterId}
          onClose={() => setPreviewModalOpen(false)}
          onScrollToCheckout={scrollToCheckout}
        />
      )}

      {/* Floating Bottom Conversion Bar */}
      <StickyCta 
        config={config}
        onScrollToCheckout={scrollToCheckout}
      />

      {/* Dynamic Social Proof Sales Toast */}
      <LiveSalesNotification />

      {/* Quick Live Customizer Drawer */}
      <LiveEditorDrawer 
        config={config}
        onUpdateConfig={handleUpdateConfig}
        onResetDefault={handleResetDefault}
      />
    </div>
  );
}
