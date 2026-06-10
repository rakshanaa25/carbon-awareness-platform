import React, { useState } from 'react';
import { Card } from '../../components/UI/Card';
import { Challenge } from '../../types';
import { Trophy, CheckCircle, Circle, Award } from 'lucide-react';

export const ChallengesTracker: React.FC = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([
    { id: '1', title: 'Zero Solid Waste Discard', description: 'Ensure full sorting cycles across standard kitchen output today without contamination.', difficulty: 'Easy', completed: false, points: 25 },
    { id: '2', title: 'Micromobility Transition Day', description: 'Substitute high-emission short vehicle runs entirely with standard pedestrian or cycling patterns.', difficulty: 'Moderate', completed: true, points: 50 },
    { id: '3', title: 'Phantom Disconnection Audit', description: 'Unplug major domestic entertainment grids directly from base walls when leaving structures.', difficulty: 'Easy', completed: false, points: 15 },
    { id: '4', title: 'Plant-Forward Continuous Cycle', description: 'Maintain pure plant-based food input streams for 48 hours consecutively.', difficulty: 'High Impact', completed: false, points: 100 }
  ]);

  const toggleChallengeCompletion = (id: string) => {
    setChallenges(prev => prev.map(ch => ch.id === id ? { ...ch, completed: !ch.completed } : ch));
  };

  const totalPoints = challenges.reduce((acc, curr) => acc + (curr.completed ? curr.points : 0), 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-2 space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Weekly Sustainability Challenges</h3>
        <div className="space-y-3">
          {challenges.map((ch) => (
            <div 
              key={ch.id}
              onClick={() => toggleChallengeCompletion(ch.id)}
              className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-750 transition-all select-none"
              role="checkbox"
              aria-checked={ch.completed}
              tabIndex={0}
              onKeyDown={(e) => e.key === ' ' && (e.preventDefault(), toggleChallengeCompletion(ch.id))}
            >
              <div className="flex items-center gap-3">
                {ch.completed ? (
                  <CheckCircle className="h-5 w-5 text-brand-600 dark:text-brand-500 shrink-0" />
                ) : (
                  <Circle className="h-5 w-5 text-slate-300 dark:text-slate-600 shrink-0" />
                )}
                <div>
                  <h4 className={`text-sm font-bold ${ch.completed ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-900 dark:text-white'}`}>
                    {ch.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{ch.description}</p>
                </div>
              </div>
              <span className={`text-xs px-2.5 py-0.5 rounded-full shrink-0 font-semibold ${
                ch.difficulty === 'Easy' ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700' :
                ch.difficulty === 'Moderate' ? 'bg-amber-50 dark:bg-amber-950 text-amber-700' :
                'bg-rose-50 dark:bg-rose-950 text-rose-700'
              }`}>
                +{ch.points} pts
              </span>
            </div>
          ))}
        </div>
      </div>

      <Card className="border-brand-200 dark:border-brand-900/60 bg-gradient-to-b from-brand-50/50 to-white dark:from-slate-800 dark:to-slate-850 p-6 text-center flex flex-col items-center justify-center">
        <Trophy className="h-12 w-12 text-amber-500 mb-2 drop-shadow" />
        <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400">Total Gamification Accumulation</span>
        <span className="text-4xl font-black text-slate-900 dark:text-white mt-1">{totalPoints}</span>
        <span className="text-xs text-slate-500 mt-1">Sustainably Earned Action Points</span>
        
        <div className="w-full border-t border-slate-200 dark:border-slate-700 mt-6 pt-4 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-left text-slate-400">Unlocked Merit Badges</h4>
          <div className="flex gap-2 justify-center">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 flex items-center gap-1 text-xs font-bold" title="Unlocked by registering initial operational targets.">
              <Award className="w-4 h-4" /> Green Explorer
            </div>
            {totalPoints >= 50 && (
              <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400 flex items-center gap-1 text-xs font-bold animate-bounce">
                <Award className="w-4 h-4" /> Eco Warrior
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};