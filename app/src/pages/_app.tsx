import "@/styles/globals.css";
import { useEffect, useState } from "react";

import type { AppProps } from "next/app";

import { initMock } from "@/mocks";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && process.env.NEXT_PUBLIC_NODE_ENV === "development") {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      (async () => {
        await initMock();
        setLoading(true);
      })();
    }
  }, [isLoading]);

  return <Component {...pageProps} />;
}
