import React from "react";
import aboutUsImg from "../assets/aboutUsImg.png";
import busDriver from "../assets/busDriver.jpg";
import ClientSwiper from "./ClientSwiper/ClientSwiper.jsx";
const AboutUs = () => {
  return (
    <div className="w-full px-4 sm:w-11/12 mx-auto md:w-4/5 max-w-[1440px] flex flex-col gap-6 md:gap-8 pb-6 md:pb-12">
      <div className="flex gap-8 lg:gap-6 flex-col lg:flex-row -translate-y-12 items-center">
        <div className=" flex flex-col gap-6 w-full lg:w-1/2">
          <span className="capitalize text-sm font-bold border-b-2 w-fit border-b-blue-900">
            ABOUT US
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
            About Hari Om Bus Tour & Travel 
          </h1>
          <p>
            Discover excellence in travel with our trusted bus company, offering
            unmatched service across the region. With decades of experience, a
            focus on safety, and commitment to innovation, we ensure hassle-free
            journeys for every traveler. Trust us to make your travels both
            enjoyable and reliable as we continue to redefine modern
            transportation standards.
          </p>
          <p>
            Innovating bus services with state-of-the-art technology, we excel
            in customer satisfaction. Whether for business or leisure, we
            guarantee exceptional quality. Our dedicated team ensures on-time
            schedules and world-class comfort, helping you reach your
            destination with a smile. Choose us for the ultimate bus travel
            experience tailored to your expectations.
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
        Our trusted partners help us deliver seamless and exceptional travel experiences. By collaborating with leading organizations across industries like technology, tourism, and hospitality, we ensure comfort, convenience, and reliability for every journey. Together, we strive to enhance your travel, making every trip smooth, memorable, and enjoyable.
        </p>
        <ClientSwiper />
      </div>
    </div>
  );
};

export default AboutUs;
