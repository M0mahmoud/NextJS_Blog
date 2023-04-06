import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Post from "./_child/Post";

const SectionThree = () => {
  const data = [
    {
      id: 1,
      title: "Mahmoud Ali",
      category: "Apple",
      img: "/images/articles/posts/img1.jpg",
      published: "1 Apr 2023",
    },
    {
      id: 2,
      title: "Mahmoud Ali",
      category: "Apple",
      img: "/images/articles/posts/img3.png",
      published: "1 Apr 2023",
    },
    {
      id: 3,
      title: "Mahmoud Ali",
      category: "Apple",
      img: "/images/articles/posts/img2.png",
      published: "1 Apr 2023",
    },
    {
      id: 4,
      title: "Mahmoud Ali",
      category: "Apple",
      img: "/images/articles/posts/img4.png",
      published: "1 Apr 2023",
    },
    {
      id: 5,
      title: "Mahmoud Ali",
      category: "Apple",
      img: "/images/articles/posts/img5.png",
      published: "1 Apr 2023",
    },
    {
      id: 5,
      title: "Mahmoud Ali",
      category: "Apple",
      img: "/images/articles/posts/img5.png",
      published: "1 Apr 2023",
    },
    {
      id: 5,
      title: "Mahmoud Ali",
      category: "Apple",
      img: "/images/articles/posts/img6.png",
      published: "1 Apr 2023",
    },
    {
      id: 5,
      title: "Mahmoud Ali",
      category: "Apple",
      img: "/images/articles/posts/img7.png",
      published: "1 Apr 2023",
    },
  ];

  return (
    <section className="container mx-auto md:px-20 py-16 ">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

      <Swiper
        loop="true"
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((el) => (
          <SwiperSlide key={el.id}>
            <Post data={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SectionThree;
