import { signal } from "@preact/signals";

export const timerTypeLabels = {
  "pomodoro": "Pomodoro",
  "short-break": "Short Break",
  "long-break": "Long Break",
} as const;
export type TimerType = keyof typeof timerTypeLabels;

export const timerType = signal<TimerType>("pomodoro");
