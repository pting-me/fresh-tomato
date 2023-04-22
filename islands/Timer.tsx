import { TimerButton } from "../components/TimerButton.tsx";
import { timerState } from "../utils/timerState.ts";

export default function Timer(props: any) {
  // const [time, setTime] = useState(60 * 20);
  // const [isActive, setIsActive] = useState(false);
  // const { state: { isActive, timeLeft } } = props;

  // useInterval(() => setTime(time - 1), isActive ? 1000 : null);

  const { actionLabel, status, currentTime, toggle } = timerState;
  return (
    <TimerButton
      action={actionLabel.value}
      currentTime={currentTime.value}
      onClick={toggle}
    />
  );
}
