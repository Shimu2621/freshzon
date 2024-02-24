import { Button, Modal, Form, Input, Select } from "antd";
import { useContext, useEffect, useState } from "react";
import productDatas from "../staticData/productDatas";
import products from "../staticData/product";
import { ProductContext } from "../App";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useContext(ProductContext);
  // const [singleProduct, setSingleProduct] = useState([]);

  //** */ useState for edit modal***/
  const [isModalVisible, setIsModalVisible] = useState(false);

  //** */ useState for details modal***/
  const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false);

  //usestate for formData
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

  // whenever edit button clicked showmodal function will be true
  const showModal = () => {
    setIsModalVisible(true);
  };

  // whenever details button clicked showmodal function will be true
  const showDetailsModal = () => {
    setIsDetailsModalVisible(true);
  };

  // function for cancel button
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDetailsModalCancel = () => {
    setIsDetailsModalVisible(false);
  };

  const handleDelete = (id) => {
    setSingleProduct(singleProduct.filter((products) => products.id !== id));
  };

  const handleSubmit = (id) => {
    console.log(id);
    setSingleProduct(
      singleProduct?.map((item) => {
        if (item.id === id) {
          return { ...item, submit: !item.submit };
        }
        return item;
      })
    );
  };

  console.log("setSingleProduct", setSingleProduct);

  useEffect(() => {
    const product = productDatas.find((item) => item.id === parseInt(id));
    console.log("singleProduct", product);
    setSingleProduct(products);
  }, [id]);

  return (
    <div className="product-card-container">
      <div className="product-card">
        <img src={singleProduct.image} alt={singleProduct.name} />
        <div className="card-container">
          <div className="card-top-sec">
            <Button>{singleProduct.type}</Button>

            <Button onClick={showDetailsModal} type="primary">
              Details
            </Button>
          </div>

          <div className="card-content">
            <h2>{singleProduct.name}</h2>
            <p>${singleProduct.currentPricerice}</p>
          </div>

          {/* Edit button */}
          <Button
            onClick={showModal}
            type="primary"
            style={{ backgroundColor: "green", borderColor: "green" }}
          >
            Edit
          </Button>

          {/* Delete button */}
          <Button
            onClick={handleDelete}
            type="primary"
            style={{
              marginTop: "10px",
              backgroundColor: "red",
              borderColor: "red",
              marginLeft: "10px",
            }}
          >
            Delete
          </Button>

          {/***Modal for edit button start here(Using ant design modal) ***/}

          <Modal
            title="Edit product"
            vissible={isModalVisible}
            onCancel={handleCancel}
            footer={[
              <Button key="cancel">Cancel</Button>,
              <Button key="submit" type="primary" onClick={handleSubmit}>
                Save
              </Button>,
            ]}
          >
            <Form layout="vertical">
              <Form.Item label="Name">
                <Input name="name" value={formData.name} />
              </Form.Item>

              <Form.Item label="Image">
                <Input name="image" value={formData.image} />
              </Form.Item>

              <Form.Item label="Description">
                <Input name="description" value={formData.description} />
              </Form.Item>

              <Form.Item label="Current Price">
                <Input name="currentPrice" value={formData.price} />
              </Form.Item>

              <Form.Item label="Type">
                <Select
                  placeholder="Select type"
                  name="type"
                  value={formData.type}
                  onChange={(value) =>
                    setFormData({ ...formData, type: value })
                  }
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
              </Form.Item>

              <Form.Item label="Ratings">
                <Input name="ratings" value={formData.ratings} />
              </Form.Item>
            </Form>
          </Modal>

          {/***Modal for edit button end here***/}

          {/***Modal for details button start here(Using ant design modal) ***/}
          <Modal
            title="Product details"
            vissible={isDetailsModalVisible}
            onCancel={handleDetailsModalCancel}
            footer={[
              <Button key="close" onClick={handleDetailsModalCancel}>
                Close
              </Button>,
            ]}
          >
            <div>
              <h2 style={{ textAlign: "center" }}>{singleProduct.name}</h2>
              <img
                src={singleProduct.image}
                style={{ width: "100%" }}
                alt="product-image"
              />
            </div>

            <div>
              <p>{singleProduct.description}</p>
              <p>{singleProduct.currentPrice}</p>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
