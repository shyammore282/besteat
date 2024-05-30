import React from "react";

const Hero = () => {
  return (
    <>
      <section className="w-full mx-auto p-4">
        {/*----Overlay ----- */}
        <div className="max-h-[500px] relative">
          {/*----contant section---- */}
          <div className=" absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
            <h1 className=" px-4 text-xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              The <span className=" text-orange-600">Best</span>
            </h1>
            <h1 className=" px-4 text-xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className=" text-orange-600">Foods</span> Delivered
            </h1>
          </div>
          {/*---img of hero section--- */}
          <img
            className="w-full max-h-[500px] object-cover"
            src="../images/burger.jpg "
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
