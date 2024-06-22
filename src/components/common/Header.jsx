import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import MobDrawer from "../mobilenav/MobDrawer";

const Header = () => {
  // state for nav
  const [nav, setNav] = useState(false);

  return (
    <>
      <header className=" w-full flex container mx-auto p-4 shadow-xl rounded-xl">
        <nav className="flex items-center h-10 justify-between mx-8 w-full ">
          {/*----left side of navbar---- */}
          <div className="flex items-center ">
            <div
              className="cursor-pointer text-2xl lg:text-3xl py-3 "
              onClick={() => setNav(!nav)}
            >
              <FontAwesomeIcon className="px-1" icon={faBars} />
            </div>
            <h1 className=" text-base lg:text-3xl font-semibold flex justify-between ">
              Best <span className=" font-bold text-center">Eats</span>
            </h1>
          </div>

          {/*----Search input---- */}
          <div className="flex bg-gray-300 rounded-full items-center my-3 sm:w-[200px] lg:w-[400px] sm:ml-[55px] lg:ml-[80px] h-10 ">
            <FontAwesomeIcon className="px-2" icon={faSearch} />
            <input
              className=" rounded-full border-non bg-transparent sm:w-[160px] mx-2 py-2 focus:outline-none w-full"
              type="text"
              placeholder="search your best eat"
            />
          </div>
          {/*----cart button---- */}
          <button className="bg-black text-white py-1 w-4xl h-10 lg:mr-1 px-4 md:flex md:items-center">
            <FontAwesomeIcon className="px-1" icon={faCartPlus} />
            <span className="hidden md:flex">Cart</span>
          </button>
          {/*---mobile menu----- */}
          {/*----over lay---- */}

          {nav ? (
            <div className=" bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
          ) : (
            ""
          )}

          {/*---side drawer menu---- */}
          <MobDrawer nav={nav} setNav={setNav} />
        </nav>
      </header>
    </>
  );
};

export default Header;
