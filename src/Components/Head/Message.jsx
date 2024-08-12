import React, { useState } from "react";
import Button from "../SubPages/Button";
const Message = () => {
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    contact: false,
    subject: false,
    comments: false,
  });

  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    comments: "",
  });

  const handleFocus = (field) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (field) => {
    setIsFocused({ ...isFocused, [field]: false });
  };

  const handleChange = (field, value) => {
    setInputValues({ ...inputValues, [field]: value });
  };

  return (
    <div className="lg:w-6/12 w-11/12 mx-auto h-full  py-10 lg:h-[600px] font-jakarta overflow-x-hidden">
      <div className="lg:w-10/12 w-full mx-auto">
        <h1
          className="lg:text-[2vw] md:text-[3rem] text-[1.6rem] py-5 font-semibold"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          Sent the Message
        </h1>
        <form>
          {[
            { id: "name", label: "Enter Name" },
            { id: "email", label: "Enter Email" },
            { id: "contact", label: "Enter Contact" },
            { id: "subject", label: "Enter Subject" },
            { id: "comments", label: "Enter Comments" },
          ].map((field) => (
            <div
              className="relative my-16"
              key={field.id}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <input
                type="text"
                className={`w-full h-8 outline-0 bg-transparent border-b-[1px] border-r-[1px] transition-all duration-300 ease-in lg:text-2xl text-xl ${
                  isFocused[field.id] || inputValues[field.id]
                    ? "placeholder-top"
                    : ""
                }`}
                onFocus={() => handleFocus(field.id)}
                onBlur={() => handleBlur(field.id)}
                onChange={(e) => handleChange(field.id, e.target.value)}
                value={inputValues[field.id]}
              />
              <label
                className={`absolute left-0 top-1 text-white pointer-events-none transition-all duration-300 ease-in flex ${
                  isFocused[field.id] || inputValues[field.id]
                    ? "transform -translate-y-10 text-[16px]"
                    : "lg:text-xl md:text-lg text-sm"
                }`}
              >
                {field.label}
                <span className="lg:text-3xl text-xl text-red-700 ml-1">*</span>
              </label>
            </div>
          ))}
        </form>
        <div className="flex justify-center">
          <Button ButtonName="Submit" />
        </div>
      </div>
    </div>
  );
};

export default Message;
