import React from "react";
import HeadingLine from "../SubPages/HeadingLine";

const Clients = () => {
  const logos = [
    {
      logo: "/partner-1.png",
    },
    {
      logo: "/partner-2.png",
    },
    {
      logo: "/partner-3.png",
    },
    {
      logo: "/partner-4.png",
    },
    {
      logo: "/partner-5.png",
    },
    {
      logo: "/partner-6.png",
    },
    {
      logo: "/partner-2.png",
    },
    {
      logo: "/partner-1.png",
    },
  ];

  return (
    <div className="w-full bg-customGray py-10">
      <HeadingLine title="Clients" />
      <div className="lg:w-10/12 w-11/12 mx-auto h-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 py-10">
        {logos.map((logo, index) => (
          <div
            className=" lg:h-[100px] h-[120px] w-auto flex justify-center lg:aspect-[3] items-center"
            key={index}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            <img
              src={logo.logo}
              alt={`Partner ${index + 1}`}
              className="lg:h-20 h-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
