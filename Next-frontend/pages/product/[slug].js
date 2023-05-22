import React, { useState } from 'react'
import {client,urlFor} from '../../../Sanity-backend/Lib/client'

import Link from 'next/link'

import {useStateContext} from'../../Context/StateContext';

const productDetails = ({ product, products }) => {
  
  const [index, setIndex] = useState(0);
  // Destructuring the values
  const { decQty, incQty, qty, onAdd } = useStateContext();
  const handleAddToCart=()=>{
    onAdd(product,qty);
  }

  return (
    <>
         <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-96 w-50 object-cover object-center rounded" src={urlFor(products.image && products.image[0])}/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{products.name}</h1>
        <div class="flex mb-4">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p class="leading-relaxed">{products.details}</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          
         
        </div>
        <div class="flex">
          <span class="title-font items-center content-center font-medium text-2xl text-gray-900"> Price  :${products.price}</span>
          
         
        </div>
        <div>



                  <button className="inline-flex bg-blue-200 m-5 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"  onClick={incQty}>+</button>
                <span> {qty}</span>
                  <button className="inline-flex bg-blue-200 m-10 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg" onClick={decQty}>-</button>

                

                 
            
              <button className="inline-flex text-white bg-purple-500 border-0 mx-2 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Place Order</button>
              <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg" onClick={handleAddToCart}> Add to Cart</button>
           
            </div>
      </div>
    </div>
  </div>
</section>
       


   
    </>
  )
}


// export const getServerSideProps = async({params:{slug}})=>{

//   const query=`*[_type == "product" && slug.current == '${slug}'][0]`;
//   const products = await client.fetch(query) ;
  
//   const relatedProduct ='*[_type == "product"]';
//   const relatedProducts = await client.fetch(relatedProduct) ;
  
//   return {
//     props:{products,relatedProducts}
//   }

// }

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query=`*[_type == "product" && slug.current == '${slug}'][0]`;
  const products = await client.fetch(query) ;
  
  const relatedProduct ='*[_type == "product"]';
  const relatedProducts = await client.fetch(relatedProduct) ;
  
  return {
    props:{products,relatedProducts}
  }
}


export default productDetails


