import React, { useState } from 'react';
import { Card } from '../../components/UI/Card';
import { Coffee, Briefcase, UtensilsCrossed, ShoppingCart, Home as HomeIcon } from 'lucide-react';

interface JourneyStep {
  label: string;
  icon: React.ReactNode;
  title: string;
  impactDesc: string;
  alternative: string;
}

export const DailyJourney: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const steps: JourneyStep[] = [
    {
      label: "Morning Routine",
      icon: <Coffee className="h-5 w-5" />,
      title: "Rising and Breakfast Habits",
      impactDesc: "Long showers using fossil-fuel heated municipal water and consuming imported, heavy-packaged food choices elevates initial daily emissions.",
      alternative: "Transition to water-efficient fixtures and source seasonally available regional food inputs."
    },
    {
      label: "Commute",
      icon: <Briefcase className="h-5 w-5" />,
      title: "Transit Choices to Office",
      impactDesc: "Operating non-hybrid gasoline vehicles alone introduces high concentrations of combustion byproducts per kilometer.",
      alternative: "Leverage standard metropolitan public transit, arrange carpools, or utilize micromobility paths."
    },
    {
      label: "Midday Meals",
      icon: <UtensilsCrossed className="h-5 w-5" />,
      title: "Dietary Footprint Drivers",
      impactDesc: "Selecting feedlot livestock proteins carries a high methane footprint and land transformation penalty.",
      alternative: "Incorporate nutrient-dense, plant-based proteins into your diet a few times a week."
    },
    {
      label: "Procurement",
      icon: <ShoppingCart className="h-5 w-5" />,
      title: "Purchasing and Commerce Packaging",
      impactDesc: "Ordering fast-shipping goods leads to excessive freight logistics overhead and single-use protective films.",
      alternative: "Consolidate shipments or source durable items from businesses with circular return programs."
    },
    {
      label: "Evening Living",
      icon: <HomeIcon className="h-5 w-5" />,
      title: "Domestic Utility Profiles",
      impactDesc: "Leaving unoptimized cooling units running continuously in unsealed spaces leads to significant electrical draw.",
      alternative: "Deploy programmable climate controllers and establish clear structural insulation parameters."
    }
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="journey-heading">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 id="journey-heading" className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Interactive Daily Carbon Journey</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400">See how regular daily activities accumulate into a larger personal environmental profile.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <nav className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0" aria-label="Journey steps">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm font-medium whitespace-nowrap lg:whitespace-normal transition-all w-full focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                activeIndex === idx 
                  ? 'bg-brand-600 text-white shadow-sm' 
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
              aria-current={activeIndex === idx ? 'step' : undefined}
            >
              {step.icon}
              <span>{step.label}</span>
            </button>
          ))}
        </nav>

        <div className="lg:col-span-8">
          <Card className="border-brand-100 dark:border-brand-900/40 p-8 min-h-[260px] flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-brand-600 dark:text-brand-400">Active Phase Profile</span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1 mb-4">{steps[activeIndex].title}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Environmental Burden Mechanism</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-1 leading-relaxed">{steps[activeIndex].impactDesc}</p>
                </div>
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">High Mitigation Path</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-1 leading-relaxed">{steps[activeIndex].alternative}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};  