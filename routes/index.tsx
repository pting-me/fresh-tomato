import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
import Settings from "../islands/Settings.tsx";
import Timer from "../islands/Timer.tsx";
import TimerSelect from "../islands/TimerSelect.tsx";

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md min-h-screen flex flex-col items-center justify-between">
      <div class="mx-auto max-w-screen-md flex flex-col items-center gap-6">
        <Header />
        <TimerSelect />
        <Timer />
        <Settings />
      </div>
      <Footer />
    </div>
  );
}
