import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const PopUp = ({ orderPopUp, setOrderPopUp, order, setOrder }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userDetails, setUserDetails] = useState([]);

  const handleOnSubmit = () => {
    const newData = { email, password };
    setUserDetails([...userDetails, newData]);
    setEmail("");
    setPassword("");
  };

  const handleOrder = () => {
    if (order) {
      setOrder(false);
    } else {
      setOrderPopUp(false);
    }
  };
  console.log(userDetails);
  return (
    <div
      className={
        orderPopUp || order
          ? " w-full h-screen z-20 bg-black/90 fixed top-0 left-0"
          : "hidden"
      }
    >
      <div className=" flex flex-col bg-gradient-to-r rounded-xl from-[#5be3bc] to-[#105D5E] fixed z-50 top-1/2 left-1/2 right-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] ">
        <div className=" flex justify-between px-6">
          <h2 className=" text-center my-3 text-2xl font-semibold ">
            Order Now
          </h2>
          <RxCross2
            onClick={handleOrder}
            className="my-4 hover:cursor-pointer"
            size={25}
          />
        </div>
        <form action="" className="flex flex-col px-8 gap-6">
          <input
            onChange={(event) => setEmail(event.target.value)}
            className="px-5 py-2 text-gray-800 rounded-2xl focus:outline-none"
            type="email"
            name="email"
            value={email}
            autoComplete="off"
            placeholder="Enter Your Email ..."
          />
          <input
            onChange={(event) => setPassword(event.target.value)}
            className="px-5 py-2 text-gray-800 rounded-2xl focus:outline-none"
            type="password"
            name="password"
            value={password}
            autoComplete="off"
            placeholder="Enter Your Password "
          />
        </form>
        <span className=" flex justify-center mt-6 ">
          <button
            onClick={handleOnSubmit}
            className=" bg-[#5be3bc] border-none text-xl outline-none"
          >
            Order Now
          </button>
        </span>
      </div>
    </div>
  );
};

export default PopUp;
