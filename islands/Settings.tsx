import { useRef } from "preact/hooks";

import { Button } from "../components/Button.tsx";

export default function Settings() {
  const ref = useRef<HTMLDialogElement | null>(null);

  return (
    <div>
      <Button onClick={() => ref.current?.showModal()}>Settings</Button>
      <dialog
        ref={ref}
        onClick={(e) => {
          ref.current?.close();
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            onClick={() => {
              ref.current?.close();
            }}
          >
            Close
          </Button>
        </div>
      </dialog>
    </div>
  );
}
