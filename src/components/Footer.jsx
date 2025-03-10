import React from "react";

const Footer = () => {
  return (
    <div className=" flex gap-6 w-full px-4 sm:w-11/12 mx-auto md:w-4/5 max-w-[1440px] ">
      <div className="flex flex-col gap-6 text-white md:w-1/2">
        <div className="flex gap-6 items-center"> 
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/plasticine/100/bus--v1.png"
            alt="bus--v1"
          />
          <h1 className="text-4xl font-bold">Company name</h1>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, dicta
          saepe! Fuga vitae quas placeat quasi similique maiores praesentium qui
          fugiat eveniet at, accusamus excepturi, tempora accusantium dolorum
          quis harum.
        </p>
        <div>
          <div>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/emoji/48/envelope-.png"
              alt="envelope-"
            />
            <p></p>
          </div>
        </div>
        <div>
          <div>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/marker--v1.png"
              alt="marker--v1"
            />
            <p></p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2"></div>
    </div>
  );
};

export default Footer;
