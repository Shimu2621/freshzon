// import React from 'react'

const Product = () => {
  return (
    <div className="product">
      <div className="product-wrapper-container container">
        <div>
          <h6>&#9900; &#9900; &#9900; FRESH FROM OUR FARM</h6>
          <h2>Good Organic Products</h2>
        </div>

        <div className="wrapper-btn">
          <button className="secondary-btn mt-10">View More &rarr;</button>
        </div>
      </div>

      <div className="product-details container">
        <div className="product-info">
          <div className="text">
            <h5>FRESH</h5>
          </div>
          <div className="product-btn">
            <button className="button">-27%</button>
          </div>

          <div className="">
            <img src="/images/product/tomato.png" alt="product-icon" />
            <h6> &#9733; &#9733; &#9733; &#9733; &#9734;</h6>
            <h4>Organic Cabbage</h4>
            <p>$50.00</p>
          </div>
        </div>

        <div className="product-info">
          <div className="text">
            <h5>FRESH</h5>
          </div>
          <div className="product-btn">
            <button className="button">-27%</button>
          </div>

          <img src="/images/product/avocado.png" alt="product-icon" />
          <h6> &#9733; &#9733; &#9733; &#9733; &#9734;</h6>
          <h4>Organic Avocado</h4>
          <p>$60.00</p>
        </div>

        <div className="product-info">
          <div className="text">
            <h5>FRESH</h5>
          </div>
          <div className="product-btn">
            <button className="button">-27%</button>
          </div>

          <img src="/images/product/cabbage.png" alt="product-icon" />
          <h6> &#9733; &#9733; &#9733; &#9733; &#9734;</h6>
          <h4>Organic Cabbage</h4>
          <p>$55.00</p>
        </div>

        <div className="product-info">
          <div className="text">
            <h5>FRESH</h5>
          </div>
          <div className="product-btn">
            <button className="button">-27%</button>
          </div>

          <img src="/images/product/potato.png" alt="product-icon" />
          <h6> &#9733; &#9733; &#9733; &#9733; &#9734;</h6>
          <h4>Organic Potato</h4>
          <p>$40.00</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
