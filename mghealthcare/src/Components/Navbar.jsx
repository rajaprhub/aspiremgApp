import React from 'react'
import { Link,Navigate,useSearchParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faLocationDot,faLocationCrosshairs,
        faMagnifyingGlass,faChevronDown,faBars } from '@fortawesome/free-solid-svg-icons'
import styles from '../Styles/Navbar.module.css'
import { Input,InputRightElement,Button,InputGroup } from '@chakra-ui/react'
import { useState,useContext } from "react"


export const Navbar = () => {
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
      <sup style={{background:"white"}}> cart</sup>
     </Link>
   </div>
    <div>Need Help?</div>
  </div>

    </div>
  )
  
}
