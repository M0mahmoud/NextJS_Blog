import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Head from "next/head";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="My Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
