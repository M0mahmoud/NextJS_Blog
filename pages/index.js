import SectionOne from "@/components/SectionOne";
import SectionThree from "@/components/SectionThree";
import SectionTwo from "@/components/SectionTwo";
import Layout from "@/layout/Layout";

import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <>
      <Layout>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </Layout>
    </>
  );
}
