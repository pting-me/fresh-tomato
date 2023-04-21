import TabBar from "../components/TabBar.tsx";
import { createSelectData } from "../utils/createSelectData.ts";
import { timerType, TimerType, timerTypeLabels } from "../utils/timerType.ts";

export default function TimerTypeSelect() {
  return (
    <TabBar
      tabs={createSelectData(timerTypeLabels)}
      value={timerType.value}
      onChange={(v) => timerType.value = v as TimerType}
    />
  );
}
