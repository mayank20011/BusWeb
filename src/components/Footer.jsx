import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-6 w-full px-4 sm:w-11/12 mx-auto md:w-4/5 max-w-[1440px] ">
      <div className="flex gap-6 flex-col md:flex-row w-full">
        <div className="flex flex-col gap-6 text-white">
          <div className="flex gap-2 items-center">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/plasticine/100/bus--v1.png"
              alt="bus--v1"
            />
            <h1 className="text-4xl font-bold">Hari om Tour & Travels</h1>
          </div>
          <p>
            We’d love to hear from you! At Hari Om Bus Tour & Travels, customer
            satisfaction is at the heart of everything we do. Whether you have
            questions about our services, need assistance with booking, or
            simply want to learn more about how we can make your journey
            exceptional, our dedicated team is ready to help. Feel free to reach
            out to us via phone, email, or by visiting our office. We strive to
            provide prompt responses and ensure every query is addressed with
            care and professionalism.
          </p>
          <div className="flex md:items-center gap-6 flex-col md:flex-row">
            <div className="flex flex-col gap-4 ">
              <div>
                <div className="flex gap-4 items-center">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/emoji/48/envelope-.png"
                    alt="envelope-"
                  />
                  <p>Info@hariombustourandtravels.com</p>
                </div>
              </div>
              <div>
                <div className="flex gap-4 items-center">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/marker--v1.png"
                    alt="marker--v1"
                  />
                  <p>
                    Opposite Icici Bank, Pillar No 838 Delhi Rohtak road
                    Bahadurgarh Jhajjar, Haryana- 124507
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex md:justify-center">
              <div className="flex gap-4 items-center">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/plasticine/100/phone.png"
                  alt="Phone"
                />
                <p>
                  9813030271
                  <br />
                  7575060073
                  <br />
                  9050054004
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-xl text-white border-t-2 pt-6 border-dashed">
        ©2019 Hari Om Tour & Travels | All rights Reserved
      </p>
    </div>
  );
};

export default Footer;
