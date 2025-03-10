import React from "react";
import Card from "./Card";
const InfoCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4 sm:w-11/12 mx-auto md:w-4/5 max-w-[1440px] py-12 -translate-y-1/10 sm:-translate-y-2/10 md:-translate-y-2/10 lg:-translate-y-2/5">
      <Card
        heading={"Book Direct"}
        pera={
          "Directly reserve your travel and enjoy convenience, savings, and simplicity."
        }
        imgUrl={"https://img.icons8.com/ios/50/ticket--v1.png"}
        imgAlt={"Ticket"}
      />
      <Card
        heading={"Travel Safe"}
        pera={
          "Prioritize safety with professional staff and top-notch bus maintenance services."
        }
        imgUrl={"https://img.icons8.com/ios/50/warning-shield.png"}
        imgAlt={"Safety Icon"}
      />
      <Card
        heading={"Free Booking"}
        pera={
          "Book without fees, enjoy affordable fares, and stress-free travel planning."
        }
        imgUrl={"https://img.icons8.com/dotty/80/money-bag.png"}
        imgAlt={"Money"}
      />
      <Card
        heading={"Enjoy Journey"}
        pera={
          "Experience comfort, friendly service, and unforgettable moments on every trip."
        }
        imgUrl={"https://img.icons8.com/external-wanicon-lineal-wanicon/64/external-enjoy-friendship-wanicon-lineal-wanicon.png"}
        imgAlt={"People Enjoying"}
      />
    </div>
  );
};

export default InfoCards;
