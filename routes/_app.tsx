import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

export default function App({ Component }: AppProps) {
  return (
    <html data-custom="data">
      <Head>
        <title>Tomato</title>
        <link rel="stylesheet" href={asset("style.css")} />
      </Head>
      <body class="bg-gray-800 text-gray-200">
        <Component />
      </body>
    </html>
  );
}
