import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ContextProvider } from "../ContextProvider";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/cart">Cart</Link></li>
      </ul>
    </nav>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  );
}
