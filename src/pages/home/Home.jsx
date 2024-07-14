import React, { useRef, useState } from "react";
import Hero from "../../components/hero/Hero";
import HeadlineCard from "../../components/headline/HeadlineCard";
import Food from "../../components/food/Food";
import Category from "../../components/category/Category";
import { BsArrowDownCircleFill, BsArrowUpCircleFill } from "react-icons/bs";
import PopUp from "../../components/popup/PopUp";

const Home = () => {
  const bottomRef = useRef(null);
  const [order, setOrder] = useState(false);

  const handleDownArrow = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleUpArrow = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className=" relative">
      <BsArrowDownCircleFill
        className=" absolute text-[#9a9f9a] top-4 right-4  z-30 cursor-pointer"
        size={30}
        onClick={handleDownArrow}
      />
      <Hero />
      <HeadlineCard setOrder={setOrder} />
      <Food />
      <Category />
      <PopUp order={order} setOrder={setOrder} />
      <BsArrowUpCircleFill
        className=" absolute text-[#5c5e5c] bottom-1 right-4 cursor-pointer"
        size={30}
        onClick={handleUpArrow}
      />
      <div ref={bottomRef}></div>
    </div>
  );
};

export default Home;
