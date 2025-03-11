import React from "react";
import Card from "./Card";

const WhyUss = () => {
  return (
    <div className="flex gap-6 items-center flex-col lg:flex-row w-full px-4 sm:w-11/12 mx-auto md:w-4/5 max-w-[1440px]">
      <div className="text-white lg:w-1/2 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-xl">WHY</span>
          <h1 className="text-3xl">Why Hari Om Tour & Travels</h1>
        </div>
        <div className="w-24 border-2  border-white rounded-4xl"></div>
        <p>
          Discover the difference with Hari Om Tour & Travels—your trusted
          partner for seamless journeys. Whether you're crossing the country or
          catching a quick shuttle, we blend comfort, safety, and reliability to
          make every trip extraordinary.
        </p>
        <ol className="flex flex-col gap-6 list-decimal pl-4">
          <li>
            Traveling from coast to coast?{" "}
            <span className="font-bold">No worries.</span>
          </li>
          <li>
            Need a quick shuttle service?{" "}
            <span className="font-bold">We've got you.</span>
          </li>
        </ol>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-1/2">
        <Card
          heading={"5000+"}
          pera={"Transporation Partners"}
          imgUrl={"https://img.icons8.com/ios/50/bus.png"}
          imgAlit={"Bus"}
        />
        <Card
          heading={"70,000 +"}
          pera={"Passengers delighted"}
          imgUrl={"https://img.icons8.com/wired/50/human-head.png"}
          imgAlit={"Passenger"}
        />
        <Card
          heading={"25,000 +"}
          pera={"Charter bus trips"}
          imgUrl={"https://img.icons8.com/ios/50/map--v1.png"}
          imgAlit={"Map"}
        />
        <Card
          heading={"100%"}
          pera={"Satisfied Passenger"}
          imgUrl={"https://img.icons8.com/carbon-copy/100/like--v1.png"}
          imgAlit={"Heart"}
        />
      </div>
    </div>
  );
};

export default WhyUss;
