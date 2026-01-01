import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureBento from './components/FeatureBento';
import CostOfSilence from './components/CostOfSilence';
import IndustrySelector from './components/IndustrySelector';
import CaseStudy from './components/CaseStudy';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FooterCTA from './components/FooterCTA';
import BackgroundGlow from './components/BackgroundGlow';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-slate-50 relative selection:bg-primary/30">
      {/* Background Ambience */}
      <BackgroundGlow />
      
      {/* Scrollable Content */}
      <div className="relative z-10">
        <Header />
        
        <main>
          <Hero />
          
          <div className="flex flex-col">
            <FeatureBento />
            <CostOfSilence />
            <IndustrySelector />
            <CaseStudy />
            <Pricing />
            <Testimonials />
          </div>
        </main>
        
        <FooterCTA />
      </div>
    </div>
  );
};

export default App;