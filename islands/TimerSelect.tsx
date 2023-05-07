import TabBar from "../components/TabBar.tsx";
import { createOptionData, timerTypeLabels } from "../utils/labels.ts";
import { timerState, TimerType, timerTypes } from "../utils/timerState.ts";

export default function TimerSelect() {
  const { type, skipToType } = timerState;
  return (
    <TabBar
      tabs={createOptionData(timerTypes, timerTypeLabels)}
      value={type.value}
      onChange={(v: TimerType) => {
        skipToType(v);
      }}
    />
  );
}
