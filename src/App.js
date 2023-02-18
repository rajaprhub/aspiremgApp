import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import AllRoutes from "./Routes/AllRoutes";
import { Navbar } from "./Components/Navbar";
import { Footer } from './Components/Footer';

import axios from "axios";

function App() {



 return (
    <div className="App">
      
         <Navbar />
         <AllRoutes />
         <Footer />
    </div>
  );
}

export default App;
