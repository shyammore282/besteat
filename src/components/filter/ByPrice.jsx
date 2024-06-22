import React from "react";

const ByPrice = ({ filterPrice }) => {
  return (
    <>
      <section>
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
      </section>
    </>
  );
};

export default ByPrice;
