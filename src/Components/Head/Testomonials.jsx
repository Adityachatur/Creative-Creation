import React from "react";
import Slider from "react-slick";
import HeadingLine from "../SubPages/HeadingLine";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const testimonials = [
    {
      name: "John Doe",
      text: "This is an amazing product! It has significantly improved my productivity and I highly recommend it to everyone. The user interface is intuitive and the performance is outstanding. I've tried many similar products, but this one stands out due to its reliability and excellent customer support.",
    },
    {
      name: "Jane Smith",
      text: "The customer service was exceptional and the product quality is top-notch. I am very satisfied with my purchase. From the moment I placed my order, I was impressed with the level of communication and care taken to ensure I received exactly what I needed. The team went above and beyond to answer my questions and provide support.",
    },
    {
      name: "Samuel Johnson",
      text: "I had a fantastic experience with this company. Their attention to detail and commitment to customer satisfaction is unparalleled. Every step of the process was smooth and hassle-free..",
    },
  ];

  return (
    <>
      <HeadingLine title="Testimonials" />
      <div className="lg:w-10/12 w-11/12 mx-auto h-full flex lg:flex-row flex-col py-10 relative">
        <div className="lg:w-9/12 w-full lg:h-[600px] h-[600px] relative font-jakarta">
          <img
            src="/bg-testimonials.jpg"
            alt="Testimonials background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-start">
            <Slider {...settings} className="lg:w-9/12 w-11/12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="text-white text-start p-8 cursor-pointer"
                >
                  <span className="lg:text-7xl text-4xl font-extrabold">"</span>
                  <p
                    className="lg:text-2xl md:text-xl text-sm leading-loose"
                    style={{ lineHeight: "2" }}
                  >
                    {testimonial.text}
                  </p>
                  <h3 className="mt-4 lg:text-2xl text-xl font-bold">
                    {testimonial.name}
                  </h3>
                </div>
              ))}
            </Slider>
          </div>

          <div className="absolute top-5 right-5">
            <img src="/rightTopArrow.png" alt="" className="lg:h-20 h-16" />
          </div>
        </div>

        <div className="lg:w-6/12 w-full  lg:h-[600px] h-full flex items-center text-white lg:absolute lg:right-[-5%] lg:top-0 font-jakarta">
          <h1
            className="lg:text-[3.5vw] font-bold md:text-[4rem] text-[1.8rem]"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            The Best customers say about Agencium
          </h1>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
