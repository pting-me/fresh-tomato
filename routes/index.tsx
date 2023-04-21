import { Header } from "../components/Header.tsx";
import Settings from "../islands/Settings.tsx";
import Timer from "../islands/Timer.tsx";
import TimerTypeSelect from "../islands/TimerTypeSelect.tsx";

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md flex flex-col items-center gap-8">
      <Header />
      <TimerTypeSelect />
      <Timer />
      <Settings />
    </div>
  );
}
