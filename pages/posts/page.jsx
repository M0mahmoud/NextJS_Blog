import Author from "@/components/_child/Author";
import Related from "@/components/_child/Related";
import Layout from "@/layout/Layout";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <Layout>
        <section className="container mx-auto md:px-2 py-16 w-1/2">
          <div className="flex justify-center">
            <Author />
          </div>

          <div className="post py-10">
            <h1 className="font-bold text-4xl text-center pb-5">
              Lorem ipsum dolor, sit amet consectetur
            </h1>
            <p className="text-gray-500 text-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              ad ut officia beatae omnis! Lorem ipsum dolor sit amet consectetur
              adipisicing
            </p>
            <div className="py-10">
              <Image src={"/images/img1.jpg"} width={800} height={550} />
            </div>
            <div className="content  text-gray-600 text-lg flex flex-col gap-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt voluptate temporibus minima ea vel illum optio
                doloribus quo suscipit aliquam.doloribus quo suscipit aliquam.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt voluptate temporibus minima ea vel illum optio
                doloribus quo suscipit aliquam.doloribus quo suscipit aliquam.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt voluptate temporibus minima ea vel illum optio
                doloribus quo suscipit aliquam.doloribus quo suscipit aliquam.
              </p>
            </div>
          </div>
          <Related />
        </section>
      </Layout>
    </>
  );
};

export default page;
