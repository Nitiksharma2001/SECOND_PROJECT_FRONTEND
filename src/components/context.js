import {useState, createContext } from "react";

const UserContext = createContext()

const MakeContext = ({children}) =>{
	const [products, setProducts] = useState([])
	const [cart, setCart] = useState([])
	const [product, setProduct] = useState({})
	return (
		<UserContext.Provider value={{products, setProducts, cart, setCart, product, setProduct}}>
			{children}
		</UserContext.Provider>
	);
}

export {MakeContext, UserContext}