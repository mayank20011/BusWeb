import React from 'react'
import ReviewSwiper from './ReviewSwiper/ReviewSwiper';
import busNight from '../assets/busNight.jpg';
const Reviews = () => {
  return (
    <div className="w-full px-4 sm:w-11/12 mx-auto md:w-4/5 max-w-[1440px] flex flex-col lg:flex-row gap-12 items-center">
      <div className="aspect-[16/9] w-full lg:w-1/2 border-2 border-white rounded-md shadow-lg shadow-black hover:shadow-2xl transition">
      <img src={busNight} alt="Bus Image" className="border-2 border-white rounded-md "/>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
      <span className="font-bold text-blue-900 text-xl">Review</span>
      <h1 className="text-5xl font-bold">What Client's Say</h1>
        <ReviewSwiper/>
      </div>
    </div>
  )
}

export default Reviews;