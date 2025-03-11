import React, { useRef } from "react";
import gsap from "gsap";

const ServiceCard = ({ bgImage, text }) => {
  const heading = useRef(null);

  function playAnimation() {
    gsap.to(heading.current, {
      y: 150,
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
    });
  }

  function reverseAnimation() {
    gsap.to(heading.current, {
      y: 0, 
      opacity: 1,
      duration: 0.5,
      ease: "power1.out",
    });
  }

  return (
    <div
      className="h-[300px] bg-black flex flex-col justify-end pb-6 overflow-hidden relative group"
      onMouseEnter={() => {
        playAnimation();
      }}
      onMouseLeave={() => {
        reverseAnimation();
      }}
    >
      <div
        className="absolute inset-0 bg-center bg-cover filter blur-[3px] transition-all duration-300 group-hover:blur-none"
        style={{
          backgroundImage: `url(${bgImage || ""})`,
        }}
      ></div>
      <h4
        className="text-3xl sm:text-2xl md:text-xl font-bold text-white mx-auto relative z-10"
        ref={heading}
      >
        {text}
      </h4>
    </div>
  );
};

export default ServiceCard;

