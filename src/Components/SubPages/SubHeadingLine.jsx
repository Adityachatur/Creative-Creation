import React from "react";
import Button from "../SubPages/Button";

const SubHeadingLine = (props) => {
  return (
    <div>
      <div className="text-white flex lg:flex-row flex-col justify-between lg:w-10/12 w-11/12 mx-auto h-full xl:mt-10 py-10 lg:space-y-0 space-y-5">
        <div
          className="lg:w-6/12 w-full lg:h-[150px] h-auto lg:text-[4.2vw] leading-none md:text-[4rem] text-[1.8rem] font-bold flex justify-start items-end font-jakarta"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1>
            {props.line1} <span className="font-extralight">{props.line2}</span>
          </h1>
        </div>
        <div className="lg:w-4/12 w-full lg:h-[200px] h-auto flex lg:justify-end lg:items-end">
          <div className="hidden lg:block">
            <Button ButtonName={props.btnName} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeadingLine;
