import React from "react";
import HeadingLine from "../SubPages/HeadingLine";
import SubHeadingLine from "../SubPages/SubHeadingLine";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import Button from "../SubPages/Button";

const PricePlan = () => {
  const details = [
    {
      brand: "Branding",
      price: "$250",
      info: ["Link salmon cherry salmon combtail gourami frigate mackerel"],
      infoNot: [
        "Link salmon cherry salmon combtail gourami frigate mackerel",
        "Link salmon cherry salmon combtail gourami frigate mackerel",
      ],
    },
    {
      brand: "UI design",
      price: "$450",
      info: [
        "Link salmon cherry salmon combtail gourami frigate mackerel",
        "Link salmon cherry salmon combtail gourami frigate mackerel",
      ],
      infoNot: ["Link salmon cherry salmon combtail gourami frigate mackerel"],
    },
    {
      brand: "Research",
      price: "$950",
      info: [
        "Link salmon cherry salmon combtail gourami frigate mackerel",
        "Link salmon cherry salmon combtail gourami frigate mackerel",
        "Link salmon cherry salmon combtail gourami frigate mackerel",
      ],
      infoNot: [],
    },
  ];

  return (
    <>
      <HeadingLine title="Pricing Plans" />
      <SubHeadingLine
        line1="Profitable"
        line2="Pricing Plans"
        btnName="Explore More"
      />
      <div className="lg:w-10/12 w-11/12 mx-auto text-white flex lg:justify-end justify-start pb-10">
        <div className="lg:w-10/12 w-full h-auto  py-5 ">
          {details.map((detail, index) => (
            <div
              key={index}
              className=" lg:px-5 py-10 border-y-2 flex lg:flex-row flex-col lg:space-y-0 space-y-5
                justify-between font-jakarta"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h2 className=" lg:text-4xl text-2xl font-bold mb-2">
                {detail.brand}
              </h2>
              <div className="flex flex-col justify-between ">
                <ul className=" lg:text-xl font-semibold md:text-lg text-sm ">
                  {detail.info.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex lg:justify-end  justify-start  pt-2"
                    >
                      <FaCheck className="m-2  text-white" />
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className=" lg:text-xl md:text-lg text-sm">
                  {detail.infoNot.map((item, iid) => (
                    <li
                      key={iid}
                      className=" flex lg:justify-end justify-start text-gray-500 lg:space-y-0 py-2 font-semibold lg:ml-0 ml-6"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="lg:text-5xl text-3xl font-extrabold mb-4">
                {detail.price}
              </p>
            </div>
          ))}
          <div className="block lg:hidden w-11/12 mx-auto pt-5">
            <Button ButtonName="Explore More" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PricePlan;
