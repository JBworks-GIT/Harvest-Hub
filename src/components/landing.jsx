import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/landing.css";
import Navbar from "./navbar";
import grain from "../assets/grain.svg";
import Starting from "./starting.jsx";
import Products from "./products.jsx";
import Discovery from "./discovery.jsx";
import Footer from "./footer.jsx";
function landing() {
  return (
    <>
      <div className="backimg">
        <Navbar />
        <div className="ti">
          <h1 className="text">Agriculture Reforming</h1>
          <img className="grain" src={grain} alt="" />
          <h4 className="newtext">
            Providing fresh products directly from the farms and dairies to you{" "}
          </h4>
        </div>
        <button className="imgbtn">
          <Link to="/shop">Discover more</Link>
        </button>
      </div>
      <Starting />
      <Products />
      <Discovery />
      <Footer />
    </>
  );
}

export default landing;
