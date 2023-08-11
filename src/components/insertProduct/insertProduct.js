import { useNavigate  } from "react-router-dom"
import "./insertProduct.css"
import React, { useState, useContext } from "react";
import { UserContext } from "../context";
import axios from "axios"

const InsertProduct = () => {
const tempData = {
	name: "Cannon EOS-1D",
	imageUrl:
		"https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
	description:
		"The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
	price: 1300,
	countInStock: 5,
}
	
const [name, setName] = useState(tempData.name);
const [description, setDescription] = useState(tempData.description);
const [price, setPrice] = useState(tempData.price);
const [countInStock, setCountInStock] = useState(tempData.countInStock);
const [imageURL, setImageURL] = useState(tempData.imageUrl);

const navigation = useNavigate()

const {products, setProducts} = useContext(UserContext);

const Submit = async (e) =>{
  try{
    e.preventDefault();
    const productData = { name, description, price, countInStock, imageURL } 
    const resp = await axios.post("http://localhost:4000/insert", productData);
    setProducts([...products, resp.data.product])
    navigation("/")
  }
  catch(err){
    console.log(err);
  }
}
  return (
	<>
	<div style={{maxWidth:"500px", margin: "30px auto"} }>
		<form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} className="form-control" id="name" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea value={description} onChange={(e) => {setDescription(e.target.value)}} className="form-control rounded-0" id="description" rows="5"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="text" value={price} onChange={(e) => {setPrice(e.target.value)}} className="form-control" id="price" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="countInStock" className="form-label">CountInStock</label>
          <input type="text" value={countInStock} onChange={(e) => {setCountInStock(e.target.value)}} className="form-control" id="countInStock" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="imageURL" className="form-label">ImageURL </label>
          <input type="text" value={imageURL} onChange={(e) => {setImageURL (e.target.value)}} className="form-control" id="imageURL" aria-describedby="emailHelp" />
        </div>
        <button className="btn btn-primary" onClick={(e) => Submit(e)}>Submit</button>
      </form>
	  </div>
		
	</>
  )
}

export default InsertProduct