import React from "react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const NavBar = ({ tl, paddingTop }) => {
  const logoRef = useRef(null);
  const navList = useRef(null);
  const sideNav = useRef(null);
  const sideNavTl = useRef(null);
  const mobileNavLinks = useRef(null)
  const ham = useRef(null);

  useGSAP(()=>{
    sideNavTl.current = gsap.timeline({paused:true}).to(sideNav.current,{
      x:0,
      ease:'power3.out'
    })
    sideNavTl.current.from(mobileNavLinks.current.children,{
        x:100,
        opacity:0,
        stagger:0.3,
        scale:0,
    })
  })

  function mobileNavIn(){
     sideNavTl.current.play();
  }

  function mobileNavOut(){
    sideNavTl.current.reverse();
  }

  useGSAP(() => {
    tl.from(logoRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.5,
    });

    const liElements = navList.current?.querySelectorAll("li");

    if (liElements?.length > 0) {
      // Set initial position
      gsap.set(liElements, { y: -30, opacity: 0 });

      // Animate to normal position
      tl.to(liElements, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
      });
    } else {
      console.error("No <li> elements found!");
    }

    tl.from(ham.current,{
      opacity:0,
      y:-30,
      duration:0.3,
    })
  });

  return (
    <div>
      <div className="w-full border-b-2 border-b-white" id="nav">
        <div className="w-full px-4 sm:w-11/12 mx-auto md:w-4/5 max-w-[1440px] flex justify-between text-white font-bold py-4 items-center">
          <img src="./" alt="Company's Logo" ref={logoRef} />
          <nav className="hidden sm:block">
            <ul className="flex gap-4" ref={navList}>
              <li className="cursor-pointer hover:scale-115 hover:text-blue-400 transition text-blue-400">
                Home
              </li>
              <li className="cursor-pointer hover:scale-115 hover:text-blue-400 transition">
                About Us
              </li>
              <li className="cursor-pointer hover:scale-115 hover:text-blue-400 transition">
                Services
              </li>
              <li className="cursor-pointer hover:scale-115 hover:text-blue-400 transition">
                Contact Us
              </li>
            </ul>
          </nav>
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/fluency/48/menu--v3.png"
            alt="rows"
            className="sm:hidden cursor-pointer"
            onClick={mobileNavIn}
            ref={ham}
          />
        </div>
      </div>

      <div
        className="fixed top-0 right-0 w-3/4 sm:w-1/2 max-w-[300px] min-h-screen md:hidden z-20 pl-8 px-6 pt-4 translate-x-full overflow-x-hidden"
        style={{ backgroundColor: "rgba(255, 255, 255)", backdropFilter: `filter(10px)`}}
        ref={sideNav}
      >
        <nav>
          <ul className="text-2xl font-bold flex flex-col gap-6" ref={mobileNavLinks}>
            <li className="self-end p-1 px-3 rounded-full border-black border cursor-pointer text-lg" onClick={mobileNavOut}>X</li>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
