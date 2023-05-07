import { computed, effect, signal } from "@preact/signals";

import { timerStatusToActionLabels } from "./labels.ts";

export const timerTypes = ["pomodoro", "shortBreak", "longBreak"] as const;
export type TimerType = (typeof timerTypes)[number];
export const timerStatuses = ["idle", "running", "paused", "complete"] as const;
export type TimerStatus = (typeof timerStatuses)[number];

export const defaultOptionQueue: TimerType[] = [
  "pomodoro",
  "shortBreak",
  "pomodoro",
  "shortBreak",
  "pomodoro",
  "shortBreak",
  "pomodoro",
  "longBreak",
];

const SECONDS_PER_MINUTE = 60;
const ONE_SECOND = 1000;

const status = signal<TimerStatus>("idle");
const currentTypeIndex = signal(0);
const typeQueue = signal<TimerType[]>(defaultOptionQueue);
const timerDurations = signal<Record<TimerType, number>>({
  pomodoro: 25,
  "shortBreak": 5,
  "longBreak": 30,
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

/* actions */

function skipToType(newType: TimerType) {
  if (newType === type.value) {
    return;
  }

  let nextIndex = defaultOptionQueue.indexOf(newType, currentTypeIndex.value);
  if (nextIndex === -1) {
    nextIndex = defaultOptionQueue.indexOf(newType);
  }
  currentTypeIndex.value = nextIndex;
  currentTime.value = (timerDurations.value[type.value] ?? 0) *
    SECONDS_PER_MINUTE;

  if (status.value === "complete") {
    status.value = "idle";
  }
}

/* effects */

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

function updateStartTime() {
  if (status.peek() !== "complete") {
    currentTime.value = startTime.value;
  }
}

effect(finish);
effect(switchToNextTimer);
effect(updateInterval);
effect(updateStartTime);

export const timerState = {
  actionLabel,
  currentTime,
  skipToType,
  startTime,
  status,
  timerDurations,
  toggle,
  type,
};
