import React from "react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

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

  function handleSubmit(e) {
    e.preventDefault();
    if (
      e.target[0].value == "" ||
      e.target[1].value == "" ||
      e.target[2].value == "" ||
      e.target[3].value == ""
    ) {
      toast.error("Form Values Can't be Empty");
    } else {
      toast.success("Submited Successfully");
    }
  }
  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-12 pb-36 w-full px-4 sm:w-11/12 mx-auto md:w-4/5 max-w-[1440px] gap-6 md:gap-0">
      <ToastContainer />
      <div className="w-full md:w-1/2 flex flex-col gap-6 text-white">
        <p ref={nameRef}>Hari Om Bus Tour & Travels</p>
        <h1
          className="capitalize text-5xl lg:text-6xl text-white font-bold"
          ref={headingRef}
        >
          Effortless Bus Rentals for Every Journey
        </h1>
        <p ref={peraRef}>
          Embark on journeys that prioritize your comfort, reliability, and
          trust. From private getaways to corporate commutes, we deliver travel
          experiences that cater to your needs with precision and care.
        </p>
        <a
          className="bg-white text-black w-fit px-4 py-2 rounded-md cursor-pointer hover:scale-95 transition hover:shadow-md hover:shadow-black opacity-0 translate-y-[500px]"
          ref={buttonRef}
          href="https://wa.me/919813030271?text=Hello%20there!%20I%20have%20a%20query."
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </div>

      <div
        ref={formRef}
        className="w-full md:w-4/10 text-white flex flex-col gap-6 p-4 rounded-md shadow-md shadow-white opacity-80 bg-transparent border border-slate-100"
      >
        <h1 className="text-xl font-bold">Choose Your Journey</h1>
        <p className="">
          Plan your trip with ease and confidence. Experience seamless travel
          tailored to your needs and preferences.
        </p>
        <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="from"
            placeholder="Travel From"
            className="px-4 py-4 outline-none bg-white text-slate-600 rounded-md w-full"
          />
          <input
            type="text"
            name="To"
            placeholder="Travel To"
            className="px-4 py-4 outline-none bg-white text-slate-600 rounded-md w-full"
          />
          <input
            type="Date"
            name="D&T"
            placeholder="Travel From"
            className="px-4 py-4 outline-none bg-white text-slate-600 rounded-md w-full"
          />
          <select
            name=""
            id=""
            className="bg-white p-4 outline-none rounded-md text-slate-600 cursor-pointer w-full"
          >
            <option value="1" className="">
              1 Person
            </option>
            <option value="2">2 Person</option>
            <option value="3">3 Person</option>
            <option value="4">4 Person</option>
            <option value="5">5 Person</option>
          </select>
          <button
            type="submit"
            className="w-full text-white font-bold bg-amber-500 py-3 rounded-md cursor-pointer hover:scale-95 transition hover:shadow-black hover:shadow-2xl"
          >
            Find My Journey
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
