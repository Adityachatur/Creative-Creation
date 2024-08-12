import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import VideoCircle from "../SubPages/VideoCircle";
import HeadingLine from "../SubPages/HeadingLine";

import SubHeadingLine from "../SubPages/SubHeadingLine";
import Button from "../SubPages/Button";

const Service = () => {
  useEffect(() => {
    Aos.init({
      once: false,
    });
  }, []);
  const services = [
    { name: "Development" },
    { name: "Marketing Strategy" },
    { name: "UI Design" },
    { name: "Data & Analytics" },
  ];

  return (
    <div className="w-full h-full bg-customGray text-white py-20 ">
      <VideoCircle />
      <HeadingLine title="Service" />
      <SubHeadingLine
        line1="Most Experienced"
        line2="services"
        btnName="See All Services"
      />

      <div className="lg:w-10/12 w-11/12 mx-auto grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5  ">
        {services.map((item, index) => (
          <div
            className="relative group  overflow-hidden py-4 cursor-pointer"
            key={index}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="flex justify-start items-end space-x-1">
              <div>
                <div className="w-2 h-2 bg-red-800 mb-0 group-hover:bg-white transform transition-all ease-in duration-500 "></div>
              </div>
              <div className="lg:text-5xl md:text-5xl text-2xl lg:h-[30px] md:h-[40px] h-[25px] cursor-pointer space-y-[5px]">
                <h2 className="  transition-transform duration-500 ease-in group-hover:translate-y-[-150%] group-hover:text-orange-500">
                  {item.name}
                </h2>
                <h3 className=" transition-transform duration-500 ease-in group-hover:translate-y-[-100%] group-hover:text-orange-500">
                  {item.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="block lg:hidden w-11/12 mx-auto py-5">
        <Button ButtonName="Explore More" />
      </div>
    </div>
  );
};

export default Service;
