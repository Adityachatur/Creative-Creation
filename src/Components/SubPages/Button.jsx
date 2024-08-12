import React, { useState } from "react";
import { FiArrowDownRight } from "react-icons/fi";
import { FaGreaterThan } from "react-icons/fa";
const Button = (Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <button
        className={`relative lg:text-xl text-base flex justify-center items-center space-x-2 py-2 transition-all duration-300  text-white`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {Props.ButtonName}
        <span
          className={`absolute bottom-0 left-0 w-full h-[1px] bg-white transform ease-out transition-transform duration-300 ${
            hovered ? "scale-x-0" : "scale-x-100"
          } origin-right`}
        ></span>
        <div className="relative w-6 h-6 flex justify-center items-center">
          <span
            className={`absolute transition-opacity duration-200 transform  ${
              hovered ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
            }`}
          >
            <FiArrowDownRight className="text-3xl" />
          </span>
          <span
            className={`absolute transition-opacity duration-200 transform  ease-in ${
              hovered
                ? "opacity-100 translate-y-0 pt-1 delay-75"
                : "opacity-0 translate-y-2 "
            }`}
          >
            <FaGreaterThan className="text-base font-light" />
          </span>
        </div>
      </button>
    </div>
  );
};

export default Button;
