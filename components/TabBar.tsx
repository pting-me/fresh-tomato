import { clsx } from "https:/esm.sh/clsx@1.2.1";
import { JSX } from "preact";

import { TimerType } from "../utils/timerState.ts";

interface Tab {
  label: string;
  value: TimerType;
}

interface TabBarProps {
  tabs: Tab[];
  value: TimerType;
  onChange?: (value: TimerType) => void;
}

export default function TabBar(props: TabBarProps) {
  const { tabs, value, onChange = () => {} } = props;

  const handleClick = (e: JSX.TargetedMouseEvent<HTMLButtonElement>) => {
    onChange(e.currentTarget.value as TimerType);
  };

  return (
    <div class="mb-2 z-10">
      <nav
        className="flex space-x-4 rounded-full bg-surface-dim p-2"
        aria-label="Tabs"
      >
        {tabs.map((t) => (
          <button
            key={t.value}
            value={t.value}
            onClick={handleClick}
            className={clsx(
              t.value === value
                ? `bg-accent text-on-accent`
                : "text-on-surface text-opacity-50 hover:text-opacity-100",
              "rounded-full px-6 py-3 text-sm font-bold",
            )}
          >
            {t.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
