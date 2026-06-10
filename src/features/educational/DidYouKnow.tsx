import React, { useState, useEffect } from 'react';
import { Card } from '../../components/UI/Card';
import { Lightbulb, ChevronRight } from 'lucide-react';

export const DidYouKnow: React.FC = () => {
  const [index, setIndex] = useState(0);

  const facts = [
    "A single unnecessary short automobile run generates more CO2 than running standard LED arrays across an entire home for a month.",
    "Transitioning to a plant-forward diet just three days a week can reduce an individual's food supply lifecycle emissions by nearly 30%.",
    "Phantom power loads—electronics left plugged in while turned off—can account for up to 10% of standard household utility bills.",
    "Worldwide, the fashion industry generates nearly 10% of global greenhouse emissions, surpassing combined international aviation and shipping totals.",
    "Recycling high-grade aluminum items requires 95% less total energy input compared to manufacturing raw stock containers from scratch."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % facts.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [facts.length]);

  return (
    <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Sustainability Facts">
      <Card className="bg-gradient-to-br from-brand-50 to-emerald-50 dark:from-slate-800 dark:to-slate-850 border-brand-200 dark:border-slate-700 relative overflow-hidden">
        <div className="flex gap-4 items-start relative z-10">
          <div className="p-3 bg-brand-500 text-white rounded-xl shadow-sm shrink-0">
            <Lightbulb className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-bold tracking-widest text-brand-700 dark:text-brand-400">Did You Know?</h3>
            <p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-relaxed transition-all duration-300">
              "{facts[index]}"
            </p>
            <button 
              onClick={() => setIndex(prev => (prev + 1) % facts.length)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700 dark:text-brand-400 hover:underline pt-2 focus:outline-none"
            >
              Next Sustainability Fact <ChevronRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </Card>
    </section>
  );
};