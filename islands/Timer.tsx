import { TimerButton } from "../components/TimerButton.tsx";
import { timerStatusLabels } from "../utils/labels.ts";
import { timerState } from "../utils/state.ts";

function formatDigits(n: number) {
  return n > 10 ? String(n) : `0${n}`;
}

function formatTime(time: number) {
  const minutes = formatDigits(Math.floor(time / 60));
  const seconds = formatDigits(time % 60);
  return `${minutes}:${seconds}`;
}

export default function Timer(props: any) {
  // const [time, setTime] = useState(60 * 20);
  // const [isActive, setIsActive] = useState(false);
  // const { state: { isActive, timeLeft } } = props;

  // useInterval(() => setTime(time - 1), isActive ? 1000 : null);

  const { status, timeLeft } = timerState;
  return (
    <TimerButton
      active={status.value === "running"}
      onClick={() => {
        switch (status.value) {
          case "idle":
          case "paused":
            status.value = "running";
            break;
          case "running":
            status.value = "paused";
            break;
          case "complete":
          default:
        }
      }}
    >
      <div class="flex flex-col items-center justify-center gap-6">
        <div class="mt-10">
          <p class="font-bold text-5xl">{formatTime(timeLeft.value)}</p>
        </div>
        <div class="uppercase">
          {timerStatusLabels[status.value]}
        </div>
      </div>
    </TimerButton>
  );
}
