

import PopularCategories from "../Components/Home/PopularCategories"
import { TrendingNow } from "../Components/Home/TrendingNow"
import { BreakFast } from "../Components/Home/Breakfast"
import FeatureBrands from "../Components/Home/FeatureBrands"
import {PopularCombo} from "../Components/Home/PopularCombo"
import  PersonalCare  from "../Components/Home/PersonalCare"
import { Biotin } from "../Components/Home/Biotin"
import Homeopathy from "../Components/Home/Homeopathy"

import React from 'react'

export const Home = () => {
  return (
    <>
         
          
            <main>
              <div style={{marginTop:"10px"}}> 
                 <PopularCategories/>
              </div>

              <div style={{marginTop:"10px",marginBottom:"15px"}}> 
                 <TrendingNow/>
              </div>
              <div style={{marginTop:"10px",marginBottom:"15px"}}> 
                 <BreakFast/>
              </div>
              <div style={{marginTop:"10px",marginBottom:"15px"}}> 
                 <FeatureBrands/>
              </div>

              <div style={{marginTop:"10px",marginBottom:"15px"}}> 
                 <PopularCombo/>
              </div>
              <div style={{marginTop:"10px",marginBottom:"15px"}}> 
                 <PersonalCare/>
              </div>

              <div style={{marginTop:"10px",marginBottom:"15px"}}> 
                 <Biotin/>
              </div>
              <div style={{marginTop:"10px",marginBottom:"15px"}}> 
                 <Homeopathy/>
              </div>

          </main>
    </>
  )
}


export default Home