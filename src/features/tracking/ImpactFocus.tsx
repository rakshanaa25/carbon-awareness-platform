import React from 'react';
import { Card } from '../../components/UI/Card';
import { Target, TrendingDown } from 'lucide-react';

interface ImpactFocusProps {
  category: string;
  percentage: number;
}

export const ImpactFocus: React.FC<ImpactFocusProps> = ({ category, percentage }) => {
  // Format categorical text beautifully
  const displayCategory = category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

  return (
    <Card className="border-rose-200 dark:border-rose-950 bg-rose-50/30 dark:bg-rose-950/10 p-6 flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400 block mb-1">Highest Impact Core Driver</span>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{displayCategory}</h3>
        </div>
        <div className="p-2 bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 rounded-lg">
          <Target className="h-5 w-5" />
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-rose-100 dark:border-rose-950/40 grid grid-cols-2 gap-4">
        <div>
          <span className="text-xs text-slate-500 block">Relative Loading</span>
          <span className="text-2xl font-black text-rose-600 dark:text-rose-400">{percentage}%</span>
        </div>
        <div>
          <span className="text-xs text-slate-500 block">Target Reduction</span>
          <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
            <TrendingDown className="w-5 h-5 inline" /> 18%
          </span>
        </div>
      </div>
    </Card>
  );
};