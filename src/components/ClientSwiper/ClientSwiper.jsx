import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import SlideDiv from "./SlideDiv.jsx";
import logo1 from "../../assets/logo1.png"
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";

export default function ClientSwiper() {
  return (
    <>
      <Swiper
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
        spaceBetween={50}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        Autoplay={true}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false, 
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper w-full"
        style={{paddingBottom:"30px"}}
      >
        <SwiperSlide>
          <SlideDiv img={logo1}/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideDiv img={logo2}/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideDiv img={logo3}/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideDiv img={logo4}/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideDiv img={logo5}/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideDiv img={logo6}/>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
