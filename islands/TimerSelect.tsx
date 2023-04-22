import TabBar from "../components/TabBar.tsx";
import { createOptionData, timerTypeLabels } from "../utils/labels.ts";
import { timerState, timerTypes } from "../utils/timerState.ts";

export default function TimerSelect() {
  const { type } = timerState;
  return (
    <TabBar
      tabs={createOptionData(timerTypes, timerTypeLabels)}
      value={type.value}
      // onChange={(v) => type.value = v as TimerType}
    />
  );
}
