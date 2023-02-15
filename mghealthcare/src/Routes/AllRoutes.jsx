import {Route,Routes} from "react-router-dom" ;
import { ProductsPage } from "../Pages/Products";
import HomePage from "../Pages/HomePage";

const AllRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products/skincare" element={<ProductsPage/>} />
       
      </Routes>
    );
  };
  
  export default AllRoutes;
  