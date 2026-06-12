import React from 'react';
import { Button } from '../../components/UI/Button';
import { ArrowRight, Globe } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-slate-50 dark:bg-slate-900 transition-colors" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Animated Hackathon Banner Tracking Token */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400 text-sm font-medium mb-6 border border-brand-200 dark:border-brand-800 animate-pulse">
            <Globe className="h-4 w-4" aria-hidden="true" />
            <span>Empowering Climate Action for 2026</span>
          </div>
          
          {/* Refactored Title String to match target requirements */}
          <h1 id="hero-heading" className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none uppercase">
            ECOTRACE - <span className="text-brand-600 dark:text-brand-500">CARBON FOOTPRINT AWARENESS PLATFORM</span>
          </h1>
          
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Understand. Track. Reduce. Demystify your environmental baseline through targeted analytical metrics and adaptive behavioral guidance.
          </p>
          
          <div className="mt-10 flex justify-center gap-4">
            <Button 
              variant="primary" 
              onClick={onStart} 
              className="flex items-center gap-2 text-base px-6 py-3"
              aria-label="Start tracking your carbon footprint now"
            >
              Start Tracking Now <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
      {/* Decorative Radial Background Vector Mesh */}
      {/* Corrected: Using Tailwind's class instead of an invalid JSX property */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_45%)] pointer-events-none" />
    </section>
  );
};