import React from "react";
import VideoCircle from "../SubPages/VideoCircle";
import Button from "../SubPages/Button";

const BestCustomer = () => {
  return (
    <div className="relative w-full lg:h-[90vh] h-[60vh] pt-10 mb-28 ">
      <img
        src="/BestCustomer.jpg"
        alt="Slide 1"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex lg:flex-row flex-col lg:justify-start justify-center items-center lg:w-10/12 w-11/12 mx-auto text-white ">
        <div className="h-[500px] lg:w-6/12 flex justify-center items-start flex-col w-full mr-0 space-y-5 py-5 font-jakarta">
          <img src="/rightTopArrow.png" alt="" className="lg:h-28 h-16" />
          <p className="lg:text-[4vw] md:text-[5rem] text-[2.5rem] font-semibold leading-none">
            We provide special offers for the best customers
          </p>
          <Button ButtonName="Explore More" />
        </div>
      </div>
      <VideoCircle />
    </div>
  );
};

export default BestCustomer;
