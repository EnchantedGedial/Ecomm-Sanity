

import React, { createContext, useContext, useState, useEffect } from 'react';


const Context = createContext();

export const StateContext = ({children}  ) => {

  const [qty, setQty] = useState(1);
  const [cartItems,SetCartItems] = useState([]);
  const [totalPrice,setTotalPrice] = useState(0);
  const [totalQuantity,setTotalQuantities] = useState(0);

{console.log(totalPrice)}
 const onAdd=(product,quantity)=>{

          const checkProductInCart = cartItems.find((items)=>items._id === product._id);
          
          setTotalPrice((prevTotalPrice) => prevTotalPrice + product?.price * quantity);
          setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
          if(checkProductInCart){

            const updateCartItems =cartItems.map((cartProduct)=>{
              
              
              if (cartProduct._id === product._id) return{
                ...cartProduct,
                quantity:cartProduct.quantity+quantity
                

              }
            })
            SetCartItems(updateCartItems);


          }
          // else{
          //   setTotalPrice((prevTotalPrice) => prevTotalPrice + product?.price * quantity);
          //   setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
            

          //  quantity = product.quantity;
          //   SetCartItems([...cartItems,{...product}]);
// 
  // }
// toast.sucess(`${qty} ${product.name} added to cart`);

 }



  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
     
      return prevQty - 1;
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