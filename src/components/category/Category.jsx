import React from "react";
import { categories } from "../../data/Data";

const Category = () => {
  return (
    <>
      <section className="w-full px-4 pt-5">
        <h1 className="text-orange-600 font-bold text-center text-4xl p-5">
          Top Rated Menu Items
        </h1>
        {/*---categories */}
        <div className=" grid grid-cols-2 gap-6 md:grid-cols-4 py-5">
          {categories.map((value, index) => {
            return (
              <div
                className=" flex justify-between items-center bg-gray-100 rounded-lg p-4"
                key={index}
              >
                <h3 className=" font-bold sm:text-xl">{value.name}</h3>
                <img className=" w-20" src={value.image} alt="" />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Category;
