import React, { useState } from "react";
import { data } from "../../data/Data";
import ByPrice from "../filter/ByPrice";
import ByCategory from "../filter/ByCategory";

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
          Top Rated Foods
        </h1>
        {/*----filter row---- */}
        <div className=" flex flex-col lg:flex-row justify-between">
          {/*---filter by types----  */}
          <ByCategory filterType={filterType} setFoods={setFoods} data={data} />

          {/*----filter by price--- */}
          <ByPrice filterPrice={filterPrice} />
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
