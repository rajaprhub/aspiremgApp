import axios from "axios"
import styles from '../../Styles/Products/RightSide.module.css'
import { AllProducts } from "./AllProducts"
import Pagination from "./Pagination"
import { useState } from "react"



const RightSide = ({data,HandleSort})=>{

 
 return(
    <>
       <div className={styles.header}>
         <p>All Products</p>
        <div>
         <span className={styles.sort}>Sort By</span>
         <select onChange={(e)=>HandleSort(e)}>
         <option>Relevance</option>
         <option value="rating">Average Customer Rating</option>
         <option value="LH">Price: Low to High</option>
         <option value="HL">Price: High to Low</option>
         <option value="discount">Discount</option>
         <option></option>
        </select>
       </div>
      </div>

       <AllProducts data={data} HandleSort={HandleSort} />
     
    </>
  )
}

export default RightSide