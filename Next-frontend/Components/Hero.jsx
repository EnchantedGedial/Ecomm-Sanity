import React from 'react'

import { urlFor } from '../../Sanity-backend/Lib/client'
import Link from 'next/link'
import Test from './Test'
import Caroule from './Caroule'

const Hero = ({heroBanner}) => {
  return (
    <>
    {/* <Caroule/> */}
  
    
<section class="text-gray-600 body-font w-4/5 flex items-center content-center m-auto">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-pink-500">Festive Offer</h1>
      <h3 class="title-font sm:text-4xl text-3xl mb-4 font-small text-gray-900">{heroBanner.largeText1}</h3>
      <p class="mb-8 leading-relaxed">{heroBanner.desc}</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{heroBanner.buttonText}</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Add to Cart</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={urlFor(heroBanner.image)} style={{widht:520 ,height:450}}/>
    </div>
  </div>
</section>
      
    </>
  )
}

export default Hero
