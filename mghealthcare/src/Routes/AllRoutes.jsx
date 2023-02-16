import {Route,Routes} from "react-router-dom" ;
import { ProductsPage } from "../Pages/Products";
import HomePage from "../Pages/HomePage";
import SingleProduct from "../Pages/SingleProduct";
import Cart from "../Pages/Cart";

const AllRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products/skincare" element={<ProductsPage/>} />
        <Route path="/products/skincare/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    );
  };
  
  export default AllRoutes;
  