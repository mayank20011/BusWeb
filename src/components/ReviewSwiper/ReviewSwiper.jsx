import { Swiper, SwiperSlide } from "swiper/react";
import ReviewSlide from "./ReviewSlide";
import { Pagination, Autoplay } from "swiper/modules";
import rahulMehta from "../../assets/rahulMehta.jpg";
import snehaReddy from "../../assets/snehaReddy.jpg";
import amitJoshi from "../../assets/amitJoshi.jpeg";
import anilKumar from "../../assets/anilkumar.jpeg";
export default function ReviewSwiper() {
  return (
    <>
      <Swiper
        className="w-full"
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        style={{paddingBottom:"30px"}}
      >
        <SwiperSlide>
          <ReviewSlide
            imgUrl={rahulMehta}
            personName={"Vinay Gurjjar"}
            place={"Jhajjar"}
            pera={`"The bus service was exceptional! Timely departure, friendly staff, and well-maintained buses made the journey a joy. Online booking was simple, and I appreciated the transparent pricing. The entire experience was smooth, safe, and stress-free. Highly recommend this reliable service for anyone seeking comfortable and affordable travel options!"`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlide
            imgUrl={snehaReddy}
            personName={"Sneha Reddy"}
            place={"Gurugram"}
            pera={`"I had a delightful travel experience with this service! Booking was convenient, and the buses were spotless and cozy. The drivers were professional and ensured a punctual and safe journey. Customer support promptly addressed my queries, enhancing my confidence in their commitment to quality. I'll definitely choose this again!"`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlide
            imgUrl={amitJoshi}
            personName={"Sunil Sehrawat"}
            place={"Dadri"}
            pera={`"An outstanding travel experience from start to finish! The website offered a variety of choices, and bookings were processed swiftly. Buses were on time, clean, and equipped for a relaxed trip. I was impressed by the efficiency and care provided throughout. This service exceeded my expectations and deserves full praise!"`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlide
            imgUrl={anilKumar}
            personName={"Kamal Dalal"}
            place={"Sampla"}
            pera={`"This bus service truly impressed me! Affordable prices, excellent hygiene, and punctuality made my journey seamless. The entire process, from booking to arriving at my destination, was organized and effortless. I appreciated the courteous staff who made the trip pleasant. A dependable choice for hassle-free and enjoyable travel adventures!"`}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
