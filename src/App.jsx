import React from "react";
import Banner from "./components/Banner.jsx";
import NavBar from "./components/Navbar.jsx";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import gsap from "gsap";
import HeroSection from "./components/HeroSection.jsx";
import InfoCards from "./components/InfoCards.jsx";
import AboutUs from "./components/AboutUs.jsx";
import PremiumSection from "./components/PremiumSection.jsx";
import Services from "./components/Services.jsx";
import WhyUss from "./components/WhyUss.jsx";
import Reviews from "./components/Reviews.jsx";
import Footer from "./components/Footer.jsx";

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
    <div className="bg-neutral-700 scroll-smooth" id="home">
      <Banner tl={tl} />

      <div className={`${styles.busBg} overflow-hidden`}>
        <div className={`${styles.blurContainer}`}>
          <NavBar tl={tl} />
          <HeroSection tl={tl} />
        </div>
      </div>

      <div className="bg-slate-100">
        <InfoCards />
        <AboutUs />
      </div>

      <div className={`w-full ${styles.premium} sm:py-6 md:py-12`}>
        <PremiumSection />
      </div>

      <div className="w-full py-6 md:py-12 bg-slate-100">
        <Services />
      </div>

      <div className={`w-full py-6 md:py-12 bg-neutral-500 ${styles.whyUsBg}`}>
        <WhyUss />
      </div>

      <div className="w-full py-6 md:py-12 bg-slate-100">
        <Reviews />
      </div>

      <div className="w-full py-6 md:py-12 bg-neutral-500">
        <Footer />
      </div>

      <a href="#home" className="fixed right-3 bottom-[30px]">
        <img src="https://img.icons8.com/fluency/48/up.png" alt="Arrow Up" className="bg-white p-2 rounded-full h-[40px]"/>
      </a>

    </div>
  );
};

export default App;
