
import React, { useEffect, useState,useContext } from "react"
import axios from "axios"
import { useSearchParams } from "react-router-dom"

import TopBrands from "../Components/Products/TopBrands"
import Downside from "../Components/Products/Downside"
import Pagination from "../Components/Products/Pagination"


const GetData = (page,sort)=>{
  let sortby= null
  let order = null
  if(sort=="rating"){
     sortby = "rating"
     order = "desc"
  }
  else if(sort=="HL"){
      sortby = "price"
      order = "desc"
  }
  else if(sort=="LH"){
      sortby = "price"
      order = "asc"
  }
  else if(sort=="discount"){
      order="desc"
      sortby="discount"
  }
  else {
      sortby = "id"
      order = "asc"
  }
  return axios({
      method:"get",
      baseURL:"http://localhost:1010/products",
      params:  {_page:page,
             _limit:12,
             _sort:sortby,
             _order:order}
  })
}


export const ProductsPage = () => {

  const [data,setData] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [page,setPage]  = useState(1)
  const [totalPages,setTotalPages] = useState(0)
  const [searchParams,setSearchParams] = useSearchParams()
  const initialState = searchParams.get("sort")
  const [sort,setSort] = useState(initialState || "")

    const HandlePage = (val)=>{
        setPage((prev)=>prev+val)
     }

     const InGetData = ()=>{
      setIsLoading(true)
      GetData(page,sort)
      .then((res)=>{
          setIsLoading(false)
          let x = res.headers["x-total-count"]
          x = Math.ceil(x/12)
          setTotalPages(x)
          setData(res.data)
       })
       .catch((err)=>{
          console.log(err)
          setIsLoading(false)
       })
    }
  
     useEffect(()=>{
        InGetData()
     },[page,sort])
    
     const HandleSort = (e)=>{
         setSort(e.target.value)
      }

     useEffect(() => {
      const params = { sort};
      setSearchParams(params);
    }, [sort]);



  return (
    <>
         <TopBrands/>
         <h1> ProductsPage</h1>
         <Downside data={data} HandleSort={HandleSort}/>
         <Pagination HandlePage={HandlePage} totalPages={totalPages} page={page}/>
    
    </>
  )
}
