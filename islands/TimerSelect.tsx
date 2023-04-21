import TabBar from "../components/TabBar.tsx";
import { createOptionData, timerOptionLabels } from "../utils/labels.ts";
import { timerOption, TimerOption, timerOptions } from "../utils/state.ts";

export default function TimerSelect() {
  return (
    <TabBar
      tabs={createOptionData(timerOptions, timerOptionLabels)}
      value={timerOption.value}
      onChange={(v) => timerOption.value = v as TimerOption}
    />
  );
}
