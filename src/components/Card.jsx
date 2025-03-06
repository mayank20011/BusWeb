import React from 'react'

const Card = ({heading, pera, imgUrl, imgAlt}) => {
  return (
    <div className="flex flex-col bg-white p-6 text-left sm:text-center gap-4 shadow-sm shadow-black rounded-md hover:shadow-lg transition">
      <img width="50" height="50" src={imgUrl} alt={imgAlt} className="sm:mx-auto"/>
      <h1 className="font-bold text-xl">{heading}</h1>
      <p>{pera}</p>
    </div>
  )
}

export default Card