import { useState } from "react";
// import products from "../staticData/product";
import SingleProduct from "./SingleProduct";
import { Button } from "antd";

const ProductInfo = () => {
  const [productList, setProductList] = useState([]);

  const removeProductFromList = (productId) => {
    setProductList(productList);
    productList.filter((product) => product.id !== productId);
  };

  const handleChange = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>All Products</h1>
      <div className="product-list-container">
        <div className="products">
          <div className="product-center">
            {productList.message === "There are no products" ? (
              <div className="product-row">
                <p>{productList.message}</p>
              </div>
            ) : (
              <div className="product-grid">
                {productList?.map((product) => {
                  <div className="product-row" key={product.id}>
                    <SingleProduct
                      product={product}
                      removeProductFromList={removeProductFromList}
                    />
                  </div>;
                })}
              </div>
            )}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "30px 0",
          }}
        >
          <Button
            type="primary"
            onClick={() => handleChange("/home")}
            style={{
              marginTop: "10px",
              backgroundColor: "red",
              borderColor: "red",
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
