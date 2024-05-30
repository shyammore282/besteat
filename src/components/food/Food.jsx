import React, { useState } from "react";
import { data } from "../../data/Data";

const Food = () => {
  // state for the foods
  const [foods, setFoods] = useState(data);

  // filter for the burgers,pizza.salads etc
  const filterType = (category) => {
    setFoods(
      data.filter((value) => {
        return value.category === category;
      })
    );
  };

  // filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((value) => {
        return value.price === price;
      })
    );
  };

  return (
    <>
      <section className="w-full mx-auto p-4 py-12">
        <h1 className=" text-orange-600 text-3xl  text-center font-bold">
          Top Rated Menu Items
        </h1>
        {/*----filter row---- */}
        <div className=" flex flex-col lg:flex-row justify-between">
          {/*---filter by types----  */}
          <div className="">
            <h2 className=" font-bold text-gray-700 py-2">Filter Types</h2>
            <div className=" flex flex-wrap justify-between">
              <button
                onClick={() => setFoods(data)}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:cursor-pointer"
              >
                All
              </button>
              <button
                onClick={() => filterType("burger")}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:cursor-pointer"
              >
                Burgers
              </button>
              <button
                onClick={() => filterType("pizza")}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:cursor-pointer"
              >
                Pizza
              </button>
              <button
                onClick={() => filterType("salad")}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:cursor-pointer"
              >
                Salads
              </button>
              <button
                onClick={() => filterType("chicken")}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:cursor-pointer"
              >
                chicken
              </button>
            </div>
          </div>

          {/*----filter by price--- */}
          <div className="">
            <h2 className="font-bold text-gray-700 py-2">Filter Price</h2>
            <div className=" flex flex-wrap justify-between max-w-[390px] w-full">
              <button
                onClick={() => filterPrice("Rs.300")}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:cursor-pointer"
              >
                Rs.300
              </button>
              <button
                onClick={() => filterPrice("Rs.400")}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:cursor-pointer"
              >
                Rs.400
              </button>
              <button
                onClick={() => filterPrice("Rs.500")}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:cursor-pointer"
              >
                Rs.500
              </button>
              <button
                onClick={() => filterPrice("Rs.600")}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:cursor-pointer"
              >
                Rs.600
              </button>
            </div>
          </div>
        </div>

        {/*----display images--- */}

        <section className=" grid grid-cols-2 lg:grid-cols-4 gap-4 pt-12">
          {foods.map((items, index) => {
            return (
              <div
                className=" border shadow-lg hover:scale-105 duration-300 rounded-t-lg"
                key={index}
              >
                <img
                  className="h-[300px] w-full object-cover rounded-t-lg"
                  src={items.image}
                  alt={items.name}
                />
                <div className="flex justify-between p-4">
                  <p className=" font-bold">{items.name}</p>
                  <p>
                    <span className=" bg-orange-600 text-white px-3 py-1 rounded-lg">
                      {items.price}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Food;
