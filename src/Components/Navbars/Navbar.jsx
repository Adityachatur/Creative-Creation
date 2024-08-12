import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        className={`flex justify-between items-center py-5 text-white px-2 fixed top-0 w-full z-20 transition duration-300 ${
          scrolled ? "bg-black bg-opacity-90 backdrop-blur" : ""
        }`}
      >
        <div>
          <h1 className="text-2xl">CreariveCreation</h1>
        </div>
        <div className="text-3xl cursor-pointer">
          <FaBars onClick={toggleSidebar} />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 lg:w-[400px] md:w-[350px] w-[250px] h-full bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-end p-4">
          <FaTimes
            className="cursor-pointer text-2xl mb-4"
            onClick={toggleSidebar}
          />
          <div className="w-full h-[100vh] flex flex-col justify-evenly items-center px-4">
            <div className="flex flex-col text-center lg:space-y-5 space-y-2 py-5">
              <h1 className="lg:text-3xl text-xl font-bold">Pune</h1>
              <p className="text-xl font-semibold">Chakan, 410-501</p>
            </div>
            <ul className="space-y-4 font-jakarta lg:text-2xl text-xl">
              <li className="cursor-pointer">
                <ScrollLink
                  to="headingPage"
                  smooth={true}
                  duration={1000}
                  onClick={toggleSidebar}
                >
                  Home
                </ScrollLink>
              </li>
              <li className="cursor-pointer">
                <ScrollLink
                  to="whatWeDo"
                  smooth={true}
                  duration={1000}
                  onClick={toggleSidebar}
                >
                  About
                </ScrollLink>
              </li>
              <li className="cursor-pointer">
                <ScrollLink
                  to="service"
                  smooth={true}
                  duration={1000}
                  onClick={toggleSidebar}
                >
                  Services
                </ScrollLink>
              </li>
              <li className="cursor-pointer">
                <ScrollLink
                  to="getInTouch"
                  smooth={true}
                  duration={1000}
                  onClick={toggleSidebar}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
            <img src="/rightTopArrow.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
