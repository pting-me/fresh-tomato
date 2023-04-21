import { JSX } from "preact";

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
              className={classNames(
                t.value === value
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-500 hover:text-gray-700",
                "rounded-md px-3 py-2 text-sm font-medium",
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
