import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Post from "./_child/Post";
import Spinner from "./_child/Loading";
import Error from "./_child/Error";
import fetcher from "@/lib/fetcher";

const SectionThree = () => {
  const { data, isLoading, isError } = fetcher("api/popular/");

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <section className="container mx-auto px-5 py-16 ">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      <Swiper
        loop="true"
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {data.map((el) => (
          <SwiperSlide key={el.id}>
            <Post {...el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SectionThree;
