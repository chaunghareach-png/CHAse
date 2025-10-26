import { GoogleGenAI, Type } from '@google/genai';
import type { Movie } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generatePrompt = async (
  movie: Movie,
  customSceneSetup?: string,
  customTimelineAction?: string
): Promise<string> => {
  let finalSceneSetup = customSceneSetup?.trim();
  let finalTimelineAction = customTimelineAction?.trim();

  const needsSceneSetup = !finalSceneSetup;
  const needsTimelineAction = !finalTimelineAction;

  try {
    if (needsSceneSetup && needsTimelineAction) {
      // Generate both
      const prompt = `Based on the provided cinematic style, generate both a [Scene Setup] and a [Timeline & Action] sequence.
- The scene setup should be a short, evocative prose description (2-3 sentences) fitting the movie's atmosphere.
- The timeline should be a three-step sequence optimized for Sora2, detailing camera and subject action over 12 seconds.

[Cinematic Style]
${movie.cinematicStyle}

Return the result as a JSON object with two keys: "sceneSetup" and "timelineAction".`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              sceneSetup: { type: Type.STRING },
              timelineAction: { type: Type.STRING },
            },
          },
        },
      });
      const generated = JSON.parse(response.text);
      finalSceneSetup = generated.sceneSetup;
      finalTimelineAction = generated.timelineAction;

    } else if (needsTimelineAction) {
      // Generate only timeline
      const prompt = `Based on the following cinematic style and user-provided scene setup, create a concise, Sora2-optimized "[Timeline & Action]" sequence in three distinct, narratively connected steps. Do not include any headers in your response. Your response should ONLY be the timeline description.

[Cinematic Style]
${movie.cinematicStyle}

[Scene Setup]
${finalSceneSetup}`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });
      finalTimelineAction = response.text.trim();

    } else if (needsSceneSetup) {
      // Generate only scene setup
      const prompt = `Based on the following cinematic style and user-provided timeline, generate a fitting [Scene Setup] description (2-3 sentences). Do not include any headers in your response. Your response should ONLY be the scene setup description.

[Cinematic Style]
${movie.cinematicStyle}

[Timeline & Action]
${finalTimelineAction}`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });
      finalSceneSetup = response.text.trim();
    }
  } catch (error) {
    console.error("Error during dynamic generation:", error);
    const errorMessage = "Error: Could not generate dynamic content.";
    if (needsSceneSetup) finalSceneSetup = errorMessage;
    if (needsTimelineAction) finalTimelineAction = errorMessage;
  }

  const finalPrompt = `[Scene Setup]
${finalSceneSetup}

[Cinematic Style]
${movie.cinematicStyle}

[Timeline & Action]
${finalTimelineAction}

[Camera & Focus]
Camera: ${movie.cameraAndFocus.camera}
Lens: ${movie.cameraAndFocus.lens}
Focus: ${movie.cameraAndFocus.focus}
Motion: ${movie.cameraAndFocus.motion}

[Lighting & Palette]
Light: ${movie.lightingPalette.light}
Bloom: ${movie.lightingPalette.bloom}
Color Palette: ${movie.colorPalette}
Contrast: ${movie.lightingPalette.contrast}

[Audio Design]
${movie.audioDesign}
`;

  return finalPrompt;
};
