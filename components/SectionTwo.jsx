import React from "react";
import Post from "./_child/Post";

const SectionTwo = () => {
  const data = {
    id: 1,
    title: "Mahmoud Ali",
    category: "Apple",
    img: "/images/img1.jpg",
    published: "1 Apr 2023",
  };
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        <Post data={data} />
        <Post data={data} />
        <Post data={data} />
        <Post data={data} />
        <Post data={data} />
        <Post data={data} />
      </div>
    </section>
  );
};

export default SectionTwo;
