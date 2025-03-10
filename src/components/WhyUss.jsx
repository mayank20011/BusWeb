import React from "react";
import Card from "./Card";

const WhyUss = () => {
  return (
    <div className="flex gap-6 items-center flex-col lg:flex-row w-full px-4 sm:w-11/12 mx-auto md:w-4/5 max-w-[1440px]">
      <div className="text-white lg:w-1/2 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-xl">WHY</span>
          <h1 className="text-4xl">Why Abc Comapny ?</h1>
        </div>
        <div className="w-24 border-2  border-white rounded-4xl"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus
          dolor ipsam quae commodi sapiente quidem error deserunt molestiae.
          Blanditiis voluptate quis nesciunt aspernatur quisquam incidunt,
          reiciendis adipisci autem consectetur hic odit laboriosam sequi
          inventore mollitia suscipit officiis cum qui.
        </p>
        <ol className="flex flex-col gap-6 list-decimal pl-4">
          <li>
            Traveling from coast to coast? <span className="font-bold">No worries.</span>
          </li>
          <li>
            Need a quick shuttle service? <span className="font-bold">We've got you.</span>
          </li>
        </ol>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-1/2">
        <Card
          heading={"5000+"}
          pera={"Transporation Partners"}
          imgUrl={""}
          imgAlit={""}
        />
        <Card
          heading={"70,000 +"}
          pera={"Passengers delighted"}
          imgUrl={""}
          imgAlit={""}
        />
        <Card
          heading={"25,000 +"}
          pera={"Charter bus trips"}
          imgUrl={""}
          imgAlit={""}
        />
        <Card
          heading={"100%"}
          pera={"Satisfied Passenger"}
          imgUrl={""}
          imgAlit={""}
        />
      </div>
    </div>
  );
};

export default WhyUss;
