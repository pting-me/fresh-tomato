export function Footer() {
  return (
    <div class="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between w-full mx-4 max-w-screen-md">
      <a href="https://fresh.deno.dev" class="relative">
        <div class="absolute w-full h-full rounded hover:bg-white opacity-5">
        </div>
        <img
          width="197"
          height="37"
          src="https://fresh.deno.dev/fresh-badge-dark.svg"
          alt="Made with Fresh"
        />
      </a>
      <div class="text-center sm:text-right">
        <div>
          <span class="opacity-50">
            Made by{" "}
          </span>
          <a
            class="underline opacity-50 hover:opacity-100"
            href="https://github.com/pting-me"
          >
            @pting-me
          </a>
        </div>
        <div>
          <span class="opacity-50">
            Design by{" "}
          </span>
          <a
            class="underline opacity-50 hover:opacity-100"
            href="https://frontendmentor.io"
          >
            Frontend Mentor
          </a>
        </div>
      </div>
    </div>
  );
}
