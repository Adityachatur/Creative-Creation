import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Button from "../SubPages/Button";
const QuestionAns = () => {
  const initialData = [
    {
      question: "Creative Development",
      answer:
        "Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid. Wahoo mora deep sea smelt cat shark atlantic. Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel upside-down catfish finback cat shark.",
      isOpen: false,
    },
    {
      question: "UI/UX Design",
      answer:
        "Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid. Wahoo mora deep sea smelt cat shark atlantic. Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel upside-down catfish finback cat shark.  ",
      isOpen: false,
    },
    {
      question: "Data science",
      answer:
        "Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid. Wahoo mora deep sea smelt cat shark atlantic. Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel upside-down catfish finback cat shark.",
      isOpen: false,
    },
    {
      question: " Creative design",
      answer:
        "Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid. Wahoo mora deep sea smelt cat shark atlantic. Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel upside-down catfish finback cat shark.",
      isOpen: false,
    },
  ];

  const [faqData, setFaqData] = useState(initialData);

  const toggleContent = (index) => {
    const newFaqData = faqData.map((item, i) => {
      if (i === index) {
        return { ...item, isOpen: !item.isOpen };
      }
      return item;
    });
    setFaqData(newFaqData);
  };

  return (
    <div className="flex lg:flex-row flex-col justify-between lg:w-10/12 w-11/12 mx-auto h-full xl:mt-10 py-10 text-white lg:space-y-0 space-y-5">
      <div
        className="lg:w-6/12 w-full"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <img src="/7.png" alt="" className="h-full w-full" />
      </div>
      <div className="lg:w-5/12 w-full">
        {faqData.map((item, index) => (
          <div key={index} className="w-full my-2">
            <div
              className="text-xl lg:font-bold font-semibold text-white flex flex-col justify-start items-start border-b-[1px] border-gray-400   lg:px-4 py-6 cursor-pointer font-jakarta"
              onClick={() => toggleContent(index)}
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <div className="flex justify-between items-center w-full">
                <h1 className="lg:text-xl font-semibold text-[1rem]   space-x-5 flex justify-center items-center ">
                  <p>.0{index + 1}/</p>
                  <p className="lg:text-3xl text-xl">{item.question}</p>
                </h1>
                <button>
                  {" "}
                  {item.isOpen ? (
                    <FaMinus className="w-6 h-6  rounded-[2px] " />
                  ) : (
                    <FaPlus className="w-6 h-6 rounded-[2px] " />
                  )}
                </button>
              </div>
              <div
                className={`faq-answer transition-all duration-700 ease-in-out overflow-hidden ${
                  item.isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pt-6 lg:text-xl md:text-lg text-sm font-normal  font-poppins">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
        <button className="lg:ml-10 my-10">
          {" "}
          <Button ButtonName="Explore More" />
        </button>
      </div>
    </div>
  );
};

export default QuestionAns;
