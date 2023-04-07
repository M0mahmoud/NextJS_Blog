import React from "react";
import Author from "./Author";
import Image from "next/image";
import Link from "next/link";

import Error from "next/error";
import Spinner from "./Loading";
import fetcher from "@/lib/fetcher";

const Related = () => {
  const { data, isLoading, isError } = fetcher("api/posts/");

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>
      {data.map((el) => (
        <Post {...el} key={el.id} />
      ))}
    </section>
  );
};

export default Related;

function Post({ id, title, category, img, published, author }) {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <Image
            src={img || ""}
            className="rounded"
            width={200}
            height={200}
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
