
import axios from "axios"
import React, { useState } from "react"
import styles from '../../Styles/Home/PopularCategories.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const GetData = () => {
  return axios({
    method: "get",
    baseURL: "http://localhost:1010/Landing_page",
  });
};

export const Homeopathy = () => {

const [data,setData]=useState([])
const [loading,setLoading] = useState(false)
React.useEffect(()=>{
InGetData()
},[])

const InGetData = ()=>{
    setLoading(true)
    GetData()
    .then((res)=>{
        // console.log("array of object",res)
        setData(()=>res.data[7].homeopathy)
        setLoading(false)
    })
    .catch((err)=>{
        console.log(err)
        setLoading(false)
    })
}
let box = document.querySelector("#HPS")
// console.log("box",box)
const buttonPressRev = ()=>{
let width =  box.clientWidth
box.scrollLeft -= width
}
const buttonPressNext =()=>{
    let width =  box.clientWidth
    box.scrollLeft += width
}

  return (
    <div>
        <h3 
          style={{
            background: "transparent",
            textAlign: "left",
            width: "95%",
            margin: "auto",
            paddingTop: "5px",
            paddingBottom: "10px",
            color: "#212121",
            fontSize: "16px",
            lineHeight: "22.8571px",
          }} 
        > Homeopathy categories </h3>
    <div className={styles.box}>
        <div onClick={buttonPressRev}><FontAwesomeIcon  className={styles.icon} icon={faChevronLeft}/></div>
    <div className={styles.container} style={{width:"100%"}}>
        <div className="one" id="HPS"  style={{scrollBehavior:"smooth",background:"white"}}>
        {
            loading===false ? data.map((el)=>(
                <div key={el.id}>
                    <img src={el.image} alt={el.image}/>
                    <p>{el.name}</p>
                    </div>
            )):null
        }
        </div>
    </div>
    <div onClick={buttonPressNext}><FontAwesomeIcon className={styles.icon} icon={faChevronRight}/></div>
    </div>
    </div>
  );
};


export default Homeopathy