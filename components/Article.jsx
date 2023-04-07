import Image from "next/image";
import Author from "./_child/Author";
import Related from "./_child/Related";

function Article({ title, img, subtitle, description, author }) {
  return (
    <>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          {author ? <Author {...author} /> : <></>}
        </div>

        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            {title || "No Title"}
          </h1>

          <p className="text-gray-500 text-xl text-center">
            {subtitle || "No Title"}
          </p>
          <div className="py-10">
            <Image
              style={{ width: "auto", height: "auto" }}
              src={img || "/"}
              width={900}
              height={600}
              alt="IMAGE"
            />
          </div>

          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            {description || "No Description"}
          </div>
        </div>

        <Related />
      </section>
    </>
  );
}

export default Article;
