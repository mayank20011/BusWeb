import React from "react";
import ServiceCard from "./ServiceCard";
import whyUsBg2 from "../assets/whyUsBg2.jpg";
import wedings from "../assets/wedings.jpg";
import tajmahal from "../assets/tajMahal.jpg";
import airportShuttle from "../assets/airportShuttle.jpg";
import privateTravels from "../assets/privateTravel.jpg";
import corporateTravels from "../assets/corporateTravels.jpg";

const Services = () => {
  return (
    <div className="w-full px-4 sm:w-11/12 mx-auto md:w-4/5 max-w-[1440px] flex flex-col gap-6" id="services">
      <div className="w-fit md:mx-auto md:text-center border-b-2">SERVICES</div>
      <h1 className="md:text-center text-4xl font-bold text-blue-900">Bus Rental & Shuttle Services</h1>
      <p className="md:text-center">Our services are designed to redefine your travel experience with comfort, efficiency, and reliability at their core. Whether you're organizing a school trip, planning a wedding, managing corporate travel, or arranging private tours, we’ve got you covered. From timely airport shuttles to exciting excursion packages, every journey is tailored to meet your needs. With a focus on safety, affordability, and professional service, our buses ensure smooth and enjoyable rides for all. At Hari Om Bus Tour & Travels, we don’t just provide transport—we create travel memories that last a lifetime.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ServiceCard bgImage={whyUsBg2} text={"School Bus Rental"}/>
        <ServiceCard bgImage={wedings} text={"Wedding & Engagements"}/>
        <ServiceCard bgImage={corporateTravels} text={"Corporate Travel"}/>
        <ServiceCard bgImage={privateTravels} text={"Private Travel"}/>
        <ServiceCard bgImage={airportShuttle} text={"Airport shuttles"}/>
        <ServiceCard bgImage={tajmahal} text={"Tour & Excursions"}/>
      </div>
    </div>
  );
};

export default Services;
