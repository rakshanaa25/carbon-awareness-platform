import React from 'react';
import { Card } from '../../components/UI/Card';
import { Sparkles } from 'lucide-react';

interface CarbonStoryProps {
  storyText: string;
  loading: boolean;
}

export const CarbonStory: React.FC<CarbonStoryProps> = ({ storyText, loading }) => {
  return (
    <Card className="border-brand-200 dark:border-brand-900/60 bg-gradient-to-tr from-white to-brand-50/20 dark:from-slate-800 dark:to-slate-850">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-brand-600 dark:text-brand-500 animate-spin" style={{ animationDuration: '3s' }} />
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">AI Tailored Carbon Narrative</h3>
        <span className="ml-auto text-xs font-semibold px-2 py-0.5 bg-brand-100 dark:bg-brand-900 text-brand-800 dark:text-brand-300 rounded-full flex items-center gap-1">
          Contextual Coach Active
        </span>
      </div>
      
      {loading ? (
        <div className="space-y-3" role="status" aria-label="Generating custom insights">
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full animate-pulse" />
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6 animate-pulse" />
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/5 animate-pulse" />
        </div>
      ) : (
        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-normal antialiased">
          {storyText || "Provide configuration assessment vectors to initialize the cognitive platform review mechanics."}
        </p>
      )}
    </Card>
  );
};