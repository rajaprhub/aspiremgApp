import React from 'react'
import { Link,Navigate,useSearchParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faLocationDot,faLocationCrosshairs,
        faMagnifyingGlass,faChevronDown,faBars } from '@fortawesome/free-solid-svg-icons'
import styles from '../Styles/Navbar.module.css'
import { Input,InputRightElement,Button,InputGroup } from '@chakra-ui/react'
import { useState,useContext } from "react"

import { CartContext } from "../Contexts/CartContext";

export const Navbar = () => {

  const { userCart } = useContext(CartContext);
  const [cartItem, setCartItem] = useState(0);

  React.useEffect(() => {
    if(userCart.cart){
      setCartItem(userCart.cart.length);
    }
  }, [userCart]);



  return (
    <div> 
  
  <div className={styles.top}>
   <div><Link style={{background:"white"}} to='/'><img className={styles.logo} src="https://st2.depositphotos.com/3878061/47821/i/450/depositphotos_478213688-stock-photo-neon-icon-shopping-cart-wheels.jpg" alt="logo"/></Link></div>
   <div className={styles.medicine}>MEDICINES</div>
   <div><span className={styles.head}>LAB TESTS  </span> <span style={{fontSize:"12px"}} className={styles.safe}>SAFE</span></div>
   <div className={styles.head}>CONSULT DOCTORS</div>
   <div className={styles.head}>COVID-19</div>
   <div className={styles.head}>AYURVEDA</div>
   <div><span className={styles.head}>CARE PLAN  </span> <span className={styles.safe}>SAVE MORE</span></div>
   <div><span className={styles.login}>Login</span> | <span className={styles.signup}>Signup</span></div>
   <div>Offers</div>
   <div style={{width:"35px",cursor:"pointer"}}> 
     <Link to='/cart' style={{background:'white', display: 'flex',gap:'5px',textDecoration:"none"}}>
      <FontAwesomeIcon style={{color:"black",background:"white"}} icon={faCartShopping}/>
      <sup style={{background:"white"}}> {cartItem}</sup>
     </Link>
   </div>
    <div>Need Help?</div>
  </div>

  <hr className={styles.hr} />

<div className={styles.middle}>
  <div className={styles.left}>
    <div className={styles.delhi}>
      <div>
        <FontAwesomeIcon
          icon={faLocationDot}
          className={styles.dot}
        />{" "}
        <span style={{ fontWeight: "bold", marginLeft: "5px" }}>
          {" "}
          New Delhi
        </span>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faLocationCrosshairs}
          className={styles.cross}
        />
      </div>
    </div>

    <div className={styles.Search}>
      <input
      style={{boxShadow:"none"}}
        className={styles.input}
        onKeyUp={"HandleSearchKey"}
        onChange={"HandleSearchChange"}
        value={"search"}
        type="text"
        placeholder="Searc for Medicines and Health Products"
      />
      <Link to="/products/skincare">
        <FontAwesomeIcon
          className={styles.glass}
          icon={faMagnifyingGlass}
        />
      </Link>
    </div>
  </div>

  <div className={styles.right}>
    <div className={styles.quick}>
        <p style={{ float: "right", background: "white" }}>
          QUICK BUY! Get 25% off on  medicines*
        </p>
    </div>
    <div style={{ background: "white" }}>
      <button className={styles.order}>Quick order</button>
    </div>
  </div>
</div>

<hr className={styles.hr} />

         <div className={styles.bottom}>
            <div>
              <span>Health Care Resource</span>{" "}
              <FontAwesomeIcon className={styles.down} icon={faChevronDown} />
            </div>
            <div>
              <span>Vitamins & Nutritions</span>{" "}
              <FontAwesomeIcon className={styles.down} icon={faChevronDown} />
            </div>
            <div>
              <span>diabetes</span>{" "}
              <FontAwesomeIcon className={styles.down} icon={faChevronDown} />
            </div>
            <div>
              <span>Healthcare Devices</span>{" "}
              <FontAwesomeIcon className={styles.down} icon={faChevronDown} />
            </div>
            <div>
              <span>Personal Care</span>{" "}
              <FontAwesomeIcon className={styles.down} icon={faChevronDown} />
            </div>
            <div>
              <span>Health Conditions</span>{" "}
              <FontAwesomeIcon className={styles.down} icon={faChevronDown} />
            </div>
            <div>
              <span>Ayurveda Products</span>{" "}
              <FontAwesomeIcon className={styles.down} icon={faChevronDown} />
            </div>
            <div>
              <span>Homeopathy</span>{" "}
              <FontAwesomeIcon className={styles.down} icon={faChevronDown} />
            </div>
            <div>
              <span>Featured</span>{" "}
              <FontAwesomeIcon className={styles.down} icon={faChevronDown} />
            </div>
            <div>
              <span>Covid Essentials</span>{" "}
              <FontAwesomeIcon className={styles.down} icon={faChevronDown} />
            </div>
          </div>

    </div>
  )
  
}
