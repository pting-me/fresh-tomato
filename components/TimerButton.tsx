import { IS_BROWSER } from "$fresh/runtime.ts";
import { JSX } from "preact";

import { formatTime } from "../utils/time.ts";

export interface TimerButtonProps
  extends JSX.HTMLAttributes<HTMLButtonElement> {
  startTime?: number;
  currentTime: number;
  action: string;
}

export function TimerButton(props: TimerButtonProps) {
  const { currentTime, action } = props;
  return (
    <button
      class="px-2 py-1 border(gray-700 4) w-72 h-72 sm:w-96 sm:h-96 max-w-full rounded-full"
      {...props}
      disabled={!IS_BROWSER || props.disabled}
    >
      <div class="flex flex-col items-center justify-center gap-6">
        <div class="mt-10">
          <p class="font-bold text-7xl sm:text-8xl">
            {formatTime(currentTime)}
          </p>
        </div>
        <div class="uppercase font-bold tracking-[1em] pl-4">
          {action}
        </div>
      </div>
    </button>
  );
}
