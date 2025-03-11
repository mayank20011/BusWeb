import React from "react";
import Card from "./Card";
const InfoCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4 sm:w-11/12 mx-auto md:w-4/5 max-w-[1440px] py-12 -translate-y-1/10 sm:-translate-y-2/10 md:-translate-y-2/10 lg:-translate-y-2/5">
      <Card
        heading={"Direct Booking"}
        pera={
          "Skip the middlemen and book directly to save time and money."
        }
        imgUrl={"https://img.icons8.com/ios/50/ticket--v1.png"}
        imgAlt={"Ticket"}
      />
      <Card
        heading={"Safety First"}
        pera={
          "Professional drivers, rigorously maintained buses, and top-tier safety protocols mean you can relax."
        }
        imgUrl={"https://img.icons8.com/ios/50/warning-shield.png"}
        imgAlt={"Safety Icon"}
      />
      <Card
        heading={"No Booking Fees"}
        pera={
          "Enjoy transparent pricing, so you know exactly what you’re paying for."
        }
        imgUrl={"https://img.icons8.com/dotty/80/money-bag.png"}
        imgAlt={"Money"}
      />
      <Card
        heading={"Memorable Experiences"}
        pera={
          "Every mile with us is a step toward memorable moments and smooth journeys."
        }
        imgUrl={"https://img.icons8.com/external-wanicon-lineal-wanicon/64/external-enjoy-friendship-wanicon-lineal-wanicon.png"}
        imgAlt={"People Enjoying"}
      />
    </div>
  );
};

export default InfoCards;
