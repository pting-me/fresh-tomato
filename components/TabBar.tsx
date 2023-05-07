import { clsx } from "https:/esm.sh/clsx@1.2.1";
import { JSX } from "preact";

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
    <div class="mb-8">
      <nav className="flex space-x-4 rounded-full bg-surface-dim p-2" aria-label="Tabs">
        {tabs.map((t) => (
          <button
            key={t.value}
            value={t.value}
            onClick={handleClick}
            disabled
            className={clsx(
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
  );
}
