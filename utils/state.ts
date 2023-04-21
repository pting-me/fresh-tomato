import { signal } from "@preact/signals";

export const timerOptions = ["pomodoro", "short-break", "long-break"] as const;

export type TimerOption = (typeof timerOptions)[number];

export const timerOption = signal<TimerOption>("pomodoro");
