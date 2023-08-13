import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../context";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Cart.css";
const Cart = () => {
  const [userCart, setUserCart] = useState(null)
  
  const { user } = useContext(UserContext);
  var cntProductsPrice = 0, cntProducts = 0;
  const deleteProduct = (id) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/user/cart/${id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${user.token}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserCart(prev => {
          return {...prev, cart: prev.cart.filter(product => product._id !== id) }
        })
      });
  }
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/user/cart`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${user.token}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserCart(data)
      });
  }, [user]);

  return (
    <>
      <h1>Xavier Cart</h1>
      {userCart && userCart.cart.map((product) => {
        cntProducts++;
        cntProductsPrice += product.price;
        return (
          <div
            className="product-cart"
            style={{ display: "flex" }}
            key={product._id}
          >
            <img src={product.imageURL} alt="error" style={{ margin: "0 10px" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>{product.name}</div>
              <div>
                &#x20B9;{product.price}
                <span
                  className="btnn"
                  onClick={() => deleteProduct(product._id)}
                >
                  <DeleteIcon />
                </span>
              </div>
            </div>
          </div>
        );
      })}
      <div>
        <div>Subtotal : {cntProducts}</div>
        &#x20B9;{cntProductsPrice}
      </div>
      <button className="btn btn-primary">Proceed to Checkout</button>
    </>
  );
};

export default Cart;
