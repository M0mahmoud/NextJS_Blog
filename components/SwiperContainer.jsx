import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./_child/Slide";
import fetcher from "@/lib/fetcher";
import Spinner from "./_child/Loading";
import Error from "./_child/Error";

const SwiperContainer = () => {
  const { data, isLoading, isError } = fetcher("api/trending/");

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <div>
      <Swiper
        loop="true"
        autoplay={{
          delay: 2000,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((el) => (
          <SwiperSlide key={el.id}>
            <Slide data={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperContainer;
