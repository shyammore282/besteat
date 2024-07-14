import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import MobDrawer from "../mobilenav/MobDrawer";
import { NavLink } from "react-router-dom";

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
            <h1 className=" text-base lg:text-3xl font-semibold flex justify-between pl-4">
              Best
              <span className=" font-bold text-center text-orange-600">
                Eats
              </span>
            </h1>
          </div>

          {/*----Search input---- */}
          <div className="flex bg-gray-300 rounded-full items-center my-3 sm:w-[300px] lg:w-[40%] md:ml-[30px] h-10  shadow-lg shadow-red-100 ">
            <FontAwesomeIcon
              className="pl-3 pr-5 py-2 text-[24px] bg-green-400 rounded-l-full "
              icon={faSearch}
            />
            <input
              className="border-none ml-1 rounded-r-full bg-transparent focus:outline-none h-full w-full  text-gray-800 "
              type="text"
              placeholder="search your best eat ..."
            />
          </div>
          <div className="flex items-center justify-between ">
            <ul className=" gap-3 mx-5 lg:mx-10 hidden md:flex">
              <NavLink to="/">
                <li className="text-xl font-semibold">Home</li>
              </NavLink>
              <NavLink to="/favorites">
                <li className=" text-xl font-semibold">Favorites</li>
              </NavLink>
            </ul>
            {/*----cart button---- */}
            <NavLink to="/cart">
              <button className="bg-black hidden text-white py-1 w-4xl h-10 lg:mr-1 px-4 sm:flex items-center">
                <FontAwesomeIcon className="px-1 " icon={faCartPlus} />
                <span className="hidden sm:flex">Cart</span>
              </button>
            </NavLink>
          </div>

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
