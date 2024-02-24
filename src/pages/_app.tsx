import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ContextProvider } from "../ContextProvider";
import { Link } from "react-router-dom";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  );
}
