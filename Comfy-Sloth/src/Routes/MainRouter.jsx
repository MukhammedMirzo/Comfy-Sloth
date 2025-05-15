import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "../Components";
import {
  Home,
  About,
  Card,
  Products,
  SingleProducts,
  Error,
  PrivateRoute,
  Checkout,
  AuthWrapper,
} from "../Pages/index";
import { Fragment } from "react";

const MainRouter = () => {
  return (
    <div>
      <Router>
        <Fragment>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/card" element={<Card />} />
            <Route path="/products" element={<Products />} />
            <Route path="/singleproducts/:id" element={<SingleProducts />} />
            <Route path="/*" element={<Navigate to="/error" />} />
            <Route path="/error" element={<Error />} />
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
};

export default MainRouter;
