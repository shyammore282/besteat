import React from "react";
import { RxCross2 } from "react-icons/rx";
import { list } from "../../data/Data";

const MobDrawer = ({ nav, setNav }) => {
  return (
    <>
      <div
        className={
          nav
            ? "fixed top-0 left-0 sm:w-[250px] lg:w-[300px] h-screen bg-white  z-10 duration-300"
            : "fixed top-0 left-[-350px] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        {/*---cross button--- */}

        <RxCross2
          className=" absolute top-4 right-4"
          onClick={() => setNav(!nav)}
          size={25}
        />

        <h2 className=" text-xl font-medium p-4">
          Best <span className=" font-bold">Eats</span>
        </h2>
        <ul className="p-4 text-gray-800">
          {list.map((v, i) => {
            return (
              <div className="" key={i}>
                <li className="text-xl py-1 flex hover:cursor-pointer ">
                  <span className="px-2">{v.icon}</span>
                  {v.text}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MobDrawer;
