import React from "react";
import Author from "./Author";
import Link from "next/link";
import Image from "next/image";

const Slide = ({ src, type, date, title, desc }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 mb-5 gap-8">
        <div className="image">
          <Link href={"/"}>
            <Image src={src} width={600} height={600} alt="IMAGE" />
          </Link>
        </div>
        <div className="info flex justify-center flex-col">
          <div className="cat">
            <Link className="text-orange-600 hover:text-orange-800 " href={"/"}>
              {type}
            </Link>
            <Link className="text-gray-800 hover:text-gray-600 " href={"/"}>
              {date}
            </Link>
          </div>
          <div className="title">
            <Link
              className="text-3xl md:text-5xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
              href={"/"}
            >
              {title}
            </Link>
            <p className=" text-gray-500 py-3">{desc}</p>
            <Author />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide;
