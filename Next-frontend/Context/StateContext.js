

import React, { createContext, useContext, useState, useEffect } from 'react';


const Context = createContext();

export const StateContext = ({children}  ) => {

  const [qty, setQty] = useState(1);
  const [cartItems,SetCartItems] = useState([]);
  const [totalPrice,setTotalPrice] = useState(0);
  const [totalQuantity,setTotalQuantities] = useState(0);

 


  



 const onAdd=(product,quantity)=>{
   const checkProductInCart = cartItems.find((items)=>items._id === product._id);
   
   
   setTotalPrice((prevTotalPrice) => prevTotalPrice + product?.price * quantity);
   setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
   if(checkProductInCart){
     
     const updateCartItems =cartItems.map((cartProduct)=>{
       
       
       if (cartProduct._id === product._id) return{
         ...cartProduct,quantity:cartProduct.quantity+quantity }
            })
            console.log(cartItems)
            SetCartItems(updateCartItems);


          }
          // else{
  //           setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
  //           setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
            

  //          quantity = product.quantity;
  //           SetCartItems([...cartItems,{...product}]);

  // }
// toast.sucess(`${qty} ${product.name} added to cart`);

 }


  

  const incQty = () => {0
    setQty((qty) => qty + 1);
  }

  const decQty = () => {
    setQty((qty) => {
      if(qty - 1 < 1) return 1;
     
      return qty - 1;
    });
  }

  return (
    <Context.Provider
      value={{
        
        qty,
        incQty,
        decQty,
        totalPrice,
        totalQuantity,
        cartItems,
        onAdd

        
       
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);

