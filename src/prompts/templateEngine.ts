/**
 * ARCHITECTURE NOTE - EXPERT PROMPT ENGINEERING TEMPLATES
 * * System prompts utilize structured engineering principles:
 * - Role Definition: Established persona boundaries.
 * - Guardrails: Rigid constraints on computational style and outputs.
 * - Dynamic Variable Interpolation: Secure execution framing.
 */

export interface StoryPromptInput {
  transportation: number;
  homeEnergy: number;
  food: number;
  shoppingWaste: number;
  totalEmissionsKg: number;
  biggestContributor: string;
}

export interface RecommendationPromptInput {
  biggestContributor: string;
  contributorPercentage: number;
}

export const PromptTemplates = {
  /**
   * System Prompt ensuring specific formatting limits to keep AI Coach responses brief and deterministic.
   */
  getSystemContext: () => {
    return `You are an expert Sustainability Systems Coach. You evaluate carbon emission footprints with analytical precision and empathetic, highly actionable clarity. You never use markdown headings or bullet points in the raw response text block.`;
  },

  /**
   * Generates localized narrative context about an exact emission profile.
   */
  generateCarbonStory: (data: StoryPromptInput): string => {
    return `
    [ROLE]: Senior Environmental Analyst
    [CONTEXT]: Total annual carbon footprint: ${data.totalEmissionsKg}kg CO2.
    [BREAKDOWN]:
    - Transportation: ${data.transportation} kg
    - Home Utilities: ${data.homeEnergy} kg
    - Food Selection Lifecycle: ${data.food} kg
    - Consumer Goods & Waste Management: ${data.shoppingWaste} kg
    [TARGET TARGETS FOR NARRATIVE]:
    Explain how their high exposure in ${data.biggestContributor} drives their macro-level consequences. Show how these patterns impact broader systemic environmental stress. Conclude with immediate steps to reverse this trajectory. Ensure the tone is structured as a smooth, professional, prose-based narrative without lists.
    `;
  },

  /**
   * Returns tailored dynamic rules based on calculated output drivers.
   */
  generateRecommendations: (data: RecommendationPromptInput): string => {
    return `
    [CONTEXT]: Primary emission driver is ${data.biggestContributor}, accounting for ${data.contributorPercentage}% of total output.
    [TASK]: Provide three highly effective behavioral interventions tailored to this exact driver. Categorize these as Easy, Moderate, and High Impact. Output structural prose explaining how optimization in these tiers directly cuts footprints.
    `;
  },

  /**
   * Generates dynamic actionable gamified options.
   */
  generateWeeklyChallenges: (currentTheme: string): string => {
    return `
    Generate three highly targetable environmental mitigation tasks for a gamified tracker focusing on "${currentTheme}". 
    Format each challenge clearly to emphasize rapid behavioral adoption.
    `;
  }
};

/**
 * CLIENT-SIDE COMPLEMENTARY AI UTILITY SIMULATOR
 * Emulates the exact structural pattern returned by an LLM model processing the prompts defined above.
 */
export function simulateAIServiceCall(promptType: 'story' | 'recommendation', payload: any): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (promptType === 'story') {
        const primary = payload.biggestContributor === 'homeEnergy' ? 'Home Energy & Utilities' : payload.biggestContributor;
        resolve(`Your daily habits indicate that ${primary} represents a significant driving force behind your annual carbon footprint. This concentration implies that minor baseline changes within your immediate environment can yield high, positive ecological leverage. Over a prolonged calendar period, maintaining high outputs across these segments accelerates localized resource depletion and places unnecessary stress on our energy infrastructure. By shifting to efficient habits, such as reducing active cooling cycles or selecting sustainable alternatives twice a week, you can systematically lower your total output and realign your personal profile with target sustainability goals.`);
      } else {
        resolve(`Focusing on small changes can dramatically shift your footprint. An accessible step involves auditing active operations—like disconnecting phantom power grids or reducing single-occupant trips. On a moderate scale, modifying nutritional or transport sources once daily creates immediate margin. For the highest impact, updating home thermal dynamics or vehicle profiles can permanently shift your operational output down.`);
      }
    }, 800);
  });
}