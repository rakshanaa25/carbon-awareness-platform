import { z } from 'zod';

export const AssessmentSchema = z.object({
  transportType: z.enum(['none', 'electric', 'hybrid', 'gasoline', 'diesel']),
  transportDistance: z.number().min(0, "Distance must be 0 or greater"),
  acUsage: z.number().min(0, "Hours must be 0 or greater").max(24, "Max 24 hours per day"),
  electricityBill: z.number().min(0, "Bill amount must be 0 or greater"),
  dietType: z.enum(['vegan', 'vegetarian', 'mixed', 'heavy-meat']),
  shoppingFrequency: z.enum(['rarely', 'monthly', 'weekly', 'daily']),
  recyclingHabits: z.enum(['always', 'sometimes', 'never']),
});

export type AssessmentInput = z.infer<typeof AssessmentSchema>;

export interface EmissionBreakdown {
  transportation: number;
  homeEnergy: number;
  food: number;
  shoppingWaste: number;
}

export interface AssessmentResult {
  overallScore: number; // 0 (best) to 100 (worst)
  totalEmissionsKg: number; // Annually
  breakdown: EmissionBreakdown;
  biggestContributor: keyof EmissionBreakdown;
  contributorPercentage: number;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Moderate' | 'High Impact';
  completed: boolean;
  points: number;
}