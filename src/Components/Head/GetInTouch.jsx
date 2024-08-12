import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Message from "../Head/Message";

const GetInTouch = () => {
  return (
    <div className="w-full h-full  py-5 flex lg:flex-row flex-col text-white font-jakarta">
      <div className="lg:w-6/12 w-11/12 mx-auto h-full lg:h-[600px]  ">
        <div className="lg:w-10/12 w-full mx-auto">
          <h1
            className="lg:text-[3.6vw] md:text-[4rem] text-[2rem] font-semibold py-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Get in Touch
          </h1>
          <p
            className="lg:text-2xl md:text-lg text-sm lg:w-9/12 lg:h-[150px]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Frigate mackerel snake mackerel upside-down catfish finback cat
            shark. Reedfish bonefish trahira bristlenose catfish, longnose.
          </p>
          <div className="w-full h-full lg:h-[180px] py-5 flex md:flex-row flex-col justify-start items-start lg:flex-row">
            <div
              className="w-6/12 flex flex-col lg:space-y-5 space-y-2 py-5"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h1 className="lg:text-3xl text-xl font-bold ">Pune</h1>
              <p className="lg:text-xl md:text-lg text-sm font-semibold">
                Chakan, 410-501
              </p>
            </div>
            <div
              className="w-6/12 flex flex-col lg:space-y-5 space-y-2 py-5"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h1 className="lg:text-3xl text-xl font-bold ">Phone</h1>
              <p className="lg:text-xl md:text-lg text-sm font-semibold">
                +91 9552314201 <br />
                +91 9898565623
              </p>
            </div>
          </div>
          <div className="w-full lg:h-[180px] h-full py-5 flex flex-col  md:flex-row lg:flex-row">
            <div
              className="w-6/12 flex flex-col lg:space-y-5 space-y-2 py-5"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h1 className="lg:text-3xl text-xl font-bold ">Social</h1>
              <p className="flex space-x-5 lg:text-3xl md:text-xl text-lg  ">
                <FaFacebook className="hover:text-orange-600 transform transition ease-in duration-200 cursor-pointer" />{" "}
                <FaInstagram className="hover:text-orange-600 transform transition ease-in duration-200 cursor-pointer" />{" "}
                <FaLinkedinIn className="hover:text-orange-600 transform transition ease-in duration-200 cursor-pointer" />{" "}
                <FaGithub className="hover:text-orange-600 transform transition ease-in duration-200 cursor-pointer" />
              </p>
            </div>
            <div
              className="w-6/12 flex flex-col lg:space-y-5 space-y-2 py-5"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h1 className="lg:text-3xl text-xl font-bold ">Email</h1>
              <p className="lg:text-xl md:text-xl text-sm   font-semibold hover:text-orange-600 transform transition ease-in duration-300 cursor-pointer">
                adityachatur7996@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Message className="" />
    </div>
  );
};

export default GetInTouch;
