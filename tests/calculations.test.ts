import { describe, it, expect } from 'vitest';
import { calculateCarbonFootprint } from '../src/utils/calculations';
import { AssessmentInput } from '../src/types';

describe('Carbon Calculation Core Formulas Verification Suite', () => {
  it('should correctly process low-emission profiles with minimum footprints', () => {
    const ecoInput: AssessmentInput = {
      transportType: 'electric',
      transportDistance: 10,
      acUsage: 0,
      electricityBill: 10,
      dietType: 'vegan',
      shoppingFrequency: 'rarely',
      recyclingHabits: 'always'
    };

    const calculation = calculateCarbonFootprint(ecoInput);
    
    expect(calculation.totalEmissionsKg).toBeGreaterThan(0);
    expect(calculation.overallScore).toBeLessThan(30);
    expect(calculation.breakdown).toHaveProperty('transportation');
  });

  it('should cap overall indexes correctly under high resource load testing profiles', () => {
    const highLoadInput: AssessmentInput = {
      transportType: 'diesel',
      transportDistance: 800,
      acUsage: 24,
      electricityBill: 900,
      dietType: 'heavy-meat',
      shoppingFrequency: 'daily',
      recyclingHabits: 'never'
    };

    const calculation = calculateCarbonFootprint(highLoadInput);
    
    expect(calculation.overallScore).toEqual(100);
    expect(calculation.biggestContributor).toBeDefined();
  });
});