import { IS_BROWSER } from "https:/deno.land/x/fresh@1.1.5/runtime.ts";

import { computed, effect, signal } from "@preact/signals";

import { AccentColor, colors } from "./colors.ts";

const fontTypes = ["sans", "serif", "mono"] as const;
type FontType = (typeof fontTypes)[number];

const accentColor = signal<AccentColor>("red");
const accentColorClass = computed(() => `[${colors[accentColor.value]}]`);

/* Font types are applied globally */
const fontType = signal<FontType>("sans");
effect(() => {
  if (IS_BROWSER) {
    const body = document?.querySelector("body");
    if (body) {
      body.setAttribute("data-font-type", fontType.value);
    }
  }
});

export { accentColor, accentColorClass, fontType };
