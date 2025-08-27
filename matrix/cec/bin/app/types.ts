
import { Type } from "@google/genai";

export const FiringPlanSchema = {
  type: Type.OBJECT,
  properties: {
    title: {
      type: Type.STRING,
      description: "A creative and descriptive title for this Raku firing plan, like 'Crimson Comet' or 'Oceanic Crackle'.",
    },
    glazeNotes: {
      type: Type.STRING,
      description: "Detailed advice on glaze selection and application to achieve the desired effect. Mention specific glaze types or chemical compositions if relevant.",
    },
    firingSchedule: {
      type: Type.OBJECT,
      properties: {
        rampUp: {
          type: Type.STRING,
          description: "Instructions for heating the kiln, including rate (e.g., 'as fast as possible') and any holds.",
        },
        topTemperature: {
          type: Type.STRING,
          description: "The target temperature to reach before removing the pottery, in Celsius and Fahrenheit (e.g., '1000°C / 1830°F').",
        },
        visualCues: {
          type: Type.STRING,
          description: "What the potter should look for (e.g., 'glaze should look like molten honey', 'surface is glossy and bubbling has subsided') to know when the piece is ready.",
        },
      },
    },
    reductionProcess: {
      type: Type.OBJECT,
      properties: {
        materials: {
          type: Type.STRING,
          description: "Recommended combustible materials for the reduction chamber (e.g., 'shredded newspaper and dry leaves for vibrant colors', 'sawdust for heavy carbon trapping').",
        },
        steps: {
          type: Type.STRING,
          description: "A step-by-step guide for moving the hot pottery to the reduction chamber, adding combustibles, and sealing the container.",
        },
        duration: {
          type: Type.STRING,
          description: "Recommended duration for the reduction phase (e.g., '15-20 minutes').",
        },
      },
    },
    cooling: {
      type: Type.STRING,
      description: "Instructions for cooling the piece after reduction, including when it's safe to quench in water or if it should cool naturally.",
    },
    safetyPrecautions: {
      type: Type.ARRAY,
      items: {
        type: Type.STRING,
      },
      description: "A list of 5-7 crucial safety warnings and required personal protective equipment (PPE). This is the most important section. Be direct and clear.",
    },
  },
};

export interface FiringPlan {
  title: string;
  glazeNotes: string;
  firingSchedule: {
    rampUp: string;
    topTemperature: string;
    visualCues: string;
  };
  reductionProcess: {
    materials: string;
    steps: string;
    duration: string;
  };
  cooling: string;
  safetyPrecautions: string[];
}
