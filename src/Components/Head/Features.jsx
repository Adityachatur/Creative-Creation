import React from "react";
import HeadingLine from "../SubPages/HeadingLine";

const Features = () => {
  const details = [
    {
      imgsrc: "/Feature1.png",
      title: "Creative Idea",
      info: "Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid.",
    },
    {
      imgsrc: "/Feature2.png",
      title: "Support clients",
      info: "Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel",
    },
    {
      imgsrc: "/Feature3.png",
      title: "The best development",
      info: "Wahoo mora deep sea smelt cat shark atlantic upside-down catfish finback cat",
    },
    {
      imgsrc: "/Feature4.png",
      title: "Solve problems",
      info: "Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel",
    },
  ];
  return (
    <div className="w-full  text-white h-full py-10">
      <HeadingLine title="Features" />

      <div className="lg:w-10/12 w-11/12 py-5 flex  flex-col space-y-10 mx-auto h-full font-jakarta ">
        <h1
          className="lg:text-[5vw] md:text-[5rem] text-[2rem] font-bold"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Creative <span className="font-extralight">Freatures</span>
        </h1>

        <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          {details.map((item, index) => (
            <div
              key={index}
              className="w-full lg:h-[350px] h-full py-10 flex justify-center space-y-10  bg-customGray  opacity-80  rounded-xl items-start flex-col Feature-card"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <img src={item.imgsrc} alt="" className="h-28 rounded-full" />
              <h1 className="lg:text-2xl text-xl font-semibold">
                {item.title}
              </h1>
              <p className="lg:text-xl md:text-lg text-base font-normal lg:px-2">
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
