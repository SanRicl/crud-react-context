import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { TiDelete } from "react-icons/ti";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import "./list.css";

const ListProducts = () => {
  const { products, deleteProducts, editProducts } = useContext(GlobalContext);

  const handleDelete = (e, index) => {
    e.preventDefault();

    deleteProducts(index);
  };

  return (
    <div id="mainContainer">
      <div className="mainContent">
        <h2>All Products</h2>
        <button className="btn-home">
          <Link style={{ textDecoration: "none", color: 'darkslategray', fontWeight: 'bold' }} to={"/create"}>
            Add New Product
          </Link>
        </button>

        <div className="addProds">
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <TiDelete
                      className="deleteBtn"
                      onClick={(e) => handleDelete(e, product.id)}
                    />

                    <Link to={`/edit/${product.id}`}>
                      <MdEdit
                        className="editBtn"
                        onClick={() => editProducts(product.id)}
                      />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
