import React, { useState } from "react";
import { data } from "../../data/Data";
import ByPrice from "../filter/ByPrice";
import ByCategory from "../filter/ByCategory";
import FoodCards from "../foodcard/FoodCards";

const Food = () => {
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
        <div className=" flex flex-col lg:flex-row justify-between">
          <ByCategory filterType={filterType} setFoods={setFoods} data={data} />

          <ByPrice filterPrice={filterPrice} />
        </div>
        <FoodCards foods={foods} />
      </section>
    </>
  );
};

export default Food;
