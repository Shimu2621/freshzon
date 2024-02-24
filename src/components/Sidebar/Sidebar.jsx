//import icons
import { RiLockPasswordLine } from "react-icons/ri";
import { MdPersonOutline } from "react-icons/md";
import { LiaFirstOrder } from "react-icons/lia";
import { FaListCheck } from "react-icons/fa6";
import { MdOutlineContactPhone } from "react-icons/md";

import { useContext, useEffect, useState } from "react";

//import components

import BasicInfo from "../BasicInfo/BasicInfo";
import OrderInfo from "../OrderInfo/OrderInfo";
import ProductList from "../ProductList/ProductList";
import productDatas from "./../../staticData/productDatas";
import { Link, useParams } from "react-router-dom";
import ChangePass from "../ChangePass/ChangePass";
import ContactUs from "../ContactUs/ContactUs";
import { ProductContext } from "../../App";
// import Product from "./../Product";

const Sidebar = () => {
  const { id } = useParams();
  // console.log(id);
  const [singleProduct, setSingleProduct] = useContext(ProductContext);
  // const [singleProduct, setSingleProduct] = useState();
  const [allProduct, setAllProduct] = useState("orderInfo");

  useEffect(() => {
    const product = productDatas.find((item) => item.id === parseInt(id));
    // console.log("singleProduct", product);
    setSingleProduct(product);
  }, [id]);

  return (
    <>
      {/* <Navbar /> */}

      <div className="main-container container">
        <div className="sidebar">
          <div className="row">
            <div className="sidebar-list container col-md-9">
              <div className="sidebar-img">
                <img
                  className="round-img"
                  src="/images/80 inch img.png"
                  alt=""
                />
              </div>

              <hr />
              <div className="sidebar-item-container">
                <div className="sidebar-item">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setAllProduct("basicInfo");
                    }}
                    href=""
                    className="title"
                  >
                    <MdPersonOutline
                      style={{ color: "orangered" }}
                      size={27}
                      className="icon m-4"
                    />
                    Basic Information
                  </a>
                </div>

                <div className="sidebar-item">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setAllProduct("orderInfo");
                    }}
                    href=""
                    className="title"
                  >
                    <LiaFirstOrder
                      style={{ color: "darkmagenta" }}
                      size={22}
                      className="icon m-4"
                    />
                    Order Information
                  </a>
                </div>

                <div className="sidebar-item">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setAllProduct("productList");
                    }}
                    href=""
                    className="title "
                  >
                    <FaListCheck
                      style={{ color: "darkcyan" }}
                      size={22}
                      className="icon m-4"
                    />
                    Product List
                  </a>
                </div>

                <div className="sidebar-item">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setAllProduct("changePass");
                    }}
                    href=""
                    className="title"
                  >
                    <RiLockPasswordLine
                      style={{ color: "darkgoldenrod" }}
                      size={24}
                      className="icon m-4"
                    />
                    Change Password
                  </a>
                </div>

                <div className="sidebar-item">
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      setAllProduct("contactUs");
                    }}
                    href=""
                    className="title"
                  >
                    <MdOutlineContactPhone
                      style={{ color: "darkturquoise" }}
                      size={24}
                      className="icon m-4"
                    />
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="sidebar-section">
              {allProduct === "basicInfo" && <BasicInfo />}
              {allProduct === "orderInfo" && <OrderInfo />}
              {allProduct === "productList" && <ProductList />}
              {allProduct === "changePass" && <ChangePass />}
              {allProduct === "contactUs" && <ContactUs />}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Sidebar;
