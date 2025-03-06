import React from "react";
import Banner from "./components/Banner.jsx";
import NavBar from "./components/NavBar.jsx";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import gsap from "gsap";
import HeroSection from "./components/HeroSection.jsx";
import InfoCards from "./components/InfoCards.jsx";
import AboutUs from "./components/AboutUs.jsx";
import PremiumSection from "./components/PremiumSection.jsx";
import Services from "./components/Services.jsx";

const App = () => {
  const [bannerHeight, setBannerHeight] = useState(0);
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setBannerHeight(0);
    } else {
      setBannerHeight(document.querySelector("#nav").offsetHeight);
      setNavHeight(document.querySelector("#banner").offSetHeight);
    }
  }, []);

  const tl = gsap.timeline();

  return (
    <div className="bg-neutral-700">
      <Banner tl={tl} />
      
      {/* for Background image */}
      <div className={`${styles.busBg} overflow-hidden`}>
        <div className={`${styles.blurContainer}`} >
          <NavBar tl={tl} />
          <HeroSection tl={tl} />
        </div>
      </div>

      <div className="bg-slate-100">
        <InfoCards/>
        <AboutUs/>
      </div>
      
      <div className="w-full sm:py-6 md:py-12 " >
         <PremiumSection/>
      </div>

      <div className="w-full py-6 md:py-12 bg-slate-100">
        <Services/>
      </div>
    </div>
  );
};

export default App;
