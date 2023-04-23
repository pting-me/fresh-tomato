import { useRef } from "preact/hooks";

import { Button } from "../components/Button.tsx";
import { CloseIcon } from "../components/CloseIcon.tsx";
import { SettingsIcon } from "../components/SettingsIcon.tsx";
import {
  fontType,
  fontTypes,
  theme,
  Theme,
  themes,
} from "../utils/themeState.ts";

export default function Settings() {
  const ref = useRef<HTMLDialogElement | null>(null);

  return (
    <div>
      <button
        class="text-blue-300"
        onClick={() => ref.current?.showModal()}
        aria-label="Settings"
      >
        <SettingsIcon />
      </button>
      <dialog
        class="rounded-2xl w-[540px] max-w-[calc(100vw-2rem)]"
        ref={ref}
        onClick={(e) => {
          ref.current?.close();
        }}
      >
        <div
          class="m-6 flex flex-col gap-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div class="flex justify-between">
            <h1 class="font-bold text-2xl">Settings</h1>

            <Button
              onClick={() => {
                ref.current?.close();
              }}
            >
              <CloseIcon />
            </Button>
          </div>
          <div>
            <h2 class="uppercase font-bold tracking-[0.5rem]">
              Time (minutes)
            </h2>
            <div class="mt-4">To be implemented</div>
          </div>

          <div class="flex flex-col items-center sm:flex-row justify-between gap-4">
            <h2 class="uppercase font-bold tracking-[0.5rem]">Font</h2>
            <div class="flex gap-4">
              {fontTypes.map((ft) => {
                return (
                  <Button
                    onClick={() => {
                      fontType.value = ft;
                    }}
                    class={`w-10 h-10 font-${ft} bg-neutral rounded-full`}
                    aria-label={ft}
                  >
                    Aa
                  </Button>
                );
              })}
            </div>
          </div>
          <div class="flex flex-col items-center sm:flex-row justify-between gap-4">
            <h2 class="uppercase font-bold tracking-[0.5rem]">Color</h2>
            <div class="flex gap-4">
              {Object.entries(themes).map(([key, val]) => {
                return (
                  <Button
                    onClick={() => {
                      theme.value = key as Theme;
                    }}
                    class={`w-10 h-10 rounded-full bg-[${val}]`}
                    aria-label={key}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
