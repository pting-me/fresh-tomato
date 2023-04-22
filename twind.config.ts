import { Options } from "$fresh/plugins/twind.ts";

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
      colors,
    },
  },
};

export default options;
