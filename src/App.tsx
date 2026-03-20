import React from 'react';
import StickyBar from './components/StickyBar';
import Hero from './components/Hero';
import Diagnostic from './components/Diagnostic';
import Modules from './components/Modules';
import TargetAudience from './components/TargetAudience';
import Instructor from './components/Instructor';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-brand-500/30 selection:text-brand-100 overflow-x-hidden">
      <main className="pb-24"> {/* Space for sticky bar */}
        <Hero />
        <Diagnostic />
        <Modules />
        <TargetAudience />
        <Instructor />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
      <StickyBar />
    </div>
  );
}

export default App;
