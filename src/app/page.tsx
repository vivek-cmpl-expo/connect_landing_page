import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SideTabs from '@/components/SideTabs';
import HeroSection from '@/app/components/HeroSection';
import StatsSection from '@/app/components/StatsSection';
import FeaturesSection from '@/app/components/FeaturesSection';
import HowItWorksSection from '@/app/components/HowItWorksSection';
import ScannerCTASection from '@/app/components/ScannerCTASection';
import FAQSection from '@/app/components/FAQSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SideTabs />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ScannerCTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}