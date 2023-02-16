import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import {
  Text,
  Box,
  Button,
  Stack,
  Select,
  Wrap,
  Flex,
  Radio,
  Image,
} from "@chakra-ui/react";
import styles from "../Styles/SingleProduct.module.css";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const ProductCard = ({  product, loader }) => {
  const [value, setValue] = useState("1");


return (

  <div key={product.id} className={styles.sp}>

   <div className={styles.container}>
        <p className={styles.head}><span style={{color:"#fd8e91",background:"white"}}>Home</span> {'>'} <Link style={{background:'white',border:"none",color:"#fd8e91",textDecoration:"none"}} to="/products/skincare">Skin Care</Link> {'>'} {product.name}</p>
      
        <div className={styles.align}>
          <div className={styles.imgDiv}>
            <img
              className={styles.pimg}
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className={styles.info}>
            <h2 style={{ backgroundColor: "#ffffff" }} className={styles.productName}>{product.name}</h2>
            <h5 style={{ backgroundColor: "#ffffff" }}>{"Laboratory"}</h5>
            <div className={styles.review_rtng}>
              <Flex className={styles.rev } >
                <p
                  style={{
                    backgroundColor: "#1aab2a",
                    color: "#ffffff",
                    // marginLeft: "10",
                    // height:"30px"
                    marginRight:"5px"
                  }}
                >
                  {product.rating}
                </p>
              
              </Flex>
              <Text
                className={styles.rtng_cnt_revw}
              >{`${product.rating_count} Ratings & ${product.reviews} Reviews`}</Text>
            </div>
            <h3 className={styles.ph}>{"Products Highlights"}</h3>
            <ul className={styles.lst}>
              {loader === false
                ? product.product_highlight.map((el, i) => {
                    return (
                      <li key={i} style={{ backgroundColor: "#ffffff" }}>
                        {el}
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
          <div className={styles.rhs} style={{ backgroundColor: "#ffffff"}}>
            <Box className={styles.sideDiv}>
              <div 
              className={styles.people}
              >
                <img src="https://www.1mg.com/images/social_cue.svg" />
                <Text >509 people bought this recently</Text>
              </div>

              <Form 
              // className={styles.mrp_prc_dscnt}
              >
                {["radio"].map((type) => (
                  <div
                    key={`default-${type}`}
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <div
                    className={styles.flx}
                    >
                      <Form.Check
                        type={type}
                        name={"radio"}
                        id={`default-${type}`}
                        label={`  ₹${product.price}`}
                        className={styles.chk1}
                        defaultChecked
                      />{" "}
                      <del
                       className={styles.mrp1}
                       > 
                      {`₹${product.mrp}`}</del>{" "}
                      <Text
                        className={styles.discnt}
                      >{`${product.discount}% off`}</Text>
                    </div>
                    <Flex 
                    className={styles.flx}
                    >
                      <Form.Check
                      style={{display:"flex",marginRight:"5px",gap:"5px"}}
                        type={type}
                        name={"radio"}
                        label={` ₹${product.price}`}
                        id={`disabled-default-${type}`}
                        className={styles.chk1}
                        //  style={{width:"87px",marginRight:"5px"}}
                      />
                      <div style={{ backgroundColor: "#ffffff" }}>
                        <div 
                        // className={styles.corePlan}
                        >
                        </div>
                        <p 
                        className={styles.free}
                        >
                          + free shipping and 3% Extra NeuCoins With
                          <Image marginLeft={"4px"} src="https://onemg.gumlet.io/v1613645053/marketing/phb2bz61etrdmuurfdoq.png" />
                        </p>
                      </div>
                    </Flex>
                  </div>
                ))}
              </Form>
              <Text 
              className={styles.incl}
              >Inclusive of all taxes</Text>
              <Flex 
              className={styles.slct_txt}
              >
                <select placeholder="Select option"  className={styles.slct}>
                <option   className={styles.optn}>
                    select
                  </option> 
                  <option value={1} className={styles.optn}>
                    1 Quantity
                  </option>
                  <option value={2} className={styles.optn}>
                    2 Quantities
                  </option>
                  <option value={3} className={styles.optn}>
                    3 Quantities
                  </option>
                  <option value={4} className={styles.optn}>
                    4 Quantities
                  </option>
                  
                 
              
                </select>
                <Text
                  className={styles.stck}
                >{`of ${product.stock} ${product.name}`}</Text>
              </Flex>
              <Button 
              className={styles.addToCart}
              >ADD TO CART</Button>
            </Box>
           
          </div>
        </div>
      </div>

       {/* **************** */}
     
          <div 
          className={styles.ki_kb_sf}
          >
            <h2
              className={styles.infabt}
            >{`Information about ${product.name}`}</h2>
            <p 
            className={styles.descrip}
            >{product.description}</p>
            <h4 
            className={styles.ki}
            >Key Ingredients:</h4>
            <ul 
            className={styles.ki_li}
            >
              {loader === false
                ? product.key_ingredients.map((el, i) => {
                    return <li style={{ backgroundColor: "#ffffff" }}>{el}</li>;
                  })
                : null}
            </ul>
            <h4 
            className={styles.kb}
            >Key Benefits:</h4>
            <ul 
            className={styles.kb_li}
            >
              {loader === false
                ? product.key_benefits.map((el, i) => {
                    return <li 
                    style={{ backgroundColor: "#ffffff" }}
                    >{el}</li>;
                  })
                : null}
            </ul>

            <h4 
            className={styles.sf}
            >Safety Information:</h4>
            <ul 
            className={styles.sf_li}
            >
              {loader === false
                ? product.safety_information.map((el, i) => {
                    return <li style={{ backgroundColor: "#ffffff" }}>{el}</li>;
                  })
                : null}
            </ul>
            <div  className={styles.rtngRev}>
              <Box backgroundColor="#ffffff">
                <h2 style={{ backgroundColor: "#ffffff" }}>
                  Ratings & Reviews
                </h2>
                <Flex gap="2%" backgroundColor="#ffffff" marginTop={"2%"}>
                  <h1  className={styles.prdrtnd}
                  >{product.rating}</h1>
                  
                  <Text
                  backgroundColor="#ffffff"
                  marginTop={"2%"}
                >{`${product.rating_count} Ratings & ${product.reviews} Reviews`}</Text>
                </Flex>
              </Box>
            </div>
          </div>
          <div>
          </div>
        </div>
    

  );
};

export default ProductCard;


