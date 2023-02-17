import React,{useState} from 'react'

import { saveData,loadData } from '../Utils/accessLocalstorage'

export const CartContext = React.createContext()

let initialState = {
    cart:[]
  }
  


function  CartContextProvider({children}){ 

     const [userCart,setUserCart] = useState(loadData("Cart") || initialState)
 
     const [paymentDetails,setPaymentDetails] =  useState(loadData("paymentDetails") || {})

        console.log(paymentDetails)

  return(
     <CartContext.Provider value={{userCart,setUserCart,paymentDetails,setPaymentDetails}} >
        {children}
     </CartContext.Provider>
  )

}

export default CartContextProvider