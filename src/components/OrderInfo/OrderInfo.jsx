import { Input, Select, Button } from "antd";
import { useState } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { Router } from "react-router-dom";
// import { Button } from "react-bootstrap";

const OrderInfo = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    prePrice: "",
    currentPrice: "",
    type: "",
    discounts: "",
    ratings: "",
    image: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  const handleChange = (e) => {
    // console.log("event", e);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="input-fields">
      <h2 style={{ textAlign: "center", fontWeight: "bold", fontSize: "35px" }}>
        Order Information
      </h2>

      <div>
        <label htmlFor="name">Product Name</label>
        <Input
          name="name"
          type="text"
          placeholder="Enter name of product"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="prePrice">Previous-price</label>
        <Input
          name="prePrice"
          type="text"
          placeholder="Enter pre.price"
          value={formData.prePrice}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="currentPrice">Current Price</label>
        <Input
          name="currentPrice"
          type="text"
          placeholder="Enter current price"
          value={formData.currentPrice}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="type">Type</label>
        <Select
          name="type"
          type="text"
          placeholder="Enter type"
          value={formData.type}
          onChange={(value) => setFormData({ ...formData, type: value })}
          style={{ width: "100%" }}
          options={[
            {
              value: "All",
              label: "All",
            },
            {
              value: "Vagetables",
              label: "Vagetables",
            },
            {
              value: "Fruits",
              label: "Fruits",
            },
            {
              value: "Breads",
              label: "Breads",
            },
          ]}
        />
      </div>

      {/* <div>
        <label htmlFor="ratings">Ratings</label>
        <Input
          name="ratings"
          type="text"
          placeholder="Enter ratings"
          value={formData.ratings}
          onChange={handleChange}
        />
      </div> */}

      <div>
        <label htmlFor="image">Image</label>
        <Input
          name="image"
          type="text"
          placeholder="Enter image-url"
          value={formData.image}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="discounts">Discounts</label>
        <Input
          name="discounts"
          type="text"
          placeholder=""
          value={formData.discounts}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <Input
          name="description"
          type="text"
          rows={4}
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <p>
          {success && (
            <p className="font-semibold text-green-500 flex items-center gap-1">
              <BsFillCheckSquareFill /> Form has been submitted successfully
            </p>
          )}
        </p>
        <Button
          type="primary"
          style={{ marginTop: "2px", width: "70px" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <br />
        <Link to={"/productInfo"}>
          <Button
            type="primary"
            onClick={() => handleChange("/productinfo")}
            style={{
              marginTop: "6px",
              backgroundColor: "darkBlue",
              borderColor: "darkBlue",
            }}
          >
            Add to Cart
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderInfo;
