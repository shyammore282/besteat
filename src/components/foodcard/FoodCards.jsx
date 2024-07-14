import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaCartPlus } from "react-icons/fa6";

const FoodCards = ({ foods }) => {
  return (
    <section className=" grid grid-cols-2 lg:grid-cols-4 gap-4 pt-12">
      {foods.map((items, index) => {
        return (
          <div
            className=" border shadow-lg hover:scale-105 duration-300 rounded-t-lg"
            key={index}
          >
            <Link to={`/details/${index}`}>
              <img
                className="h-[300px] w-full object-cover rounded-t-lg"
                src={items.image}
                alt={items.name}
                loading="lazy"
              />
              <div className="flex justify-between p-4">
                <p className=" font-bold">{items.name}</p>
                <p>
                  <span className=" bg-orange-600 text-white px-3 py-1 rounded-lg">
                    {items.price}
                  </span>
                </p>
              </div>
            </Link>
            <div className="flex justify-between px-5 py-2 mx-6 mt-3 border-t-2  border-t-orange-600">
              <Link to="/favorites">
                <FaHeart
                  className=" text-orange-600 hover:cursor-pointer transition-all duration-75"
                  size={22}
                />
              </Link>
              <Link to="/cart">
                <FaCartPlus
                  className=" text-orange-600 hover:cursor-pointer transition-all duration-75"
                  size={22}
                />
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FoodCards;
