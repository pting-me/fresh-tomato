import { computed, effect, signal } from "@preact/signals";

import { timerStatusToActionLabels } from "./labels.ts";

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
const ONE_SECOND = 2;

const status = signal<TimerStatus>("idle");
const currentTypeIndex = signal(0);
const typeQueue = signal<TimerType[]>(defaultOptionQueue);
const timerDurations = signal<Record<TimerType, number>>({
  // pomodoro: 25,
  // "short-break": 5,
  // "long-break": 30,
  pomodoro: 3,
  "short-break": 1,
  "long-break": 1,
});

const callbackId = signal(NaN);
const type = computed(() => typeQueue.value[currentTypeIndex.value]);
const actionLabel = computed(() => timerStatusToActionLabels[status.value]);

const startTime = computed(() =>
  timerDurations.value[type.value] * SECONDS_PER_MINUTE
);
const currentTime = signal(
  startTime.value,
);

function toggle() {
  switch (status.value) {
    case "running":
      status.value = "paused";
      break;
    case "complete":
      currentTypeIndex.value = 0;
      currentTime.value = startTime.value;
      // fallthrough
    case "idle":
    case "paused":
    default:
      status.value = "running";
  }
}

function finish() {
  if (
    currentTypeIndex.value >=
      typeQueue.value.length
  ) {
    currentTypeIndex.value = typeQueue.value.length - 1;
    status.value = "complete";
  }
}

function switchToNextTimer() {
  if (status.value === "running" && currentTime.value < 0) {
    currentTypeIndex.value++;
    currentTime.value = (timerDurations.value[type.value] ?? 0) *
      SECONDS_PER_MINUTE;
  }
}

function updateInterval() {
  if (status.value === "running") {
    callbackId.value = setInterval(() => {
      currentTime.value--;
    }, ONE_SECOND);
  } else if (callbackId.value) {
    clearInterval(callbackId.value);
  }
}

effect(finish);
effect(switchToNextTimer);
effect(updateInterval);

export const timerState = {
  actionLabel,
  currentTime,
  startTime,
  status,
  toggle,
  type,
};
