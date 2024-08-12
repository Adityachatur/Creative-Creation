import React from "react";
import HeadingLine from "../SubPages/HeadingLine";
import Slider from "react-slick";

const Portfolio = () => {
  const carddata = [
    {
      title: "Branding",
      year: "2023",
      imgSrc: "/product-1.jpg",
      description1: "Foremost Brand Design",
      description2: "Orange Juice Packaging",
    },
    {
      title: "Web Design",
      year: "2023",
      imgSrc: "/product-2.jpg",
      description1: "Orange Juice Packaging",
      description2: "Marketun Website Design",
    },
    {
      title: "Design",
      year: "2023",
      imgSrc: "/product-3.jpg",
      description1: "Marketun Website Design",
      description2: "Foremost Brand Design",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div className="  h-auto overflow-x-hidden">
        <HeadingLine title="Portfolio" />
        <div className="w-11/12 lg:w-10/12 mx-auto h-full py-5 cursor-pointer">
          <Slider {...settings}>
            {carddata.map((card, index) => (
              <div key={index} className="flex flex-col justify-between">
                <div className="w-full text-2xl items-start flex flex-col justify-center text-white  h-32">
                  <h1 data-aos="zoom-in" data-aos-duration="1500">
                    {card.title}
                  </h1>{" "}
                  <p data-aos="zoom-in" data-aos-duration="1500">
                    /{card.year}
                  </p>
                </div>
                <div className="lg:h-[500px] h-full lg:py-0 py-5 w-full flex justify-center items-center ">
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="h-[350px] lg:w-[300px] md:w-[300px] w-full px-3"
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  />
                </div>
                <div className="w-full flex lg:flex-row justify-between flex-col">
                  <div
                    className="lg:w-5/12 lg:text-[3.5vw] lg:h-[200px] h-auto flex justify-between items-end leading-none md:text-[4rem] text-[1.8rem] font-bold text-white w-full py-10 hover:text-orange-500 transition transform ease-in duration-200
                border-b-[1px] font-jakarta"
                    data-aos="zoom-in"
                    data-aos-duration="2500"
                  >
                    <h1>{card.description1}</h1>
                    <img
                      src="/rightTopArrow.png"
                      alt=""
                      className="h-10 px-5"
                    />
                  </div>

                  <div
                    className="lg:w-5/12 lg:text-[3.5vw] font-jakarta lg:h-[200px] h-auto flex items-center leading-none md:text-[4rem] text-[1.8rem] font-bold text-gray-700 w-full lg:py-10 py-0  border-b-[1px"
                    data-aos="zoom-in"
                    data-aos-duration="2500"
                  >
                    <div className="lg:block hidden">
                      <h1>{card.description2}</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
