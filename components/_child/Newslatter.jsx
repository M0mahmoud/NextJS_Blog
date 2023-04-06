import React from "react";

const Newslatter = () => {
  return (
    <section className="bg-gray-50 mt-20">
      <div className="container mx-auto md:px-20 py-16 text-center">
        <h1 className="font-bold text-3xl">Subscribe Newslatter</h1>

        <div className="py-4">
          <input
            type="email"
            className="input-footer"
            placeholder="Enter Your Email"
          />
        </div>

        <button className="bg-orange-400 hover:bg-orange-500 transition-colors px-20 py-3 rounded-full text-gray-50 text-xl">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newslatter;
