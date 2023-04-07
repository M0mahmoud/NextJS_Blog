import React from "react";
import Author from "./Author";
import Link from "next/link";
import Image from "next/image";

const Slide = ({ data }) => {
  const { id, title, category, img, published, description, author } = data;

  return (
    <div className="grid md:grid-cols-2 gap-10 pb-10 items-center ">
      <div className="image">
        <Link href={`/posts/${id}`}>
          <Image
            src={img || "/"}
            width={500}
            height={500}
            alt="image"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link
            href={`/posts/${id}`}
            className="text-orange-600 hover:text-orange-800"
          >
            {category || "Unknown"}
          </Link>
          <Link
            href={`/posts/${id}`}
            className="text-gray-800 hover:text-gray-600"
          >
            - {published || "Unknown"}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="text-3xl md:text-5xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title || "Unknown"}
          </Link>
        </div>
        <p className="text-gray-500 py-3">{description || "description"}</p>
        {author ? <Author {...author} /> : <></>}
      </div>
    </div>
  );
};

export default Slide;
