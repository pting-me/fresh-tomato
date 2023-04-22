import TabBar from "../components/TabBar.tsx";
import { createOptionData, timerTypeLabels } from "../utils/labels.ts";
import { timerState, timerTypes } from "../utils/state.ts";

export default function TimerSelect() {
  const { type, timeLeft } = timerState;
  console.log(type.value);
  return (
    <TabBar
      tabs={createOptionData(timerTypes, timerTypeLabels)}
      value={type.value}
      // onChange={(v) => type.value = v as TimerType}
    />
  );
}
