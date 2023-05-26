import React, { useRef } from 'react'
import{ AiOutlineShoppingCart,AiFillCloseCircle,AiOutlinePlusCircle,AiOutlineMinusCircle } from 'react-icons/ai';
import{ CgProfile } from 'react-icons/cg';
import Link from 'next/link'
const Navbar = () => {

  const toggleCart =()=>{
    if (ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    }
   else  if (!ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
    }

  }
  const ref =useRef();
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

    
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-2xl ">  <CgProfile/></button>
   
    <button onClick={toggleCart}  className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-2xl mx-4 cursor-pointer">  < AiOutlineShoppingCart/></button>
   
  
    <div ref={ref} className="sidebar absolute top-0 right-0 bg-indigo-100 px-10 py-14 transform transition-transform translate-x-full h-full w-80">
      <div className='font-bold text-xl text-center '>Cart Items </div>
      <span onClick={toggleCart} className="absolute top-2 right-2 cursor-pointer text-2xl text-indigo-500 hover:text-indigo-300"> <AiFillCloseCircle/></span>
  <ol className="list-decimal">
    <li className='text-center'>
      <div className="item flex my-3">
      <div className='w-2/3'>Tshirt - Puma</div>
      <div className=' flex items-center text-center w-1/3'><AiOutlinePlusCircle className='mx-2 cursor-pointer'/> 1 <AiOutlineMinusCircle className='mx-2 cursor-pointer' /></div>
      </div>
        
    </li>
  </ol>
  <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Check Out</button>
    </div>
 
  </div>
</header>
  )
}

export default Navbar
