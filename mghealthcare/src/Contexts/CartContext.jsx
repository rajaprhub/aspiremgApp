import React,{useState} from 'react'

import { saveData,loadData } from '../Utils/accessLocalstorage'

export const CartContext = React.createContext()

let initialState = {
    id:"",
    name:"",
    username:"",
    email:"",
    mobile:"",
    password:"",
    cart:[]
  }
  


function  CartContextProvider({children}){ 

    const [userCart,setUserCart] = useState(loadData("Cart") || initialState)
const [locationDetails,setLocationDetails] =  useState(loadData("locationDetails") || {})

const [paymentDetails,setPaymentDetails] =  useState(loadData("paymentDetails") || {})

console.log(paymentDetails)

return(
    <CartContext.Provider value={{userCart,setUserCart,locationDetails,setLocationDetails,paymentDetails,setPaymentDetails}} >
        {children}
    </CartContext.Provider>
)

}

export default CartContextProvider