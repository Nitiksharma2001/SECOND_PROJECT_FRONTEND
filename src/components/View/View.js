import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../components/context";
import "./View.css";
const View = () => {
  const { user, setUser } = useContext(UserContext);
  const [product, setProduct] = useState(null);
  const [added, setAdded] = useState(false);
  
  const id = useParams().id;
  useEffect(() => {
    if(!user){
      const localUser = localStorage.getItem("user")
      if(localUser){
        setUser(JSON.parse(localUser))
      }
    }
    fetch(`${process.env.REACT_APP_SERVER_URL}/view/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.product);
      });
  }, [id]);
  const addToCart = async () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/user/${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setAdded(true);
        }
      });
  };
  return (
    <>
      {product ? (
        <div className="single-product">
          <div className="card" style={{ width: "22rem" }}>
            <div className="card-body card-container">
              <img
                src={product.imageURL}
                alt="error"
                className="card-img-top img "
              />
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              {user && (
                <h5 className="card-title">
                  {product.price}&#8377;
                  {added ? (
                    <button className="btn btn-primary">
                      <>&#10003;</>
                    </button>
                  ) : (
                    <button onClick={addToCart} className="btn btn-primary">
                      Add To Cart
                    </button>
                  )}
                </h5>
              )}
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading........</h1>
      )}
    </>
  );
};

export default View;
