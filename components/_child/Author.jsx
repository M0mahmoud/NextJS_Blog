import Image from "next/image";
import Link from "next/link";
import React from "react";

const Author = () => {
  return (
    <div className="outhor flex py-5">
      <Image
        src={"/images/author/author1.jpg"}
        className="rounded-full"
        width={"60"}
        height={"60"}
        alt="AUTHOR IMAGE"
      />
      <div className="flex flex-col justify-center px-4 ">
        <Link
          href={"/"}
          className="text-md font-bold text-gray-800 hover:text-gray-600 "
        >
          Mahmoud Mohamed
        </Link>
        <span className="text-sm text-gray-500">CEO and Founder</span>
      </div>
    </div>
  );
};

export default Author;
