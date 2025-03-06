import React from "react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const HeroSection = ({ tl }) => {
  const nameRef = useRef(null);
  const headingRef = useRef(null);
  const peraRef = useRef(null);
  const buttonRef = useRef(null);
  const formRef = useRef(null);

  useGSAP(() => {
    
    tl.from(nameRef.current, {
      y: 500,
      delay: 0.1,
      duration: 0.3,
      opacity: 0,
    });

    tl.from(headingRef.current, {
      y: 500,
      delay: 0.1,
      duration: 0.3,
      opacity: 0,
    });

    tl.from(peraRef.current, {
      y: 500,
      delay: 0.1,
      duration: 0.3,
      opacity: 0,
    });

    tl.to(buttonRef.current, {
      y: 0,
      delay: 0.1,
      duration: 0.3,
      opacity: 1,
    });

    tl.from(formRef.current, {
      y: 500,
      delay: 0.1,
      duration: 0.3,
      opacity: 0,
    });
  });

  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-12 pb-36 w-full px-4 sm:w-11/12 mx-auto md:w-4/5 max-w-[1440px] gap-6 md:gap-0">
      <div className="w-full md:w-1/2 flex flex-col gap-6 text-white">
        <p ref={nameRef}>Company Name</p>
        <h1
          className="capitalize text-5xl lg:text-6xl text-white font-bold"
          ref={headingRef}
        >
          Easy & effecient character bus rentals
        </h1>
        <p ref={peraRef}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta vero
          nobis praesentium natus quasi quos adipisci, veniam rem temporibus
          sapiente.
        </p>
        <button
          className="bg-white text-black w-fit px-4 py-2 rounded-md cursor-pointer hover:scale-95 transition hover:shadow-md hover:shadow-black opacity-0 translate-y-[500px]"
          ref={buttonRef}
        >
          Contact Us
        </button>
      </div>

      <div
        ref={formRef}
        className="w-full md:w-4/10 text-white flex flex-col gap-6 p-4 rounded-md shadow-md shadow-white opacity-80 bg-transparent border border-slate-100"
      >
        <h1 className="text-xl font-bold">Choose Your Journey</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          perferendis.
        </p>
        <form action="" className="flex flex-col gap-4">
          <input
            type="text"
            name="from"
            placeholder="Travel From"
            className="px-4 py-4 outline-none bg-white text-slate-600 rounded-md"
          />
          <input
            type="text"
            name="To"
            placeholder="Travel To"
            className="px-4 py-4 outline-none bg-white text-slate-600 rounded-md"
          />
          <input
            type="Date"
            name="D&T"
            placeholder="Travel From"
            className="px-4 py-4 outline-none bg-white text-slate-600 rounded-md"
          />
          <select
            name=""
            id=""
            className="bg-white p-4 outline-none rounded-md text-slate-600 cursor-pointer"
          >
            <option value="1" className="">
              1 Person
            </option>
            <option value="2">2 Person</option>
            <option value="3">3 Person</option>
            <option value="4">4 Person</option>
            <option value="5">5 Person</option>
          </select>
          <button className="w-full text-white font-bold bg-amber-500 py-3 rounded-md cursor-pointer hover:scale-95 transition hover:shadow-black hover:shadow-2xl">
            Find My Journey
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
