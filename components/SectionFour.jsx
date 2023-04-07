import React from "react";
import Author from "./_child/Author";
import Link from "next/link";
import Image from "next/image";
import fetcher from "@/lib/fetcher";
import Spinner from "./_child/Loading";
import Error from "./_child/Error";

const SectionFour = () => {
  const { data, isLoading, isError } = fetcher("api/posts/");

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <section className="container mx-auto px-5 py-16">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Business</h1>
          <div className="flex flex-col gap-6">
            {data[1] ? <PostCat data={data[1]} /> : <></>}
            {data[2] ? <PostCat data={data[2]} /> : <></>}
            {data[3] ? <PostCat data={data[3]} /> : <></>}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Travel</h1>
          <div className="flex flex-col gap-6">
            {data[4] ? <PostCat data={data[4]} /> : <></>}
            {data[5] ? <PostCat data={data[5]} /> : <></>}
            {data[6] ? <PostCat data={data[6]} /> : <></>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;

function PostCat({ data }) {
  const { id, title, category, img, published, author } = data;

  return (
    <div className="flex gap-5 flex-col md:flex-row">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <Image
            src={img || ""}
            className="rounded"
            width={300}
            height={250}
            alt="image"
            style={{ width: 'auto', height: 'auto' }}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link
            href={`/posts/${id}`}
            className="text-orange-600 hover:text-orange-800"
          >
            {category || "No Category"}
          </Link>
          <Link
            href={`/posts/${id}`}
            className="text-gray-800 hover:text-gray-600"
          >
            - {published || ""}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title || "No Title"}
          </Link>
        </div>
        {author ? <Author {...author} /> : <></>}
      </div>
    </div>
  );
}
