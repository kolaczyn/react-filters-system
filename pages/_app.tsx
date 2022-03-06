import type { AppProps } from "next/app";
import "bulma/css/bulma.min.css";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
