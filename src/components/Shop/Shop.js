import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const BASE_URL = "http://localhost:4000/";

    fetch(BASE_URL, {
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
        setProducts(data.products);
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
                <div
                  className="card"
                  style={{ width: "22rem" }}
                  key={currProduct._id}
                >
                  <div className="card-body">
                    <img
                      src={currProduct.imageURL}
                      alt="error"
                      className="card-img-top img "
                    />
                    <h5 className="card-title">{currProduct.name}</h5>
                    <p className="card-text">{currProduct.description}</p>
                    <h5 className="card-title">${currProduct.price};</h5>
                    
                    <Link
                      to={`/view/${currProduct._id}`}
                      className="btn btn-primary"
                    >
                      View
                    </Link>
                  </div>
                </div>
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
