import React from "react";

const HeadingLine = (props) => {
  return (
    <div
      className="lg:w-10/12 w-11/12 mx-auto text-white h-[50px]"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h1 className="text-2xl font-semibold font-jakarta h-10 border-r-2 border-b-2">
        {props.title}
      </h1>
    </div>
  );
};

export default HeadingLine;
