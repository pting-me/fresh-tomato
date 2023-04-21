import { TimerOption } from "./state.ts";

export const timerOptionLabels: Record<TimerOption, string> = {
  "pomodoro": "Pomodoro",
  "short-break": "Short Break",
  "long-break": "Long Break",
};

export function createOptionData<TOption extends string>(
  options: readonly TOption[],
  labels: Record<TOption, string>,
) {
  return options.map((t) => ({ label: labels[t], value: t }));
}
