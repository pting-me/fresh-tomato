import { clsx } from "clsx";
import { JSX } from "preact";

const STROKE_RATIO = 32;

function generateProgressBarPath(progress: number, d: number): string {
  // when p = 1, it acts like 0, so just set it to be really close to 1
  const p = progress === 1 ? 0.9999 : progress;

  // radius
  const r = d / 2;

  // stroke width, radius
  const sw = d / STROKE_RATIO;
  const swr = sw / 2;

  const largeArcFlag = p >= 0.5 ? 1 : 0;
  const x = r + r * Math.cos(2 * Math.PI * p - Math.PI / 2);
  const y = r + r * Math.sin(2 * Math.PI * p - Math.PI / 2);

  const dx = -sw * Math.cos(2 * Math.PI * p - Math.PI / 2);
  const dy = -sw * Math.sin(2 * Math.PI * p - Math.PI / 2);

  return `M ${r},0 A ${r},${r} 0,${largeArcFlag},1 ${x},${y} a ${swr},${swr} 0,0,1 ${dx},${dy} A ${
    r - sw
  },${r - sw} 0,${largeArcFlag},0 ${r},${sw} a ${swr},${swr} 0,0,1 0,${
    -1 * sw
  } z`;
}

export interface RoundProgressIndicatorProps
  extends JSX.HTMLAttributes<HTMLDivElement> {
  diameter: number;
  progress: number;
}

export function RoundProgressIndicator(props: RoundProgressIndicatorProps) {
  const { diameter, progress, class: className, ...rest } = props;

  return (
    <div className={clsx("flex justify-center items-center", className)}>
      <div
        class={`bg-accent w-[${diameter}px] h-[${diameter}px]`}
        style={{
          clipPath: `path("${generateProgressBarPath(progress, diameter)}")`,
        }}
        {...rest}
      >
      </div>
    </div>
  );
}
