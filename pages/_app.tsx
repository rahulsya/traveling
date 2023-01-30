import "../styles/globals.css";
import Layout from "../components/Layout";
import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";
import { inter } from "../utils/fonts";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <main className={`${inter.variable} font-sans bg-white `}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </main>
  );
}
