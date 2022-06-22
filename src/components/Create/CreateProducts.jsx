import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalContext } from "../../context/GlobalState";
import "./create.css";
import { useNavigate } from "react-router-dom";

const CreateProducts = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const { createProducts, products } = useContext(GlobalContext);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (productName.length <= 0 ) {
      toast.warning("Please inform a valid name for the product");
      return;
    }
    if (productPrice < 0) {
      toast.warning("Invalid price");
    }
    if (productQuantity <= 0) {
      toast.warning("Invalid quantity");
      return;
    }
    
    const newProduct = {
      id: products.length + 1,
      name: productName.trim(),
      price: productPrice,
      quantity: productQuantity,
    };
      
    createProducts(newProduct);
    toast.success("Product Created!");
    history("/");
  
    setProductName("");
    setProductPrice('');
    setProductQuantity('');

  };

  return (
    <div id="mainContainer">
      <div className="mainContent">
        <h2>Add Product</h2>
        <button className="btn-home">
          <Link
            style={{
              textDecoration: "none",
              color: "darkslategray",
              fontWeight: "bold",
            }}
            to={"/"}
          >
            All Products
          </Link>
        </button>

        <div className="prodForm">
          <form className="form" action="">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              id="name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <label htmlFor="price">Product Price</label>
            <input
              type="number"
              id="price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              placeholder={'Set a price'}
            />

            <label htmlFor="quantity">Product Quantity</label>
            <input
              type="number"
              id="quantity"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
              placeholder={'Set a quantity'}
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

export default CreateProducts;
