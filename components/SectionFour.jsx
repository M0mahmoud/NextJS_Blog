import React from "react";
import Author from "./_child/Author";
import Link from "next/link";
import Image from "next/image";

const SectionFour = () => {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Business</h1>
          <div className="flex flex-col gap-6">
            <PostCat />
            <PostCat />
            <PostCat />
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Travel</h1>
          <div className="flex flex-col gap-6">
            <PostCat />
            <PostCat />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;

function PostCat() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/`}>
          <Image
            src={"/images/img1.jpg"}
            className="rounded"
            width={200}
            height={200}
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
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            No Title
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}
