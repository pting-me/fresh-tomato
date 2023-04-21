import { useState } from "preact/hooks";

import { TimerButton } from "../components/TimerButton.tsx";
import { useInterval } from "../utils/useInterval.ts";

function formatDigits(n: number) {
  return n > 10 ? String(n) : `0${n}`;
}

function formatTime(time: number) {
  const minutes = formatDigits(Math.floor(time / 60));
  const seconds = formatDigits(time % 60);
  return `${minutes}:${seconds}`;
}

export default function Timer() {
  const [time, setTime] = useState(60 * 20);
  const [isActive, setIsActive] = useState(false);

  useInterval(() => setTime(time - 1), isActive ? 1000 : null);
  return (
    <TimerButton active={isActive} onClick={() => setIsActive(!isActive)}>
      <div class="flex flex-col items-center justify-center gap-6">
        <div class="mt-10">
          <p class="font-bold text-5xl">{formatTime(time)}</p>
        </div>
        <div class="uppercase">
          {isActive ? "pause" : "start"}
        </div>
      </div>
    </TimerButton>
  );
}
