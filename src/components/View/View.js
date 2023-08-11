import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./View.css";
import { UserContext } from "../context";
import axios from "axios";
const View = () => {
  const { product, cart, setCart } = useContext(UserContext);
  const navigate = useNavigate();
  const makeCart = async (e) => {
    e.preventDefault();
    const resp = await axios.post("http://localhost:4000/addtocart", product);
    setCart([...cart, resp.data.cartProduct]);
    navigate("/cart");
  };
  return (
    <div className="single-product">
      <div className="card" style={{ width: "22rem" }}>
        <div className="card-body card-container">
          <img src={product.imageURL} class="card-img-top img " />
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <h5 className="card-title">{product.price}&#8377;</h5>
          <a onClick={(e) => makeCart(e)} className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default View;
