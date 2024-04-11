import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Public/Home";
import Register from "../Public/Register";
import Cart from "../Private/Customer/Cart"
import Explore from "../Private/Customer/Explore"
import SellerDashboard from "../Private/Seller/SellerDashboard"
import AddProduct from "../Private/Seller/AddProduct"
import WishList from "../Private/Customer/WishList" 
import AddAddress from "../Private/Common/AddAddress"
import EditProfile from "../Private/Common/EditProfile"
import Login from "../Public/Login"
import App from "../App";
const AllRoutes = () => {
  const user = {
    userId: 123,
    username: "abc",
    role: "CUSTOMER",
    authenticated: false,
    accessExpiration: 3600,
    refreshExpiration: 1296000,
  };

  const { role, authenticated } = user;
  let routes = [];
  if (authenticated) {
    role === "CUSTOMER"
      ? routes.push(
          <Route key={"explore"} path="/explore" element={<Explore />} />,
          <Route key={"cart"} path="/cart" element={<Cart />} />,
          <Route key={"wishlist"} path="/orders" element={<WishList />} />
        )
      : role === "SELLER" &&
        routes.push(
          <Route key={"sellerdashboard"} path="/seller-dashboard" element={<SellerDashboard />} />,
          <Route key={"addproduct"} path="/add-product" element={<AddProduct />} />
        );

    routes.push(
      <Route key={"home"} path="/" element={<Home />} />,
      <Route key={"addaddress"} path="/add-address" element={<AddAddress />} />,
      <Route key={"editprofile"} path="/edit-profile" element={<EditProfile />} />
    );
  } else {
    role === "CUSTOMER" &&
      routes.push(
        <Route key={"home"} path="/" element={<Home />} />,
        <Route key={"login"} path="/login" element={<Login />} />,
        <Route key={"register"} path="/register" element={<Register />} />,
        <Route key={"explore"} path="/explore" element={<Explore />} />
      );
  }

  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  );    
};

export default AllRoutes;
