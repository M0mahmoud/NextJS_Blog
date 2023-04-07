import Image from "next/image";
import Link from "next/link";
import React from "react";

const Author = ({ name, img, designation }) => {
  if (!name && !img) return <></>;

  return (
    <div className="author flex py-5">
      <Image
        src={img || ""}
        width={50}
        height={50}
        alt="IMAGE"
        className="rounded-full"
        style={{ width: 'auto', height: 'auto' }}
      />
      <div className="flex flex-col justify-center px-4">
        <Link
          href={"/"}
          className="text-md font-bold text-gray-800 hover:text-gray-600"
        >
          {name || "No Name"}
        </Link>
        <span className="text-sm text-gray-500">{designation || ""}</span>
      </div>
    </div>
  );
};

export default Author;
