import React from 'react';
import { Card } from '../../components/UI/Card';
import { Footprints, CloudFog, Activity } from 'lucide-react';

export const ConceptExplanation: React.FC = () => {
  const cards = [
    {
      icon: <Footprints className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: "Direct Operations",
      desc: "Emissions originating from your direct daily choices, such as burning vehicle fuel or running home HVAC systems."
    },
    {
      icon: <CloudFog className="h-8 w-8 text-teal-600 dark:text-teal-400" />,
      title: "Indirect Operations",
      desc: "Emissions generated during the lifecycle production of services you utilize, including power plants supplying your local grid."
    },
    {
      icon: <Activity className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />,
      title: "Lifecycle Chains",
      desc: "The total energy required to extract materials, manufacture goods, transport packages, and handle the end-of-life waste of items you buy."
    }
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="concept-heading">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 id="concept-heading" className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          What Is a Carbon Footprint?
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          A carbon footprint measures the total greenhouse gases released into the atmosphere as a result of our daily activities. From the way we travel and power our homes to the food we consume, every choice contributes to our environmental impact. 
          
          Understanding your carbon footprint is the first step toward making more sustainable decisions and helping create a healthier planet for future generations.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {cards.map((card, idx) => (
          <Card key={idx} className="hover:scale-[1.02] transform transition-transform duration-300">
            <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg w-fit mb-4">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{card.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};