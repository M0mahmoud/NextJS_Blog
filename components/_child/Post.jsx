import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./Author";

const Post = ({ id, title, category, img, published, author, subtitle }) => {
  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <Image
            src={img || "/"}
            className="rounded"
            width={500}
            height={350}
            alt="IMAGE"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
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
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title || "Title"}
          </Link>
        </div>
        <p className="text-gray-500 py-3">{subtitle || "No SubTitle"}</p>
        {author ? <Author {...author}></Author> : <></>}
      </div>
    </div>
  );
};

export default Post;
