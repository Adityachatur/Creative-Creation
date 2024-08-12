import React from "react";
import HeadingLine from "../SubPages/HeadingLine";
import QuestionAns from "./QuestionAns";
const WhatWeDo = () => {
  return (
    <>
      <div className="w-full">
        <HeadingLine title="What We Do" />
        <div className="flex lg:flex-row flex-col lg:w-10/12 w-11/12 mx-auto h-full xl:mt-10 py-10 text-white  lg:space-y-0 space-y-5 ">
          <div
            className="lg:w-6/12 w-full lg:h-[200px] h-auto lg:text-[4.2vw] leading-none md:text-[4rem] text-[1.8rem] font-bold flex justify-start items-end py-5"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <h1>
              Offers For Our{" "}
              <span className="font-thin font-jakarta">Awesome Clients</span>
            </h1>
          </div>
          <div className="lg:w-6/12 w-full py-5  lg:px-2 lg:h-[200px] h-auto  flex justify-center items-end lg:text-xl md:text-lg text-sm lg:font-semibold ">
            <p
              className="text-justify font-jakarta font-normal"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              Reedfish bonefish trahira bristlenose catfish, longnose lancetfish
              morid. Wahoo mora deep sea smelt cat shark atlantic. Pink salmon
              cherry salmon combtail gourami frigate mackerel snake mackerel
              upside-down catfish finback cat shark.
            </p>
          </div>
        </div>
        <QuestionAns />
      </div>
    </>
  );
};

export default WhatWeDo;
