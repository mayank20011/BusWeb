import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="w-full px-4 sm:w-11/12 mx-auto md:w-4/5 max-w-[1440px] flex flex-col gap-6">
      <div className="w-fit md:mx-auto md:text-center border-b-2">SERVICES</div>
      <h1 className="md:text-center text-4xl font-bold text-blue-900">Bus Rental & Shuttle Services</h1>
      <p className="md:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates nostrum accusantium error, corporis quae. Explicabo reiciendis quis voluptatibus consectetur id iste nostrum assumenda accusamus!</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ServiceCard bgImage={""} text={"School Bus Rental"}/>
        <ServiceCard bgImage={""} text={"Wedding & Engagements"}/>
        <ServiceCard bgImage={""} text={"Corporate Travel"}/>
        <ServiceCard bgImage={""} text={"Private Travel"}/>
        <ServiceCard bgImage={""} text={"Airport shuttles"}/>
        <ServiceCard bgImage={""} text={"Tour & Excursions"}/>
      </div>
    </div>
  );
};

export default Services;
