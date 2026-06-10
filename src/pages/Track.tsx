import React, { useState, useTransition } from 'react';
import { AssessmentForm } from '../features/tracking/AssessmentForm';
import { ProgressRing } from '../components/ProgressRing';
import { CarbonStory } from '../features/tracking/CarbonStory';
import { ImpactFocus } from '../features/tracking/ImpactFocus';
import { ReductionPlan } from '../features/tracking/ReductionPlan';
import { DashboardCharts } from '../features/tracking/DashboardCharts';
import { ChallengesTracker } from '../features/tracking/ChallengesTracker';
import { calculateCarbonFootprint } from '../utils/calculations';
import { AssessmentInput, AssessmentResult } from '../types';
import { simulateAIServiceCall } from '../prompts/templateEngine';

export const Track: React.FC = () => {
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [aiStory, setAiStory] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const handleAssessmentSubmit = async (data: AssessmentInput) => {
    // 1. Synchronous execution of exact physical emission logic calculations
    const computed = calculateCarbonFootprint(data);
    setResult(computed);

    // 2. Performance Optimized AI prompt simulation inside Concurrent Mode transition wrapper
    const storyResult = await simulateAIServiceCall('story', computed);

    startTransition(() => {
      setAiStory(storyResult);
    });
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="main-content">
      <section aria-labelledby="track-heading">
        <h1 id="track-heading" className="text-3xl font-black text-slate-900 dark:text-white tracking-tight text-center mb-2">
          Environmental Footprint Core Tracking
        </h1>
        <p className="text-center text-slate-500 max-w-xl mx-auto text-sm">
          Map individual baseline footprints down to direct mathematical equivalencies, enabling strategic behavioral changes.
        </p>
      </section>

      <AssessmentForm onSubmit={handleAssessmentSubmit} />

      {result && (
        <div className="space-y-16 pt-8 border-t border-slate-200 dark:border-slate-800 animate-fadeIn">
          {/* Output Presentation Metrics Metrics Tier */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-xl flex flex-col items-center justify-center gap-4 text-center">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Calculated Index Matrix</h3>
              <ProgressRing score={result.overallScore} />
            </div>
            
            <div className="md:col-span-2 flex flex-col justify-between">
              <CarbonStory storyText={aiStory} loading={isPending} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <ImpactFocus category={result.biggestContributor} percentage={result.contributorPercentage} />
            </div>
            <div className="md:col-span-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Total Realized Asset Output</h3>
              <div className="text-5xl font-black text-slate-900 dark:text-white">
                {result.totalEmissionsKg.toLocaleString()} <span className="text-lg font-normal text-slate-500">kg CO₂e / year</span>
              </div>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                This metric reflects structural carbon equivalents aggregated across raw logistical transport, production agriculture footprints, and domestic heating cycles.
              </p>
            </div>
          </div>

          {/* Visual Presentation Engine Layers */}
          <DashboardCharts breakdown={result.breakdown} />

          {/* Tailored Direction Layer */}
          <ReductionPlan />

          {/* Gamification Context Layers */}
          <ChallengesTracker />
        </div>
      )}
    </main>
  );
};