import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context";
import axios from "axios";
import "./Shop.css";
const Shop = () => {
  const navigate = useNavigate();
  const { products, setProducts, setProduct } = useContext(UserContext);

  useEffect(() => {
    const productList = async () => {
      const resp = await axios.get("http://localhost:4000/");
      const fetchProducts = resp.data.products;
      setProducts(fetchProducts);
    };
    productList();
  }, []);

  const seeProduct = (product) => {
    setProduct(product);
    navigate("/view");
  };
  
  return (
    <div >
      <h1>Latest Products</h1>
      <div className="products-list">
      {products.map((currProduct) => {
          return (
            <div className="card" style={{width: "22rem"}} key={currProduct._id}>
            <div className="card-body">
              <img src={currProduct.imageURL} class="card-img-top img "/>
              <h5 className="card-title">{currProduct.name}</h5>
              <p className="card-text">{currProduct.description}</p>
              <h5 className="card-title">{currProduct.price}&#8377;</h5>
              <p className="card-text">{currProduct.countInStock} items</p>
              <a onClick={(e) => { e.preventDefault(); seeProduct(currProduct);}} className="btn btn-primary">View</a>
            </div>
          </div>
              );
        })}
        </div>
    </div>
  );
};

export default Shop;
