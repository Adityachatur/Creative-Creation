import React from "react";
import Marquee from "react-fast-marquee";
const Marqu = () => {
  return (
    <Marquee speed="100">
      {" "}
      <div className="w-full h-full  text-white  py-1 overflow-x-hidden font-jakarta">
        <div className="flex lg:space-x-20 space-x-10 items-center w-full lg:h-[250px] h-full">
          <img src="/Marquee.png" alt="Marquee" className="lg:h-20 h-10 " />
          <h2 className="lg:text-[6vw] md:text-[4rem] text-[1.3rem] font-bold ">
            We Create Special Things
          </h2>
        </div>
      </div>
    </Marquee>
  );
};

export default Marqu;
