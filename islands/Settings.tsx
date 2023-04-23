import { clsx } from "clsx";
import { Fragment } from "preact";
import { useRef } from "preact/hooks";
import { useForm } from "react-hook-form";

import { Button } from "../components/Button.tsx";
import { CheckIcon } from "../components/CheckIcon.tsx";
import { CloseIcon } from "../components/CloseIcon.tsx";
import { SettingsIcon } from "../components/SettingsIcon.tsx";
import { createOptionData, timerTypeLabels } from "../utils/labels.ts";
import {
  fontType,
  FontType,
  fontTypes,
  theme,
  Theme,
  themes,
} from "../utils/themeState.ts";
import { timerState, TimerType, timerTypes } from "../utils/timerState.ts";

interface FieldValues {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  fontType: string;
  theme: string;
}

export default function Settings() {
  const ref = useRef<HTMLDialogElement | null>(null);

  const { timerDurations } = timerState;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      fontType: fontType.value,
      theme: theme.value,
      ...timerDurations.value,
    },
  });

  const onValid = (values: FieldValues) => {
    const {
      fontType: fontTypeInput,
      theme: themeInput,
      ...timerDurationsValue
    } = values;
    fontType.value = fontTypeInput as FontType;
    theme.value = themeInput as Theme;

    timerDurations.value = Object.fromEntries(
      Object.entries(timerDurationsValue).map(([k, v]) => [k, Number(v)]),
    ) as Record<TimerType, number>;

    handleClose();
  };

  const handleClose = () => {
    ref.current?.close();
  };

  const typeData = createOptionData(timerTypes, timerTypeLabels);

  return (
    <>
      <button
        onClick={() => ref.current?.showModal()}
        aria-label="Settings"
      >
        <SettingsIcon />
      </button>
      <dialog
        class="bg-transparent w-[540px] max-w-[calc(100vw-2rem)]"
        ref={ref}
        onClick={(e) => {
          ref.current?.close();
        }}
      >
        <div
          class="rounded-2xl bg-inverse-surface-bright text-inverse-on-surface"
          onClick={(e) => e.stopPropagation()}
        >
          <form
            onSubmit={handleSubmit(onValid)}
          >
            <div class="px-8 sm:px-10 md:px-12 pt-8 flex flex-col gap-8">
              <div class="flex justify-between">
                <h1 class="font-bold text-2xl">Settings</h1>

                <Button
                  onClick={handleClose}
                >
                  <CloseIcon />
                </Button>
              </div>
              <div>
                <h2 class="uppercase font-bold tracking-[0.5rem]">
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
                          {...register(value)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div class="flex flex-col items-center sm:flex-row justify-between gap-4">
                <h2 class="uppercase font-bold tracking-[0.5rem]">Font</h2>
                <div class="flex gap-4">
                  {fontTypes.map((ft) => {
                    return (
                      <Fragment
                        key={ft}
                      >
                        <input
                          id={ft}
                          class={`fixed opacity-0 pointer-events-none`}
                          {...register("fontType")}
                          type="radio"
                          value={ft}
                        />
                        <label
                          class={clsx(
                            `cursor-pointer w-10 h-10 font-${ft} rounded-full flex items-center justify-center`,
                            ft === watch("fontType")
                              ? "bg-surface text-on-surface"
                              : "bg-inverse-surface text-inverse-on-surface",
                          )}
                          for={ft}
                        >
                          Aa
                        </label>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
              <div class="flex flex-col items-center sm:flex-row justify-between gap-4">
                <h2 class="uppercase font-bold tracking-[0.5rem]">Color</h2>
                <div class="flex gap-4">
                  {Object.entries(themes).map(([key, val]) => {
                    return (
                      <Fragment
                        key={key}
                      >
                        <input
                          id={key}
                          class={`fixed opacity-0 pointer-events-none`}
                          {...register("theme")}
                          type="radio"
                          value={key}
                        />
                        <label
                          class={clsx(
                            `cursor-pointer w-10 h-10 bg-[${val}] rounded-full flex items-center justify-center`,
                          )}
                          for={key}
                        >
                          {key === watch("theme") && <CheckIcon />}
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
