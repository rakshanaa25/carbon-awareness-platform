import React from 'react';
import { Card } from '../../components/UI/Card';
import { CheckCircle2 } from 'lucide-react';



export const ReductionPlan: React.FC = () => {
  const defaults = [
    { tier: "Easy Actions", metric: "~150 kg annual save", plan: "De-energize phantom residential power connections and use smart power strips to handle standby loads." },
    { tier: "Moderate Actions", metric: "~480 kg annual save", plan: "Shift local multi-passenger transit routines towards localized clean infrastructure networks or group errands." },
    { tier: "High Impact Actions", metric: "~1,200 kg annual save", plan: "Incorporate specialized building envelope sealing strategies and adjust thermal cooling parameters by two degrees." }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Personalized Reduction Plan</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {defaults.map((item, index) => (
          <Card key={index} className="flex flex-col justify-between border-slate-200 dark:border-slate-700/60">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  index === 0 ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400' :
                  index === 1 ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400' :
                  'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-400'
                }`}>
                  {item.tier}
                </span>
                <span className="text-xs font-medium text-slate-400">{item.metric}</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.plan}</p>
            </div>
            <button className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline w-fit">
              <CheckCircle2 className="h-3.5 w-3.5" /> Commit to Strategy
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};