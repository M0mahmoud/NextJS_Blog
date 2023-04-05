import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./_child/Slide";

const SwiperContainer = () => {
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
        {DUMMY_DATA.map((el) => (
          <SwiperSlide key={el.id}>
            <Slide
              src={el.src}
              type={el.type}
              date={el.date}
              title={el.title}
              desc={el.desc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperContainer;

const DUMMY_DATA = [
  {
    id: 1,
    src: "/images/img1.jpg",
    type: "Business, Travel",
    date: "-April 5, 2023    ",
    title: "Your Most Unhappy Customers Are Your Greatest Source Of Learnning",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit amet sunt recusandae illum eaque deserunt doloremque, ipsa reiciendis consequuntur quos. Eligendi similique atque asperiores minus iusto voluptate vitae provident?",
  },
  {
    id: 2,
    src: "/images/img2.jpg",
    type: "Business, Travel",
    date: "-April 5, 2023    ",
    title: "Your Most Unhappy Customers Are Your Greatest Source Of Learnning",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit amet sunt recusandae illum eaque deserunt doloremque, ipsa reiciendis consequuntur quos. Eligendi similique atque asperiores minus iusto voluptate vitae provident?",
  },
  {
    id: 3,
    src: "/images/img3.png",
    type: "Business, Travel",
    date: "-April 5, 2023    ",
    title: "Your Most Unhappy Customers Are Your Greatest Source Of Learnning",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit amet sunt recusandae illum eaque deserunt doloremque, ipsa reiciendis consequuntur quos. Eligendi similique atque asperiores minus iusto voluptate vitae provident?",
  },
  {
    id: 4,
    src: "/images/img4.png",
    type: "Business, Travel",
    date: "-April 5, 2023    ",
    title: "Your Most Unhappy Customers Are Your Greatest Source Of Learnning",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit amet sunt recusandae illum eaque deserunt doloremque, ipsa reiciendis consequuntur quos. Eligendi similique atque asperiores minus iusto voluptate vitae provident?",
  },
  {
    id: 5,
    src: "/images/img5.png",
    type: "Business, Travel",
    date: "-April 5, 2023    ",
    title: "Your Most Unhappy Customers Are Your Greatest Source Of Learnning",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit amet sunt recusandae illum eaque deserunt doloremque, ipsa reiciendis consequuntur quos. Eligendi similique atque asperiores minus iusto voluptate vitae provident?",
  },
];
