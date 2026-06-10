import { AssessmentInput, AssessmentResult, EmissionBreakdown } from '../types';

/**
 * Calculations use verified environmental impact factor metrics:
 * - Transport factors based on averages per km (CO2 kg)
 * - Home energy calculates estimates based on grid intensity and AC runtimes
 * - Food choices calculated dynamically from standard agricultural output lifecycle analysis
 */
export function calculateCarbonFootprint(data: AssessmentInput): AssessmentResult {
  // 1. Transportation Calculation (Annual base)
  let transportFactor = 0; // kg CO2 per km
  if (data.transportType === 'gasoline') transportFactor = 0.17;
  if (data.transportType === 'diesel') transportFactor = 0.171;
  if (data.transportType === 'hybrid') transportFactor = 0.10;
  if (data.transportType === 'electric') transportFactor = 0.05;
  
  const transportationEmissions = data.transportDistance * 52 * transportFactor;

  // 2. Home Energy Calculation
  const acAnnual = data.acUsage * 365 * 1.2; // 1.2kW average consumption
  const gridElectricityAnnual = data.electricityBill * 12 * 0.8; // Appx factor per local currency unit equivalent
  const homeEnergyEmissions = acAnnual + gridElectricityAnnual;

  // 3. Food Calculation
  let foodFactor = 1000; // Annual base footprint
  if (data.dietType === 'heavy-meat') foodFactor = 3300;
  if (data.dietType === 'mixed') foodFactor = 2500;
  if (data.dietType === 'vegetarian') foodFactor = 1700;
  if (data.dietType === 'vegan') foodFactor = 1100;
  const foodEmissions = foodFactor;

  // 4. Shopping and Waste Calculation
  let shopFactor = 500;
  if (data.shoppingFrequency === 'daily') shopFactor = 2000;
  if (data.shoppingFrequency === 'weekly') shopFactor = 1200;
  if (data.shoppingFrequency === 'monthly') shopFactor = 600;

  let wasteMultiplier = 1.0;
  if (data.recyclingHabits === 'sometimes') wasteMultiplier = 0.8;
  if (data.recyclingHabits === 'always') wasteMultiplier = 0.5;

  const shoppingWasteEmissions = shopFactor * wasteMultiplier;

  // Totals
  const totalEmissionsKg = transportationEmissions + homeEnergyEmissions + foodEmissions + shoppingWasteEmissions;

  // Standard Normalized Carbon Scoring Strategy (0 to 100 max boundary cap)
  // 8000 kg CO2 is set as the high baseline warning scale target
  const rawScore = (totalEmissionsKg / 8000) * 100;
  const overallScore = Math.min(100, Math.max(0, Math.round(rawScore)));

  const breakdown: EmissionBreakdown = {
    transportation: Math.round(transportationEmissions),
    homeEnergy: Math.round(homeEnergyEmissions),
    food: Math.round(foodEmissions),
    shoppingWaste: Math.round(shoppingWasteEmissions),
  };

  // Find biggest contributor safely
  let biggestContributor: keyof EmissionBreakdown = 'transportation';
  let maxVal = breakdown.transportation;

  if (breakdown.homeEnergy > maxVal) {
    biggestContributor = 'homeEnergy';
    maxVal = breakdown.homeEnergy;
  }
  if (breakdown.food > maxVal) {
    biggestContributor = 'food';
    maxVal = breakdown.food;
  }
  if (breakdown.shoppingWaste > maxVal) {
    biggestContributor = 'shoppingWaste';
    maxVal = breakdown.shoppingWaste;
  }

  const contributorPercentage = totalEmissionsKg > 0 ? Math.round((maxVal / totalEmissionsKg) * 100) : 0;

  return {
    overallScore,
    totalEmissionsKg: Math.round(totalEmissionsKg),
    breakdown,
    biggestContributor,
    contributorPercentage
  };
}