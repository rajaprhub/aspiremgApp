import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import AllRoutes from "./Routes/AllRoutes";
import { Navbar } from "./Components/Navbar";
import { Footer } from './Components/Footer';

import axios from "axios";

function App() {

// async function  getdata(){
//    let a = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//    let b = await a.json()
//    console.log(b)
//  }
// useEffect( () => {
//   getdata()
// }, [])

// useEffect(() => {
//   axios.get(`https://jsonplaceholder.typicode.com/posts`)
//   .then( (res)=> console.log(res))
// }, [])

 return (
    <div className="App">
      
         <Navbar />
         <AllRoutes />
         <Footer />
    </div>
  );
}

export default App;
