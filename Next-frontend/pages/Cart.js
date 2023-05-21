
import { useStateContext } from '@/Context/StateContext';
import React ,{useRef}from 'react';
import Link from 'next/link'
import { urlFor } from '@/../Sanity-backend/Lib/client';

const Cart = () => {
    const cartRef =useRef();
    const {totalPrice,totalQuantity,cartItems,qty} = useStateContext();


  return (
    <>


    <div className='cart-heading'>Total Products : {totalQuantity}</div>



    <Link href={'/'}>


    <button className="inline-flex items-center bg-pink-400 border-0 py-1 px-3 focus:outline-none hover:bg-green-200 rounded text-base mt-4 md:mt-0 text-2xl justify-center">Continue Shopping</button>


</Link>

<div className="container">

{cartItems.length>=1  && cartItems.map((item)=>{
    return <div>
        <img src={urlFor(item?.image)} alt="" />


    </div>
})}
</div>
      
    </>
  )
}





export default Cart
