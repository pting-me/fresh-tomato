import { Head } from "$fresh/runtime.ts";

import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh Tomato</title>
      </Head>
      <div class="bg-gray-800 min-h-screen text-white">
        <div class="p-4 mx-auto max-w-screen-md">
          <img
            src="/logo.svg"
            class="w-32 h-32"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <p class="my-6">
            Welcome to `fresh`. Try updating this message in the
            ./routes/index.tsx file, and refresh.
          </p>
          <Counter start={3} />
        </div>
      </div>
    </>
  );
}
