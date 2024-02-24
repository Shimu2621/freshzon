// import React from 'react'
// import Navbar from '../components/Navbar'

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
// import Navbar from "../components/Navbar"
import Organic from "../components/Organic";
// import BasicInfo from "../components/BasicInfo";
import Product from "../components/Product";
import Sidebar from "../components/Sidebar/Sidebar";
// import Service from "../components/Service"
import { Store } from "../components/Store";
// import OrderInfo from "../components/OrderInfo";
// import ProductInfo from "../components/ProductInfo";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import Slider from "../components/Slider";

const Home = () => {
  // const route = useNavigate();

  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     route("/signin");
  //   }
  // }, []);
  return (
    <div className="main_container">
      {/* <Header></Header> */}
      {/* <Navbar></Navbar> */}
      <Sidebar></Sidebar>
      <Slider></Slider>
      <Product></Product>
      <Organic></Organic>
      <Info></Info>
      <Banner></Banner>
      <Store></Store>
      <Footer></Footer>
    </div>
  );
};

export default Home;
