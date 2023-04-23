import { JSX } from "preact";

// import { accentColorClass } from "../utils/themeState.ts";

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
                  `bg-accent text-on-accent`,
                "rounded-full px-6 py-3 text-sm font-bold cursor-unset",
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
