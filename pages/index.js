import SectionFour from "@/components/SectionFour";
import SectionOne from "@/components/SectionOne";
import SectionThree from "@/components/SectionThree";
import SectionTwo from "@/components/SectionTwo";
import Layout from "@/layout/Layout";

import Head from "next/head";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Blog post " />
        <meta name="viewport" content="width=device-width, initial-scale" />
      </Head>
      <Layout>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </Layout>
    </>
  );
}
