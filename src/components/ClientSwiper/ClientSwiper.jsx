import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import SlideDiv from "./SlideDiv.jsx";
export default function ClientSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
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
        className="mySwiper w-full border-2 h-20"
      >
        <SwiperSlide>
          <SlideDiv img={""}/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideDiv img={""}/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideDiv img={""}/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideDiv img={""}/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideDiv img={""}/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideDiv img={""}/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideDiv img={""}/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideDiv img={""}/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideDiv img={""}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
