
import { GoogleGenAI } from "@google/genai";
import type { FiringPlan } from '../types';
import { FiringPlanSchema } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const systemInstruction = `You are a master Raku potter with decades of experience. Your goal is to provide a detailed, safe, and effective Raku firing plan based on the user's desired aesthetic. Your tone should be encouraging and expert. Structure your response according to the provided JSON schema. Ensure you always include a comprehensive and prominent safety warning section, as Raku is a dangerous process.`;

export async function generateFiringPlan(description: string): Promise<FiringPlan> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: description,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: FiringPlanSchema,
        temperature: 0.7,
      },
    });

    const jsonText = response.text.trim();
    const plan: FiringPlan = JSON.parse(jsonText);
    return plan;
  } catch (error) {
    console.error("Error generating firing plan from Gemini API:", error);
    throw new Error("Failed to parse or retrieve the firing plan from the AI.");
  }
}
