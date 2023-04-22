import { useRef } from "preact/hooks";

import { Button } from "../components/Button.tsx";
import { accentColor, fontType } from "../utils/themeState.ts";

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
          <div>
            <Button
              onClick={() => {
                accentColor.value = "red";
              }}
            >
              Red
            </Button>
            <Button
              onClick={() => {
                accentColor.value = "teal";
              }}
            >
              Teal
            </Button>
            <Button
              onClick={() => {
                accentColor.value = "purple";
              }}
            >
              Purple
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                fontType.value = "sans";
              }}
            >
              Sans
            </Button>
            <Button
              onClick={() => {
                fontType.value = "serif";
              }}
            >
              Serif
            </Button>
            <Button
              onClick={() => {
                fontType.value = "mono";
              }}
            >
              Mono
            </Button>
          </div>
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
