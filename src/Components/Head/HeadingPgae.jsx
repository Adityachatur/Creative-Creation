import React from "react";
import Slider from "react-slick";

import Button from "../SubPages/Button";

const HeadingPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <Slider {...settings}>
        <div className="relative w-full h-screen">
          <img
            src="/Slide1.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center bg-black bg-opacity-50">
            <div className="text-white text-3xl md:text-4xl px-4 lg:w-8/12 w-11/12 mx-auto flex flex-col space-y-5">
              <h1
                className="lg:text-[6vw] md:text-[6rem] text-[3rem] font-bold font-jakarta leading-none"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Creative | <br />
              </h1>
              <p
                className="font-extralight lg:text-[6vw] md:text-[6rem] text-[3rem] leading-none font-jakarta"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="350"
              >
                Creation Digital Design Agency
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-screen">
          <img
            src="/Slide2.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div
              className="text-white text-xl px-4 lg:w-10/12 w-11/12 mx-auto flex flex-col space-y-10 font-jakarta"
              data-aos="fade-down"
            >
              <h1 className="lg:text-[6vw] md:text-[6rem] text-[3rem] w-full h-full font-extralight leading-normal">
                Creation <span className="font-extralight">Special</span> things{" "}
                <span className="font-bold">for the whole world</span>
              </h1>
              <p className="lg:text-2xl text-xl">
                Temperate ocean-bass sea chub unicorn fish treefish eulachon
                tidewater goby.
                <div className="my-5">
                  <Button ButtonName={"Explore More"} />
                </div>
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeadingPage;
