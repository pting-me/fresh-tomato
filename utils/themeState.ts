import { IS_BROWSER } from "https:/deno.land/x/fresh@1.1.5/runtime.ts";

import { effect, signal } from "@preact/signals";

import { AccentColor, accentColors } from "./colors.ts";

export const fontTypes = ["sans", "serif", "mono"] as const;
export type FontType = (typeof fontTypes)[number];

export const themes = accentColors;
export type Theme = keyof typeof themes;

// This doesn't necessarily have to match AccentColor
const theme = signal<AccentColor>("red");
effect(() => {
  if (IS_BROWSER) {
    const body = document?.querySelector("body");
    if (body) {
      body.setAttribute("data-theme", theme.value);
    }
  }
});

const fontType = signal<FontType>("sans");
effect(() => {
  if (IS_BROWSER) {
    const body = document?.querySelector("body");
    if (body) {
      body.setAttribute("data-font-type", fontType.value);
    }
  }
});

export { fontType, theme };
