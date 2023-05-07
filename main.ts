/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import freshTwind from "$fresh/plugins/twind.ts";
import { start } from "$fresh/server.ts";
import freshPostcss, { process } from "$fresh_postcss/mod.ts";

import manifest from "./fresh.gen.ts";
import postcssConfig from "./postcss.config.ts";
import twindConfig from "./twind.config.ts";

await process(postcssConfig);

await start(manifest, {
  plugins: [freshTwind(twindConfig), freshPostcss(postcssConfig)],
});
