import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

import { colorClass } from "../utils/colors.ts";

export default function App({ Component }: AppProps) {
  return (
    <html data-font-type="sans" data-accent-color="red">
      <Head>
        <title>Fresh Tomato</title>
        <link rel="stylesheet" href={asset("style.css")} />
      </Head>
      <body class={`bg-${colorClass.surface} text-${colorClass.onSurface}`}>
        <Component />
      </body>
    </html>
  );
}
