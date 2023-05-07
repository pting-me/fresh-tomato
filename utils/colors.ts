// Ideally we use these with twind, but I'm not quite sure how to get the Intellisense plugin working

export const accentColors = {
  red: "#F87070",
  teal: "#70F3F8",
  purple: "#D881F8",
} as const;

export const accentVariantColors = {
  redHover: "#f78c8e",
  tealHover: "#8ff3f7",
  purpleHover: "#df9ef7",
} as const;

export const neutralColors = {
  // accent is calculated in twind.config
  onAccent: "#161932",
  surface: "#1E213F",
  surfaceDim: "#161932",
  onSurface: "#D7E0FF",
  onSurfaceVariant: "#FFFFFF",
  inverseSurface: "#EFF1FA",
  inverseSurfaceBright: "#FFFFFF",
  inverseOnSurface: "#161932",
  inverseOnSurfaceVariant: "#16193266",
} as const;

export const colors = {
  ...accentColors,
  ...accentVariantColors,
  ...neutralColors,
};

// Adds bracket for twind classes
export const colorClass = Object.fromEntries(
  Object.entries(colors).map(
    ([k, v]) => [k, `[${v}]`],
  ),
) as Record<keyof typeof colors, string>;

export type AccentColor = keyof typeof accentColors;
export type NeutralColor = keyof typeof neutralColors;
