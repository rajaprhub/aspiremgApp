import axios from "axios";
import React, { useState } from "react";
import styles from "../../Styles/Home/TrendingNow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const GetData = () => {
  return axios({
    method: "get",
    baseURL: "http://localhost:1010/Landing_page",
  });
};
export const BreakFast = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  React.useEffect(() => {
    InGetData();
  }, []);

  const InGetData = () => {
    setLoading(true);
    GetData()
      .then((res) => {

        setData(() => res.data[2].Breakfast);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  let box = document.querySelector("#BKS  ");
  const buttonPressRev = () => {
    let width = box.clientWidth;
    box.scrollLeft -= width;
  };
  const buttonPressNext = () => {
    let width = box.clientWidth;
    box.scrollLeft += width;
  };
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
      >
        Breakfast Now{" "}
      </h3>
      <div className={styles.box}>
        <div onClick={buttonPressRev}>
          <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
        </div>
        <div className={styles.container} style={{ width: "100%" }}>
          <div
            id="BKS"
            style={{ scrollBehavior: "smooth", background: "white" }}
          >
            {loading === false
              ? data.map((el) => (
                  <div
                    key={el.id}
                    style={{
                      display: "grid",
                      justifyContent:"center",
                      alignItems:"center",
                      fontSize: "14px",
                      padding: "0px",
                      paddingTop:"5px",
                      background: "white",
                    }}
                  >
                    <img
                      src={el.image}
                      alt={el.image}
                      height="150px"
                      width="150px"
                    />
                     <p
                        style={{
                          height: "20px",
                          overflow: "hidden",
                          marginBottom: "0px",
                        }}
                      >
                        {el.name}
                      </p>

                      <p
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          color: "gray",
                          marginBottom:"-5px"
                        }}
                      >
                        {" "}
                        &#10534;{` ${el.packs}`}
                      </p>
                   
                      <div div style={{ display: "flex",   justifyContent:"left",
                       alignItems:"center", gap: "2px" ,marginTop:"-5px"}}>
                          <span>MRP ₹ </span>
                          <span
                            style={{ "text-decoration-line": "line-through" }}
                          >{`${el.mrp}`}</span>
                        
                        <span style={{}}>{`${el.discount}`}</span>
                          <span  style={{ color: "green"}} >off</span>
                     </div>
                     
                      <h3 style={{ "text-align": "left" ,marginTop:"-5px"}}
                        >{` ₹ ${el.price}`}</h3>

                    </div>
                 
                ))
              : null}
          </div>
        </div>
        <div onClick={buttonPressNext}>
          <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
};
