import { Options } from "$fresh/plugins/twind.ts";

import { camelToKebab } from "./utils/camelToKebab.ts";
import { colors } from "./utils/colors.ts";

const options: Options = {
  selfURL: import.meta.url,
  theme: {
    fontFamily: {
      sans: ["Kumbh Sans"],
      serif: ["Roboto Slab"],
      mono: ["Space Mono"],
    },
    extend: {
      colors: {
        accent: "var(--accent)",
        'accent-hover': "var(--accent-hover)",
        ...camelToKebab(colors),
      },
    },
  },
};

export default options;
