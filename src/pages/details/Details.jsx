import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data/Data";
import PopUp from "../../components/popup/PopUp";

const Details = () => {
  const [foodDetails, setFoodDetails] = useState("");
  const [orderPopUp, setOrderPopUp] = useState(false);

  const { id } = useParams();

  const handleOderPopUp = () => {
    setOrderPopUp(!orderPopUp);
  };

  useEffect(() => {
    if (id) {
      setFoodDetails(data[id]);
    }
  }, [id]);

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 items-center p-20 gap-8 w-full ">
      <div className="flex flex-col rounded-xl shadow-lg shadow-gray-500 hover:scale-105 duration-300">
        <img
          className=" w-full h-[450px] rounded-t-xl object-cover "
          src={foodDetails?.image}
          alt={foodDetails?.name}
        />
        <div className="flex justify-between px-4 items-center mt-5">
          <h2 className=" text-xl font-semibold ">{foodDetails?.name}</h2>
          <h2 className=" text-xl font-semibold ">{foodDetails?.category}</h2>
        </div>
        <div className=" flex items-center justify-between px-4 pb-6 border-t-2 border-orange-600 mx-6 mt-6">
          <span className="mt-6">
            <button className="bg-orange-600 text-white px-3 rounded-lg outline-none border-orange-600">
              {foodDetails?.price}
            </button>
          </span>
          <span className="mt-6">
            <button
              onClick={handleOderPopUp}
              className="bg-orange-600 text-white px-3 rounded-lg outline-none border-orange-600 "
            >
              Order Now
            </button>
          </span>
        </div>
      </div>

      <div className=" flex flex-col px-8">
        <h1 className="text-2xl font-bold text-orange-600 py-3">
          Details Of The Foods
        </h1>
        <span>
          <button className="bg-orange-600 text-white px-3 rounded-lg outline-none border-orange-600">
            Save To Cart
          </button>
        </span>
        <div className="py-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            nostrum porro consequuntur nisi incidunt, quaerat, mollitia cumque
            aut beatae magnam dolorum quod, dignissimos exercitationem magni
            optio? Consectetur minus similique excepturi. Quo officia obcaecati
            aspernatur eos velit placeat quasi corporis, aperiam assumenda quod
            quis et ex, aliquam fuga veritatis unde eius sed dicta odit facilis
            cupiditate! Tenetur doloremque ullam earum cumque. Molestias, quos
            labore maxime voluptatum in laborum quia ipsum fugiat sequi totam
            facere aperiam ullam, beatae, laudantium voluptas saepe asperiores.
            Totam officia vero reiciendis pariatur ipsum maxime possimus eum ut?
            Cum, explicabo tenetur ipsum quod ipsam ullam eius sit facilis
            perferendis. Culpa quod amet cumque totam harum saepe nam magnam?
            Voluptatibus similique tempora fuga architecto quidem, atque
            reprehenderit perspiciatis culpa. Vel soluta hic corrupti?
            Doloribus, animi quo totam libero ab, ipsum esse possimus in veniam
            ipsa sunt et. Aliquid doloribus harum aspernatur distinctio corporis
            numquam dolorum voluptatem magni rerum eligendi?
          </p>
        </div>
      </div>

      <PopUp orderPopUp={orderPopUp} setOrderPopUp={setOrderPopUp} />
    </div>
  );
};

export default Details;
