import type { PlainPrompt } from "#/prompt";

export function plainPromptEquals(prompt1: PlainPrompt, prompt2: PlainPrompt): boolean {
  return prompt1.value === prompt2.value;
}
