import { clsx } from "clsx";
import { Fragment, JSX } from "preact";
import { useRef } from "preact/hooks";

import { useSignal } from "@preact/signals";

import { Button } from "../components/Button.tsx";
import { CheckIcon } from "../components/CheckIcon.tsx";
import { CloseIcon } from "../components/CloseIcon.tsx";
import { SettingsIcon } from "../components/SettingsIcon.tsx";
import { createOptionData, timerTypeLabels } from "../utils/labels.ts";
import {
  fontType,
  fontTypes,
  theme,
  Theme,
  themes,
} from "../utils/themeState.ts";
import { timerState, timerTypes } from "../utils/timerState.ts";

export default function SettingsMultipleSignal() {
  const ref = useRef<HTMLDialogElement | null>(null);
  const formState = {
    pomodoro: useSignal(timerState.timerDurations.value.pomodoro),
    shortBreak: useSignal(timerState.timerDurations.value.shortBreak),
    longBreak: useSignal(timerState.timerDurations.value.longBreak),
    fontType: useSignal(fontType.value),
    theme: useSignal(theme.value),
  };

  const { timerDurations } = timerState;

  const handleSubmit = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    fontType.value = formState.fontType.value;
    theme.value = formState.theme.value;

    timerDurations.value = {
      pomodoro: formState.pomodoro.value,
      shortBreak: formState.shortBreak.value,
      longBreak: formState.longBreak.value,
    };

    handleClose();
  };

  const handleClose = () => {
    ref.current?.close();
  };

  const typeData = createOptionData(timerTypes, timerTypeLabels);

  return (
    <>
      <button
        class="w-12 h-12 flex items-center justify-center rounded-full"
        onClick={() => ref.current?.showModal()}
        aria-label="Settings"
      >
        <SettingsIcon />
      </button>
      <dialog
        class="bg-transparent w-[540px] max-w-[calc(100vw-2rem)]"
        ref={ref}
      >
        <div
          class="rounded-2xl bg-inverse-surface-bright text-inverse-on-surface"
          onClick={(e) => e.stopPropagation()}
        >
          <div class="px-8 sm:px-10 md:px-12 pt-8 flex justify-between">
            <h1 class="font-bold text-2xl">Settings</h1>

            <Button
              class="rounded-full hover:bg-inverse-surface w-8 h-8 flex items-center justify-center"
              onClick={handleClose}
            >
              <CloseIcon />
            </Button>
          </div>
          <form
            onSubmit={handleSubmit}
          >
            <div class="px-8 sm:px-10 md:px-12 pt-8 flex flex-col gap-8">
              <div>
                <h2 class="uppercase font-bold tracking-[0.375rem]">
                  Time (minutes)
                </h2>
                <div class="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-8">
                  {typeData.map(({ label, value }) => {
                    return (
                      <div class="flex justify-between items-center gap-4 sm:flex-col sm:items-start">
                        <label
                          class="text-inverse-on-surface-variant font-bold"
                          for={value}
                        >
                          {label}
                        </label>
                        <input
                          type="number"
                          class="bg-inverse-surface rounded-xl h-12 p-4 font-bold sm:w-full"
                          value={formState[value].value}
                          onChange={(e) => {
                            formState[value].value = Number(
                              e.currentTarget.value,
                            );
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div class="flex flex-col items-center sm:flex-row justify-between gap-4">
                <h2 class="uppercase font-bold tracking-[0.375rem]">Font</h2>
                <div class="flex gap-4">
                  {fontTypes.map((ft) => {
                    return (
                      <Fragment
                        key={ft}
                      >
                        <input
                          id={ft}
                          class={`fixed opacity-0 pointer-events-none`}
                          type="radio"
                          value={ft}
                          name="fontType"
                        />
                        <label
                          class={clsx(
                            `cursor-pointer w-10 h-10 font-${ft} rounded-full flex items-center justify-center`,
                            ft === formState.fontType.value
                              ? "bg-surface text-on-surface"
                              : "bg-inverse-surface text-inverse-on-surface",
                          )}
                          value={ft}
                          for={ft}
                          onClick={() => {
                            formState.fontType.value = ft;
                          }}
                        >
                          Aa
                        </label>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
              <div class="flex flex-col items-center sm:flex-row justify-between gap-4">
                <h2 class="uppercase font-bold tracking-[0.375rem]">Color</h2>
                <div class="flex gap-4">
                  {Object.entries(themes).map(([key, val]) => {
                    return (
                      <Fragment
                        key={key}
                      >
                        <input
                          id={key}
                          class={`fixed opacity-0 pointer-events-none`}
                          name="theme"
                          type="radio"
                          value={key}
                          onBlur={(e) => console.log(e)}
                          onChange={(e) => console.log(e)}
                        />
                        <label
                          class={clsx(
                            `cursor-pointer w-10 h-10 bg-[${val}] rounded-full flex items-center justify-center`,
                          )}
                          for={key}
                          onClick={() => {
                            formState.theme.value = key as Theme;
                          }}
                        >
                          {key === formState.theme.value && <CheckIcon />}
                        </label>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
            <div class="flex items-end justify-center mt-4">
              <input
                class="bg-accent text-on-accent rounded-full px-6 py-4 min-w-[8.75rem] text-sm font-bold cursor-pointer relative top-4"
                type="submit"
                value="Apply"
              />
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
