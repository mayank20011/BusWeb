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
            About XYZ Bus Company
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
            voluptatibus, eum soluta accusantium impedit quae maiores laborum
            rem libero cum eius possimus voluptate ipsa asperiores. Impedit
            recusandae eos eius tempora repudiandae! Quo assumenda nesciunt eius
            suscipit temporibus dignissimos, aut laboriosam voluptates
            necessitatibus consequatur aliquam accusantium fuga nulla
            perspiciatis dolorum accusamus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis minima pariatur, quos excepturi officiis reiciendis
            porro, aliquid veniam a ullam veritatis commodi, ex optio harum.
            Consectetur, totam! Blanditiis praesentium quidem eos quam fuga sunt
            commodi ullam quasi tempore odio expedita, qui amet deserunt, omnis
            ipsum animi rem numquam quia quae.
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
        <h1 className="text-4xl font-bold text-blue-900 md:mx-auto w-fit">Our Partners</h1>
        <p className="md:text-center text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique autem officia vitae itaque non, laudantium ullam. Officiis, quae reprehenderit eum aliquam beatae voluptate illo obcaecati.</p>
        <ClientSwiper/>
      </div>
    </div>
  );
};

export default AboutUs;
