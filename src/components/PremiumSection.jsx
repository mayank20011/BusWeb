import React from "react";
import aboutUsImg from "../assets/aboutUsImg.png";
const PremiumSection = () => {
  return (
    <div
      className="flex gap-6 flex-col lg:flex-row w-full sm:w-11/12 mx-auto md:w-4/5 max-w-[1440px] items-center opacity-90"
      style={{ backgroundColor: "#17223a" }}
    >
      <div className="w-full lg:w-1/2 aspect-[16/9] pr-6">
        <img
          src={aboutUsImg}
          alt="Bus Image"
          style={{ filter: "drop-shadow(2px 2px 3px white)" }}
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4 py-6 px-4 lg:px-8">
        <span className="text-orange-600">PREMIUM</span>
        <h1 className="text-4xl fpnt-bold text-white">
          Premium Amenities on Board
        </h1>
        <div className="border-2 rounded-md w-16 border-orange-600"></div>
        <p className="text-white">
          Travel in style with our luxurious on-board amenities designed to
          elevate your experience. Whether you’re commuting or enjoying a scenic
          ride, we’ve got everything you need to feel relaxed and refreshed.
        </p>
        <div className="flex gap-6 items-center">
          <h4 className="text-xl text-white font-bold">Premium Class</h4>
          <div className="flex">
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/FAB005/star.png"
              alt="Star"
              className="h-7"
            />
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/FAB005/star.png"
              alt="Star"
              className="h-7"
            />
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/FAB005/star.png"
              alt="Star"
              className="h-7"
            />
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/FAB005/star.png"
              alt="Star"
              className="h-7"
            />
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/FAB005/star.png"
              alt="Star"
              className="h-7"
            />
          </div>
        </div>
        <a
          className="w-fit px-4 py-2 rounded-md bg-yellow-600 cursor-pointer hover:scale-95 transition text-white"
          href="https://wa.me/919813030271?text=Hello%20there!%20I%20have%20a%20query."
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat With Us
        </a>
      </div>
    </div>
  );
};

export default PremiumSection;
