import React from 'react';
import { useForm } from 'react-hook-form'; // Simulating standard handler validation hooks patterns
import { AssessmentInput, AssessmentSchema } from '../../types';
import { Button } from '../../components/UI/Button';
import { Card } from '../../components/UI/Card';
import { AlertCircle } from 'lucide-react';

interface AssessmentFormProps {
  onSubmit: (data: AssessmentInput) => void;
}

export const AssessmentForm: React.FC<AssessmentFormProps> = ({ onSubmit }) => {
  const [formErrors, setFormErrors] = React.useState<Record<string, string>>({});

  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const rawData = {
      transportType: formData.get('transportType'),
      transportDistance: Number(formData.get('transportDistance')),
      acUsage: Number(formData.get('acUsage')),
      electricityBill: Number(formData.get('electricityBill')),
      dietType: formData.get('dietType'),
      shoppingFrequency: formData.get('shoppingFrequency'),
      recyclingHabits: formData.get('recyclingHabits'),
    };

    const parsed = AssessmentSchema.safeParse(rawData);
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      parsed.error.errors.forEach((err) => {
        if (err.path[0]) errors[err.path[0].toString()] = err.message;
      });
      setFormErrors(errors);
    } else {
      setFormErrors({});
      onSubmit(parsed.data);
    }
  };

  return (
    <Card className="border-slate-200 dark:border-slate-700 max-w-3xl mx-auto">
      <form onSubmit={handleFormSubmission} className="space-y-8" aria-label="Carbon Footprint Assessment Form">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Carbon Assessment Questionnaire</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Provide accurate daily parameters to compute your baseline lifecycle metric.</p>
        </div>

        <div className="space-y-6">
          {/* Transportation Tier */}
          <fieldset className="border border-slate-100 dark:border-slate-700/60 p-4 rounded-xl space-y-4">
            <legend className="text-sm font-bold uppercase tracking-wider px-2 text-brand-600 dark:text-brand-400">1. Transportation Profile</legend>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="transportType" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Primary Transport Type</label>
                <select id="transportType" name="transportType" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none">
                  <option value="none">No Private Vehicle (Public/Walk)</option>
                  <option value="electric">Electric Vehicle (EV)</option>
                  <option value="hybrid">Hybrid Engine Vehicle</option>
                  <option value="gasoline">Standard Gasoline Vehicle</option>
                  <option value="diesel">Diesel Combustion Engine</option>
                </select>
              </div>

              <div>
                <label htmlFor="transportDistance" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Weekly Distance (Kilometers)</label>
                <input type="number" id="transportDistance" name="transportDistance" defaultValue="50" min="0" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none" />
                {formErrors.transportDistance && <p className="text-xs text-rose-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {formErrors.transportDistance}</p>}
              </div>
            </div>
          </fieldset>

          {/* Home Utilities Tier */}
          <fieldset className="border border-slate-100 dark:border-slate-700/60 p-4 rounded-xl space-y-4">
            <legend className="text-sm font-bold uppercase tracking-wider px-2 text-brand-600 dark:text-brand-400">2. Domestic Energy Utilities</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="acUsage" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Average Daily AC Usage (Hours)</label>
                <input type="number" id="acUsage" name="acUsage" defaultValue="4" min="0" max="24" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none" />
                {formErrors.acUsage && <p className="text-xs text-rose-500 mt-1">{formErrors.acUsage}</p>}
              </div>
              <div>
                <label htmlFor="electricityBill" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Monthly Electricity Bill ($ equivalent)</label>
                <input type="number" id="electricityBill" name="electricityBill" defaultValue="80" min="0" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none" />
              </div>
            </div>
          </fieldset>

          {/* Food Ecosystems Tier */}
          <fieldset className="border border-slate-100 dark:border-slate-700/60 p-4 rounded-xl space-y-4">
            <legend className="text-sm font-bold uppercase tracking-wider px-2 text-brand-600 dark:text-brand-400">3. Nutritional Patterns</legend>
            <div>
              <label htmlFor="dietType" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Primary Dietary Intake Classification</label>
              <select id="dietType" name="dietType" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none">
                <option value="mixed">Mixed Profile (Occasional Meats/Poultry)</option>
                <option value="heavy-meat">Frequent Meat Profile (Regular Beef/Pork)</option>
                <option value="vegetarian">Vegetarian (No Direct Meat Products)</option>
                <option value="vegan">Pure Plant-Based (Zero Animal Agriculture Inputs)</option>
              </select>
            </div>
          </fieldset>

          {/* Consumer Behavior and Materials Lifecycle */}
          <fieldset className="border border-slate-100 dark:border-slate-700/60 p-4 rounded-xl space-y-4">
            <legend className="text-sm font-bold uppercase tracking-wider px-2 text-brand-600 dark:text-brand-400">4. Consumer Goods & Circularity</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="shoppingFrequency" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">New Goods Purchases (Clothing, Tech)</label>
                <select id="shoppingFrequency" name="shoppingFrequency" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none">
                  <option value="weekly">Weekly Infrastructure Purchases</option>
                  <option value="rarely">Rare Procurement Cycles (As-Needed)</option>
                  <option value="monthly">Standard Monthly Rotations</option>
                  <option value="daily">High Volume Daily Sourcing</option>
                </select>
              </div>
              <div>
                <label htmlFor="recyclingHabits" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Active Sorting and Recycling Habits</label>
                <select id="recyclingHabits" name="recyclingHabits" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none">
                  <option value="sometimes">Partial Sorting (Intermittent Habits)</option>
                  <option value="always">Complete Sorting & Zero Food Organic Mixing</option>
                  <option value="never">Unsorted Solid Urban Waste Stream Input</option>
                </select>
              </div>
            </div>
          </fieldset>
        </div>

        <Button variant="primary" type="submit" className="w-full py-3 text-base">
          Compute Footprint Metric Metrics
        </Button>
      </form>
    </Card>
  );
};