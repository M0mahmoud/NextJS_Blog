import React from "react";
import Author from "./Author";
import Image from "next/image";
import Link from "next/link";

const Related = () => {
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>
      <Post />
      <Post />
      <Post />
      <Post />
      <div className="flex flex-col gap-10"></div>
    </section>
  );
};

export default Related;

function Post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/`}>
          <Image
            src={"/images/img1.jpg"}
            className="rounded"
            width={150}
            height={150}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/`} className="text-orange-600 hover:text-orange-800">
            No Category
          </Link>
          <Link href={`/`} className="text-gray-800 hover:text-gray-600">
            published
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/`}
            className="text-xl  font-bold text-gray-800 hover:text-gray-600"
          >
            Lorem ipsum dolor sit amet consectetur.
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}
