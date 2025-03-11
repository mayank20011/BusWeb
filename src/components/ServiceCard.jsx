import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const ServiceCard = ({bgImage, text}) => {

  const heading= useRef(null);
  const tl = gsap.timeline({paused:true});

  useGSAP(()=>{
    tl.from(heading.current,{
      y:150,
      opacity:0,
    })
  } )

  function playAnimation(){
    tl.play();
  }

  return (
    <div className="h-[300px] border bg-black flex flex-col justify-end pb-6 overflow-y-hidden" onMouseEnter={playAnimation} onMouseLeave={()=>{tl.reverse()}}>
      <h4 className="text-3xl sm:text-2xl md:text-xl font-bold text-white mx-auto" ref={heading}>{text}</h4>
    </div>
  )
}

export default ServiceCard;