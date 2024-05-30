import React from "react";

const HeadlineCard = () => {
  return (
    <>
      <section className=" w-full mx-auto p-4 py-9 grid md:grid-cols-3 gap-6">
        <div className=" rounded-2xl relative ">
          {/*---overlay--- */}
          <div className=" absolute text-gray-200 w-full h-full bg-black/40 rounded-2xl">
            <p className=" font-bold text-[21px]  px-2 pt-2">
              Sun's Out,BOGO's Out
            </p>
            <p className="px-3 pb-1">Throught 8/26</p>
            <button className=" border-white bg-white text-black mx-2 py-1 px-3 rounded-lg absolute bottom-2">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-2xl"
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className=" rounded-2xl relative ">
          {/*---overlay--- */}
          <div className=" absolute text-gray-200 w-full h-full bg-black/40 rounded-2xl">
            <p className=" font-bold text-[21px]  px-2 pt-2">New Restaurants</p>
            <p className="px-3 pb-1">Added Daily</p>
            <button className=" border-white bg-white text-black mx-2 py-1 px-3 rounded-lg absolute bottom-2">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-2xl"
            src="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className=" rounded-2xl relative ">
          {/*---overlay--- */}
          <div className=" absolute text-gray-200 w-full h-full bg-black/40 rounded-2xl">
            <p className=" font-bold text-[21px]  px-2 pt-2">
              We Deliver Desserts Too
            </p>
            <p className="px-3 pb-1">Tasty Treats</p>
            <button className=" border-white bg-white text-black mx-2 py-1 px-3 rounded-lg absolute bottom-2">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-2xl"
            src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default HeadlineCard;
