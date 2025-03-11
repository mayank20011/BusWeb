import React from "react";
import aboutUsImg from "../assets/aboutUsImg.png";
import busDriver from "../assets/busDriver.jpg";
import ClientSwiper from "./ClientSwiper/ClientSwiper.jsx";
const AboutUs = () => {
  return (
    <div className="w-full px-4 sm:w-11/12 mx-auto md:w-4/5 max-w-[1440px] flex flex-col gap-6 md:gap-8 pb-6 md:pb-12" id="aboutUs">
      <div className="flex gap-8 lg:gap-6 flex-col lg:flex-row -translate-y-12 items-center">
        <div className=" flex flex-col gap-6 w-full lg:w-1/2">
          <span className="capitalize text-sm font-bold border-b-2 w-fit border-b-blue-900">
            ABOUT US
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
            About Hari Om Bus Tour & Travel 
          </h1>
          <p>
          At Hari Om, our mission is simple: deliver exceptional travel experiences that inspire trust and loyalty. With decades of expertise, we continue to innovate and adapt, ensuring you receive premium services wherever your journey takes you.
          </p>
          <p>
          From luxurious charter buses to efficient group shuttles, we put your comfort, safety, and satisfaction at the core of what we do. Join thousands of satisfied travelers who have made Hari Om their go-to name for all things transportation.
          </p>
          <button className="text-black w-fit border-1 px-4 py-2 rounded-md shadow-sm shadow-black hover:shadow-lg transition cursor-pointer">
            Contact Us
          </button>
        </div>
        <div className="w-full lg:w-1/2 aspect-[16/9] rounded-md border-2 border-white shadow-lg shadow-black hover:shadow-2xl transition overflow-hidden">
          <img
            src={busDriver}
            alt="Bus Driver"
            className="w-full hover:scale-110 rounded-md brightness-90 transition"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 md:gap-8">
        <h1 className="text-4xl font-bold text-blue-900 md:mx-auto w-fit">
          Our Partners
        </h1>
        <p className="md:text-center text-xl">
        Our journey wouldn’t be complete without our trusted collaborators. Working hand-in-hand with top-tier technology and hospitality partners, we ensure every aspect of your trip—from planning to arrival—is as seamless as it gets.
        </p>
        <ClientSwiper />
      </div>
    </div>
  );
};

export default AboutUs;
