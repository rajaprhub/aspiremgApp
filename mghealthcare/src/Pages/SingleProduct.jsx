import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";


const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(true);
  // fetch request
  // store
  // const navigate = useNavigate();
  useEffect(() => {
    setLoader(true);
    axios
      .get(`http://localhost:1010/products/${id}`)
      .then(({ data }) => {
        console.log(data)
        setProduct(data);
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  }, [id]);

  return (
   <>
      <h1> Single Product page </h1>

         {/* <div style={{marginTop:"10px"}}>
           <h1 data-testid="product-brand">{product.id}</h1>
           <img data-testid="product-image"  width={"180px"}   
              src={product.image} alt={product.image}
             />
           <h2 data-testid="product-category">{product.name}
           </h2>
         </div> */}

          {/* 
              { product?.map((item)=>(
                    <ProductCard key={item.id} {...item}/>
                  ))
          } */}

          <div style={{marginTop:"10px"}}>
                 <ProductCard loader={loader} product={product} />
          </div>


    </>
  );
};

export default SingleProduct;