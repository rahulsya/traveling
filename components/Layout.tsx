import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

type Props = {
  children?: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Staycation.</title>
      </Head>
      <Navbar />
      <div className="container mx-auto px-4 lg:px-32 min-h-screen mt-12 mb-32">
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
