import { computed, effect, signal } from "@preact/signals";

export const timerTypes = ["pomodoro", "short-break", "long-break"] as const;
export type TimerType = (typeof timerTypes)[number];
export const timerStatuses = ["idle", "running", "paused", "complete"] as const;
export type TimerStatus = (typeof timerStatuses)[number];

export const defaultOptionQueue: TimerType[] = [
  "pomodoro",
  "short-break",
  "pomodoro",
  "short-break",
  "pomodoro",
  "short-break",
  "pomodoro",
  "long-break",
];

const SECONDS_PER_MINUTE = 60;
const ONE_SECOND = 1000;

// const isActive = signal(false);
const status = signal<TimerStatus>("idle");
const currentOptionIndex = signal(0);
const typeQueue = signal<TimerType[]>(defaultOptionQueue);
const type = computed(() => typeQueue.value[currentOptionIndex.value]);
const timerDurations = signal<Record<TimerType, number>>({
  pomodoro: 25,
  "short-break": 5,
  "long-break": 30,
});
// const timeLeft = signal(timerDurations.value[currentType.value] * 60);
const timeLeft = signal(2);
const theme = signal("");
const color = signal("");
const callbackId = signal(NaN);

function finish() {
  if (
    currentOptionIndex.value >=
      typeQueue.value.length
  ) {
    currentOptionIndex.value = 0;
    status.value = "complete";
  }
}

function switchToNextTimer() {
  if (status.value === "running" && timeLeft.value < 0) {
    currentOptionIndex.value++;
    timeLeft.value = timerDurations.value[type.value] ?? 0;
  }
}

function updateInterval() {
  if (status.value === "running") {
    callbackId.value = setInterval(() => {
      timeLeft.value--;
    }, ONE_SECOND);
  } else if (callbackId.value) {
    clearInterval(callbackId.value);
  }
}

effect(finish);
effect(switchToNextTimer);
effect(updateInterval);

export const timerState = { type, status, timeLeft };
