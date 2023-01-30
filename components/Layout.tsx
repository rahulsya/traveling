import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  children?: React.ReactNode;
};

function Layout({ children }: Props) {
  const router = useRouter();
  const hideHeader = ["/auth/signin", "/auth/new-user", "/order/checkout"];
  const showHeader = hideHeader.includes(router.pathname);

  return (
    <>
      <Head>
        <title>Staycation.</title>
      </Head>
      {!showHeader && <Navbar />}
      <div className="container w-full lg:mx-auto px-4 lg:px-32 min-h-screen mt-12 mb-32">
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
