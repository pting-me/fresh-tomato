import { Header } from "../components/Header.tsx";
import SettingsMultipleSignal from "../islands/SettingsMultipleSignal.tsx";
import Timer from "../islands/Timer.tsx";
import TimerSelect from "../islands/TimerSelect.tsx";

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md flex flex-col items-center gap-8">
      <Header />
      <TimerSelect />
      <Timer />
      <div class="flex gap-8">
        <SettingsMultipleSignal />
      </div>
    </div>
  );
}
