import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalContext } from "../../context/GlobalState";
import "./edit.css";

const EditProducts = () => {
  const history = useNavigate();
  const { products, editProducts } = useContext(GlobalContext);
  const [selectedProduct, setSelectedProduct] = useState({
    id: null,
    name: "",
    price: 0,
    quantity: 0,
  });

  const { id } = useParams();
  const currentProductId = id;

  useEffect(() => {
    const productId = currentProductId;
    const selectedProduct = products.find((x) => x.id === parseInt(productId));
    setSelectedProduct(selectedProduct);
  }, []);

  const handleOnChange = (productKey, val) => {
    setSelectedProduct({ ...selectedProduct, [productKey]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editProducts(selectedProduct);
    history("/");
    toast.success("Success Edited");
  };
  return (
    <div id="mainContainer">
      <div className="mainContent">
        <h2>Add Products</h2>
        <div className="prodForm">
          <form className="form" action="">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              id="name"
              value={selectedProduct.name}
              onChange={(e) => handleOnChange("name", e.target.value)}
            />
            <label htmlFor="price">Product Price</label>
            <input
              type="number"
              id="price"
              value={selectedProduct.price}
              onChange={(e) => handleOnChange("price", e.target.value)}
            />

            <label htmlFor="quantity">Product Quantity</label>
            <input
              type="number"
              id="quantity"
              value={selectedProduct.quantity}
              onChange={(e) => handleOnChange("quantity", e.target.value)}
            />
            <button className="btnSub" onClick={handleSubmit}>
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProducts;
