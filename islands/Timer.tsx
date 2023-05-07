import { TimerButton } from "../components/TimerButton.tsx";
import { timerState } from "../utils/timerState.ts";

export default function Timer() {
  const { actionLabel, currentTime, startTime, toggle } = timerState;
  return (
    <TimerButton
      action={actionLabel.value}
      currentTime={currentTime.value}
      onClick={toggle}
      startTime={startTime.value}
    />
  );
}
