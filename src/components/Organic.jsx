// import React from 'react'
import { useContext, useState } from "react";
import Products from "../staticData/product";
// import { ProductContext } from "../App";
import { Link } from "react-router-dom";
import products from "../staticData/product";

const Organic = () => {
  // const [singleProduct, setSingleProduct] = useContext(ProductContext);
  const [singleProduct, setSingleProduct] = useState();
  const [productsList, setProductsList] = useState(Products);
  const [productItems, setProductItems] = useState(productsList);

  const handleFilters = (type) => {
    const items = productsList.filter((item) => item.type === type);
    setProductItems(items);
    setSingleProduct(null);
  };

  const showAllProducts = () => {
    setProductItems(products);
  };

  const showProductInfo = (product) => {
    setSingleProduct(product);
  };

  return (
    <div className="organic">
      <div className="organic-wrapper container">
        <div className="flex container align-center">
          <div className="heading-left">
            <h6 className="secondary-text">
              &#9900; &#9900; &#9900; FRESH FROM OUR FARM
            </h6>
            <h2 className="label">Good Organic Products</h2>
          </div>
          <div className="heading-right">
            <button onClick={showAllProducts} className="active-btn">
              All
            </button>

            <button
              onClick={() => handleFilters("vegetable")}
              className="active-btn"
            >
              Vagetables
            </button>

            <button
              onClick={() => handleFilters("fruit")}
              className="active-btn"
            >
              Fruits
            </button>

            <button
              onClick={() => handleFilters("bread")}
              className="active-btn"
            >
              Breads
            </button>
          </div>
        </div>

        <div className="organic-wrapper-container">
          {productItems?.map((item, i) => (
            <Link
              to={`/product/${item.id}`}
              className="veg-details container"
              key={i}
              style={{ textDecoration: "none" }}
              onClick={() => showProductInfo(products)}
            >
              <div className="veg-img">
                <img src={item?.image} alt={item?.title} />
              </div>

              <div className="veg-info">
                <div className="text">
                  <div>
                    FRESH <span className="disc">{item?.discount}</span> <br />
                  </div>
                </div>

                <div className="veg-others">
                  <h6> &#9733; &#9733; &#9733; &#9733; &#9734;</h6>
                  <h4 className="veg-name">{item?.name}</h4>
                  <div className="price">
                    ${item?.currentPrice}
                    <span className="pre-price">${item?.prevPrice}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="button">
          <button className="primary-btn">Subscribe &rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default Organic;
