import "../styles/globals.css";
import Layout from "../components/Layout";

import type { AppProps } from "next/app";
import { inter } from "../utils/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans bg-white `}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
