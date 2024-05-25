import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context";
import "./Shop.css";
import Productshop from "./Productshop";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/products`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const user = localStorage.getItem("user");
        if (user) {
          setUser(JSON.parse(user));
        }
        setProducts(data.data);
      });
  }, []);

  return (
    <div>
      {products.length ? (
        <>
          <h1>Latest Products</h1>
          <div className="products-list">
            {products.map((currProduct) => {
              return (
                <Productshop currProduct={currProduct}/>
              );
            })}
          </div>
        </>
      ) : (
        <h1>Loading..........</h1>
      )}
    </div>
  );
};

export default Shop;
