import React from "react";
import Post from "./_child/Post";
import fetcher from "@/lib/fetcher";
import Spinner from "./_child/Loading";
import Error from "./_child/Error";

const SectionTwo = () => {
  const { data, isLoading, isError } = fetcher("api/posts/");

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <section className="container  md:px-15 mx-auto px-5 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data && data.map((el) => <Post {...el} key={el.id} />)}
      </div>
    </section>
  );
};

export default SectionTwo;
