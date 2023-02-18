import React,{useContext,useState} from "react";
import { Link } from "react-router-dom";
import styles from '../Styles/Payment.module.css'

import {Alert} from '../Components/Alert'




const Payment = ()=>{

  return (
    <>
    <nav className={styles.navbar}>
          <Link to="/" style={{background:"white"}}>
             <img src="https://www.1mg.com/images/tata_1mg_logo.svg"/>
        </Link>
         <div>Need Help?</div>
      </nav>

  <div className={styles.container}>

   <div className={styles.left}>

     <div className={styles.option}>
      <div style={{minWidth:"210px"}}>
        <div>
            <img src="https://onemg.gumlet.io/marketing/ff180498-8b1b-4d29-8a21-dff2c383b6ae.jpg" alt="https://onemg.gumlet.io/marketing/ff180498-8b1b-4d29-8a21-dff2c383b6ae.jpg"/>
            <div>WALLETS</div>
        </div>

       <div>
           <img src="https://onemg.gumlet.io/image/upload/zf0de2srckrhx3fk8blm.png" alt="https://onemg.gumlet.io/image/upload/zf0de2srckrhx3fk8blm.png"/>
           <div>UPI</div>
       </div>

        <div style={{background:"white",padding:"10px 0px 10px 10px",marginLeft:"-10px",width:"100%"}}>
          <img style={{background:"white"}} src="https://onemg.gumlet.io/marketing/9b1695ca-b1a9-4893-9157-963047689acb.jpg" alt="https://onemg.gumlet.io/marketing/9b1695ca-b1a9-4893-9157-963047689acb.jpg"/>
          <div style={{background:"white"}}>CARDS</div>
        </div>

         <div>
             <img src="https://onemg.gumlet.io/marketing/4ae5f982-bd28-4af5-b363-fd2bebe80f43.jpg"
                alt="https://onemg.gumlet.io/marketing/4ae5f982-bd28-4af5-b363-fd2bebe80f43.jpg"/>
              <div>NET BANKING</div>
         </div>

         <div>
           <img src="https://onemg.gumlet.io/marketing/280ca862-d1ae-4025-999a-b37d0ef5b430.jpg" alt="https://onemg.gumlet.io/marketing/280ca862-d1ae-4025-999a-b37d0ef5b430.jpg"/>
           <div>PAY ON DELIVERY</div>
         </div>
      </div>

   </div>

<div className={styles.credit}>
    <p className={styles.debit}>Credit & Debit Cards</p>
    <p className={styles.small}>Add New Card For Payment</p>
    <p className={styles.small} style={{marginTop:"30px"}}>Card Number</p>

      <input className={styles.cardNumber} 
         type="number" 
         style={{boxShadow:"none",borderBottom:"2px solid rgb(201, 201, 201)"}}
         placeholder="XXXX XXXX XXXX XXXX"/>

    <div className={styles.security}>
      <div>
        <p className={styles.small}>Expiry Date (MM/YY)</p>
        <input type="text" className={styles.expiry} name="month"  
           style={{boxShadow:"none",borderBottom:"2px solid rgb(201, 201, 201)"}}
           placeholder="MM"/>
          <span style={{color:"rgb(162,162,162)",marginLeft:"5px",background:"white"}}>
        {'/'}</span>
  
        <input type="text" className={styles.expiry} 
           name="year"  
           style={{boxShadow:"none",paddingRight:"0px",borderBottom:"2px solid rgb(201, 201, 201)"}}
           placeholder="YY"/>
      </div>

<div>
  <p className={styles.small}>Security code</p>
  <input type="text" className={styles.cvv} 
   name="year"   onChange={"HandleFormData"} 
   style={{boxShadow:"none",paddingRight:"0px",borderBottom:"2px solid rgb(201, 201, 201)"}}
      placeholder="CVV"/>
</div>
</div>

       <input type="text"  name="nameOnCard" value={""}
        className={styles.cardName}
        style={{boxShadow:"none",borderBottom:"2px solid rgb(201, 201, 201)"}}
        placeholder="Name on Card"/>

      <div style={{marginTop:"1px" , display:"flex" , gap:"30px ",textAlign:"center"}} >
            <input type="checkbox" className={styles.checkbox}/>
           <p className={styles.future}>Your card details will be saved 
            securely for future transactions, based on the industry standards.</p>
       </div>
      
       <div className={styles.makePayment}>
           <Alert head={"MAKE PAYMENT"} message={"Payment Successfull"}/>
             {/* <button onClick={HandleSubmit}>MAKE PAYMENT</button> */}
         </div>

    

   <p className={styles.domestic}>We Support domestic credit and debit cards of following brands</p>
    <div className={styles.brands}>
      <img src="https://onemg.gumlet.io/marketing/0d7023e4-b2bb-4322-8ca0-3b917294e722.jpg" alt="1"/>
       <img src="https://onemg.gumlet.io/marketing/7f77216d-f9fc-4740-8c10-be627b0b6005.jpg" alt="2"/>
       <img src="https://onemg.gumlet.io/marketing/ff2df2be-ddaf-4b6f-9be2-ea422f06633d.jpg" alt="3"/>
        <img src="https://onemg.gumlet.io/marketing/b0f4092b-f799-4bc8-af01-b28426f1b13e.jpg" alt="4"/>
       <img src="https://onemg.gumlet.io/marketing/8a11fbd0-55cd-4826-bb22-92914954c43f.jpg" alt="5"/>
       </div>
      </div>

    </div>

  </div> 

    </>
  );
};

export default Payment;
