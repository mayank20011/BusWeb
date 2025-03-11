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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          accusantium consectetur iure sunt perspiciatis eum adipisci fuga
          distinctio, non doloremque dolores voluptatibus optio quam eveniet
          beatae recusandae nemo ut? Iste.
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
        <button className="w-fit px-4 py-2 rounded-md bg-yellow-600 cursor-pointer hover:scale-95 transition text-white">Chat With Us</button>
      </div>
    </div>
  );
};

export default PremiumSection;
