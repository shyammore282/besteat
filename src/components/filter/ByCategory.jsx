import React from "react";

const ByCategory = ({ filterType, setFoods, data }) => {
  return (
    <>
      <section>
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
      </section>
    </>
  );
};

export default ByCategory;
