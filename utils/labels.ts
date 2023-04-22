import { TimerStatus, TimerType } from "./timerState.ts";

export const timerTypeLabels: Record<TimerType, string> = {
  "pomodoro": "pomodoro",
  "short-break": "short break",
  "long-break": "long break",
};

export const timerStatusToActionLabels: Record<TimerStatus, string> = {
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
