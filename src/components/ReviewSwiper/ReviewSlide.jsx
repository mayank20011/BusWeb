import React from 'react'

const ReviewSlide = ({imgUrl ,pera, personName, place}) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <img src="" alt="" />
      <p className="text-lg">{pera}</p>
      <div className="flex gap-4 items-center">
        <img src={imgUrl} alt="Person" />
        <div className="flex flex-col">
          <p className="font-bold">{personName}</p>
          <p className='text-sm font-light'>{place}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewSlide