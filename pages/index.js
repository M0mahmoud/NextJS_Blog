import Layout from "@/layout/Layout";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionFour from "@/components/SectionFour";
import SectionThree from "@/components/SectionThree";

import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <>
      <Layout>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </Layout>
    </>
  );
}
