import React from "react";
import products from "../staticData/product";

const All = () => {
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

          <div className="organic-wrapper-container">
            {products?.map((product) => (
              <div key={product?.id} className="veg-details container">
                <div className="veg-img">
                  <img src={product?.image} alt={product?.title} />
                </div>

                <div className="veg-info">
                  <div className="text">
                    <div>
                      FRESH<span className="disc">{product?.discount}</span>
                      <br />
                    </div>
                  </div>

                  <div>
                    <h6> &#9733; &#9733; &#9733; &#9733; &#9734;</h6>
                    <h4 className="veg-name">{product?.name}</h4>
                    <div className="price">
                      ${product?.currentPrice}
                      <span className="pre-price">${product?.prevPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="button">
            <button className="primary-btn">Subscribe &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
