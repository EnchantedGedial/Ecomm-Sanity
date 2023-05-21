import React from 'react'
import Link from 'next/link';

const CartComponent = () => {
  return (
    <>
<Link href={'/'}>
  <div className="justify-center">

    <button className="inline-flex items-center bg-pink-400 border-0 py-1 px-3 focus:outline-none hover:bg-green-200 rounded text-base mt-4 md:mt-0 text-2xl justify-center">Continue Shopping</button>
  </div>

</Link>
      
    </>
  )
}

export default CartComponent
