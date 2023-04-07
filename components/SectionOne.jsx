import React from "react";
import SwiperContainer from "./SwiperContainer";

const SectionOne = () => {
  return (
    <section
      className="mx-auto px-5 py-10"
      style={{
        background: 'url("/images/banner.png")',
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto ">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <SwiperContainer />
      </div>
    </section>
  );
};

export default SectionOne;
