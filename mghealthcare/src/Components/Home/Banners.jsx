import React from 'react'
import { useState } from "react";
import { Box, Image,Flex,Center,
   Link, Square,Spacer,
   Text } from "@chakra-ui/react";
import styles from '../../Styles/Home/Banners.module.css'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay, Pagination, Navigation } from "swiper";

export const Banners = () => {

  const sliderImg = [
    {
      img: "https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/9fa35a0e-1af2-47f2-b115-61bc530cdd9f.png",
      id: 1,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/e5e362dd-19a8-4013-8b4e-df007207f5a0.png",
      id: 2,
    },
  
    {
      img: "https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/922e3176-a5d0-44b3-be1f-0f61ef88ad61.png",
      id: 3,
    },
    {
      img: "https://onemg.gumlet.io/46899392-304c-4538-89d6-4b762045ebd9_1676449707.jpg?w=899&h=200&format=auto",
      id: 4,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/da11536e-5eb1-4751-8586-198d0e1afc4a.png",
      id: 5,
    },
    
  ];

  const [bimagess, setImages] = useState(sliderImg);

  return (
    <div> 
      
            {/* <h1> Banners first img</h1> */}
  
    <div style={{width:"95%", margin: "5px auto"}} >
        <Flex >
       <Swiper
         height="200px"
         spaceBetween={30}
         centeredSlides={true}
         loop={true}
         autoplay={{
         delay: 2000,
         disableOnInteraction: false,
       }}
        pagination={{
        clickable: true,
       }}
       navigation={false}
       modules={[Autoplay, Pagination, Navigation]}
     >
      {bimagess.map((item, index) => (
        <SwiperSlide key={item.id}>
          <Image
            src={item.img}
            boxSize="200px"
            width="100%"
            objectFit="cover"
          />
        </SwiperSlide>
       ))}
       </Swiper>
           <Spacer />

          <Box >
            <img height="200px" src ="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/339153b9-054d-430d-bab3-e3ef58604fa0.png" />
         </Box>
         
     </Flex>

        </div>
    

          {/* ***** used swiper    className={styles.container} **** */}

       <Box textAlign={"center"} p="1rem" border="1px solid whitesmoke" 
               className={styles.leading} m="0px auto" bg='white'>
        <Text
          fontWeight={"400"}
          fontSize={"20px"}
          lineHeight={"30px"}
          color={"#666666"}
          bg='white'
         >
           MgHealthCare: Indias Leading Online Pharmacy & Healthcare Platform
          </Text>
        </Box>

          <div class={styles.careplanb}>
              <img   src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png" />
          </div>
        
     
     </div>
  )
}
