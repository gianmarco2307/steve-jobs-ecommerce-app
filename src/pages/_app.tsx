import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ContextProvider } from "../ContextProvider";
import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  );
}
