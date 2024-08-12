import React from "react";
import HeadingLine from "../SubPages/HeadingLine";

const Footer = () => {
  return (
    <>
      <HeadingLine title="CreativeCreation" />
      <div className="lg:w-10/12 w-11/12 mx-auto h-[100px] text-white flex lg:flex-row flex-col justify-between items-center lg:text-xl md:text-lg text-sm  ">
        <div
          className="font-semibold text-white grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 lg:w-6/12  w-full  gap-6 lg:text-left text-center py-5 list-none cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <li>Home</li>
          <li>Service</li>
          <li>Profile</li>
          <li>Contact</li>
          <li>Features</li>
        </div>
        <div className="text-center font-semibold py-5 ">
          <h1>@CreativeCreation 2024. All right reserved</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
