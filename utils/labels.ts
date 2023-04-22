import { TimerStatus, TimerType } from "./state.ts";

export const timerTypeLabels: Record<TimerType, string> = {
  "pomodoro": "Pomodoro",
  "short-break": "Short Break",
  "long-break": "Long Break",
};

export const timerStatusLabels: Record<TimerStatus, string> = {
  "complete": "Restart",
  "idle": "Start",
  "paused": "Start",
  "running": "Pause",
};

export function createOptionData<TOption extends string>(
  options: readonly TOption[],
  labels: Record<TOption, string>,
) {
  return options.map((t) => ({ label: labels[t], value: t }));
}
