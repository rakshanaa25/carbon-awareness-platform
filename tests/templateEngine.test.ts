import { describe, it, expect } from 'vitest';
import { PromptTemplates } from '../src/prompts/templateEngine';

describe('AI Prompt System Compliance & Formatting Validation Suite', () => {
  it('should output structurally verified prompt boundaries containing key parameters', () => {
    const samplePayload = {
      transportation: 1200,
      homeEnergy: 2500,
      food: 1800,
      shoppingWaste: 600,
      totalEmissionsKg: 6100,
      biggestContributor: 'homeEnergy'
    };

    const promptText = PromptTemplates.generateCarbonStory(samplePayload);
    
    expect(promptText).toContain('[ROLE]: Senior Environmental Analyst');
    expect(promptText).toContain('homeEnergy');
    expect(promptText).toContain('6100');
  });

  it('verifies strict adherence to system context rules keeping responses clean', () => {
    const systemInstruction = PromptTemplates.getSystemContext();
    expect(systemInstruction).toContain('Sustainability Systems Coach');
    expect(systemInstruction).toContain('never use markdown headings');
  });
});