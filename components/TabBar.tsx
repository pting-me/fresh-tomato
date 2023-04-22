import { JSX } from "preact";

import { colorClass } from "../utils/colors.ts";
import { accentColorClass } from "../utils/themeState.ts";

function classNames(...classes: (string | false)[]) {
  return classes.filter(Boolean).join(" ");
}

interface Tab {
  label: string;
  value: string;
}

interface TabBarProps {
  tabs: Tab[];
  value: string;
  onChange?: (value: string) => void;
}

export default function TabBar(props: TabBarProps) {
  const { tabs, value, onChange = () => {} } = props;

  const handleClick = (e: JSX.TargetedMouseEvent<HTMLButtonElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <div>
      <div>
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((t) => (
            <button
              key={t.value}
              value={t.value}
              onClick={handleClick}
              disabled
              className={classNames(
                t.value === value &&
                  `bg-${accentColorClass} text-${colorClass.onAccent}`,
                "rounded-full px-4 py-3 text-sm font-medium cursor-unset",
              )}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
