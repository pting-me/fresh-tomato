// Ideally we use these with twind, but I'm not quite sure how to get the Intellisense plugin working

export const accentColors = {
  red: "#F87070",
  teal: "#70F3F8",
  purple: "#D881F8",
} as const;

export const neutralColors = {
  neutral: "#D7E0FF",
  surface: "#1E213F",
  onAccent: "#1E213F",
  container: "#FFFFFF",
  containerDim: "#EFF1FA",
  surfaceDim: "#161932",
} as const;

export const colors = { ...accentColors, ...neutralColors };

// Adds bracket for twind classes
export const colorClass = Object.fromEntries(
  Object.entries(colors).map(
    ([k, v]) => [k, `[${v}]`],
  ),
) as Record<keyof typeof colors, string>;

export type AccentColor = keyof typeof accentColors;
export type NeutralColor = keyof typeof neutralColors;
