// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_app.tsx";
import * as $1 from "./routes/api/joke.ts";
import * as $2 from "./routes/index.tsx";
import * as $$0 from "./islands/Counter.tsx";
import * as $$1 from "./islands/SettingsHookForm.tsx";
import * as $$2 from "./islands/SettingsMultipleSignal.tsx";
import * as $$3 from "./islands/SettingsSingleSignal.tsx";
import * as $$4 from "./islands/Timer.tsx";
import * as $$5 from "./islands/TimerSelect.tsx";

const manifest = {
  routes: {
    "./routes/_app.tsx": $0,
    "./routes/api/joke.ts": $1,
    "./routes/index.tsx": $2,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
    "./islands/SettingsHookForm.tsx": $$1,
    "./islands/SettingsMultipleSignal.tsx": $$2,
    "./islands/SettingsSingleSignal.tsx": $$3,
    "./islands/Timer.tsx": $$4,
    "./islands/TimerSelect.tsx": $$5,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
