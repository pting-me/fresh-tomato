import { IS_BROWSER } from "$fresh/runtime.ts";
import { JSX } from "preact";

export interface TimerButtonProps
  extends JSX.HTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

export function TimerButton(props: TimerButtonProps) {
  return (
    <button
      class="px-2 py-1 border(gray-700 4) w-64 h-64 max-w-full rounded-full"
      {...props}
      disabled={!IS_BROWSER || props.disabled}
    />
  );
}
