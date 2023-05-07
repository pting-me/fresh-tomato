import { IS_BROWSER } from "$fresh/runtime.ts";
import { clsx } from "clsx";
import { JSX } from "preact";

import { fontType } from "../utils/themeState.ts";
import { formatTime } from "../utils/time.ts";
import { RoundProgressIndicator } from "./RoundProgressIndicator.tsx";

export interface TimerButtonProps
  extends JSX.HTMLAttributes<HTMLButtonElement> {
  startTime: number;
  currentTime: number;
  action: string;
}

export function TimerButton(props: TimerButtonProps) {
  const { currentTime, startTime, action } = props;

  return (
    <button
      class="px-2 py-1 w-72 h-72 sm:w-96 sm:h-96 max-w-full rounded-full timer-container group relative"
      {...props}
      disabled={!IS_BROWSER || props.disabled}
    >
      <div class="flex flex-col items-center justify-center gap-6">
        <RoundProgressIndicator
          class="absolute w-80 h-80 hidden sm:block z-10"
          diameter={320}
          progress={currentTime / startTime}
        />
        <div class="absolute w-[352px] h-[352px] hidden sm:block rounded-full bg-surface-dim group-hover:bg-surface group-active:bg-surface-dim" />
        <RoundProgressIndicator
          class="absolute w-64 h-64 sm:hidden z-10"
          diameter={256}
          progress={currentTime / startTime}
        />
        <div class="absolute w-[272px] h-[272px] sm:hidden rounded-full bg-surface-dim group-hover:bg-surface" />
        <div class="mt-10 z-10">
          <p
            class={clsx(
              "font-bold text-7xl sm:text-8xl",
              fontType.value === "mono" && "tracking-[-0.25rem]",
            )}
          >
            {formatTime(currentTime)}
          </p>
        </div>
        <div class="uppercase font-bold tracking-[1em] pl-4 z-10">
          {action}
        </div>
      </div>
    </button>
  );
}
