import React from 'react'
import{ AiOutlineShoppingCart } from 'react-icons/ai';
// import{ CgProfile } from 'react-icons/ai';
import Link from 'next/link'
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Link href={'/'}>
      <span className="ml-3 text-xl">BackCart</span>
    </Link>
    </a>
        
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      
      <Link href='/' className="mr-5 hover:text-gray-900">Home</Link>
      <Link href='/Category/Fassion' className="mr-5 hover:text-gray-900">Fassion</Link>
      
      <Link href='/Category/MobilePhones'  className="mr-5 hover:text-gray-900">Mobile Phones</Link>
      <Link  href='/Category/Electronics' className="mr-5 hover:text-gray-900">Electronics</Link>
      <Link href='/Category/Books'  className="mr-5 hover:text-gray-900">Books</Link>
    </nav>
   <Link href={'/Cart'}>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-2xl">  < AiOutlineShoppingCart/></button>
    {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-2xl">  <CgProfile/></button> */}
  
   </Link>
 
  </div>
</header>
  )
}

export default Navbar
