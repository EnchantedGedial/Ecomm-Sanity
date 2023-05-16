import React, { createContext, useState } from 'react'


const Context = createContext();
export const StateContext = ({children}) => {

    cosnt [qty,SetQty]=useState(1);

    const incQty=()=>{
      SetQty((prevQty)=>{
        prevQty +1;
      })
    }
    const decQty=()=>{
      SetQty((prevQty)=>{
        if(prevQty -1<1) return 1;
        return prevQty -1;
      })
    }
  return (
    <Context.Provider
       value={{
        qty,incQty,decQty
       }}


    >{children}



    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);
