import React, {useContext } from "react";
import { useEffect } from "react";
import { UserContext } from "../context";
import axios from "axios"
import DeleteIcon from '@mui/icons-material/Delete';
import "./Cart.css"
const Cart = () => {
  const {cart, setCart} = useContext(UserContext);
  
  var cntProductsPrice = 0, cntProducts = 0;
  useEffect(() => {
    const cartList = async () => {
      const resp = await axios.get("http://localhost:4000/cart");
      const fetchProduct = resp.data.products;
      setCart(fetchProduct)
    };
    cartList();
  }, []);

  const deleteFromCart = async (product) =>{
    setCart(cart.filter((currProduct) => currProduct !== product ))
    await axios.delete(`http://localhost:4000/${product._id}`)
  }
  return (
    <>
      <h1>Shopping Cart</h1>
      {cart.map((product) => {
        cntProducts++;
        cntProductsPrice += product.price
          return (
              <div className="product-cart" style={{"display":"flex"}} key={product._id}>
                <img src={product.imageURL} style={{"margin":"0 10px"}}/>
                <div style={{display:"flex", "flexDirection":"column"}}>
                  <div>{product.name}</div>
                  <div>&#x20B9;{product.price}<span className="btnn" onClick={(e) => {e.preventDefault(); deleteFromCart(product)}}><DeleteIcon /></span></div>
                </div>
              </div>
          ) 
      })}
      <div>
        <div>Subtotal : {cntProducts}</div>
        &#x20B9;{cntProductsPrice}
      </div>
      <button>Proceed to Checkout</button>
    </>
  
  )
}

export default Cart