import React, { useState } from 'react'
import {client,urlFor} from '../../../Sanity-backend/Lib/client'

import Link from 'next/link'

import {useStateContext} from'../../Context/StateContext';

const productDetails = ({ product, products }) => {
  
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd } = useStateContext();
  const handleAddToCart=()=>{
    onAdd(product,qty);
  }

  return (
    <>
          <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">

          
                <div class="lg:w-1/4 md:w-1 p-4 w-full">
                <a class="block relative h-48 rounded overflow-hidden">

                  {/* This syntax must be fallowed to fetch and display image form sanity backend */}
                  {/* src={urlFor(product.image)} */}
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={urlFor(products.image && products.image[0])}/>
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{products.name}</h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">{products.details}</h2>
                  <p class="mt-1">${products.price}</p>
        <div>



                  <button className="inline-flex bg-blue-200 m-10 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"  onClick={incQty}>+</button>
                <span> {qty}</span>
                  <button className="inline-flex bg-blue-200 m-10 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg" onClick={decQty}>-</button>

                  </div>

                  {/* <Link  href={`/payments`}> */}
            
              <button className="inline-flex text-white bg-purple-500 border-0 mx-2 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Place Order</button>
              <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg" onClick={handleAddToCart}> Add to Cart</button>
              {/* </Link> */}
            
                </div>
              </div>
          
            
              
            </div>
          </div>
        </section>
   
    </>
  )
}


export const getServerSideProps = async({params:{slug}})=>{

  const query=`*[_type == "product" && slug.current == '${slug}'][0]`;
  const products = await client.fetch(query) ;
  
  const relatedProduct ='*[_type == "product"]';
  const relatedProducts = await client.fetch(relatedProduct) ;
  
  return {
    props:{products,relatedProducts}
  }

}
export default productDetails


