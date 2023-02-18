import {Route,Routes} from "react-router-dom" ;
import { ProductsPage } from "../Pages/Products";
import HomePage from "../Pages/HomePage";
import SingleProduct from "../Pages/SingleProduct";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import Payment from "../Pages/Payment";

const AllRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products/skincare" element={<ProductsPage/>} />
        <Route path="/products/skincare/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout/address" element={<Checkout/>}/>
        <Route path="/payment" element={<Payment />} />
      </Routes>
    );
  };
  
  export default AllRoutes;
  